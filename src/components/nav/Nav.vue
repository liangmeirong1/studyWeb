<template>
  <div class="nav">
    <!-- 主导航栏 -->
    <div class="main-nav-wrapper">
      <div class="main-nav">
        <div class="logo"></div>
        <!-- 菜单栏 -->
        <div class="nav">
          <div class="nav-item">首页</div>
          <div class="nav-item">沸点</div>
        </div>
        <!-- 搜索栏 -->
        <div class="search">
          <input type="text" />
          <span class="icon iconfont">&#xe62c;</span>
        </div>
        <!-- 切换主题 -->
        <div class="switch-theme"></div>
      </div>
    </div>
    <!-- 子导航栏 -->
    <div class="sub-nav-wrapper">
      <div class="sub-nav"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style scoped lang="stylus">
.nav
  min-height 60px
  width 100%
  .main-nav-wrapper
    height 100%
    border-bottom 1px solid #f1f1f1
    .main-nav
      width 960px
      height 100%
      margin 0 auto
      display flex
      flex-flow row nowrap
      justify-content space-between
      align-items center
      .logo
        height 60px
        width 200px
        background orange
      .nav
        flex 1
        display flex
        flex-flow row nowrap
        justify-content flex-start
        align-items center
        width 80px
        .nav-item
          width 80px
          line-height 60px
          text-align center
      .search
        position relative
        input
          width 140px
          height 26px
          line-height 26px
          padding 0 40px 0 14px
          outline none
          transition all .3s ease
          border 1px solid #f1f1f1
          border-radius 14px
          font-size 14px
          &:focus
            outline none
            width 180px
        .icon
          position absolute
          top 5px
          right 8px
          width 20px
          height 20px
  .sub-nav-wrapper
    border-bottom 1px solid #f1f1f1
</style>
