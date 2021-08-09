<template>
  <input type="text" v-model="textVal">
  <h2>textVal:{{textVal}}</h2>
</template>

<script lang="ts">
import { customRef, defineComponent } from 'vue'
//自定义hook防抖函数
//value传入的类型不确定 所以使用泛型 delay防抖时间 默认是1000
function useDebounceRef<T>(value:T,delay=1000){
  //定义一个存储定时器的变量
  let timeout:number;
  return customRef((track,trigger)=>{
     return {
       //返回数据的
       get(){

         //告诉vue追踪数据
         track();  
         return value
       },
         //设置数据的
       set(newValue:T){
         //清除定时器的
         clearTimeout(timeout)
        //开启定时器
         timeout=setTimeout(()=>{
           value=newValue;
           //告诉vue更新界面
             trigger();
         },delay)

       }
     }
  })
}
export default defineComponent({
  setup() {
    return{
      textVal:useDebounceRef('hell0',1000)
    }
  },
})
</script>


<style>

</style>