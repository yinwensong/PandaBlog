<template>
  <div class="wrapper" :style="{ backgroundImage: `url(${imgs.bg})` }">
      <div class="con">
        <el-avatar :src="imgs.url"></el-avatar>
        <h4>{{ name }}</h4>
        <h6>{{ desc }}</h6>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: 'Panda Change',
      desc: '@~hahah',
      imgs: {
        bg: require('~/static/images/1.jpg'),
        url: require('~/static/images/panda.png')
      }
    }
  }
}
</script>
<style scoped>
    .wrapper{
        width: 100%;
        height:250px;
        background-size:100% 100%;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center;
        align-items: center;
        color:#fff;
    }
    .con{
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .con .el-avatar{
        width:80px;
        height:80px;
        border:2px solid #fff;
    }
    .con h4 {
        margin:10px 0 0 0;
        font-size:18px;
    }
    .con h6 {
        margin:5px 0 0 0;
        font-size:12px;
        color:#ddd;
    }
</style>
