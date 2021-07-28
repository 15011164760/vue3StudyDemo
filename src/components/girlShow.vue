<template>
<img :src="result.imgUrl" alt="">
</template>
<script>
import { defineComponent } from 'vue'
import axios from 'axios';
export default defineComponent({
    async setup() {
        let result=await axios.get("https://apiblog.jspang.com/default/getGirl")
        return {result:result.data}
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

    