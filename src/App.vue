<template>
  <div>x:{{ x }} y:{{ y }}</div>
  <h2 v-if="loading">LOADING...</h2>
  <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
  <!-- <ul v-else>
    <li>id: {{result.id}}</li>
    <li>name: {{result.name}}</li>
    <li>distance: {{result.distance}}</li>
  </ul> -->

  <ul v-for="p in result" :key="p.id">
    <li>id: {{ p.id }}</li>
    <li>title: {{ p.title }}</li>
    <li>price: {{ p.price }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent,watch } from "vue";
import userMousePosition from "./hooks/userMousePosition";
import userUrlLoader from "./hooks/userRequest";
//产品接口
interface ProductResult {
  id:string;
  title:string;
  price:string;
}
export default defineComponent({
  setup() {
    let { x, y } = userMousePosition();
    let { loading, result, errorMsg } = userUrlLoader<ProductResult[]>("/data/products.json");
    watch(result,()=>{
      if(result.value){
        console.log(result.value.length);
      }
    })
    return {
      x,
      y,
      loading,
      result,
      errorMsg,
    };
  },
});
</script>


<style>
</style>