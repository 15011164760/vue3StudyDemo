<template>
  <div>m1:{{ m1 }}</div>
  <div>m2:{{ m2 }}</div>
  <div>m3:{{ m3 }}</div>
  <div>m4:{{ m4 }}</div>
  <button @click="update">update</button>
</template>

<script lang="ts">
import {
  // defineComponent,
  ref,
  shallowReactive,
  shallowRef,
  reactive,
} from "vue";
// ref 获取元素
/*
shallowReactive与shallowRef
  shallowReactive: 只处理了对象内最外层属性的响应式(也就是浅响应式)
  shallowRef: 只处理了value的响应式, 不进行对象的reactive处理
总结:
  reactive与ref实现的是深度响应式, 而shallowReactive与shallowRef是浅响应式
  什么时候用浅响应式呢?
    一般情况下使用ref和reactive即可,
    如果有一个对象数据, 结构比较深, 但变化时只是外层属性变化 ===> shallowReactive
    如果有一个对象数据, 后面会产生新的对象来替换 ===> shallowRef
*/
export default {
  setup() {
    let obj = { a: "1", b: { c: 2 } };
    const m1 = reactive({ a: "1", b: { c: 2 } });
    const m2 = shallowReactive({ a: "1", b: { c: 2 } });
    const m3 = ref({ a: "1", b: { c: 2 } });
    const m4 = shallowRef({ a: "1", b: { c: 2 } });

    let obj1 = {
      name: "zjq",
      age: 123,
      habby: {
        habby1: "habby1",
      },
    };
    function update() {
      // m1.b.c += 1;
      // m2.a += 1;
      // m2.b.c += 1;
      // m3.value.a += 1;
      m4.value.a+=1;
      console.log(m4.value.a)
    }
    return {
      m1,
      m2,
      m3,
      m4,
      update,
    };
  },
};
</script>


<style>
</style>



