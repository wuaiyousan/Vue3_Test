<template>
    <h1>你好呀！xhy</h1>
    <Suspense>
      <template v-slot:default>
        <Demo></Demo>
      </template>
      <template v-slot:fallback>
        <h3>加载中</h3>
      </template>
    </Suspense>
</template>

<script>
  import { defineAsyncComponent } from 'vue';

  // import Demo from './components/Demo' //静态引入
  const Demo = defineAsyncComponent(()=>import('./components/Demo')) //异步引入
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
