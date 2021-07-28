<template>
  <div>
    {{count}}
  </div>
  <button @click="changeCount">changeCount</button>
</template>

<script lang="ts">
import {ref,defineComponent} from 'vue';
export default defineComponent({
  name: "App", 
  components:{
   
  },
  setup() {
    const count=ref(0);
     function changeCount(){
      count.value++;
     }
    return {
      count,
      changeCount
    };
  },
 
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
