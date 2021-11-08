<template>
  <button :class="{'checked': value}" @click="toggle">
    <span></span>
  </button>
</template>
<script lang="ts">
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const toggle = () => {
      console.log('vvvv', props.value)
      context.emit('input', !props.value)
    }
    return {
      toggle
    }
  }
  
}
</script>
<style lang="scss" scoped>
  $h: 22px;
  $h2: $h - 4px;
  $slide-to-left: 2px;
  // $slide-to-right: calc(100% - #{$h2} - 2px);
  span {
    transition: left .2s;
    position: absolute;
    top: 2px;
    // left: 2px;
    left: $slide-to-left;
    height: $h2;
    width: $h2;
    background: #fff;
    border-radius: $h2 / 2;
  }
  button {
    height: $h;
    width: $h * 2;
    border: none;
    background: gray;
    border-radius: $h / 2;
    position: relative;
    &.checked {
      background: #39f;
      > span {
        left: calc(100% - #{$h2} - 2px);
      }
    } 
  }
  
</style>