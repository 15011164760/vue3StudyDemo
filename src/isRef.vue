<template>
  <Son/>
  <button @click="changeFn">changeFn</button>
</template>

<script lang="ts">
import { defineComponent, isProxy, isReactive, isReadonly, isRef, provide, reactive, readonly, ref } from 'vue'
import Son from './components/Son.vue'
export default defineComponent({
  components:{
    Son
  },
  setup() {
    /* isRef: 检查一个值是否为一个 ref 对象
isReactive: 检查一个对象是否是由 reactive 创建的响应式代理
isReadonly: 检查一个对象是否是由 readonly 创建的只读代理
isProxy: 检查一个对象是否是由 reactive 或者 readonly 方法创建的代理 */
    const color=ref('red');
    const color1=reactive({
      color:'red'
    });
    let isReadonlyD=readonly(color);
    console.log(isRef(color));
    console.log(isReactive(color1));
    console.log(isReadonly(isReadonlyD));
    console.log(isProxy(color1),isProxy(isReadonlyD),isProxy(color));
    provide('colorName',color)
    let changeFn=()=>{
       color.value='green'
    }
    return {
      color,changeFn
    }
  },
})
</script>


<style>

</style>