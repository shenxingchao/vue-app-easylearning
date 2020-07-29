<template>
  <div class="CourseDetail">
    <div class="video-box">
      <img
        ref="imgRef"
        class="imgRef"
        src="http://placekitten.com/g/750/600"
        alt="视频封面"
      />
      <i class="icon iconfont">&#xe614;</i>
    </div>
    <div class="CourseDetailBox" :class="tabFixed ? 'tab-fixed-padding' : ''">
      <div class="tab" :class="tabFixed ? 'tab-fixed' : ''">
        <div
          class="tab-item"
          :class="tabIndex == 1 ? 'active' : ''"
          @click="handleChangeTabIndex(1)"
        >
          介绍
        </div>
        <div
          class="tab-item"
          :class="tabIndex == 2 ? 'active' : ''"
          @click="handleChangeTabIndex(2)"
        >
          目录
        </div>
        <div
          class="tab-item"
          :class="tabIndex == 3 ? 'active' : ''"
          @click="handleChangeTabIndex(3)"
        >
          评价
        </div>
      </div>
      <div class="tab-introduce" v-show="tabIndex == 1">
        <div class="title-box">
          <div class="title">{{ title }}</div>
          <div class="price">￥199</div>
        </div>
        <div class="detail-info">
          <div class="author">
            <img src="http://placekitten.com/g/50/50" alt="头像" />
            <div class="nickname">昵称</div>
          </div>
          <div class="num-info">
            <div class="time">
              <i class="icon iconfont">&#xe614;</i>
              2小时50分钟
            </div>
            <div class="learn-count">338人在学</div>
          </div>
        </div>
        <div class="detail-content-title">
          课程简介
        </div>
        <div class="detail-content">
          <img src="http://placekitten.com/g/750/400" alt="简介图片" />
          <img src="http://placekitten.com/g/750/380" alt="简介图片" />
          <img src="http://placekitten.com/g/750/410" alt="简介图片" />
        </div>
      </div>
      <div class="tab-contents" v-show="tabIndex == 2">
        <div class="contents-title">共30节</div>
        <div class="contents-item" v-for="(item, index) in 30" :key="index">
          {{ item }}.[免费]课程标题 课程标题 课程标题 课程标题<i
            class="icon iconfont"
            >&#xe614;</i
          >
        </div>
      </div>
    </div>
    <div class="tabbar">
      <div class="tabbar-left">
        <i class="icon iconfont">&#xe644;</i>
        <i class="icon iconfont">&#xe74a;</i>
        <i class="icon iconfont">&#xe899;</i>
      </div>
      <div class="tabbar-right">
        立即购买
      </div>
    </div>
  </div>
</template>
<script>
import { PUBLIC } from '@/mixins'
import { Toast, Swipe, SwipeItem, Popup } from 'vant'
export default {
  name: 'CourseDetail',
  mixins: [PUBLIC],
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Popup.name]: Popup
  },
  metaInfo() {
    return {
      title: this.$route.query.title // set a title
    }
  },
  data() {
    return {
      tabIndex: 1,
      title: this.$route.query.title,
      offsetTop: 9999,
      tabFixed: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    let that = this
    document.querySelector('.imgRef').addEventListener('load', function() {
      that.offsetTop = this.height
    })
  },
  activated() {
    this.scrollPostion.goTop.call(this)
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleChangeTabIndex: function(tabIndex) {
      this.tabIndex = tabIndex
    },
    handleScroll: function() {
      // 得到页面滚动的距离
      let scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      // 判断页面滚动的距离是否大于吸顶元素的位置
      // console.log(scrollTop, this.offsetTop)
      this.tabFixed = scrollTop > this.offsetTop
    }
  }
}
</script>
<style lang="less" scoped>
.CourseDetail {
  padding-bottom: 4rem;
  background: #ffffff !important;
  z-index: 0;
  .video-box {
    z-index: -1;
    position: relative;
    img {
      width: 100%;
      height: auto;
      display: block;
    }
    .icon {
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
      font-size: 3rem;
      color: #ffffff;
      background: rgba(255, 255, 255, 0.3);
    }
  }
  .tab-fixed-padding {
    padding-top: 4rem !important;
  }
  .CourseDetailBox {
    z-index: 1;
    padding: 0 1rem;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    margin-top: -0.5rem;
    background: #ffffff;
    .tab-fixed {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: #ffffff;
      width: calc(100% - 4rem * 2);
      margin: 0 !important;
    }
    .tab {
      display: flex;
      justify-content: space-between;
      padding: 0 4rem;
      border-bottom: @border;
      margin-top: 0.5rem;
      .tab-item {
        padding: 1rem 0;
        color: @h3c;
      }
      .active {
        color: @h1c;
        position: relative;
        &::after {
          content: '';
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 80%;
          height: 0.2rem;
          background: @theme;
        }
      }
    }
    .tab-introduce {
      .title-box {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title {
          font-size: 1.2rem;
          color: @h1c;
          font-weight: bold;
        }
        .price {
          font-size: 1.2rem;
          color: @price;
        }
      }
      .detail-info {
        padding-bottom: 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .author {
          display: flex;
          align-items: center;
          color: @h1c;
          font-size: 0.8rem;
          img {
            width: 2rem;
            height: 2rem;
            display: block;
            border-radius: 50%;
            margin-right: 0.5rem;
          }
        }
        .num-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: @h3c;
          letter-spacing: 0.1rem;
          font-size: 1rem;
          .time {
            margin-right: 1rem;
            display: flex;
            align-items: center;
            .icon {
              margin-right: 0.5rem;
            }
          }
        }
      }
      .detail-content-title {
        padding: 1rem;
        background: @h5c;
      }
      .detail-content {
        img {
          width: 100%;
          height: auto;
          display: block;
        }
      }
    }
    .tab-contents {
      .contents-title {
        padding: 1rem;
      }
      .contents-item {
        padding: 1rem;
        border-bottom: @border;
        .icon {
          margin-left: 0.5rem;
        }
        &:active {
          background: @h5c;
        }
      }
    }
  }
  .tabbar {
    z-index: 999;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 4rem;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 0.5rem 0.5rem 0.5rem @h4c;
    .tabbar-left {
      flex: 1;
      display: flex;
      justify-content: space-between;
      padding: 0 2.8rem;
      .icon {
        font-size: 1.4rem;
        color: @h3c;
      }
    }
    .tabbar-right {
      width: 12rem;
      height: 100%;
      background: #ff6934;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-size: 1rem;
      letter-spacing: 0.2rem;
    }
  }
}
</style>
