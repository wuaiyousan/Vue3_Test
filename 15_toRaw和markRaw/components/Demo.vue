<template>
  <h3>{{person}}</h3>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>数字：{{job.one.salary}}</h2>
  <h2>汽车信息：{{person.car}}</h2>
  <button @click="name += '~~' ">修改姓名</button>
  <button @click="age += 1">修改年龄</button>
  <button @click="job.one.salary++">修改数字</button>
  <button @click="showRawPerson">输出原生的person对象</button>
  <button @click="addCar">添加属性</button>
  <button @click="person.car.name = '兰博基尼'">修改新添加的对象属性</button>
  <hr>
  <h2>当前的sum值是：{{sum}}</h2>
  <button @click="sum++ ">点位sum加1</button>
</template>

<script>
  import { ref,reactive,toRef,toRefs, toRaw, markRaw,  } from "vue";
  export default {
    name: 'Demo',
    setup(){
      // 数据
      let sum = ref(0) 
      let person = reactive({
        name: '熊海鹰',
        age: 29,
        job:{
          one:{
            salary: 20
          }
        }
      })

      // 方法
      function showRawPerson(){
        const p = toRaw(person)
        p.age++
        console.log(person);
      }

      function addCar(){
        let car = {name:'BYD',price:'20W'}
        person.car = markRaw(car) 
      }

      // 返回一个对象（常用）
      return {
        sum,
        person,
        ...toRefs(person),
        showRawPerson,
        addCar,
      }
    },
  }
</script>

<style>

</style>