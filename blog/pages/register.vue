<template>
  <div class="wrap">
    <my-canvas></my-canvas>
    <div class="box">
      <el-form
        hide-required-asterisk = true
        :model="registerForm"
        :rules="rules"
        ref="registerForm"
        label-position="right"
        label-width="75px"
      >
        <el-form-item
          prop="name"
          label="用户名"
          :rules="[
      { required: true, message: '请输入用户名', trigger: 'blur' },
    ]"
        >
          <el-input v-model="registerForm.name" class="emailInput"></el-input>
        </el-form-item>
        <el-form-item
          prop="email"
          label="邮箱"
          :rules="[
      { required: true, message: '请输入邮箱地址', trigger: 'blur' },
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur','change'] }
    ]"
        >
          <el-input v-model="registerForm.email" class="emailInput"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input
            type="password"
            v-model="registerForm.pass"
            autocomplete="off"
            class="emailInput"
          ></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="checkPass">
          <el-input
            type="password"
            v-model="registerForm.checkPass"
            autocomplete="off"
            class="emailInput"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="row">
        <el-button type="primary" plain class="btn" @click="submitForm('registerForm')">立即注册</el-button>
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
import axios from "axios";

export default {
  components: {
    myCanvas
  },

  methods: {
    // 关闭弹窗
    closeLogin() {},

    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // alert("submit!");
          // 注册
          axios.post("/api/register", {
            username: this.registerForm.name,
            password: this.registerForm.pass,
            email:this.registerForm.email
          }).then((res)=>{
            console.log(res);
          });
        } else {
          alert("注册信息填写错误！");
          return false;
        }
      });
    }
  },
  data() {
    let validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.registerForm.checkPass !== "") {
          this.$refs.registerForm.validateField("checkPass");
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.registerForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      registerForm: {
        name: "",
        email: "",
        pass: "",
        checkPass: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "change" }]
      }
    };
  }
};
</script>

<style lang="css">
@import "~/assets/style/login.css";
</style>
