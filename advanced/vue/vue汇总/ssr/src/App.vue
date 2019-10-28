<template>
  <div id="app">
    <Bar/>
    <Foo/>

    123
    <router-view></router-view>
  </div>
</template>

<script>
import Bar from './components/Bar.vue';
import Foo from './components/Foo.vue';
export default{
  components:{
    Bar,Foo
  }
}
</script>