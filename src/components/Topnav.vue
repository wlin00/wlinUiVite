<template>
<div class="topnav">
  <span v-if="currentRoute() !== '/'" class="doc" @click="toggleDoc">...</span>
  <router-link to="/" class="logo">
    <svg class="icon">
      <use xlink:href="#icon-king"></use>
    </svg>
  </router-link>
  <ul class="menu">
    <li class="menu-li">
      <a href="https://github.com/wlin00" target="_blank">github</a>
    </li>
    <li class="menu-li">
      <a href="https://wlin00.github.io/" target="_blank">博客</a>
    </li>
    <li class="menu-li">
      <a href="https://wlin00.github.io/wlinUi/" target="_blank">vue2.0版</a>
    </li>
    <li class="menu-li">
      <router-link v-if="currentRoute() === '/'" to="/doc">文档</router-link>
      <router-link v-else to="/">主页</router-link>
    </li>
  </ul>
  <!-- <li class="menu-li" v-if="currentRoute() !== '/'">
    <router-link to="/">返回</router-link>
  </li> -->
  <svg v-if="toggleMenuButtonVisible" class="toggleAside" @click="toggleMenu">
    <use xlink:href="#icon-menu"></use>
  </svg>
</div>
</template>

<script lang="ts">
import {
  computed,
  inject,
  onMounted,
  toRaw,
  Ref,
  onUpdated
} from "vue";
import { useRoute, useRouter } from 'vue-router'
export default {
  props: {
    toggleMenuButtonVisible: {
      type: Boolean,
      default: false
    }
  },
  setup(props, context) {
    const route = useRouter()
    const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    const toggleDoc = () => {
      context.emit('toggleDoc')
    }
    // 判断当前路由是否主页
    const currentRoute = (() => {
      return (toRaw(route).currentRoute as any)._rawValue.fullPath || '/'
    })
    return {
      toggleMenu,
      toggleDoc,
      currentRoute
    };
  },
};
</script>

<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  z-index: 998;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: center;
  align-items: center;
  .doc {
    font-size: 16px;
    font-weight: bolder;
    color: #333;
    display: none;
    position: absolute;
    left: 20px;
    top: 50%;
    transform: translateY(-50%);
    @media screen and ( max-width: 1930px ) { // 媒介查询
      display: none;
    }
    @media screen and ( max-width: 500px ) { // 媒介查询
      display: inline-flex;
    }
  }
  .get-back {
    width: 100%;
    display: inline-flex;
    justify-content: flex-end;
    display: none;
    @media screen and ( max-width: 1930px ) { // 媒介查询
      display: none;
    }
    @media screen and ( max-width: 500px ) { // 媒介查询
      display: inline-flex;
    }
  }
  .menu-li {
    >a {
      color: #333;
      text-decoration: none;
      font-weight: bold;
    }
  }
  >.logo {
    max-width: 6em;
    margin-right: auto;
    >svg {
      width: 32px;
      height: 32px;
    }
  }
  >.menu {
    box-sizing: border-box;
    // width: 100%;
    padding-right: 20px;
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    >li {
      margin: 0 1em;
      color: #333;
      text-decoration: none;
    }
  }
  >.toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }
  @media (max-width: 500px) {
    >.menu {
     
    }
    >.logo {
      margin: 0 auto;
    }
    >.toggleAside {
      display: inline-block;
    }
  }
  .logo {
    display: inline-block;
    @media screen and ( max-width: 1930px ) { // 媒介查询
      display: inline-block;
    }
    @media screen and ( max-width: 500px ) { // 媒介查询
      display: none;
    }
  }
}
</style>