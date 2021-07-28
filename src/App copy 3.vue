<template>
  <div>
    <Modal></Modal>
    <!-- 异步组件 -->
    <Suspense>
         <template #default>
           <!-- 请求完成 -->
              <AsyncShow/>
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
// import { ref } from "vue";
import Modal from './components/Modal.vue'
import AsyncShow from './components/AsyncShow.vue'
export default {
  name: "App", 
  components:{
    Modal,
    AsyncShow
  },
  setup() {
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
