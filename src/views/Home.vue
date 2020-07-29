<template>
  <div class="Home">
    <Header :show="true" title="首页" :back="false"> </Header>
    <swiper class="banner" ref="mySwiper" :options="swiperOptions">
      <swiper-slide>
        <img src="../assets/images/home/swiper01.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/home/swiper02.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/home/swiper03.png" />
      </swiper-slide>
      <swiper-slide>
        <img src="../assets/images/home/swiper04.png" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
    <div class="home-box">
      <div class="cat-box">
        <div class="cat">
          <div class="item">
            <i class="icon iconfont first">&#xe714;</i>
            推荐大佬
          </div>
          <div class="item">
            <i class="icon iconfont second">&#xe62d;</i>
            推荐课程
          </div>
          <div class="item">
            <i class="icon iconfont third">&#xe663;</i>
            我的订阅
          </div>
          <div class="item">
            <i class="icon iconfont fourth">&#xe64c;</i>
            我的下载
          </div>
        </div>
      </div>
      <div class="content-box hot-course">
        <div class="content-bar">
          <div class="title">热门推荐</div>
          <div class="more">查看全部</div>
        </div>
        <div class="course">
          <div class="item" v-for="(item, index) in hotRecommend" :key="index">
            <div
              class="img-box"
              @click="
                $router.push({
                  path: '/Course/CourseDetail/' + item.id,
                  query: {
                    title: item.title
                  }
                })
              "
            >
              <img v-lazy="item.image" />
              <div class="price" v-if="item.price == 0">免费</div>
              <div class="price" v-else>￥{{ item.price }}</div>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="buyer-box">
              <div class="buyer-left">
                <div
                  class="img-box"
                  v-for="(img, i) in item.buyer_images"
                  :key="i"
                >
                  <img v-lazy="img" />
                </div>
                <div class="buy-count">{{ item.buy_count }}+</div>
              </div>
              <div class="teacher">
                <div class="img-box-teacher">
                  <img v-lazy="item.teacher_image" />
                </div>
                {{ item.teacher }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box new-course">
        <div class="content-bar">
          <div class="title">最新课程</div>
          <div class="more">查看全部</div>
        </div>
        <div class="course">
          <div class="item" v-for="(item, index) in newCourse" :key="index">
            <div class="img-box">
              <img v-lazy="item.image" />
              <div class="price" v-if="item.price == 0">免费</div>
              <div class="price" v-else>￥{{ item.price }}</div>
            </div>
            <div class="title">{{ item.title }}</div>
            <div class="buyer-box">
              <div class="buyer-left">
                <div
                  class="img-box"
                  v-for="(img, i) in item.buyer_images"
                  :key="i"
                >
                  <img v-lazy="img" />
                </div>
                <div class="buy-count">{{ item.buy_count }}+</div>
              </div>
              <div class="teacher">
                <div class="img-box-teacher">
                  <img v-lazy="item.teacher_image" />
                </div>
                {{ item.teacher }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-box recommend-article">
        <div class="content-bar">
          <div class="title">推荐文章</div>
          <div class="more">查看全部</div>
        </div>
        <div class="article">
          <div
            class="item"
            v-for="(item, index) in recommendArticle"
            :key="index"
          >
            <img class="article-image" v-lazy="item.image" />
            <div class="title">
              {{ item.title }}
            </div>
            <div class="item-bottom">
              <div class="left">
                <img v-lazy="item.author_image" />
                {{ item.author }}
              </div>
              <div class="right">
                <div class="star">
                  <i class="icon iconfont">&#xe609;</i>
                  {{ item.star_count }}
                </div>
                <div class="heart">
                  <i class="icon iconfont">&#xe767;</i>
                  {{ item.heart_count }}
                </div>
                <div class="comment">
                  <i class="icon iconfont">&#xe632;</i>
                  {{ item.comment_count }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {} from 'vant'
import {
  getHotCourseLsts,
  getNewCourseLsts,
  getRecommendArticleLsts
} from '@/api/home'
import Header from '@/components/Header.vue'
export default {
  name: 'Home',
  components: {
    Header: Header
    // [Popup.name]: Popup,
    // [Area.name]: Area
  },
  metaInfo() {
    return {
      title: '首页标题' // set a title
    }
  },
  data() {
    return {
      swiperOptions: {
        speed: 300,
        autoplay: {
          delay: 3000
        },
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        centeredSlides: false,
        pagination: {
          el: '.swiper-pagination'
        }
        // Some Swiper option/callback...
      },
      hotRecommend: [],
      newCourse: [],
      recommendArticle: []
    }
  },
  mounted() {
    this.getHotCourse()
    this.getNewCourse()
    this.getRecommendArticle()
  },
  activated() {
    this.scrollPostion.get.call(this)
  },
  methods: {
    getHotCourse: function() {
      getHotCourseLsts({})
        .then(res => {
          this.hotRecommend = res.data.data
          console.log(this.hotRecommend)
        })
        .catch(() => {})
    },
    getNewCourse: function() {
      getNewCourseLsts({})
        .then(res => {
          this.newCourse = res.data.data
        })
        .catch(() => {})
    },
    getRecommendArticle: function() {
      getRecommendArticleLsts({})
        .then(res => {
          this.recommendArticle = res.data.data
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="less">
.swiper-pagination {
  bottom: 0.3rem !important;
  .swiper-pagination-bullet {
    width: 0.3rem;
    height: 0.3rem;
    background: #ffffff;
    border: 1px solid @theme;
  }
  .swiper-pagination-bullet-active {
    background: @theme;
  }
}
</style>
<style lang="less" scoped>
.Home {
  .header {
    background: @bg;
  }
  .banner {
    margin-top: 3rem;
    padding: 0 2rem 2rem 2rem;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
    .swiper-slide {
      img {
        opacity: 0.5;
        transform: scale(0.9);
      }
    }
    .swiper-slide-active {
      img {
        opacity: 1;
        transform: scale(1);
      }
      &::after {
        z-index: -1;
        content: '';
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 80%;
        height: 2px;
        box-shadow: 0 1px 12px 1px @h3c;
      }
    }
  }
  .home-box {
    padding: 1rem;
    .cat-box {
      .cat {
        display: flex;
        justify-content: space-between;
        .item {
          width: 5.4rem;
          height: 5.4rem;
          background: #ffffff;
          display: flex;
          flex-direction: column;
          text-align: center;
          justify-content: center;
          box-shadow: 0 0 4px 1px @h5c;
          font-size: 1rem;
          .icon {
            margin-bottom: 0.5rem;
            font-size: 1.4rem;
          }
          .first {
            color: #fbda29;
          }
          .second {
            color: #4e94ff;
          }
          .third {
            color: #f9653d;
          }
          .fourth {
            color: #78af4a;
          }
        }
      }
    }
    .content-box {
      .content-bar {
        padding: 1rem 0;
        display: flex;
        justify-content: space-between;
        .title {
          color: @h1c;
          font-size: 1.2rem;
          font-weight: bold;
        }
        .more {
          color: @h3c;
        }
      }
      .course {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        .item {
          width: calc(100% / 2 - 0.5rem);
          background: #ffffff;
          margin-bottom: 1rem;
          border-radius: 0.2rem;
          overflow: hidden;
          box-shadow: 0 0 4px 1px @h5c;
          .img-box {
            width: 100%;
            position: relative;
            img {
              width: 100%;
              height: auto;
              display: block;
            }
            .price {
              position: absolute;
              bottom: 0.5rem;
              right: 0.5rem;
              background: @h3c;
              color: #ffffff;
              padding: 0.2rem;
              border-radius: 0.2rem;
              font-size: 0.8rem;
            }
          }
          .title {
            padding: 0.5rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .buyer-box {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0 0.5rem 0.5rem 0.5rem;
            .buyer-left {
              flex: 1;
              display: flex;
              justify-content: flex-start;
              position: relative;
              .img-box {
                width: 1rem;
                img {
                  width: 2rem;
                  height: auto;
                  border-radius: 50%;
                  border: 2px solid #ffffff;
                }
              }
              .buy-count {
                position: absolute;
                top: 0;
                bottom: 0;
                right: 0;
                margin: auto;
                background: @theme;
                color: #ffffff;
                border-radius: 2rem;
                padding: 0.2rem;
                height: 0.8rem;
                font-size: 0.8rem;
              }
            }
            .teacher {
              flex: 1;
              color: @h3c;
              display: flex;
              justify-content: flex-end;
              align-items: center;
              font-size: 0.8rem;
              .img-box-teacher {
                margin-right: 0.1rem;
                img {
                  width: 2rem;
                  height: auto;
                  display: block;
                  border-radius: 50%;
                }
              }
            }
          }
        }
      }
    }
    .recommend-article {
      .article {
        .item {
          border-radius: 0.2rem;
          overflow: hidden;
          background: #ffffff;
          margin-bottom: 1rem;
          box-shadow: 0 0 4px 1px @h5c;
          .article-image {
            width: 100%;
            height: auto;
            display: block;
          }
          .title {
            padding: 0.5rem;
            color: @h1c;
          }
          .item-bottom {
            padding: 0 0.5rem 0.5rem 0.5rem;
            display: flex;
            justify-content: space-between;
            .left {
              display: flex;
              align-items: center;
              color: @h3c;
              img {
                width: 2rem;
                height: auto;
                border-radius: 50%;
                margin-right: 0.2rem;
              }
            }
            .right {
              display: flex;
              justify-content: flex-end;
              align-items: center;
              .star,
              .heart,
              .comment {
                margin-left: 0.5rem;
                color: @h4c;
                display: flex;
                align-items: center;
                font-size: 0.9rem;
                .icon {
                  margin-right: 0.2rem;
                }
              }
              .heart {
                .icon {
                  color: @price;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
