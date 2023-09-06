<template>
  <br><hr>
  <h4>{{msg}}</h4>
  <h4>{{name}}</h4>
</template>

<script>
import { inject, ref, toRefs } from 'vue';

  export default {
    name: 'Small',
    setup() {
      let msg = ref('我是祖孙组件')
      let b = inject('person')
      console.log(b,'我是祖孙组件');
      return {
        msg,
        ...toRefs(b)
      }
    }
  }
</script>

