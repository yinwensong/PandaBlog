<template>
    <el-row>
        <el-col :span="16">
            <Article />
        </el-col>
        <el-col :span="8">
            <Admin />
        </el-col>
    </el-row>
</template>
<script>
import Article from '../Article.vue'
import Admin from '../Admin.vue'

export default {
  name: 'VMain',
  components: {
    Article,
    Admin
  }
}

</script>
<style scoped>

</style>
