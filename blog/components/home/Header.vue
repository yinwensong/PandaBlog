<template>
    <el-row class="header-nav">
      <el-col :span="6">
        <div class="grid-content bg-purple-light" id="header-left">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <el-avatar :src="img.url">
                <!-- 点击头像跳到~~ -->
                <a href="#"></a>
              </el-avatar>
            </el-menu-item>
            <el-menu-item index="1">
              <h2>Panda的博客</h2>
            </el-menu-item>
          </el-menu>
        </div>
      </el-col>
      <el-col :span="18">
        <div class="grid-content bg-purple-light" id="header-right">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="2">
              <nuxt-link to="login">
                <template v-if="login">
                  <i class="el-icon-user"></i>
                </template>
                <template v-else>登录</template>
              </nuxt-link>
            </el-menu-item>
            <el-menu-item class="search-btn">
              <i class="el-icon-search"></i>
            </el-menu-item>
            <el-menu-item index="1" id="search-input">
              <el-input v-model="searchInput" placeholder="请输入搜索内容"></el-input>
            </el-menu-item>
            <el-menu-item index="3">
              <nuxt-link to="messageBord">留言板</nuxt-link>
            </el-menu-item>
            <el-submenu index="4">
              <template slot="title">运维</template>
              <el-menu-item index="4-1">选项1</el-menu-item>
              <el-menu-item index="4-2">选项2</el-menu-item>
              <el-menu-item index="4-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">网络</template>
              <el-menu-item index="5-1">选项1</el-menu-item>
              <el-menu-item index="5-2">选项2</el-menu-item>
              <el-menu-item index="5-3">选项3</el-menu-item>
            </el-submenu>
            <el-submenu index="6">
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
            <el-menu-item index="8">
              <nuxt-link to="/">首页</nuxt-link>
              </el-menu-item>
          </el-menu>
        </div>
      </el-col>
    </el-row>
</template>
<script>
export default {
  name: 'VHeader',
  data () {
    return {
      searchInput: '',
      login:false,
      img: {
        url: require('~/static/images/panda.png')
      }
    }
  }
}
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
#header-left h2{
  margin:0;
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
