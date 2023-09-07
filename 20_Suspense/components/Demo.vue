<template>
  <div class="child">
    <h2>我是Demo组件</h2>
    <h3>{{sum}}</h3>
  </div>
</template>

<script>
  import { customRef, ref, toRefs,inject } from "vue";
  export default {
    name: 'Demo',
    // 第一种写法
    /* setup(){
      let sum = ref(0)
      return new Promise((resolve,inject)=>{
        setTimeout(()=>{
          resolve({sum})
        },1000)
      })
    }, */
    // 第二种写法
    async setup() {
      let sum = ref(0)
      let p = new Promise((resolve,inject)=>{
        setTimeout(()=>{
          resolve({sum})
        },1000)
      })

      return await p
    }
  }
</script>

<style>
.child{
  background-color: skyblue;
  padding: 10px;
}
</style>
