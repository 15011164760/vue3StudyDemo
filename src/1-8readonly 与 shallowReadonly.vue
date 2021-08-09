<template>
  <div>m1:{{ m1 }}</div>
  <button @click="update">update</button>
</template>

<script lang="ts">
/*
readonly: 深度只读数据
  获取一个对象 (响应式或纯对象) 或 ref 并返回原始代理的只读代理。
  只读代理是深层的：访问的任何嵌套 property 也是只读的。
shallowReadonly: 浅只读数据
  创建一个代理，使其自身的 property 为只读，但不执行嵌套对象的深度只读转换
应用场景:
  在某些特定情况下, 我们可能不希望对数据进行更新的操作, 那就可以包装生成一个只读代理对象来读取数据, 而不能修改或删除
*/
import {
  defineComponent,
  // ref,
  // shallowReactive,
  // shallowRef,
  reactive,
  readonly,
  shallowReadonly,
} from "vue";

export default defineComponent({
  setup() {
    const m1 = reactive({ a: "1", b: { c: 2 } });
    const rState1 = readonly(m1);
    const rState2 = shallowReadonly(m1);
    function update() {
      // rState1.a+=1;
      // rState1.b.c+=1;
      // rState2.a+=1;
      rState2.b.c += 1;
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



