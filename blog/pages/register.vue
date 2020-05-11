<template>
  <div class="wrap">
    <my-canvas></my-canvas>
    <div class="box">
      <el-form
        hide-required-asterisk
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
      { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur'] }
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
        <!-- <nuxt-link to="/login"> -->
        <!-- <el-link type="info">返回登录页</el-link> -->
        <!-- </nuxt-link> -->
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import myCanvas from "~/components/canvasAnimation/canvas.vue";

export default {
  layout: "simple",
  head() {
    return {
      title: "注册帐户"
    };
  },
  created(){
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
          // 返回注册数据
          axios
            .post("/api/register", {
              username: this.registerForm.name,
              password: this.registerForm.pass,
              email: this.registerForm.email
            })
            .then(res => {
              // 弹窗提示邮箱激活或是错误信息
              if (res.data.code === "ok") {
                // 注册成功 弹窗去邮箱激活
                this.$alert("恭喜你！注册成功，请去邮箱激活", "激活帐号", {
                  confirmButtonText: "确定",
                  callback: action => {
                    console.log("去邮箱激活");
                    // this.$message({
                    //   type: "info",
                    //   message: `action: ${action}`
                    // });
                  }
                });
              } else {
                // 注册失败 提示弹窗错误信息
                this.$alert(
                  `很抱歉！${res.data.msg} 请更改错误信息`,
                  "错误提示",
                  {
                    confirmButtonText: "重新填写",
                    callback: action => {
                      console.log("重新填写错误信息");
                      // this.$message({
                      //   type: "info",
                      //   message: `action: ${action}`
                      // });
                    }
                  }
                );
              }
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
