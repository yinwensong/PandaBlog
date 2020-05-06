<template>
  <div>
    <div class="row">
      <el-input type="textarea" :rows="4" placeholder="说点什么吧~" v-model="textarea"></el-input>
    </div>
    <div class="row clear">
      <el-button type="primary" class="right" plain>畅言一下</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      textarea: ""
    };
  }
};
</script>
<style scoped>
.row{
    min-height:70px;
}
.right{
    float:right;
    margin-top:15px;
}
</style>