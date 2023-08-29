<template>
  <div>
    <h2>{{person.name}}</h2>
    <h2>{{person.age}}</h2>
    <button @click="test">Test</button> <br>
    <slot name="xhy"></slot>
    
  </div>
</template>

<script>
  import { reactive } from "vue";
  export default {
    name: 'Demo',
    beforeCreate(){
      console.log('---beforeCreate---');
    },
    // props:['msg','school'],
    setup(props,contxet){
      // console.log('---setup---',contxet.attrs);
      console.log('---setup---',contxet.slots);
      // 数据
      let person = reactive({
        name: '熊海鹰',
        age: 28,
      })

      // 方法
      function test(){
        contxet.emit('testClick',{a:123,b:'2222'})
      }

      // 返回一个对象（常用）
      return {
        person,
        test,
      }
    },
  }
</script>

<style>

</style>