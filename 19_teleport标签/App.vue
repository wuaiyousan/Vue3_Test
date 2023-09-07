<template>
    <h1>你好呀！xhy</h1>
    <Demo></Demo>
</template>

<script>
  // 引入 ref 函数
  import { provide, reactive, ref, toRefs } from 'vue'
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup() {
    }
  }
</script>

<style>
#app{
  background-color: gray;
  padding: 10px;
}
</style>
