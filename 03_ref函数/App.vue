<template>
  <h1>你好呀！熊海鹰</h1>
  <h2>{{name}},{{age}}</h2>
  <h2>{{job.work}},{{job.money}}</h2>
  <button @click="changeName">变换名称</button>
</template>

<script>
  import { ref } from "vue";
  export default {
    name: 'App',
    setup(){
      // 数据
      let name = ref('熊海鹰')
      let age = ref(28)
      let job = ref({work:'xcy',money:600})

      //
      function changeName(){
        console.log(name,age,job.value.work);
        name.value = '刘波'
        age.value = 29
        job.value.work = 'UI'
      }

      // 返回一个对象（常用）
      return {
        name,
        age,
        job,
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
