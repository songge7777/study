<template>
  <div>
      <button @click='btn'>按钮</button>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
          <transition
          name='fade'
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            v-bind:css="true"
          >
            <div v-show="show" class="addcart-mask">
              <img ref="dom"  class="ball mask-item" :src="ball" alt="" width="30">
            </div>
          </transition>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        show:false,
        flag: false,
        ball: 'https://upload-images.jianshu.io/upload_images/1864602-ec73f549171a6601.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240'
      }
    },
    methods:{
      beforeEnter(el){
        // 当前小球
        let ball = document.getElementsByClassName('mask-item')[0]
        el.style.transform = 'translate3d(0,0,0)'
        ball.style.transform = 'translate3d(0,0,0)'
        console.log('11111111111111111')
       },
      enter(el){
        let ball = document.getElementsByClassName('mask-item')[0]
        el.offsetWidth;

        el.style.transform = 'translate3d(0,-300px,0)'
        ball.style.transform = 'translate3d(-300px,0,0)'

        console.log('进入时候',el)
      },
      afterEnter(el){
        this.show = !this.show
        console.log('进入完成')
      },
      btn(){
        this.show = !this.show
      }
    }
  }
</script>

<style scoped>
.div{
  margin-top: 300px
}
.fade-enter-active{
 transition: 2s cubic-bezier(.14,1.21,.93,1.56);
}
.fade-enter-active .mask-item{
 transition: 2s cubic-bezier(0,0,0,0)
}

</style>