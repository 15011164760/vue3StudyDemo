<template>
  <div>age:{{age}}</div>
  <div>{{name}}</div>
  <div>{{obj}}</div>
  <button @click="update">update</button>
</template>
<script>
/* toRef为源响应式对象上的某个属性创建一个 ref 对象, 二者内部操作的是同一个数据值, 更新时二者是同步的
区别 ref: 拷贝了一份新的数据值单独操作, 更新时相互不影响
应用: 当要将 某个 prop 的 ref 传递给复合函数时，toRef 很有用 */
import { defineComponent,reactive,ref, toRef  } from 'vue'

export default defineComponent({
  setup() {
    let c={
      age:12,
      name:'yangdongxu'
    };
    let obj=reactive(c)
    let age=toRef(obj,'age');
    let name=ref(obj.name);
   let update=()=>{
     age.value+=1;
     name.value+='=';
     console.log('c===>',c);
     console.log('obj===>',obj);
   }
    return{
      age,
      obj,
      name,
      update
    }
  },
})
</script>


<style>

</style>