<template>
  <!--推荐用户列表-->
  <user-card-list :user-list="userList"/>
  <van-empty v-if="!userList || userList.length < 1" description="结果为空" />

</template>

<script setup lang="ts">
import { useRoute } from'vue-router'
import {onMounted, ref} from "vue";
import myAxios from "/src/plugins/myAxios.js";
import qs from 'qs';
import type {UserType} from "@/models/user";
import UserCardList from "@/components/UserCardList.vue";


const route = useRoute();
const { tags } = route.query;
const userList = ref([]);

onMounted( async () => {
  const userListData: UserType[] = await myAxios.get('/user/recommend', {
    params: {
      tagNameList: tags,
    },
    paramsSerializer: params => {
      return qs.stringify(params, {indices: false})
    }
  })
      .then(function (response) {
        // handle success
        console.log("/user/recommend succeed", response);
        return response.data;
      })
      .catch(function (error) {
        console.log("/user/recommend error", error);
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


</script>

<style scoped>

</style>