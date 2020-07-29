<template>
  <div class="CourseIndex">
    <div class="CourseBox">
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
  </div>
</template>
<script>
export default {
  name: 'CourseIndex',
  components: {},
  metaInfo() {
    return {
      title: '课程标题' // set a title
    }
  },
  data() {
    return {}
  },
  mounted() {
    this.$store.commit('updateShowLoading', false)
    this.$store.commit('updateHeadTitle', '课程')
  },
  activated() {
    this.scrollPostion.get.call(this)
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.CourseIndex {
  .CourseBox {
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    .item {
      width: calc(100% / 2 - 0.5rem);
      box-shadow: 0 0 4px 1px @h5c;
      padding: 2.5rem 0;
      margin-bottom: 1rem;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.2rem;
      color: @h1c;
      .icon {
        font-size: 4rem;
        margin-bottom: 0.5rem;
      }
      &:nth-child(1) {
        .icon {
          color: #74a2f0;
        }
      }
      &:nth-child(2) {
        .icon {
          color: #ad9efd;
        }
      }
      &:nth-child(3) {
        .icon {
          color: #f4e250;
        }
      }
      &:nth-child(4) {
        .icon {
          color: #8ac666;
        }
      }
      &:nth-child(5) {
        .icon {
          color: #fc4973;
        }
      }
      &:nth-child(6) {
        .icon {
          color: #52aef1;
        }
      }
      &:nth-child(7) {
        .icon {
          color: #ff6d41;
        }
      }
      &:nth-child(8) {
        .icon {
          color: #ed1c1f;
        }
      }
    }
  }
}
</style>
