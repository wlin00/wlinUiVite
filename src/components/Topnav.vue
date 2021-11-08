<template>
  <div class="topnav">
    <div class="logo">LOGO</div>
    <ul class="menu">
      <router-link to="/" exact class="tab-item" active-class="active-color">主页</router-link>
      <router-link to="/doc" exact class="tab-item" active-class="active-color">文档</router-link>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.active-color {
  cursor: pointer;
  color: #39f;
}
.tab-item {
  display: inline-flex;
  margin-right: 2em;
  font-size: 1.5em;
  text-decoration: none;
}
.topnav {
  background: pink;
  align-items: center;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    background: red;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>