import { onMounted,onBeforeUnmount, ref } from "vue";
export default function () {
    const x = ref();
    const y = ref();
    const clickHandler=(event:MouseEvent)=>{
     x.value=event.pageX;
     y.value=event.pageY;
    }
    onMounted(()=>{
        window.addEventListener('click',clickHandler)
    })
    onBeforeUnmount(()=>{
        window.removeEventListener('click',clickHandler)
    })
   
    return {
        x, y
    }
}