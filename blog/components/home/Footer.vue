<template>
      <el-col :span="24">
        <div class="grid-content bg-purple-light" id="header-right">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">处理中心</el-menu-item>
            <el-menu-item index="3">消息中心</el-menu-item>
            <el-menu-item index="4">订单管理</el-menu-item>
          </el-menu>
        </div>
      </el-col>
</template>
<script>
export default {
  name: 'VFooter'
}
</script>
<style>
