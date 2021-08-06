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