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
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
      ]"
        >
          <el-input v-model="loginForm.email" class="emailInput"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
          :rules="[
          { required: true, message: '请输入密码', trigger: 'blur' },
        ]"
        >
          <el-input type="password" v-model="loginForm.pass" autocomplete="off" class="emailInput"></el-input>
        </el-form-item>
      </el-form>
      <div class="row">
        <!-- <nuxt-link to="/register"> -->
        <a href="/register" target="_blank">
          <el-link type="success" class="left">立即注册</el-link>
        </a>
        <!-- </nuxt-link> -->
        <!-- <nuxt-link to="/find-password"> -->
        <a href="/find-password" target="_blank">
          <el-link type="info" class="right">忘记密码？</el-link>
        </a>
        <!-- </nuxt-link> -->
      </div>
      <div class="row">
        <el-button type="primary" plain class="btn" @click="submitForm('loginForm')">登录</el-button>
      </div>
      <div class="row">
        <el-link type="info" @click="closeLogin">暂不登录</el-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// const myCanvas = () => import("~/components/canvasAnimation/canvas.vue");
import myCanvas from '~/components/canvasAnimation/canvas.vue';

export default {
  components: {
    myCanvas
  },

  methods: {
    // 关闭弹窗
    closeLogin() {
      this.$router.back();
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // 并且去数据库查询登录正确  跳转回页面
          axios
            .post("/api/login", {
              email: this.loginForm.email,
              password: this.loginForm.pass
            })
            .then(response => {
              const data = response.data;
              if (data.code === "ok") {
                // 用户登录成功
                this.$message({
                  message: "恭喜你，登录成功",
                  type: "success"
                });
                this.$router.push('/');
              } else {
                // 提示邮箱或密码错误
                this.$message.error(`${data.msg} 请重新输入或立即注册`);
              }
            });
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
