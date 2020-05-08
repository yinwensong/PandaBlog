<template>
    <div>
    <p>管理员页面admin</p>
    <nuxt-link to="/admin">写文章</nuxt-link>
    <nuxt-link to="/admin/users">用户列表</nuxt-link>
    <nuxt-child />
    </div>
</template>

<script>
export default {
    name:'admin'
}
</script>