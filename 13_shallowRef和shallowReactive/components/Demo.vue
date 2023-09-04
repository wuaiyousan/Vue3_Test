<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>数字：{{job.one.salary}}</h2>
  <button @click="name += '~~' ">修改姓名</button>
  <button @click="age += 1">修改年龄</button>
  <button @click="job.one.salary++">修改数字</button>
  <hr>
  <h2>当前的sum.a值是：{{sum.a}}</h2>
  <button @click="sum.a++ ">点位sum.a加1</button>
</template>

<script>
  import { ref,reactive,toRef,toRefs,shallowReactive,shallowRef } from "vue";
  export default {
    name: 'Demo',
    setup(){
      // 数据 
      let person = shallowReactive({
        name: '熊海鹰',
        age: 29,
        job:{
          one:{
            salary: 20
          }
        }
      })

      let sum = shallowRef({
        a:0
      })
      console.log(sum);

      // 返回一个对象（常用）
      return {
        sum,
        person,
        ...toRefs(person)
      }
    },
  }
</script>

<style>

</style>