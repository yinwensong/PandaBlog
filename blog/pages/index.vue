<template>
  <el-main>
    <Article />
  </el-main>
</template>

<script>
import Article from '../components/main/Article'
export default {
  components: {
    Article,
  }
}
</script>
<style scoped>
.el-main{
  background: #fff;
  min-height: calc(100vh - 150px);
  padding:35px;
}

</style>
