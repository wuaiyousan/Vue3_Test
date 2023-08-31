<template>
  <h2>当前求和为：{{sum}}</h2>
  <button @click="sum++">点我+1</button>
  <hr>
  <h2>X坐标：{{position.x}}</h2>
  <h2>Y坐标：{{position.y}}</h2>
</template>

<script>
  import { reactive, computed, ref, watch, watchEffect, onMounted, onBeforeUnmount } from "vue";
  import { addPoint } from '../hooks/usePoint'
  export default {
    name: 'Demo',
    setup(){
      // 数据 如果有计算属性，需要在代理对象之前定义
      let sum = ref(0)
      let position = addPoint()

      // 返回一个对象（常用）
      return {
        sum,
        position
      }
    },
  }
</script>

<style>

</style>