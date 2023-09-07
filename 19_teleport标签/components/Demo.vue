<template>
  <div class="child">
    <h2>我是Demo组件</h2>
    <Son></Son>
  </div>
</template>

<script>
  import { customRef, ref, toRefs,inject } from "vue";
  import Son from './Son.vue'
  export default {
    name: 'Demo',
    components:{Son},
  }
</script>

<style>
.child{
  background-color: skyblue;
  padding: 10px;
}
</style>
