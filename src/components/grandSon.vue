<template>
  <div :style="{color}">孙子的颜色{{color}}</div>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
    setup() {
      let color=inject('colorName');
        return {
          color
        }
    },
})
</script>


<style>

</style>