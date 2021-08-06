import axios from "axios";
import { ref } from "vue";
export default function userUrlLoader<T>(url:string){
    const loading=ref(true);
    const result=ref<T | null>(null);
    const errorMsg=ref(null);
    axios.get(url).then((res)=>{
      loading.value=false;
      result.value=res.data;
    }).catch((err)=>{
        loading.value=false;
        errorMsg.value = err.message || '未知错误'
    })
    return {
        loading,
        result,
        errorMsg
    }
}