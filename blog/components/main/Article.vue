<template>
  <el-row id="article">
    <el-col :span="24">
      <ul class="articleList">
        <li v-for="(temp, index) in articleList" :key="index">
          <a href = "#">
            <h3>
              <span>{{temp.title}}</span></h3>
            <p>{{temp.content}}</p>
            <div class="message">
              <!-- 发布时间 -->
              <span><i class="el-icon-date"></i>{{temp.time}}</span>
              <!-- 点赞数 -->
              <span><img :src="img.dianzan" />{{temp.like}}</span>
              <!-- 收藏数 -->
              <span><i class="el-icon-star-off"></i>{{temp.stars}}</span>
              <!-- 浏览数 -->
              <span><i class="el-icon-view"></i>{{temp.views}}</span>
              <!-- 评论数 -->
              <span><i class="el-icon-chat-dot-square"></i>{{temp.talk}}</span>
            </div>
          </a>
        </li>
      </ul>
      <div class="page">
        <el-pagination
          background
          layout="prev, pager, next"
          page-size="6"
          :total="pagesTotal">
        </el-pagination>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  data () {
    return {
      pagesTotal: 200,
      img: {
        dianzan: require('~/static/images/dianzan.svg'),
        zaning: require('~/static/images/zaning.svg')
      },
      articleList: [
        {
          title: 'Debugging CSS Grid Layouts With Firefox Grid Inspector Debugging CSS Grid Layouts With Firefox Grid Inspector',
          content: 'Lorem Lorem ipsum dolor sit amet, consecLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudtetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrudLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud中文中文',
          views: 100,
          stars: 20,
          like: 50,
          talk: 30,
          time: '2020-05-01'
        },
        {
          title: 'Debugging CSS Grid Layouts With Firefox Grid Inspector',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
          views: 100,
          stars: 20,
          like: 50,
          talk: 30,
          time: '2020-05-01'
        },
        {
          title: 'Debugging CSS Grid Layouts With Firefox Grid Inspector',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
          views: 100,
          stars: 20,
          like: 50,
          talk: 30,
          time: '2020-05-01'
        },
        {
          title: 'Debugging CSS Grid Layouts With Firefox Grid Inspector',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
          views: 100,
          stars: 20,
          like: 50,
          talk: 30,
          time: '2020-05-01'
        },
        {
          title: 'Debugging CSS Grid Layouts With Firefox Grid Inspector',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
          views: 100,
          stars: 20,
          like: 50,
          talk: 30,
          time: '2020-05-01'
        },
        {
          title: 'Debugging CSS Grid Layouts With Firefox Grid Inspector',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud',
          views: 100,
          stars: 20,
          like: 50,
          talk: 30,
          time: '2020-05-01'
        }
      ]
    }
  }
}
</script>
<style scoped>

#article .title {
  margin:0;
  color:#333;
}
#article ul li {
  border: 1px solid #b8b2b2;
  padding: 40px 40px 25px 40px;
}
#article ul li:hover{
  background-color:rgba(244,244,244,0.5);
}
#article ul li a h3{
  margin-top:0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height:33px;
}
#article ul li a h3 span{
  color:#333;
  padding-bottom:5px;
  border-bottom:3px solid #ddd;
}
#article ul li a p{
  color:#999;
  /* 多行溢出打点 */
  display: -webkit-box;
  overflow: hidden;
 -webkit-line-clamp: 3;
 -webkit-box-orient: vertical;
 margin:0px;
}
#article ul li a .message {
  color:#999;
  margin-top:20px;
}
#article ul li a .message span {
  margin-right:10px;
}
#article ul li a .message span i{
  margin-right:5px;
}
#article .more{
  float:right;
  margin-top:10px;
}
#article .page {
  position: relative;
  left:50%;
  transform: translateX(-50%);
  margin-top:15px;
  display: inline-block;
}

</style>
