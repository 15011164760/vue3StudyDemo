<template>
  <div>
    <!-- <div>{{ obj }}</div> -->
    <div>
      {{ name }}
    </div>
    <div>
      {{ age }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
//1-5解决: 利用 toRefs 可以将一个响应式 reactive 对象的所有原始属性转换为响应式的 ref 属性
export default defineComponent({
  setup() {
    let obj = reactive({
      name: "yandonx",
      age: 13,
      cars: ["huoc", "good", "hell"],
    });
    setInterval(() => {
      obj.name += "=";
      obj.age += 1;
    }, 2000);
    // let {name,age}=toRefs(obj);
    // let allData=toRefs(obj);
    let allData=toRefs(obj);
    return {
      ...allData,
      obj,
      // name,age
    };
  },
});
</script>


<style>
</style>