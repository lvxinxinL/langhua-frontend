<template>
  <template v-if="user">
    <van-cell title="当前用户" :value="user?.username" />
    <van-cell title="修改信息" is-link to="/user/update" />
    <van-cell title="我创建的队伍" is-link to="/user/team/create" />
    <van-cell title="我加入的队伍" is-link to="/user/team/join" />
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