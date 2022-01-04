
<template>
<!-- 避免css层级上下文影响，导致dialog所处环境层级较低， 所以使用Teleport组件 将dialog插入至body -->
  <template v-if="visible">
    <Teleport to='body' >
      <div class="wlin-dialog-overlay" @click="handleCloseInNeed"></div>
      <div class="wlin-dialog-wrapper">
        <div class="wlin-dialog">
          <header>
            <slot name="title"/>
            <span class="wlin-dialog-close" @click="handleClose"></span>
          </header>
          <main>
            <slot name="content"/>
          </main>
          <footer>
            <Button @click="handleConfirm" level="main">OK</Button>
            <Button @click="handleCancel">Cancel</Button>
          </footer>
        </div>
      </div>
    </Teleport>
  </template>
</template>
<script lang="ts">
  import Button from '../Button/Button.vue'
  export default {
    components: {
      Button,
    },
    props: {
      visible: {
        type: Boolean,
        default: false
      },
      closeOnClickOverlay: { // 是否需要点击遮罩层关闭
        type: Boolean,
        default: true
      },
      onConfirm: {
        type: Function
      },
      onCancel: {
        type: Function
      }
    },
    setup(props:any, context:any) {
      const handleConfirm = async () => {
        const result = props.onConfirm()
        if (result !== false) { // 若外部回调返回false，则终止关闭
          handleClose()
        }
      }
      const handleCancel = async () => {
        const result = props.onCancel()
        if (result !== false) {
          handleClose()
        }
      }
      const handleClose = () => {
        context.emit('update:visible', false)
      }
      const handleCloseInNeed = () => {
        if (props.closeOnClickOverlay) {
          handleClose()
        }
      }
      return {
        handleConfirm,
        handleCancel,
        handleClose,
        handleCloseInNeed,
      }
    }
  }
</script>

<style lang="scss">
$radius: 4px;
$border-color: #d9d9d9;
.wlin-dialog {
  background: white;
  border-radius: $radius;
  box-shadow: 0 0 3px fade_out(black, 0.5);
  min-width: 15em;
  max-width: 90%;
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: fade_out(black, 0.5);
    z-index: 10;
  }
  &-wrapper {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 11;
  }
  >header {
    padding: 12px 16px;
    border-bottom: 1px solid $border-color;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 20px;
  }
  >main {
    padding: 12px 16px;
  }
  >footer {
    border-top: 1px solid $border-color;
    padding: 12px 16px;
    text-align: right;
  }
  &-close {
    position: relative;
    display: inline-block;
    width: 16px;
    height: 16px;
    cursor: pointer;
    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      background: black;
      width: 100%;
      top: 50%;
      left: 50%;
    }
    &::before {
      transform: translate(-50%, -50%) rotate(-45deg);
    }
    &::after {
      transform: translate(-50%, -50%) rotate(45deg);
    }
  }
}
</style>