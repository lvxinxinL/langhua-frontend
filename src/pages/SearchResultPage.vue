<template>
<!--搜索结果列表-->
  <van-card
      v-for="user in userList"
      :desc="user.profile"
      :title="`${user.username}(${user.planetCode})`"
      :thumb="user.avatarUrl"
  >
    <template #tags>
      <van-tag plain type="danger" v-for="tag in user.tags" style="margin-right: 5px; margin-top: 3px">
        {{ tag }}
      </van-tag>
    </template>
    <template #footer>
      <van-button size="small">联系我</van-button>
    </template>
  </van-card>
  <van-empty v-if="!userList || userList.length < 1" image="search" description="暂无符合要求的用户" />

</template>

<script setup lang="ts">
import { useRoute } from'vue-router'
import {onMounted, ref} from "vue";
import myAxios from "/src/plugins/myAxios.js";
import qs from 'qs';
import type {UserType} from "@/models/user";


const route = useRoute();
const { tags } = route.query;
const userList = ref([]);

onMounted( async () => {
  const userListData: UserType[] = await myAxios.get('/user/search/tags', {
    params: {
      tagNameList: tags,
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
    .then(function (response) {
      // handle success
      console.log("/user/search/tags succeed", response);
      return response.data?.data;
    })
    .catch(function (error) {
      console.log("/user/search/tags error", error);
    })
  if(userListData) {
    userListData.forEach(user => {
      if(user.tags) {
        user.tags = JSON.parse(user.tags);
      }
    });
    userList.value = userListData;
  }
})


// const mockUser = {
//   id: 1,
//   username: "乐小鑫",
//   userAccount: "Ghost",
//   avatarUrl: "https://himg.bdimg.com/sys/portraitn/item/public.1.e137c1ac.yS1WqOXfSWEasOYJ2-0pvQ",
//   gender: 0,
//   profile: '热爱编程的乐小鑫同学，目前大三，就读于湖南长沙中南大学，欢迎大家一起来交流！thanks~',
//   phone: '18056743536',
//   email: '20890470@qq.com',
//   planetCode: '1234',
//   tags: ['Java','大三','struggle','努力中','struggle','努力中'],
//   createTime: new Date(),
// }

</script>

<style scoped>

</style>