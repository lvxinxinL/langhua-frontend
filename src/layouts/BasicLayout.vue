<template>

<!-- 顶部导航栏 -->
  <van-nav-bar title="标题" left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight">

    <template #right>
      <van-icon name="search" size="18" />
    </template>

  </van-nav-bar>

<!-- 底部标签栏 -->
  <van-tabbar v-model="active" @change="onChange">
    <van-tabbar-item name="index" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item name="team" icon="search">队伍</van-tabbar-item>
    <van-tabbar-item name="user" icon="user-o">个人</van-tabbar-item>
  </van-tabbar>

<!-- 主体组件测试 -->
  <div id="content">
    <template v-if="active === 'index'">
      <Index/>
    </template>
    <template v-if="active === 'team'">
      <Team/>
    </template>
  </div>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import {Toast} from "vant";
import Index from "@/pages/Index.vue";
import Team from "@/pages/Team.vue";
    const onClickLeft = () => alert("左");
    const onClickRight = () => alert("右");

    const active = ref('index');
    const onChange = (index) => Toast(`标签 ${index}`);

</script>

<style scoped>

</style>