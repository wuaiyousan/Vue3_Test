import { reactive, onMounted, onBeforeUnmount } from "vue";

function addPoint(){
  const position = reactive({
    x: 0,
    y: 0
  })

  //
  function abb(a) {
      console.log(a,position.x,a.x,position);
      position.x = a.x
      position.y = a.y
    }

  //
  onMounted(() => {
    window.addEventListener('click',abb)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('click',abb)
  })

  return position
}

function test(){
  return '2222'
}

let aaa = 1
export  { aaa,addPoint, test}
