<template>
  <div>
      <button @click='btn'>按钮</button>
          <transition
          name='fade'
            @before-enter="beforeEnter"
            @enter="enter"
            @after-enter="afterEnter"
            v-bind:css="true"
          >
            <div v-show="show" class="123">
              <img ref="dom"  class="ball" :src="ball" alt="" width="30">
            </div>
          </transition>
      <!-- <div class='div'>
        <transition name="fade" 
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:after-enter="afterEnter"
            :v-bind:css="true">
          <p v-if="show" ref='dom' class="dom">hello</p>
        </transition>
      </div> -->
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
          let dom = document.querySelector('.ball')
         el.style.transform = "translate(0,0)"
         dom.style.transform = "translate(0,0)"
          console.log('进入前准备',dom)
        },
      enter(el){
        let dom = document.querySelector('.ball')
                // 刷新动画效果
        el.offsetWidth;
        // 动画完成后的样式
        // el.style.transform = "translateX(40px, 350px)";
        el.style.transform = "translateY(400px)";
        dom.style.transform = "translateX(350px)";

        // 动画的持续时间
        // el.style.transition = "all 3s cubic-bezier(0.14,1.21,0.93,1.56)";
        // dom.style.transition = "all 1s cubic-bezier(0.14,1.21,0.93,1.56)";

// done()
        console.log('进入时候',el)
      },
      afterEnter(el){
        console.log('进入完成')

        this.show = !this.show 
        console.log(this.show,'--------------')
        // el.offsetWidth;
        // let dom = el
        // dom.style.transform = `translateX(${0}px)`
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
 transition: all 5s ease;
}
.fade-enter{

}

</style>