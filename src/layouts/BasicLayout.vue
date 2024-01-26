<template>
<!-- 顶部导航栏 -->
  <van-nav-bar
      :title="name" left-arrow
    @click-left="onClickLeft"
    @click-right="onClickRight">

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

</template>

<script setup lang="ts">
import {useRouter} from "vue-router";
import {ref} from "vue";
import routers from "@/router";

const router = useRouter();
const DEFAULT_TITLE = "浪花";
const name = ref(DEFAULT_TITLE);

/**
 * 根据路由切换标题
 */
router.beforeEach((to, from) => {
  const toPath = to.path;
  const route = routers.getRoutes().find((route) => {
    return toPath == route.path;
  })
  name.value = route?.name ?? DEFAULT_TITLE;
})

const onClickLeft = () => {
  router.back();
};

const onClickRight = () => {
  router.push('/search')
};


</script>

<style scoped>
#content {
  padding-bottom: 30px;
}
</style>