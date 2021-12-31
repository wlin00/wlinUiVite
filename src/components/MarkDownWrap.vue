<template>
<article class="markdown-body" v-html="content">
</article>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  props: {
    path: {
      type: String,
      require: true
    }
  },
  setup(props:any, context) {
    const content = ref<String>(null)
    // 将异步import引入的md文件保存在变量中，通过v-html渲染
    import(props.path).then((result: any) => {
      content.value = result.default // 异步引入文件的值放在then中回调值的“default”中
    })
    return {
      content
    }

  }
}
</script>