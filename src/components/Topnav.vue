<template>
  <div class="topnav">
    <div class="logo" @click="handleBackHome">
      <svg class="icon">
        <use xlink:href="#icon-king"></use>
      </svg>
    </div>
    <ul class="menu">
      <!-- <router-link to="/" exact class="tab-item" active-class="active-color">主页</router-link> -->
      <router-link to="/doc" exact class="tab-item" active-class="active-color">文档</router-link>
    </ul>
    <span class="toggleAside" @click="toggleMenu"></span>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
import { useRouter } from 'vue-router';
export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible"); // get
    const router = useRouter()
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
    };
    const handleBackHome = () => {
      router.push('/')
    }
    return { 
      toggleMenu,
      handleBackHome,
    };
  },
};
</script>
<style lang="scss" scoped>
.active-color {
  cursor: pointer;
  color: #39f;
}
.tab-item {
  color: rgb(54, 115, 175);
  display: inline-flex;
  margin-right: 2em;
  font-weight: bold;
  font-size: 1.4em;
  text-decoration: none;
  &:hover {
    color: rgb(54, 115, 175);
    text-decoration: underline;
  }
}
.topnav {
  // background: pink;
  align-items: center;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center;
  align-items: center;

  > .logo {
    max-width: 6em;
    margin-right: auto;
    > .icon {
      width: 32px;
      height: 32px;
    }
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