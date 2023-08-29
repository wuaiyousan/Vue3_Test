<template>
  <h1>你好呀！熊海鹰</h1>
  <Demo @testClick="testClick" msg="凤飞千仞" school="吉大">
    <template v-slot:xhy>
      <span>??????</span>
    </template>  
  </Demo>
</template>

<script>
  import Demo from './components/Demo'
  export default {
    name: 'App',
    components:{Demo},
    setup(props) {
      function testClick(value){
        console.log('有人触发了testClick',value);
      }

      return {
        testClick
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
