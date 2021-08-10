<template>
<button @click="openBool=true">openBool</button>
<!-- 瞬移组建  to移动到哪个标签中body是到body中  #model是移动到id是model的元素中 -->
  <teleport to="body">
     <div v-if="openBool" class="modelS">
         <div>modelStyle</div>
         <button @click="openBool=false">closeFn</button>
     </div>
  </teleport>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
    setup() {
        let openBool=ref(false)
        return{
            openBool
        }
    },
})
</script>


<style>

</style>