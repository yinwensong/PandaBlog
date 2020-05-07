<template>
  <div class="bord">
    <send-message></send-message>
    <el-divider></el-divider>
    <div class="row hot">
      <img :src="src.svg" />
      <span>最新评论</span>
      <span class="argument">{{ num }} 评论</span>
    </div>
    <div class="row">
        <message-list></message-list>
    </div>
  </div>
</template>
<script>

import SendMessage from "~/components/argument/messageInput.vue";
import MessageList from "~/components/argument/messageList.vue";

export default {
  components: {
    SendMessage,
    MessageList
  },
  data() {
    return {
      num: "100+",
      src: {
        svg: require("~/static/images/hot.svg")
      },
    
    };
  }
};
</script>

<style scoped>
.bord {
  width: 95%;
  min-height: calc(100vh - 140px);
  background-color: #fff;
  padding: 30px 40px 40px 40px;
  box-sizing: border-box;
}
.clear {
  min-height: 70px;
}
.bord .right {
  margin-top: 20px;
  float: right;
}
.row.hot img,
span {
  vertical-align: middle;
}
.row .argument {
  float: right;
  font-weight: bold;
}
.row.hot span {
  font-size: 14px;
  color: #666;
}
</style>
