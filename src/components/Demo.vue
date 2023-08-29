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

      let person = reactive({
        name: '熊海鹰',
        age: 29,
        job:{
          one:{
            salary: 20
          }
        }
      })

      // 监视：一个ref响应式数据
      watch(sum,(newValue,oldValue)=>{
        console.log('xhy003',newValue,oldValue);
      },{immediate:true})

      // 监视：多个ref响应式数据
      // watch([sum, msg],(newValue,oldValue)=>{
      //   console.log('xhy004',newValue,oldValue);
      // })

      // 监视：一个reative定义的响应式数据，
      // 注意：此处无法正确的获取到oldvalue，强制开启了深度监视（deep配置无效）
      /* watch(person,(newValue, oldValue)=>{
        console.log('xhy005', newValue, oldValue);
      },{deep:false}) */

      // 监视：一个reative定义的响应式数据中的某个数据
      /* watch(()=>person.name,(newValue, oldValue)=>{
        console.log('xhy005', newValue, oldValue);
      }) */

      // 监视：一个reative定义的响应式数据中的某几个数据
      /* watch([()=>person.name, ()=>person.age],(newValue, oldValue)=>{
        console.log('xhy005', newValue, oldValue);
      })  */


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