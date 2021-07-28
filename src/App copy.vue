<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
  <div>
    <div>欢迎红浪费服务</div>
    <div>选择美女服务</div>

    <div
      v-for="(item, index) in girls"
      :key="index"
      @click="selectGirlFn(index)"
    >
      <button>点击选择-{{ item }}</button>
    </div>
    你选择了
    <div>「{{ seletGirl }}」</div>
    为你服务
    <div>
        <button @click="finishEndFn(seletGirl)">点餐完毕</button>
        <div>{{overText}}</div>
    </div>
  </div>
</template>

<script lang="ts">
//reactive
import { defineComponent, ref, reactive, toRefs,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onRenderTracked,onRenderTriggered, watch } from "vue";
// import HelloWorld from './components/HelloWorld.vue';
interface DataProps {
  girls: string[];
  seletGirl: string;
  // overText: string;
  selectGirlFn: (index:number)=>void;
  // finishEndFn: (s:string)=>void;
}
export default({
  name: "App",
  // components: {
  //   HelloWorld
  // },
  setup() {
    console.log("1-开始创建组建之前----setup()");
     onBeforeMount(()=>{
       console.log('2.组建挂挂载到页面之前  ---onBeforeMount()')
     });
     onMounted(()=>{
       console.log('3.组建挂挂载到页面之前  ---onBeforeMount()')
     })
     onBeforeUpdate(()=>{
          console.log('4.组建更新页面之前  ---onBeforeUpdate()')
     })
     onUpdated(()=>{
          console.log('5.组建更新页面之后  ---onUpdated()')
     })
    //  onRenderTracked((event)=>{
    //     console.log('状态跟踪钩子函数===》onRenderTracked==')
    //     console.log(event)
    //  })
     onRenderTriggered((event)=>{
        console.log('状态跟踪钩子函数===》onRenderTriggered==')
        console.log(event)
     })
    //  const girls=ref(['大脚','刘颖','西施']);
    //  const seletGirl=ref("");
    //  const selectGirlFn=(index:number)=>{
    //    seletGirl.value=girls.value[index]
    //  }
  
    const data:DataProps = reactive({
      girls: ["大脚", "刘颖", "西施"],
      seletGirl: "",
      // overText:'红浪漫',
      selectGirlFn: (index: number) => {
        data.seletGirl = data.girls[index];
      },
      
    });
    const overText=ref('红浪漫');
    const finishEndFn= () => {
       overText.value = "点餐完成|"+data.seletGirl;
      };
    const refData = toRefs(data);
    watch([overText,()=>data.seletGirl],(newValue,oldValue)=>{
      console.log(`newValue===>,${newValue}`);
      console.log(`oldValue===>,${oldValue}`);
      document.title=newValue[0]
    });
    //  return {
    //    girls,
    //    seletGirl,
    //    selectGirlFn
    //  }
    return {
      ...refData,
      overText,
      finishEndFn
    };
  },
 
  //生命周期
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

function watch(arg0: string[], arg1: (newValue: any, oldValue: any) => void) {
  throw new Error("Function not implemented.");
}
