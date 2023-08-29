<template>
  <div>
    姓：<input type="text" v-model="person.firstName"><br>
    名：<input type="text" v-model="person.lastName">
    <hr>
    姓名：<span>{{person.allName}}</span>
  </div>
</template>

<script>
  import { reactive, computed } from "vue";
  export default {
    name: 'Demo',
    setup(){
      // 计算属性
      let allName = computed(()=>{
        return `${person.firstName} - ${person.lastName}` 
      })
      // 数据 如果有计算属性，需要在代理对象之前定义
      let person = reactive({
        firstName: '熊',
        lastName: '海鹰',
        allName,
      })


      // 方法

      // 返回一个对象（常用）
      return {
        person,
      }
    },
  }
</script>

<style>

</style>