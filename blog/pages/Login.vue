<template>
  <div class="wrap">
    <div class="box">
      <div class="row">
        <el-input placeholder="请输入用户名/邮箱" v-model="input"></el-input>
      </div>
      <div class="row">
        <el-input placeholder="请输入密码" v-model="password" show-password></el-input>
      </div>
      <div class="row">
        <el-link type="success" class="left">立即注册</el-link>
        <el-link type="info" class="right">忘记密码？</el-link>
      </div>
      <div class="row">
        <el-button type="primary" plain class="btn">登录</el-button>
      </div>
      <div class="row">
        <nuxt-link to="/">暂不登录 返回首页</nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      password: ""
    };
  }
};
</script>
<style scoped>
.wrap {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.wrap .box {
  position: relative;
  width: 400px;
  height: 370px;
  box-sizing: border-box;
  padding: 30px;
  background-color: #fff;
  border-radius: 10px;
}
.wrap .box .row {
  margin: 15px;
}
.wrap .box .row a.nuxt-link-active{
  color:#909399;
  font-size:14px;
  float:right;
}
.wrap .box .row .left {
  margin-top: 20px;
}
.wrap .box .row .right {
  float: right;
  margin-top: 20px;
}
.wrap .box .row .btn {
  width: 100%;
  margin-top: 60px;
}
</style>