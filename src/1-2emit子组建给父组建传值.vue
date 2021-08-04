<template>
  <div>
    <Model @fn="fn"/>
  </div>
</template>

<script lang='ts'>
import Model from './components/Modal.vue'
import {defineComponent,ref} from 'vue';
export default defineComponent({
  name:'App',
  components:{
    Model
  },
  beforeCreate(){
    console.log('beforeCreated')
  },
  setup(props,context){
    let msg=ref('');
    console.log('setUP===>')
    console.log(props,"props===")
    function fn(xx:any){
      console.log(xx);
    }
    return {
      msg,
      fn
    }
  }
})
</script>

<style>

</style>