<template>
  <div id="tags">
    <el-row>
      <el-col :span="24">
        <div class="demo-image__placeholder">
          <div class="block">
            <el-image :src="img.url"></el-image>
          </div>
        </div>
        <div id="list">
          <ul>
            <li v-for = "(item,index) in listData" :key="index">
              <a href="#">{{ item }}</a>
            </li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Tags',
  data () {
    return {
      img: {
        url: require('~/static/images/04.jpg')
      },
      listData: ['web前端', 'java', 'linx', '数据库', '算法', 'fsdfsdf', 'fsdfdsfsd', 'fsfsdfsd', 'ffsdfsdfsd']
    }
  }
}
</script>
<style>
#tags {
  position: relative;
  margin-top: 10px;
}
#tags #list{
  color:#fff;
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  display:flex;
  justify-content: center;
  align-items: center;
}
#tags #list ul {
  margin:0;
  padding:0;
}
#tags #list li{
  list-style: none;
  padding:0;

}
#tags #list li a{
  color:#fff;
  text-decoration: none;
}
</style>
