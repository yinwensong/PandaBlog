<template>
  <div class="wrap">
    <my-canvas></my-canvas>
    <div class="box">
      <div class="row">
        <el-input placeholder="邮箱" v-model="input"></el-input>
      </div>
      <div class="row">
        <el-input placeholder="密码" v-model="password" show-password></el-input>
      </div>
      <div class="row">
        <el-input placeholder="再次确认密码" v-model="password" show-password></el-input>
      </div>
      <div class="row">
        <el-button type="primary" plain class="btn">立即注册</el-button>
      </div>
      <div class="row">
        <nuxt-link to="/login">
          <el-link type="info">返回登录页</el-link>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
const myCanvas = () => import("~/components/canvasAnimation/canvas.vue");

export default {
  components: {
    myCanvas
  },

  methods: {
    // 关闭弹窗
    closeLogin() {}
  },
  data() {
    return {
      input: "",
      password: ""
    };
  }
};
</script>

<style lang="css">
@import "~/assets/style/login.css";
</style>
