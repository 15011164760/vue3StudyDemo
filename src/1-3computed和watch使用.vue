<template>
  <div>
    姓氏:
    <input type="text" v-model="user.first" />
    姓名1:
    <input type="text" v-model="firstName1" />
    姓名2:
    <input type="text" v-model="firstName2" />
    <Model @fn="fn" />
    姓名3:
    <input type="text" v-model="firstName3" />
    <Model @fn="fn" />
  </div>
</template>

<script lang='ts'>
import Model from "./components/Modal.vue";
import { defineComponent, reactive, ref, computed,watch,watchEffect } from "vue";
export default defineComponent({
  name: "App",
  components: {
    Model,
  },
  beforeCreate() {
    console.log("beforeCreated");
  },
  setup(props, context) {
    let msg = ref("");
    console.log("setUP===>");
    console.log(props, "props===");
    function fn(xx: any) {
      console.log(xx);
    }
    let user = reactive({
      first: "yang",
      last: "dongxu",
    });
    let firstName1 = computed(() => {
      return user.first + "_" + user.last;
    });
    let firstName2 = computed({
      get() {
        return user.first + "_" + user.last;
      },
      set(val:string) {
        const name=val.split('_');
        user.first=name[0];
        user.last=name[1];
      },
    });
    let firstName3=ref('');
    // watch(user,({first,last})=>{
    //   firstName3.value=first+"_"+last;
    // },{
    //   immediate:true,//是否立刻执行
    //   deep:true//深度监听
    // })
    //开始就执行一次
    // watchEffect(()=>{
    //   firstName3.value=user.first+'_'+user.last
    // })
    //user.first,user.last非响应式的数据
    // watch([user.first,user.last,firstName3],()=>{
    //   console.log("=====")
    // })
    //user.first,user.last改成响应式的数据
    watch([()=>user.first,()=>user.last,firstName3],()=>{
      console.log("=====")
    })
    return {
      msg,
      fn,
      user,
      firstName1,
      firstName2,
      firstName3
    };
  },
});
</script>

<style>
</style>