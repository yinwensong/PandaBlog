<template>
  <div id="tags">
    <el-row>
      <el-col :span="24">
        <div class="demo-image__placeholder">
          <div class="block">
            <el-image :src="img.url"></el-image>
          </div>
        </div>
        <div id="list" ref="list">
           <svg @mousemove='listener($event)'>
            <a href="#" v-for='(tag,index) in tags' :key="index">
                <text :x = 'tag.x' :y = 'tag.y' :font-size = '20 * (600/(600-tag.z))' fill="#fff" 
                :fill-opacity = '((400 + tag.z)/600)' >{{ tag.text }}</text>
            </a>
        </svg>
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
      width: 300,
      height: 300,
      img: {
        url: require('~/static/images/04.jpg')
      },
      tagsNum:20,
      tags: []
      // tags: ['web前端', 'java', 'linx', '数据库', '算法', 'fsdfsdf', 'fsdfdsfsd', 'fsfsdfsd', 'ffsdfsdfsd']
    }
  },
  mounted () {
    const w = this.$refs.list.offsetWidth
    this.svgW = w
    this.center = w / 2
    this.radius = w / 4
    console.log(this.svgW, this.center)
    const tags = []
    for(let i = 0; i < this.tagsNum; i++){
        const tag = {}
        const k = -1 + (2 * (i + 1) - 1) / this.tagsNum
        const a = Math.acos(k)
        const b = a * Math.sqrt(this.tagsNum * Math.PI)
        tag.text = i + 'tag'
        tag.x = this.center +  this.radius * Math.sin(a) * Math.cos(b)
        tag.y = this.center +  this.radius * Math.sin(a) * Math.sin(b)
        tag.z = this.center * Math.cos(a)
        tags.push(tag)
    }
    this.tags = tags
  },
  computed: {
    center () {
      return this.svgW / 2
    }
  },
  // created () {
  //     const tags = []
  //     for(let i = 0; i < this.tagsNum; i++){
  //         const tag = {}
  //         const k = -1 + (2 * (i + 1) - 1) / this.tagsNum
  //         const a = Math.acos(k)
  //         const b = a * Math.sqrt(this.tagsNum * Math.PI)
  //         tag.text = i + 'tag'
  //         tag.x = 200 +  200 * Math.sin(a) * Math.cos(b)
  //         tag.y = 200 +  200 * Math.sin(a) * Math.sin(b)
  //         tag.z = 200 * Math.cos(a)
  //         tags.push(tag)
  //     }
  //     this.tags = tags
  // },
  methods: {
    listener (event) {
      // console.log(event);
    }
  },
}
</script>
<style>
#tags {
  position: relative;
  margin-top: 50px;
}
#tags .el-image{
  display:block;
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
#tags #list li a{
  color:#fff;
}
svg{
  width:100%;
  height:100%;
}

</style>
