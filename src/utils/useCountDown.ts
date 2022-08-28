import { onMounted, onUnmounted, ref } from 'vue';
// 参数1: 倒计时时间， 默认值为60秒
// 参数2: manually 是否手动触发倒计时，默认为false
function useCountDown (seconds: number = 60, manually?: boolean) { // 倒计时hook，返回当前计时count、pending状态flag、手动触发方法startCountDown
  const timer = ref(null)
  const count = ref<number>(seconds)
  const pending = ref<boolean>(false)

  function startCountDown() {
    pending.value = true
    timer.value = setTimeout(() => {
      clearTimeout(timer.value)
      if (count.value > 1) {
        count.value -= 1
        startCountDown()
      } else {
        count.value = seconds
        pending.value = false
      }
    }, 1000)
  }

  onMounted(() => {
    !manually && startCountDown()
  })

  onUnmounted(() => {
    clearTimeout(timer.value)
  })

  return {
    count,
    pending,
    startCountDown,
  }
}

export default useCountDown