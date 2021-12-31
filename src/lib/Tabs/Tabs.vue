<template>
  <div class="wlin-tabs">
    <div class="wlin-tabs__titleWrap" ref="container">
      <div 
        class="wlin-tabs__title" 
        :class="{'selected': title === value}" 
        @click="handleTabClick(title)" 
        v-for="(title, index) in titles"
        :ref="(el) => { if (title === value) { currentSelectNav = el } }"
        :key="index"
      >{{title}}</div>
      <div ref="indicator" class="wlin-tabs__indicator"></div>
    </div>
    <div class="wlin-tabs__contentWrap">
      <component class="wlin-tabs__content" :key="currentComponent" :is="currentComponent.props.title"></component>
    </div>
  </div>
</template>
<script lang="ts">
import { watchEffect } from 'vue';
import Tab from "./Tab.vue";
import { computed, inject, ref, Ref, onMounted } from "vue";
export default {
  components: { Tab },
  props: 
  {
    value: String,
  },
  setup(props, context) {
    const defaults = context.slots.default()
    defaults?.length && defaults.forEach((item) => {
      if (item.type !== Tab) {
        throw new Error('请使用正确标签Tab')
      }
    })

    const titles = defaults.map((tag) => tag?.props?.title || '--')

    const currentSelectNav = ref<HTMLDivElement>(null)

    const indicator = ref<HTMLDivElement>(null)

    const container = ref<HTMLDivElement>(null)

    const currentComponent = computed(() => {
      return defaults.filter((component) => component.props.title === props.value)[0]
    })
    
    onMounted (() => {
      watchEffect(() => { // onMouned中的watchEffect，只在mounted和之后的updated执行，处理副作用的钩子，根据内部依赖再次执行。蕾丝useEffect(() => {}, [id])
          // 初始化nav下划线宽度， 需获取到当前选中的nav元素
          const navItemProperty = currentSelectNav?.value?.getBoundingClientRect()
          // 获取currentSelectNav.left - container.left 差值，将其设置为下划线的left坐标
          const containerProperty = container?.value.getBoundingClientRect()
          if (!navItemProperty || !containerProperty) { return }
          
          const width = navItemProperty?.width
          const currentSelectNavLeft = navItemProperty?.left
          const containerLeft = containerProperty?.left
          
          indicator.value.style.width = `${width}px`
          const computeLeft = currentSelectNavLeft - containerLeft
          indicator.value.style.left = `${computeLeft}px`
      })
    })

    const handleTabClick = (title) => {
      console.log('tt', title)
      if (title === props.value) {
        return
      }
      context.emit('update:value', title)
    }
  
    return { 
      defaults,
      titles,
      currentSelectNav,
      indicator,
      container,
      currentComponent,
      handleTabClick,
    };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;

.wlin-tabs {
  &__titleWrap {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
  
  }
  &__title {
    padding: 8px 0;
    margin: 0 16px;
    cursor: pointer;
    &:first-child {
      margin-left: 0;
    }
    &.selected {
      color: $blue;
    }
  }
  &__contentWrap {
    padding: 8px 0;
  }
  &__indicator {
    position: absolute;
    height: 3px;
    background: $blue;
    left: 0;
    bottom: -1px;
    width: 100px;
    transition: left .2s linear;
  }
}
  
</style>