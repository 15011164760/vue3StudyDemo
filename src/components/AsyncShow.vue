<template>
 <h2>{{result}}</h2>
</template>
<script>
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        return new Promise((resolve,reject)=>{
          setTimeout(()=>{
              return resolve({result:'yangdongxu'})
          },1000)
        })
    },
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

    