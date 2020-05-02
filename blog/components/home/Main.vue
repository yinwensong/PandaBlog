<template>
    <el-row>
        <el-col :span="16">
            <Article />
        </el-col>
        <el-col :span="8" id="main-con-right">
            <Admin />
            <Info />
            <Tags />
        </el-col>
    </el-row>
</template>
<script>
import Article from '../main/Article'
import Admin from '../main/Admin'
import Info from '../main/Info'
import Tags from '../main/Tags'

export default {
  name: 'VMain',
  components: {
    Article,
    Admin,
    Info,
    Tags
  }
}

</script>
<style scoped>
#main-con-right{
  position: relative;
}
</style>
