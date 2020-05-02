<template>
  <div id="info">
    <el-row class="top-line">
      <el-col :span="8">
        <span class="name">{{ name }}</span>
        <span class="value">
            <i class="el-icon-edit"></i>
            {{ value }}</span>
      </el-col>
      <el-col :span="8">
        <span class="name">{{ name }}</span>
        <span class="value">
            <i class="el-icon-star-off"></i>
            {{ value }}</span>
      </el-col>
      <el-col :span="8">
        <span class="name">{{ name }}</span>
        <span class="value">
            <i class="el-icon-chat-line-square"></i>
            {{ value }}</span>
      </el-col>
    </el-row>
    <el-row class="second-line">
        <el-col :span="24">{{ desc }}</el-col>
    </el-row>
    <el-row class="third-line">
        <div class="title">精选文章</div>
        <el-col :span="24">
            <ul class="list">
                <li v-for="(item,index) in dataList" :key="index">
                    <a href="#">
                        <div class="img-border">
                            <img :src="item.img">
                        </div>
                        <div class="article-warp">
                            <h5>{{ item.title }}</h5>
                            <span>{{ item.con }}</span>
                        </div>
                    </a>
                </li>
            </ul>
        <div class="all">
            <a href="#">SEE ALL
            <i class="el-icon-arrow-right"></i>
            </a>
        </div>
        </el-col>
    </el-row>

  </div>
</template>
<script>
export default {
  name: 'Info',
  data () {
    return {
      name: 'statrs',
      value: 100,
      desc: 'dfhisferhobnfkfdjsfjdkfjlsdkfj;sdfaajfierohgreig方式哦lvfl',
      dataList: [{
        img: require('~/static/images/2.jpg'),
        title: '标题标题标题标题标题标题标题标标题标题标题标题标题标题标题标',
        con: '内容'
      }, {
        img: require('~/static/images/3.jpg'),
        title: 'dudududududu标题标题标题标题标题标题标题标题',
        con: '内容内容内容内容内容内容内容内容内容内容内容内容'
      }, {
        img: require('~/static/images/java.jpg'),
        title: 'dudududududu',
        con: '内容'
      }]
    }
  }
}
</script>
<style>
#info {
  position: relative;
  width: 80%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  margin-top: -45px;
  min-height: 300px;
  border: 1px solid #f2f2f2;
  border-radius: 15px;
}
#info .top-line .el-col {
  border-bottom: 1px solid #f2f2f2;
  border-right: 1px solid #f2f2f2;
  display:flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding:8px 0;
  text-align: center;
}
#info .top-line .el-col:last-child{
    border-right:none;
}
#info .top-line .el-col .name{
    font-size: 12px;
    color: #F73F52;
    font-weight: bolder;
    margin-bottom:5px;
}
#info .top-line .el-col .value{
    font-size: 18px;
    color: #666;
    font-weight: 800;
}
#info .second-line{
    padding: 10px 25px;
    color: #999;
    text-align: center;
    font-size: 14px;
    font-family: 'Raleway', sans-serif;
    font-style: oblique;
    word-break: break-all;
    overflow: auto;
    border-bottom: 1px solid #f2f2f2;
}
#info .third-line{
    padding:15px;
    min-height:200px;
}
#info .third-line .title{
    position: relative;
    font-size: 16px;
    font-weight: 800;
    text-transform: uppercase;
}
#info .third-line .title::after{
    position: absolute;
    left:0;
    bottom: -3px;
    display:block;
    content: '';
    width:30px;
    height:2px;
    background-color:#F73F52;
}
#info .third-line .list{
    padding:0;
    margin:6px 0 0 0;
}
#info .third-line .list li a{
    display:flex;
    align-items: center;
    text-decoration: none;
}
#info .third-line .list li {
    list-style: none;
    overflow: hidden;
    border-radius: 5px;
    margin-right: 5px;
    margin-bottom: 5px;
    position: relative;
    padding:5px;
    box-sizing: border-box;
}
#info .third-line .list .img-border{
    width: 60px;
    height: 60px;
    border: 1px solid #f2f2f2;
    padding:5px;
    box-sizing: border-box;
    display:flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    overflow: hidden;
    transition:border 0.5s ;
}
#info .third-line .list .img-border:hover{
    border: 1px solid #ccc;

}
#info .third-line .list li img {
    width:100%;
    height:100%;
    border: 1px solid #f2f2f2;
    border-radius: 5px;
}
#info .third-line .article-warp{
    margin-left:5px;
    max-height:47px;
    max-width:70%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
#info .third-line .article-warp h5{
    color: #333;
    margin: 0;
    width:100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    transition:color 0.5s ;
    font-size:14px;
    border-bottom:1px solid #f2f2f2;
}
#info .third-line .article-warp span{
    color: #aaaaaa;
    font-size:12px;
}
#info .third-line .article-warp h5:hover{
    color:#FC624D;
}

#info .third-line .all{
    text-align: center;
    padding: 5px;
    border-top: 1px solid #f2f2f2;
}
#info .third-line .all a{
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 1px;
    font-size: 12px;
    color: #FC624D;
    text-decoration: none;
}
</style>
