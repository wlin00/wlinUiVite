<template>
  <Tabs v-model:value="selected">
    <Tab title="导航1">内容1</Tab>
    <Tab title="导航2">内容2</Tab>
  </Tabs>
  <!-- <div>x坐标{{point.x}}，y坐标{{point.y}}</div> -->
</template>
<script lang="ts">
import { reactive, ref } from 'vue'
import Tabs from '../lib/Tabs/Tabs.vue'
import Tab from '../lib/Tabs/Tab.vue'
// 自定义hook，函数式编程
import usePoint from '../utils/usePoint'

export default {
  components: {
    Tabs,
    Tab,
  },
  setup() {
    const selected = ref('导航1')
    // const point = usePoint()
    return {
      selected,
      // point,
    }
  }
}
</script>
<style lang="scss">
  
</style>