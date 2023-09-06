<template>
  <h1>你好呀！{{name}}。{{age}}</h1>
  <Demo msg="123"></Demo>
</template>

<script>
  // 引入 ref 函数
  import { provide, reactive, ref, toRefs } from 'vue'
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup() {
      let person = reactive({
        name: 'xhy',
        age: 29
      })
      provide('person',person) // 通过provide给下级组件传递数据
      return {
        ...toRefs(person)
      }
    }
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
