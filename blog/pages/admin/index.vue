<template>
  <div>
    写文章
    <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="textarea"></el-input>
    <el-button type="primary">发布</el-button>
  </div>
</template>
<script>
export default {
    data() {
    return {
      textarea: ''
    }
  }
}
</script>