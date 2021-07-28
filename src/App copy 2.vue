<template>
  <div>
    <div>
      {{ nowTime }}
    </div>
    <div>
      <button @click="getNowTime">当前时间</button>
    </div>
    <div v-if="loading">
      loading...
    </div>
    <img v-if="loaded" :src="result.imgUrl" alt="">
  </div>
</template>

<script lang="ts">
//reactive
// import { ref } from "vue";
import useURLAxiox from "./hooks/useURLAxiox";
import { nowTime, getNowTime } from "./hooks/userNowTime";
export default {
  name: "App", 
  components:{
  },
  setup() {
    const {loading,loaded,result}=useURLAxiox("https://apiblog.jspang.com/default/getGirl")
    return {
      loading,loaded,result,
      nowTime,
      getNowTime,
    };
  },

  //生命周期
};
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
