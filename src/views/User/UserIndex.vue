<template>
  <div class="UserIndex">
    <Header :show="true" title="我的" :back="false">
      <template v-slot:right>
        <i class="icon iconfont">&#xe616;</i>
      </template>
    </Header>
    <div class="header-bg"></div>
    <div class="user-index-box">
      <div class="top">
        <div class="user-info">
          <img class="user-image" v-lazy="user_info.image" />
          <div class="nickname">{{ user_info.nickname }}</div>
          <div class="signname">{{ user_info.signname }}</div>
        </div>
        <div class="user-tool">
          <div class="item">
            <i class="icon iconfont">&#xe62d;</i>
            我的课程
          </div>
          <div class="item">
            <i class="icon iconfont">&#xe64c;</i>
            我的下载
          </div>
          <div class="item">
            <i class="icon iconfont">&#xe663;</i>
            我的订阅
          </div>
          <div class="item">
            <i class="icon iconfont">&#xe767;</i>
            我的收藏
          </div>
        </div>
      </div>
      <div class="middle">
        <div class="item">
          <i class="icon iconfont">&#xff04;</i>
          我的订单
        </div>
        <div class="item">
          <i class="icon iconfont">&#xe618;</i>
          我的优惠券
        </div>
        <div class="item">
          <i class="icon iconfont">&#xe638;</i>
          我的消息
        </div>
        <div class="item">
          <i class="icon iconfont">&#xe613;</i>
          账户余额
        </div>
      </div>
      <div class="bottom">
        <div class="item">
          <i class="icon iconfont">&#xe648;</i>
          扫码看课
        </div>
        <div class="item">
          <i class="icon iconfont">&#xe62f;</i>
          设置
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getUserInfoData } from '@/api/User/index'
import Header from '@/components/Header.vue'
export default {
  name: 'UserIndex',
  components: {
    Header: Header
  },
  metaInfo() {
    return {
      title: '我的页面标题' // set a title
    }
  },
  data() {
    return {
      user_info: []
    }
  },
  mounted() {
    this.getUserInfo()
    this.$store.commit('updateHeadTitle', '我的')
  },
  activated() {
    this.scrollPostion.get.call(this)
  },
  methods: {
    getUserInfo: function() {
      getUserInfoData({})
        .then(res => {
          this.user_info = res.data.data
        })
        .catch(() => {})
    }
  }
}
</script>
<style lang="less" scoped>
.UserIndex {
  .header {
    background: @theme;
    color: #ffffff;
  }
  .header-bg {
    z-index: -1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 12rem;
    overflow: hidden;
    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 10%;
      margin: auto;
      width: 100%;
      height: 11rem;
      transform: scale(1.2);
      background: @theme;
      border-radius: 50%;
    }
  }
  .user-index-box {
    padding: 2rem;
    z-index: 1;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    top: 3rem;
    .top {
      background: #ffffff;
      padding: 1.5rem;
      box-shadow: 0 0 4px 1px @h5c;
      .user-info {
        display: flex;
        flex-direction: column;
        align-items: center;
        .user-image {
          width: 4rem;
          height: 4rem;
          display: block;
          border-radius: 50%;
        }
        .nickname {
          margin-top: 0.5rem;
          font-size: 1.2rem;
          color: @h1c;
        }
        .signname {
          margin-top: 0.2rem;
          color: @h3c;
        }
      }
      .user-tool {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 1rem;
        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          .icon {
            font-size: 2rem;
            margin-bottom: 0.2rem;
          }
          &:nth-child(1) {
            .icon {
              color: #5a93f8;
            }
          }
          &:nth-child(2) {
            .icon {
              color: #90c26d;
            }
          }
          &:nth-child(3) {
            .icon {
              color: #fe7954;
            }
          }
          &:nth-child(4) {
            .icon {
              color: #fb383b;
            }
          }
        }
      }
    }
    .middle {
      background: #ffffff;
      box-shadow: 0 0 4px 1px @h5c;
      margin-top: 1rem;
      .item {
        padding: 0.8rem 1rem;
        border-bottom: @border;
        .icon {
          font-size: 1.2rem;
          margin-right: 0.5rem;
        }
        &:active {
          background: @h5c;
        }
        &:nth-child(1) {
          .icon {
            color: #fe694a;
          }
        }
        &:nth-child(2) {
          .icon {
            color: #ffd826;
          }
        }
        &:nth-child(3) {
          .icon {
            color: #ff3243;
          }
        }
        &:nth-child(4) {
          .icon {
            color: #67bbf0;
          }
        }
      }
    }
    .bottom {
      background: #ffffff;
      box-shadow: 0 0 4px 1px @h5c;
      margin-top: 1rem;
      .item {
        padding: 0.8rem 1rem;
        border-bottom: @border;
        .icon {
          font-size: 1.2rem;
          margin-right: 0.5rem;
        }
        &:active {
          background: @h5c;
        }
        &:nth-child(1) {
          .icon {
            color: #89adf3;
          }
        }
        &:nth-child(2) {
          .icon {
            color: #6cbc4d;
          }
        }
      }
    }
  }
}
</style>
