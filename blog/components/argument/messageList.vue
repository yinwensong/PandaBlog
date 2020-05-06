<template>
  <div class="list-row">
    <ul class="list">
      <li v-for="(item,index) in argumentsList" :key="index">
        <el-row>
          <el-col :span="2">
            <el-avatar shape="square" :size="50" :src="item.head"></el-avatar>
          </el-col>
          <el-col :span="14">
            <div class="name">{{ item.name }}</div>
            <div class="con">{{ item.con }}</div>
          </el-col>
          <el-col :span="8">
            <div class="time">{{ item.time }}</div>
            <div class="show">
              <div class="replay" @click="handle($event,index)">
                <template v-if="item.isShowReplay">取消回复</template>
                <template v-else>回复</template>
              </div>
              <div>
                <img :src="img.zan" />
                &nbsp;
                {{ item.good }}
              </div>
              <div>
                <img :src="img.cai" />
                {{ item.cai }}
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row v-if="item.isShowReplay">
          <div class="input-box">
            <MessageInput />
          </div>
        </el-row>
      </li>
    </ul>
    <div class="page">
      <el-pagination background layout="prev, pager, next" page-size="6" :total="pagesTotal"></el-pagination>
    </div>
  </div>
</template>
<script>
import MessageInput from "./messageInput";
export default {
  components: {
    MessageInput
  },
  data() {
    return {
      showReplay: false,
      pagesTotal: 200,
      img: {
        zan: require("~/static/images/dianzan.svg"),
        cai: require("~/static/images/cai.svg")
      },
      argumentsList: [
        {
          isShowReplay: false,
          head: require("~/static/images/head.jpg"),
          name: "aaa",
          time: "2020-05-06 15:09",
          con:
            "写的真好！果不使用 Nuxt.js 提供的 starter 模板，我们也果不使用 Nuxt.js 提供的 starter 模板，我们也可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示",
          good: "23",
          cai: "10"
        },
        {
          isShowReplay: false,
          head: require("~/static/images/head.jpg"),
          name: "aaa",
          time: "2020-05-06 15:09",
          con:
            "写的真好！果不使用 Nuxt.js 提供的 starter 模板，我们也果不使用 Nuxt.js 提供的 starter 模板，我们也可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示",
          good: "23",
          cai: "10"
        },
        {
          isShowReplay: false,
          head: require("~/static/images/head.jpg"),
          name: "aaa",
          time: "2020-05-06 15:09",
          con:
            "写的真好！果不使用 Nuxt.js 提供的 starter 模板，我们也果不使用 Nuxt.js 提供的 starter 模板，我们也可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示",
          good: "23",
          cai: "10"
        },
        {
          isShowReplay: false,
          head: require("~/static/images/head.jpg"),
          name: "aaa",
          time: "2020-05-06 15:09",
          con:
            "写的真好！果不使用 Nuxt.js 提供的 starter 模板，我们也果不使用 Nuxt.js 提供的 starter 模板，我们也可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示可以从头开始新建一个 Nuxt.js 应用项目，过程非常简单，只需要 1个文件和1个目录。如下所示",
          good: "23",
          cai: "10"
        },
        {
          isShowReplay: false,
          head: require("~/static/images/head.jpg"),
          name: "aaa",
          time: "2020-05-06 15:09",
          con: "写的真好！",
          good: "23",
          cai: "10"
        },
        {
          isShowReplay: false,
          head: require("~/static/images/head.jpg"),
          name: "aaa",
          time: "2020-05-06 15:09",
          con: "写的真好！",
          good: "23",
          cai: "10"
        }
      ]
    };
  },
  methods: {
    handle(e, i) {
      console.log(e, i);
      console.log(!this.argumentsList[i].isShowReplay);
      this.argumentsList[i].isShowReplay = !this.argumentsList[i].isShowReplay;
    }
  }
};
</script>
<style scoped>
.list-row li {
  position: relative;
  border: 1px solid #f5f5f5;
  margin-top: 15px;
  padding: 15px 10px;
  box-sizing: border-box;
  border-radius: 10px;
}
.list-row li .name {
  color: #666;
  font-size: 14px;
  margin: 5px;
}
.list-row li .con {
  display: -webkit-box;
  overflow: hidden;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  color: #333;
  font-size: 14px;
  line-height: 22px;
  margin: 5px 10px 10px 10px;
}
.list-row li .time {
  float: right;
  color: #666;
  font-size: 14px;
  margin: 5px;
}
.list-row li .show {
  position: absolute;
  bottom: 0px;
  right: 10px;
}
.list-row li .show div {
  display: inline-block;
  margin-left: 10px;
  height: 20px;
  vertical-align: middle;
}
.list-row li .show .replay {
  font-size: 13px;
  color: #666;
  line-height: 22px;
  cursor: pointer;
}
.list-row li .show div img {
  float: left;
  cursor: pointer;
}
.input-box {
  width: 90%;
  margin: 20px auto 0px;
}
.list-row .page{
  display:inline-block;
  position: relative;
  margin-top:40px;
  left:50%;
  transform: translateX(-50%);
}
</style>