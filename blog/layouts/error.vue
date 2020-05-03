<template>
  <div class="errorPage">
    <div>
        <img :src="src"/>
        <h2>咦~~出错啦~</h2>
        <h2>Panda 提醒你~</h2>
        <h1 v-if="error.statusCode === 404">此页面不存在</h1>
        <h1 v-else>应用发生错误异常</h1>
        <nuxt-link to="/">返回首页</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
      return {
        src: require('~/static/images/error.jpg'),
      }
  },
  props: ['error'],
  // layout: 'blog' // 你可以为错误页面指定自定义的布局
}
</script>
<style scoped>
.errorPage{
    background-color:#f4f4f4;
    display:flex;
    justify-content: center;
    align-items: center;
}
.errorPage img{
    width:200px;
    height:200px
}
</style>