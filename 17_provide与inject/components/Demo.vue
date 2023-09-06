<template>
  <br><hr>
  <h2>{{textInput}}</h2>
  <h2>{{name}}---{{age}}</h2>
  <Son></Son>
</template>

<script>
  import { customRef, ref, toRefs,inject } from "vue";
  import Son from './Son.vue'
  export default {
    name: 'Demo',
    components:{Son},
    props:['msg','shcool'],
    setup(props){
      // 数据
      let textInput = ref('我是父级组件')
      let onePerson = inject('person')
      console.log(onePerson,'我是父级组件',props);
      // 返回一个对象（常用）
      return {
        textInput,
        ...toRefs(onePerson)
      }
    },
  }
</script>
