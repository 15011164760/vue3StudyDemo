<template>
  <Son/>
  <button @click="changeFn">changeFn</button>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import Son from './components/Son.vue'
export default defineComponent({
  components:{
    Son
  },
  setup() {
    const color=ref('red');
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