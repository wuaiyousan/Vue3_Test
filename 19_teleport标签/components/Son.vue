<template>
  <div class="son">
    <h3>我是Son组件</h3>
    <Dialog></Dialog>
  </div>
</template>

<script>
  import { inject, ref, toRefs } from 'vue'
  import Dialog from './Dialog.vue'
  export default {
    name:'Son',
    components:{Dialog},
    setup() {
    }
  }
</script>

<style>
.son{
  background-color: orange;
  padding: 10px;
}
</style>
