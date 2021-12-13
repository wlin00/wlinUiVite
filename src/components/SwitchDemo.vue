<template>
  <Switch v-model:value="checked"/>
  <div>x坐标{{point.x}}，y坐标{{point.y}}</div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Switch from '../lib/Switch/Switch.vue'
import usePoint from '../utils/usePoint'
export default {
  components: {
    Switch,
  },
  setup() {
    const checked = ref(false)
    const point = usePoint()
    return {
      checked,
      point
    }
  }
  
}
</script>
<style lang="scss">
  
</style>