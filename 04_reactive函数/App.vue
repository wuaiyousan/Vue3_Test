<template>
  <h1>你好呀！熊海鹰</h1>
  <h2>{{person.name}},{{person.age}}</h2>
  <h2>{{person.job.work}},{{person.job.money}}</h2>
  <h2>{{person.job.a}}</h2>
  <button @click="changeName">变换名称</button>
</template>

<script>
  import { reactive } from "vue";
  export default {
    name: 'App',
    setup(){
      // 数据
      let person = reactive({
        name: '熊海鹰',
        age: 28,
        job: {
          work: 'xcy',
          money: 600,
          a:[1, 2, 3]
        }
      })

      //
      function changeName(){
        console.log(person.job);
        person.name = '刘波'
        person.age = 29
        person.job.work = 'UI'
        person.job.a[2] = 999
      }

      // 返回一个对象（常用）
      return {
        person,
        changeName,
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
