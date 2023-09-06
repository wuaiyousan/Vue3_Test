<template>
  <br><hr>
  <h3>{{a}}</h3>
  <h3>{{name}} --- {{age}}</h3>
  <Small></Small>
</template>

<script>
  import { inject, ref, toRefs } from 'vue'
  import Small from './Small.vue'
  export default {
    name:'Son',
    components:{Small},
    setup(props) {
      let a = ref('我是孙级组件')
      let sonPerson = inject('person')
      console.log(sonPerson,'我是孙级组件');
      return {
        a,
        ...toRefs(sonPerson)
      }
    }

  }
</script>
