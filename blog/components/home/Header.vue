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
            <el-menu-item class="search-btn">
              <i class="el-icon-search"></i>
            </el-menu-item>
            <el-menu-item index="2" id="search-input">
              <el-input v-model="searchInput" placeholder="请输入搜索内容"></el-input>
            </el-menu-item>
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-submenu index="2">
              <template slot="title">我的工作台</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
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
