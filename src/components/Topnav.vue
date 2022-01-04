<template>
<div class="topnav">
  <router-link to="/" class="logo">
    <svg class="icon">
      <use xlink:href="#icon-king"></use>
    </svg>
  </router-link>
  <ul class="menu">
    <li class="menu-li">
      <router-link v-if="currentRoute() === '/'" to="/doc">文档</router-link>
      <router-link v-else to="/">主页</router-link>
    </li>
  </ul>
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
  setup() {
    const route = useRouter()
    const menuVisible = inject < Ref < boolean >> ("menuVisible"); // get
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value;
    };
    // 判断当前路由是否主页
    const currentRoute = (() => {
      return (toRaw(route)?.currentRoute as any)?._rawValue?.fullPath || '/'
    })
    return {
      toggleMenu,
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
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;
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
      display: none;
    }
    >.logo {
      margin: 0 auto;
    }
    >.toggleAside {
      display: inline-block;
    }
  }
}
</style>