<template>
  <div class="wrap">
    <my-canvas></my-canvas>
    <div class="box">
      <div class="close-btn" @click="closeLogin">
        <i class="el-icon-close"></i>
      </div>
      <el-form :model="loginForm" ref="loginForm" label-position="left" label-width="55px">
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur','change'] }
      ]"
        >
          <el-input v-model="loginForm.email" class="emailInput"></el-input>
        </el-form-item>
        <!-- <el-form-item
          label="密码"
          prop="pass"
          :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]"
        >
          <el-input type="password" v-model="loginForm.pass" autocomplete="off" class="emailInput"></el-input>
        </el-form-item>-->
      </el-form>
      <div class="row">
        <!-- <nuxt-link to="/register"> -->
        <!-- <el-link type="success" class="left">立即注册</el-link> -->
        <!-- </nuxt-link> -->
      </div>
      <div class="row">
        <el-button type="primary" plain class="btn" @click="submitForm('loginForm')">立即找回</el-button>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// const myCanvas = () => import("~/components/canvasAnimation/canvas.vue");
import myCanvas from "~/components/canvasAnimation/canvas.vue";

export default {
  layout: "simple",
  head() {
    return {
      title: "找回密码"
    };
  },
  components: {
    myCanvas
  },

  methods: {
    // 关闭弹窗
    closeLogin() {},
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 并且去数据库查询登录正确  跳转回页面
        } else {
          return false;
        }
      });
    }
  },
  data() {
    return {
      loginForm: {
        email: "",
        pass: ""
      }
    };
  }
};
</script>

<style lang="css">
@import "~/assets/style/login.css";
</style>
