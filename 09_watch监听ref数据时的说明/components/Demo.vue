<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <button @click="addNumber">点我+1(函数)</button>
  <hr>
  <h2>当前信息为：{{msg}}</h2>
  <button @click="msg += '222@@@' ">修改信息</button>
  <hr>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>数字：{{person.job.one.salary}}</h2>
  <button @click="person.name += '~~' ">修改姓名</button>
  <button @click="person.age += 1">修改年龄</button>
  <button @click="person.job.one.salary++">修改数字</button>
</template>

<script>
  import { reactive, computed, ref, watch } from "vue";
  export default {
    name: 'Demo',
    /* watch:{
      // 简写
      // sum(newValue,oldValue){
      //   console.log('xhy001',newValue,oldValue);
      // } 
      // 完整写法
      sum:{
        immediate: true,
        deep: true,
        handler(newValue,oldValue){
          console.log('xhy002',newValue,oldValue);
        }
      }
    }, */
    setup(){
      // 数据 如果有计算属性，需要在代理对象之前定义
      let sum = ref(0)
      let msg = ref('无敌')

      let person = ref({
        name: '熊海鹰',
        age: 29,
        job:{
          one:{
            salary: 20
          }
        }
      })

      watch(sum,(newValue, oldValue)=>{
        console.log('sum变化了', newValue, oldValue);
      })

      // person.value 表示ref定义的对象中的value（是ref借助Proxy定义的响应式数据），此时能监听到数据变化
      watch(person.value,(newValue, oldValue)=>{
        console.log('person变化了', newValue, oldValue);
      })  

      // person 是ref定义的对象，开启深度监测也可以监听到。此时不需要去 .value 找到ref借助Proxy定义的对象
      watch(person,(newValue, oldValue)=>{
        console.log('person变化了', newValue, oldValue);
      },{deep:true})

      // 方法
      function addNumber(){
        sum.value += 1
      }

      // 返回一个对象（常用）
      return {
        sum,
        msg,
        person,
        addNumber,
      }
    },
  }
</script>

<style>

</style>