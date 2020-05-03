<template>
  <el-main>
    <v-main></v-main>
  </el-main>
</template>

<script>
import VMain from '../components/home/Main'

export default {
  components: {
    VMain
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
