<template>
  <br><hr>
  <h2>{{textInput}}</h2>
</template>

<script>
  import { isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref, } from "vue";
  export default {
    name: 'Demo',
    setup(){
      // 数据
      let textInput = ref('我是父级组件')
      let test = ref({a:1,b:2})
      let car = reactive({name:'BYD',price:40})
      let person = readonly(reactive({name:'xhy',age:29})) 

      console.log('---isRef---',isRef(textInput));
      console.log('---isReactive---',isReactive(car));
      console.log('---isReadonly---',isReadonly(person));
      console.log('---isProxy---',isProxy(test));

      // 返回一个对象（常用）
      return {
        textInput,
        car,
        person,
      }
    },
  }
</script>
