<template>
  <div>
    <Button @click="handleAwakeDialog">唤起弹窗</Button>
    <Button @click="handleAwakeDialogByCommend">命令唤起弹窗</Button>
    
    <Dialog
      v-model:visible="flag" 
      :closeOnClickOverlay="false"
      :onConfirm="handleConfirm"
      :onCancel="handleCancel"
    >
    <template #title>
      <span>标题</span>
    </template>
    <template v-slot:content>
      <p>测试123</p>
      <p>测试234</p>
    </template>
    </Dialog>
  </div>
</template>
<script lang="ts">
import Dialog from "../lib/Dialog/Dialog.vue";
import Button from "../lib/Button/Button.vue";
import { ref } from 'vue';
import { openDialog } from '../utils/openDialog'
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const flag = ref(false)// vue3中的ref具备响应式，ref.value可以作为一个vue2中的变量被追踪到其修改
    const handleAwakeDialog = () => {
      flag.value = !flag.value
    }
    const handleAwakeDialogByCommend = () => {
      openDialog({
        title: '测试Commend打开',
        content: '测试Commend打开-content',
        onCancel: () => {
          console.log('cancel')
        },
        onConfirm: () => {
          console.log('confirm')
          return false
        }
      })       
    }
    const handleConfirm = () => {
      // 若在回调中返回false会终止关闭
      return false
    }
    const handleCancel = () => {
      // 若在回调中返回false会终止关闭
    }
    return {
      handleAwakeDialog,
      handleAwakeDialogByCommend,
      flag,
      handleConfirm,
      handleCancel,
    }
  }
  
}
</script>