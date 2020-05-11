<template>
  <el-row class="header-nav">
    <el-col :span="6">
      <div class="grid-content bg-purple-light" id="header-left">
        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <el-avatar :src="img.url"></el-avatar>
          </el-menu-item>
          <el-menu-item index="panda-2">
            <h2>Panda的博客</h2>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :span="18">
      <div class="grid-content bg-purple-light" id="header-right">
        <el-menu
          :default-active="$route.name"
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="login" :route="{name:'login'}">
            <nuxt-link to="/login">
              <template v-if="login">
                <i class="el-icon-user"></i>
              </template>
              <template v-else>登录</template>
            </nuxt-link>
          </el-menu-item>
          <template v-if="isAdmin">
            <el-menu-item index="admin" :route="{name:'admin'}">
              <nuxt-link to="/admin">管理员</nuxt-link>
            </el-menu-item>
          </template>
          <el-menu-item class="search-btn">
            <i class="el-icon-search"></i>
          </el-menu-item>
          <el-menu-item index="1" id="search-input">
            <el-input v-model="searchInput" placeholder="请输入搜索内容"></el-input>
          </el-menu-item>
          <el-menu-item index="messageBord" :route="{name:'messageBord'}">
            <nuxt-link to="/messageBord">留言板</nuxt-link>
          </el-menu-item>
          <el-submenu index="4">
            <template slot="title">运维</template>
            <el-menu-item index="4-1">选项1</el-menu-item>
            <el-menu-item index="4-2">选项2</el-menu-item>
            <el-menu-item index="4-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="net">
            <template slot="title">网络</template>
            <el-menu-item index="5-1">选项1</el-menu-item>
            <el-menu-item index="5-2">选项2</el-menu-item>
            <el-menu-item index="5-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="web" :route="{name:'web'}">
            <template slot="title">前端</template>
            <el-menu-item index="6-1">选项1</el-menu-item>
            <el-menu-item index="6-2">选项2</el-menu-item>
            <el-menu-item index="6-3">选项3</el-menu-item>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">后端</template>
            <el-menu-item index="7-1">选项1</el-menu-item>
            <el-menu-item index="7-2">选项2</el-menu-item>
            <el-menu-item index="7-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="index" :route="{ name: 'index' }">
            <nuxt-link to="/">首页{{login}}</nuxt-link>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: "VHeader",
  data() {
    return {
      searchInput: "",
      login: this.$store.state.login.isLogin,
      isAdmin: true,
      img: {
        url: require("~/static/images/panda.png")
      }
    };
  }
};
</script>
<style>
#header-right .el-menu--horizontal > .el-submenu,
#header-right .el-menu--horizontal > .el-menu-item {
  float: right;
}
/* .el-header {
  position: fixed;
  top:0;
  left:0;
} */
.el-header,
.el-footer {
  padding: 0;
}
#header-left h2 {
  margin: 0;
}
#header-right .el-input__inner {
  height: 30px;
  line-height: 30px;
}
.el-menu--horizontal > .el-menu-item.search-btn {
  padding: 0;
  margin-right: 10px;
  height: 0px;
}
</style>
