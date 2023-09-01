<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>数字：{{salary}}</h2>
  <button @click="name += '~~' ">修改姓名</button>
  <button @click="age += 1">修改年龄</button>
  <button @click="salary++">修改数字</button>
</template>

<script>
  import { ref,reactive,toRef,toRefs } from "vue";
  export default {
    name: 'Demo',
    setup(){
      // 数据 如果有计算属性，需要在代理对象之前定义
      let person = reactive({
        name: '熊海鹰',
        age: 29,
        job:{
          one:{
            salary: 20
          }
        }
      })

      let refPerson = toRefs(person)
      console.log('%%%%%',toRefs);
      // 返回一个对象（常用）
      return {
        name: toRef(person,'name'),
        age: toRef(person,'age'),
        salary: toRef(person.job.one,'salary'),  
         
      }
    },
  }
</script>

<style>

</style>