<template>
  <div>儿子的颜色</div>
  <GrandSon/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import GrandSon from './grandSon.vue'
export default defineComponent({
    components:{
      GrandSon
    },
    setup() {
        return {
            
        }
    },
})
</script>


<style>

</style>