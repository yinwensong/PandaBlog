<template>
    <el-row>
        <!-- <el-col :span="16"> -->
            <Article />
        <!-- </el-col> -->
        <el-col :span="8" id="main-con-right">
        </el-col>
    </el-row>
</template>
<script>

export default {
  name: 'VMain',
  components: {
    Article,
  }
}

</script>
<style scoped>
.el-main{
  background: #fff;
  min-height: calc(100vh - 150px);
  padding:35px;
}
</style>
