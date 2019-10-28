<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
data(){
    return{
      message: 'Vue的生命周期'
    }
  },
}
</script>

<style>
*{
  margin:0;
  padding:0
}
</style>
