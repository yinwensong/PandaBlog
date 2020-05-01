<template>
  <div>
    <ul>
      <li v-for="(temp, index) in articleList" :key="index">
        <h3>{{temp.title}}</h3>
        <!--title-->
        <p>{{temp.content}}</p>
        <!--content-->
        <span>发布时间：{{temp.time}}&nbsp;&nbsp;浏览数：{{temp.views}}</span>
        <!--footer-->
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleList: [
        {
          title: 'test1',
          content: '我是一只大懒虫',
          views: 100,
          time: '2020-05-01 00:00:00'
        },
        {
          title: 'test1',
          content: '我是一只大懒虫',
          views: 100,
          time: '2020-05-01 00:00:00'
        },
        {
          title: 'test1',
          content: '我是一只大懒虫',
          views: 100,
          time: '2020-05-01 00:00:00'
        },
        {
          title: 'test1',
          content: '我是一只大懒虫',
          views: 100,
          time: '2020-05-01 00:00:00'
        }
      ]
    }
  }
}
</script>
