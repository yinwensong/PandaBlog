<template>
  <el-container>
    <el-header>
      <v-header></v-header>
    </el-header>
    <el-main class="main-wrap">
      <el-row>
        <el-col :span="16">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
          </el-breadcrumb>
          <nuxt />
        </el-col>
        <el-col :span="8" id="main-con-right">
          <Admin />
          <Info />
          <Tags />
        </el-col>
      </el-row>
    </el-main>
    <el-footer>
      <v-footer></v-footer>
    </el-footer>
    <el-backtop></el-backtop>
  </el-container>
</template>
<script>
import VHeader from "../components/home/Header";
import VFooter from "../components/home/Footer";
import Admin from "../components/main/Admin";
import Info from "../components/main/Info";
import Tags from "../components/main/Tags";

export default {
  components: {
    VHeader,
    VFooter,
    Admin,
    Info,
    Tags
  }
};
</script>
<style>
html,
body {
  background-color: #f4f4f4;
}
.el-header {
  padding: 0;
  z-index: 999;
}
.header-nav {
  position: fixed;
  width: 100%;
}
.main-wrap {
  max-width: 85%;
  min-width: 1190px;
  margin: 0px auto;
}
.el-footer {
  padding: 0;
}
#main-con-right {
  position: relative;
}
.el-breadcrumb {
  margin: 0px 0 15px 0;
}
</style>
