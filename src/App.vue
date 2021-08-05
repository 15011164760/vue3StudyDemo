<template>
  <div>x:{{ x }} y:{{ y }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import userMousePosition from "./hooks/userMousePosition";
export default defineComponent({
  setup() {
    let { x, y } = userMousePosition();
    return {
      x,
      y,
    };
  },
});
</script>


<style>
</style>