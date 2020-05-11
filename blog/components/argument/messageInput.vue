<template>
  <div>
    <div class="row">
      <el-input type="textarea" :rows="4" placeholder="说点什么吧~" v-model="textarea"></el-input>
    </div>
    <div class="row clear">
      <el-button type="primary" class="right" plain @click="say">畅言一下</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      textarea: ""
    };
  },
  methods: {
    say() {
      axios
        .post("/api/service/say", {
          content: this.textarea
        })
        .then(res => {
          if (res.data.code === "login") {
            this.$alert(`很抱歉！${res.data.msg} 请登录`, "错误提示", {
              confirmButtonText: "立即登录",
              callback: action => {
                this.$router.push("/login");
              }
            });
          }
        });
    }
  }
};
</script>
<style scoped>
.row {
  min-height: 70px;
}
.right {
  float: right;
  margin-top: 15px;
}
</style>