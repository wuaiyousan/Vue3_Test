<template>
  <br>
  <hr>
  <input type="text" v-model="textInput">
  <h3>{{textInput}}</h3>
</template>

<script>
  import { customRef, ref, } from "vue";
  export default {
    name: 'Demo',
    setup(){
      // 数据
      // let textInput = ref('')
      let textInput = myRef('123',500)

      //
      function myRef(value,delay){  
        let timer    
        return customRef((track,trigger)=>{
          return {
            get(){
              console.log('-------',value);
              track() // 追踪value的变化
              return value
            },
            set(newValue){
              console.log('-------',newValue);    
              clearTimeout(timer)        
              timer = setTimeout(() => {
                value = newValue
                trigger() // 通知Vue重新解析模板 
              }, delay);
            },
          }
        }) 
      }

      // 返回一个对象（常用）
      return {
        textInput
      }
    },
  }
</script>
