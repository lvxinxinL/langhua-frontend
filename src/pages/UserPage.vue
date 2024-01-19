<template>
  <template v-if="user">
    <van-cell title="昵称" is-link :value="user.username" @click="toEdit('username', '昵称',user.username)"/>
    <van-cell title="账户" :value="user.userAccount"/>
    <van-cell title="头像" :value="user.avatarUrl" @click="toEdit('avatarUrl', '头像',user.avatarUrl)">
      <img :src="user.avatarUrl"/>
    </van-cell>
    <van-cell title="性别" is-link :value="user.gender" @click="toEdit('gender', '性别',user.gender)"/>
    <van-cell title="手机号" is-link :value="user.phone" @click="toEdit('phone', '手机号',user.phone)"/>
    <van-cell title="邮箱" is-link :value="user.email" @click="toEdit('email', '邮箱',user.email)"/>
    <van-cell title="星球编号" :value="user.planetCode" />
    <van-cell title="标签信息" is-link :value="user.tags" @click="toEdit('tags', '标签信息',user.tags)" />
    <van-cell title="注册时间" :value="user.createTime" />
  </template>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import {onMounted, ref} from "vue";
import myAxios from "../plugins/myAxios";
import {getCurrentUser} from "@/services/user";

// const user = {
//     id: 1,
//     username: "Ghost",
//     userAccount: "Ghost",
//     avatarUrl: "https://himg.bdimg.com/sys/portraitn/item/public.1.e137c1ac.yS1WqOXfSWEasOYJ2-0pvQ",
//     gender: '男',
//     phone: '18056743536',
//     email: '20890470@qq.com',
//     planetCode: '1',
//     tags: 'Java,大三',
//     createTime: '2023-12-03 16:18:43',
// };

const user = ref();
const router = useRouter();

onMounted(async () => {
  user.value = await getCurrentUser();
})

const toEdit = (editKey: string, editName: string, currentValue: string) => {
  router.push({
    path: '/user/edit',
    query: {
      editKey,
      editName,
      currentValue,
    }
  })
}

</script>

<style scoped>

</style>