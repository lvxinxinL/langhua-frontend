<template>
  <van-cell title="昵称" is-link to="/user/edit" :value="user.username"/>
  <van-cell title="账户" :value="user.userAccount" />
  <van-cell title="头像" is-link to="/user/edit" :value="user.avatarUrl">
    <img :src="user.avatarUrl">
  </van-cell>>
  <van-cell title="性别" is-link to="/user/edit" :value="user.gender" />
  <van-cell title="手机号" is-link to="/user/edit" :value="user.phone" />
  <van-cell title="邮箱" is-link to="/user/edit" :value="user.email" />
  <van-cell title="星球编号" :value="user.planetCode" />
  <van-cell title="标签信息" is-link to="/user/edit" :value="user.tags" />
  <van-cell title="注册时间" :value="user.createTime" />

</template>

<script setup lang="ts">
const user = {
    id: 1,
    username: "Ghost",
    userAccount: "Ghost",
    avatarUrl: 'https://himg.bdimg.com/sys/portraitn/item/public.1.e137c1ac.yS1WqOXfSWEasOYJ2-0pvQ',
    gender: '男',
    phone: '18056743536',
    email: '20890470@qq.com',
    planetCode: '1',
    tags: 'Java,C++,大一',
    createTime: '2023-12-03 16:18:43',
};
</script>

<style scoped>

</style>