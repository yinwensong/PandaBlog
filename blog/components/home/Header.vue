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
            <el-popover placement="bottom" width="160" v-model="visible" @hide="unlogin()">
              <p>点击确定退出登录 是否要退出？</p>
              <div style="text-align: right; margin: 0">
                <el-button size="mini" type="text" @click="visible = false">取消</el-button>
                <el-button type="primary" size="mini" @click="visible = false">
                  <!-- <a href="/" style="color:#fff;">确定</a></el-button> -->
                  确定
                </el-button>
              </div>
              <el-button
                slot="reference"
                :class="{ hide: !login}"
                style="background:none; border:none; color:#ccc;"
              >
                <i class="el-icon-user model"></i>
              </el-button>
            </el-popover>

            <nuxt-link to="/login" :class="{ hide: login}">登录</nuxt-link>
          </el-menu-item>
          <el-menu-item index="admin" :route="{name:'admin'}" :class="{ hide: isAdmin  == false }">
            <nuxt-link to="/admin">管理员</nuxt-link>
          </el-menu-item>
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
            <nuxt-link to="/">首页</nuxt-link>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
  </el-row>
</template>
<script>
import Cookies from "js-cookie";
export default {
  name: "VHeader",
  data() {
    return {
      searchInput: "",
      img: {
        url: require("~/static/images/panda.png")
      },
      // 控制推出登录弹框
      visible: false
    };
  },
  computed: {
    login() {
      return this.$store.state.user.loginStatus;
    },
    isAdmin() {
      return this.$store.state.user.adminStatus;
    }
  },
  methods: {
    // 退出登录
    unlogin() {
      // 清空cookie 成功后刷新页面;
      console.log(Cookies.set("na", "value"));
      console.log(Cookies.get("na"));
      Cookies.remove("na");
      Cookies.remove("id");
      // console.log(this.$cookie.get('id'))
      // this.$router.push('/');
    }
  }
};
</script>
<style>
#header-right .el-menu--horizontal > .el-submenu,
#header-right .el-menu--horizontal > .el-menu-item {
  float: right;
}
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
.hide {
  position: relative;
  display: none;
  width: 0;
}
</style>
