<template>
<div>{{user.username}}</div>
<div>{{user.age}}</div>
<div>{{user.car}}</div>
<button @click="updateInfo">updateInfo</button>
</template>

<script lang="ts">
import {reactive,defineComponent} from 'vue';
export default defineComponent({
  name: "App", 
  components:{
   
  },
  setup() {
    let obj={
      username:'yang',
      age:18,
      car:['one','o5','am','pm']
    }
   let user=reactive(obj);
   const updateInfo=()=>{
     user.username+='=';
     user.age+=1;
     user.car.push('='+user.age);
   }
   return {
     user,updateInfo
   }
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
