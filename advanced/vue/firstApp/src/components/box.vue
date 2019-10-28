<template>
  <div>
      <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
        <span>这是一段信息</span>
        
        <span slot="footer" class="dialog-footer">
          <el-button @click="btn">关闭</el-button>
        </span>
      </el-dialog>
  </div>
</template>

<script>
 export default {
   props:['isShow'],
    data() {
      return {
        dialogVisible: true
      };
    },

    methods: {
      handleClose(done) {
        this.$confirm('确认关闭？')
          .then(_ => {
            done();
          })
          .catch(_ => {});
      },
      btn(){
        this.$emit('c','关闭')
      }
    }
  };
</script>

<style scoped>

</style>