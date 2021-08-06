<template>
  <div>
    <input type="text" ref="inputRef" />
    <input type="text" ref="inputRef1" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
// ref 获取元素
export default defineComponent({
  setup() {
    const inputRef = ref<HTMLElement | null>(null);
    const inputRef1 = ref<HTMLElement | null>(null);
    onMounted(() => {
      inputRef.value && inputRef.value.focus();
      console.log(inputRef.value);
    });
    return {
      inputRef,
      inputRef1,
    };
  },
});
</script>


<style>
</style>