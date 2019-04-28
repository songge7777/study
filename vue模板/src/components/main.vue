<template>
  <div>
      <div id="view" class="div">
           <button @click="btn">截图</button>
           <br/>
           <br/>
           <br/>
           <br/>
           <div ref='div'> </div>
                      <br/>
           <br/>
           <br/>           <br/>
           <br/>
           <br/>
           <!-- <button @click="add">增加</button> -->
           <!-- <button @click="add">减少</button> -->
          
        </div>
  </div>
</template>

<script>
import html2canvas from 'html2canvas'
import { mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import Store from './store'

  export default {
    mounted() {
      // this.$store.registerModule(['abc'], Store.store)
      // console.log('1+++',this.$store)
      // console.log('22-',this.count)
      // console.log('-33-',this.isAdmin123)
      // console.log(this.$store)
    },
    computed:{
        //  count(){
        //          return this.$store.state;
        //       },
        // 上下两个是等价的
          // ...mapState({
          //       count: state => state
          //   }),
          // ...mapGetters('two/',[
          //   'getCount',
          //   'isAdmin',
          // ])
    },
    methods:{
      // ...mapMutations([
      //         'add'
      //       ]),
      
      ...mapActions([
        'increment',
      ]),
      btn(){
        // Canvas2image 转换成图片
      // this.add()
      this.increment({s:'123123'})
      //   html2canvas(document.body).then((canvas)=>{
      //     this.$refs.div.appendChild(canvas);
      //     width:'300px'
      // });
      }
    }
  }
</script>

<style scoped>
.div{
    width: 200px;
   height: 100px;
   background: url('./1.png')

}
</style>