//@ts-ignore
import { reactive, onMounted, onBeforeMount } from 'vue'
export default function() {
  let point = reactive({
    x: 0,
    y: 0,
  })

  // 鼠标打定的相关方法
  const savePoint = (event) => {
    point.x = event.pageX
    point.y = event.pageY
    console.log('xxx', event.pageX, 'yyy', event.pageY)
  }

  onMounted(() => {
    addEventListener('click', savePoint)
  }),

  onBeforeMount(() => {
    removeEventListener('click', savePoint)
  })
  
  return point
}
