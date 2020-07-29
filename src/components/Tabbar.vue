<template>
  <div class="tabbar" v-if="show">
    <div
      class="item"
      :class="activeIndex == 1 ? 'item_active' : ''"
      @click="clickItem(1)"
    >
      <i class="icon iconfont">&#xe645;</i>
      首页
    </div>
    <div
      class="item"
      :class="activeIndex == 2 ? 'item_active' : ''"
      @click="clickItem(2)"
    >
      <i class="icon iconfont">&#xe620;</i>
      课程
    </div>
    <div
      class="item"
      :class="activeIndex == 3 ? 'item_active' : ''"
      @click="clickItem(3)"
    >
      <i class="icon iconfont">&#xe9af;</i>
      专栏
    </div>
    <div
      class="item"
      :class="activeIndex == 4 ? 'item_active' : ''"
      @click="clickItem(4)"
    >
      <i class="icon iconfont">&#xe68a;</i>
      我的
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tabbar',
  data() {
    return {}
  },
  props: {
    show: {
      //是否显示控件 默认不显示
      type: Boolean,
      default: false
    },
    activeIndex: {
      //激活的tab栏
      type: Number,
      default: 1
    }
  },
  mounted() {},
  computed: {},
  methods: {
    clickItem: function(index) {
      if (index == this.activeIndex) return false
      this.activeIndex = index
      switch (index) {
        case 1:
          this.$router.push('/')
          break
        case 2:
          this.$router.push('/Course/CourseIndex')
          break
        case 3:
          this.$router.push('/Column/ColumnIndex')
          break
        case 4:
          this.$router.push('/User/UserIndex')
          break
        default:
          break
      }
    }
  }
}
</script>
<style lang="less" scoped>
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
  .item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: @h3c;
    position: relative;
    i {
      font-size: 1.8rem;
    }
  }
  .item_active {
    color: @theme;
  }
}
</style>
