<template>
  <div>
    <Modal></Modal>
    <!-- 异步组件 -->
    <Suspense>
         <template #default>
           <!-- 请求完成 -->
              <!-- <AsyncShow/> -->
              <girlShow></girlShow>
          </template> 
          <!-- 请求中 -->
          <template #fallback>
              <div>loading.......</div>
          </template>  
    </Suspense>
  </div>
</template>

<script lang="ts">
//reactive
import { onErrorCaptured } from "vue";
import Modal from './components/Modal.vue'
// import AsyncShow from './components/AsyncShow.vue'
import girlShow from './components/girlShow.vue'
export default {
  name: "App", 
  components:{
    Modal,
    // AsyncShow,
    girlShow
  },
  setup() {
    console.log('aaa')
     onErrorCaptured((err)=>{
          console.log(err,"|onErrorCaptured===>err")
          return true
        })
    return {
    };
  },
 
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
