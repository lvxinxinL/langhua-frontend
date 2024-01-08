<template>
<!-- 顶部导航栏 -->
  <van-nav-bar title="标题" left-arrow
    @click-left="onClickLeft">
<!--    @click-right="onClickRight"-->

    <template #right>
      <router-link to="/search">
        <van-icon name="search" size="18" />
      </router-link>
    </template>

  </van-nav-bar>

<!-- 底部标签栏 -->
  <van-tabbar route> <!--v-model="active"-->
    <van-tabbar-item to="/" name="index" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item to="/team" name="team" icon="search">队伍</van-tabbar-item>
    <van-tabbar-item to="/user" name="user" icon="user-o">个人</van-tabbar-item>
  </van-tabbar>

<!-- 主体组件测试 -->
  <div id="content">
    <router-view></router-view>
  </div>
<!--  <router-link to="/">Go to Home</router-link>-->
<!--  <router-link to="/team">队伍</router-link>-->

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter();

const onClickLeft = () => {
  router.push('/');
};

    // const onClickRight = () => alert("右");

    // const active = ref('index');

</script>

<style scoped>

</style>