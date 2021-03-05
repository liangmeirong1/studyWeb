<template>
  <div class="home">
    hello world
    <button @click="handleClickToggle">切换主题色</button>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Home",
  methods: {
    handleClickToggle() {
      let theme = document.documentElement.getAttribute("theme");
      if (!theme) {
        document.documentElement.setAttribute("theme", "light");
      } else if (theme === "dark") {
        document.documentElement.setAttribute("theme", "light");
      } else {
        document.documentElement.setAttribute("theme", "dark");
      }
    }
  }
};
</script>

<style scoped lang="stylus">
@import '~@/assets/theme/index.css'
.home
  background var(--theme-color)
  color var(--font-color)
</style>
