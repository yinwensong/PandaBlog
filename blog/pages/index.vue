<template>
    <el-container class="el-container">
      <el-header>
       <v-header></v-header>
      </el-header>
      <el-main>
        <v-main></v-main>
      </el-main>
      <el-footer>
        <v-footer></v-footer>
      </el-footer>
     </el-container>
</template>

<script>
import VHeader from '../components/home/Header'
import VFooter from '../components/home/Footer'
import VMain from '../components/home/Main'

export default {
  components: {
    VHeader,
    VFooter,
    VMain
  }
}
</script>
<style scoped>
.el-header{
  padding:0;
}
 .el-container {
  width: 80%;
  margin: 0 auto;
}
.el-main{
  background: #fff;
  min-height: calc(100vh - 150px);
  padding:35px;
}
.el-footer{
  padding:0;
}
</style>
