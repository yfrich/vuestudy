import { ref, onMounted, computed } from "vue";
export default function () {
  //数据
  let sum = ref(0);
  //计算属性
  let bigSum = computed(() => {
    return sum.value * 10;
  });
  //方法
  function add() {
    sum.value += 1;
  }
  //钩子
  onMounted(() => {
    //挂载完成后进行数据+1处理
    console.log("挂载完成后进行数据+1处理");

    add();
  });
  return { sum, add, bigSum };
}
