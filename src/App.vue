<template>
   <Suspense>
      <template #default>
         <AsyncShow/>
      </template>
       <template #fallback>
        <div>loading...</div>
      </template>
   </Suspense>
  <button @click="changeFn">changeFn</button>
  <div class="textClass">
    <div class="textClass2">sdsd</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, isProxy, isReactive, isReadonly, isRef, provide, reactive, readonly, ref } from 'vue'
import AsyncShow from './components/AsyncShow.vue'
import { getCompanyDetail } from './api/api.js';
export default defineComponent({
  components:{
    AsyncShow
  },
  setup() {
    /* 
    isRef: 检查一个值是否为一个 ref 对象
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
       getCompanyDetail();
    }
    return {
      color,changeFn
    }
  },
})
</script>


<style lang="scss" type="text/css">
.textClass{
  .textClass2{
    color:#ddd
  }
}
</style>