<template>
  <h1>你好呀！熊海鹰</h1>
  <button @click="isShowDemo = !isShowDemo">隐藏显示</button>
  <Demo v-if="isShowDemo"></Demo>
</template>

<script>
  // 引入 ref 函数
  import { ref } from 'vue'
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup() {
      const isShowDemo = ref(true)

      return {
        isShowDemo
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
