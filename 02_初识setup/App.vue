<template>
  <h1>你好呀！熊海鹰</h1>
  <h2>{{name}},{{age}}</h2>
  <button @click="hello">按钮</button>
  <br>
  <br>
  <button @click="test2">Test</button>
</template>

<script>
  // import {h} from 'vue'
  export default {
    name: 'App',
    data() {
      return {
        a: '222',
      }
    },
    methods: {
      welcome(){
        console.log('welcome');
      }
    },
    // 此处只是测试一下setup，暂时不考虑响应式
    setup(){
      // 数据
      let name = '熊海鹰'
      let age = '28'

      // 方法
      function hello(){
        console.log(`${name},${age}。无敌的`);
      }
      function test2(){
        console.log(this.a);
      }

      // 返回一个对象（常用）
      return {
        name,
        age,
        hello,
        test2,
      }

      // 返回一个函数（渲染函数）
      // return ()=>{
      //   return h('h2','XXXXXXX')
      // }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
