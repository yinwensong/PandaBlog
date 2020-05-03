<template>
  <el-container class="el-container">
    <el-header>
      <v-header></v-header>
    </el-header>
    <nuxt />
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
    <el-backtop></el-backtop>
  </el-container>
</template>
<script>
import VHeader from "../components/home/Header";
import VFooter from '../components/home/Footer'

export default {
  components: {
    VHeader,
    VFooter,
  }
};
</script>
<style>
html,
body {
  background-color: #f4f4f4;
}
.el-container {
  width: 80%;
  margin: 0 auto;
}
.el-header{
  padding:0;
}
.el-footer{
  padding:0;
}
</style>
