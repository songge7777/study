<template>
  <div>
    <el-row>
      <el-col :span="14" :offset='10'>
        主食
      </el-col>
      <el-col :span="14" :offset='8'>
          <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="(item,index) in options"
              :key="index"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-col>
      {{getData}}
      <el-col :span="14" :offset='8' class="btn">
        <el-button type="primary" @click='btn'>点菜</el-button>   
        <el-button type="primary" @click='add'>增加</el-button> 
        <el-button type="primary" @click='del'>减少</el-button>    
         
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
      data(){
        return{
          options: [{
            value: [
              {
                name:'黄金糕',
                price:2
              },
            ],
            label: '黄金糕'
          }, {
            value: [
              {
                name:'双皮奶',
                price:10
              },
            ],
            label: '双皮奶'
          }, {
            value: [
              {
                name:'蚵仔煎',
                price:12
              },
            ],
            label: '蚵仔煎'
          }, {
            value: [
              {
                name:'龙须面',
                price:7
              },
            ],
            label: '龙须面'
          }, {
            value: [
              {
                name:'北京烤鸭',
                price:121
              },
            ],
            label: '北京烤鸭'
          }],
          value:''
        }
      },
      computed:{
        getData(){
          return this.$store.state.one.count
        }
      },
      methods:{
        del(){
          this.$store.commit('decrement')
        },
        add(){
          // this.$store.commit('increment')
          // 写下面 是掉的actions 里面的
          this.$store.dispatch('increment')
        },
        btn(){
          console.log(this.value)
        }
      }
  }
</script>

<style scoped>
.btn{
  margin-top:100px
}
</style>