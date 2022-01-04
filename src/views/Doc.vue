<template>
  <div class="layout">
    <Topnav class="nav" @toggleDoc="asideVisible = !asideVisible" />
    <div class="content">
      <aside v-if="asideVisible">
        <div>
          <span class="close-icon" @click="asideVisible = !asideVisible">关闭</span>
        </div>
        <h2 style="color:#333;text-decoration:none;margin-top:20px;">文档</h2>
        <ol>
          <li class="doc-li">
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li class="doc-li">
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li class="doc-li">
            <router-link to="/doc/start">开始</router-link>
          </li>
        </ol>
        <h2 style="margin-top: 20px;">组件列表</h2>
        <ol>
          <li class="doc-li">
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li class="doc-li">
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li class="doc-li">
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li class="doc-li">
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from "../components/Topnav.vue";
import { inject, Ref } from "vue";
export default {
  components: { Topnav },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible") // inject
    const handleClickoutside = () => {
      console.log('outside')
      asideVisible.value = false
    }
    return { asideVisible , handleClickoutside};
  },
};
</script>
<style lang="scss" scoped>
  .close-icon {
    font-size:18px;
    font-weight: bolder;
    color: #999;
    display: inline-flex;
    width: 100%;
    justify-content: flex-start;
    padding-left: 20px;
    box-sizing: border-box;
  }
.doc-li {
  margin-top: 10px;
  display: inline-flex;
  width: 100%;
  > a {
    box-sizing: border-box;
    padding: 0 20px;
    text-decoration: none;
    color: #333;
    font-size: 16px;
    font-weight: bold;
    display: inline-flex;
    width: 100%;
    min-height: 32px;
    align-items: center;
    cursor: pointer;
    &.router-link-active {
      background: #fff;
      width: 100%;
      cursor: default;
    }
  }
}

.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0; 
    }
  }
}
.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
    background: #fff;
  }
}
aside {
  background: lightblue;
  box-sizing: border-box;
  width: 150px;
  z-index: 999;
  padding: 16px 0;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 10px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
main {
  overflow: auto;
}
</style>