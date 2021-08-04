<template>
<teleport to="#modal"> 
      <div id="center">
        <h2>怒放的生命</h2>
        <button @click="getFn">fn.emit</button>
    </div>
</teleport>    
  
</template>
<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    props:['msg'],
    emits:['fn'],
    setup(props,{attrs,emit,slots}){
        console.log(props.msg,"====")
        console.log(attrs.msg2,"====")
        console.log(slots,"====")
        console.log(emit,"=====")
        function getFn(){
            emit('fn',new Date().getTime())
        }
        return {
            getFn
        }
    }
})
</script>
<style>
#center{
    position:fixed;
    left:50%;
    top:50%;
    margin-left:-100px;
    margin-top:-100px;
    width:200px;
    height:200px;
    border:1px solid #ddd;
}
</style>


function emit(arg0: string, arg1: number) {
  throw new Error('Function not implemented.')
}
    