<template>
  <div class="ColumnIndex">
    <div class="cat">
      <div class="item">
        <i class="icon iconfont">&#xe607;</i>
        全部课程
      </div>
      <div class="item">
        <i class="icon iconfont">&#xe69c;</i>
        摄影后期
      </div>
      <div class="item">
        <i class="icon iconfont">&#xe61c;</i>
        手绘插画
      </div>
      <div class="item">
        <i class="icon iconfont">&#xe6c0;</i>
        网页设计
      </div>
      <div class="item">
        <i class="icon iconfont">&#xe621;</i>
        用户体验
      </div>
      <div class="item">
        <i class="icon iconfont">&#xe6ec;</i>
        UI设计
      </div>
      <div class="item">
        <i class="icon iconfont">&#xe681;</i>
        交互设计
      </div>
      <div class="item">
        <i class="icon iconfont">&#xe63f;</i>
        平面视觉
      </div>
    </div>
    <div class="article-box">
      <div class="block-title">推荐文章</div>
      <div class="article">
        <div
          class="item"
          v-for="(item, index) in recommendArticle"
          :key="index"
        >
          <img class="article-image" v-lazy="item.image" />
          <div class="title-box">
            <div class="title">{{ item.title }}</div>
            <div class="add-time">{{ item.add_time }}分钟前</div>
          </div>
          <div class="article-cat">{{ item.cat }}</div>
          <div class="article-bottom">
            <div class="left">
              <img v-lazy="item.author_image" />
              {{ item.author }}
            </div>
            <div class="right">
              {{ item.recommend_count }}推荐 · {{ item.comment_count }}评论
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getRecommendArticleLstsForColumn } from '@/api/Column/index'
export default {
  name: 'ColumnIndex',
  components: {},
  metaInfo() {
    return {
      title: '专栏标题' // set a title
    }
  },
  data() {
    return {
      recommendArticle: []
    }
  },
  mounted() {
    this.$store.commit('updateHeadTitle', '专栏')
    this.getRecommendArticle()
  },
  activated() {
    this.scrollPostion.get.call(this)
  },
  methods: {
    getRecommendArticle: function() {
      getRecommendArticleLstsForColumn({})
        .then(res => {
          this.recommendArticle = res.data.data
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="less" scoped>
.ColumnIndex {
  .cat {
    width: calc(100% - 2rem);
    padding: 1rem;
    background: #ffffff;
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    &::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
    display: flex;
    flex-wrap: nowrap;
    .item {
      margin-right: 1.8rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      &:nth-last-of-type(1) {
        margin-right: 0;
        padding-right: 1rem; //父元素右内边距消失
      }
      .icon {
        width: 2rem;
        height: 2rem;
        font-size: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #ffffff;
        padding: 1rem;
        border-radius: 50%;
        margin-bottom: 0.2rem;
      }
      &:nth-child(1) {
        .icon {
          background-image: linear-gradient(#74a2f0, #c2d4f5);
        }
      }
      &:nth-child(2) {
        .icon {
          background-image: linear-gradient(#ad9efd, #d2ccf7);
        }
      }
      &:nth-child(3) {
        .icon {
          background-image: linear-gradient(#f4e250, #faf3bd);
        }
      }
      &:nth-child(4) {
        .icon {
          background-image: linear-gradient(#8ac666, #a6be98);
        }
      }
      &:nth-child(5) {
        .icon {
          background-image: linear-gradient(#fc4973, #faadbf);
        }
      }
      &:nth-child(6) {
        .icon {
          background-image: linear-gradient(#52aef1, #a7d2f1);
        }
      }
      &:nth-child(7) {
        .icon {
          background-image: linear-gradient(#ff6d41, #f8b9a6);
        }
      }
      &:nth-child(8) {
        .icon {
          background-image: linear-gradient(#ed1c1f, #e79fa0);
        }
      }
    }
  }
  .article-box {
    margin-top: 1rem;
    padding: 1rem;
    background: #ffffff;
    .block-title {
      padding-bottom: 0.5rem;
      font-size: 1.2rem;
      font-weight: bold;
    }
    .article {
      .item {
        margin-bottom: 1rem;
        .article-image {
          width: 100%;
          height: auto;
          display: block;
          border-radius: 0.2rem;
        }
        .title-box {
          margin-top: 0.5rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          .title {
            font-size: 1.2rem;
            color: @h1c;
          }
          .add-time {
            color: @h3c;
          }
        }
        .article-cat {
          margin-top: 0.2rem;
        }
        .article-bottom {
          padding: 0.5rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .left {
            display: flex;
            align-items: center;
            color: @h1c;
            img {
              width: 2rem;
              height: auto;
              display: block;
              border-radius: 50%;
              margin-right: 0.2rem;
            }
          }
          .right {
            color: @h3c;
          }
        }
      }
    }
  }
}
</style>
