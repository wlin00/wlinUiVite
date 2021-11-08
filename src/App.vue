<template>
  <router-view />
</template>
<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup() {
    // 获取屏幕宽度， 判断当前是否移动设备，默认展示侧边栏
    const width = document.documentElement.clientWidth
    const asideVisible = ref(width <= 500 ? false : true)
    provide('asideVisible', asideVisible) // 注入侧边栏显隐依赖
    router.afterEach(() => { // 移动设备路由切换后，默认关闭aside
      if (width <= 500) {
        asideVisible.value = false
      }
    })
  }
}
</script>
<style>
* {
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
  margin-top: 0 !important;
}
  
</style>
