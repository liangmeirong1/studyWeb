<template>
  <div class="layout">
    <div class="nav-wrapper">
      <slot name="nav">
        <nav-bar></nav-bar>
      </slot>
    </div>
    <div class="main-wrapper">
      <slot name="main"></slot>
    </div>
  </div>
</template>

<script>
import NavBar from "cps/nav/Nav";
export default {
  components: {
    NavBar
  }
};
</script>

<style scoped lang="stylus">
.layout
  min-height 100%
  display flex
  flex-flow column nowrap
  .nav-wrapper
      min-height 60px
  .main-wrapper
      flex 1
</style>
