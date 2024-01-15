<template>
<!--搜索结果列表-->
  <van-card
      v-for="user in userList"
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://fastly.jsdelivr.net/npm/@vant/assets/ipad.jpeg"
  >
    <template #tags>
      <van-tag plain type="danger">标签</van-tag>
      <van-tag plain type="danger">标签</van-tag>
    </template>
    <template #footer>
      <van-button size="mini">按钮</van-button>
      <van-button size="mini">按钮</van-button>
    </template>
  </van-card>


</template>

<script setup lang="ts">
import { useRoute } from'vue-router'
import {ref} from "vue";
const route = useRoute();
console.log(route.query);

const { tags } = route.query;

const mockUser = {
  id: 1,
  username: "乐乐",
  userAccount: "Ghost",
  avatarUrl: "https://himg.bdimg.com/sys/portraitn/item/public.1.e137c1ac.yS1WqOXfSWEasOYJ2-0pvQ",
  gender: 0,
  phone: '18056743536',
  email: '20890470@qq.com',
  planetCode: '1234',
  tags: ['Java','大三','struggle','努力中','struggle','努力中'],
  createTime: new Date(),
}

const userList = ref([mockUser]);

</script>

<style scoped>

</style>