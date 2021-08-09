<template>
  <div>m1:{{ m1 }}</div>
  <div>likes:{{ m1.likes }}</div>
  <button @click="update">update</button>
</template>

<script lang="ts">
/*
toRaw: 得到reactive代理对象的目标数据对象
*/
import {
  defineComponent,
  markRaw,
  // ref,
  // shallowReactive,
  // shallowRef,
  reactive,
  readonly,
  shallowReadonly,
  toRaw
} from "vue";

export default defineComponent({
  setup() {
    const m1 = reactive<any>({ a: "1", b: { c: 2 } });
    
    function update() {
      let likes=['ball','girl','money'];
      // const user=toRaw(m1);//界面不会更新
      // console.log(user,m1);
      // user.a='aaa';
      m1.likes=markRaw(likes);// likes数组就不再是响应式的了
      //之后修改就不是响应式的数据了
      setInterval(()=>{
        m1.likes[0]+="==";
        console.log(m1);
      },2000)
    }
    return {
      m1,
      update,
    };
  },
});
</script>


<style>
</style>



