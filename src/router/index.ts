import { createRouter, createWebHistory } from 'vue-router'
import Index from "@/pages/Index.vue";
import TeamPage from "@/pages/TeamPage.vue";
import UserPage from "@/pages/UserPage.vue";
import SearchPage from "@/pages/SearchPage.vue";
import UserEditPage from "@/pages/UserEditPage.vue";
import SearchResultPage from "@/pages/SearchResultPage.vue";
import UserLoginPage from "@/pages/UserLoginPage.vue";
import TeamAddPage from "@/pages/TeamAddPage.vue";
import TeamUpdatePage from "@/pages/TeamUpdatePage.vue";
import UserTeamJoinPage from "@/pages/UserTeamJoinPage.vue";
import UserTeamCreatePage from "@/pages/UserTeamCreatePage.vue";
import UserUpdatePage from "@/pages/UserUpdatePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '主页',
      component: Index
    },
    {
      path: '/about',
      name: '关于',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/team',
      name: '队伍',
      component: TeamPage
    },
    {
      path: '/user',
      name: '个人信息',
      component: UserPage
    },
    {
      path: '/search',
      name: '搜索',
      component: SearchPage
    },
    {
      path: '/user/update',
      name: '修改信息',
      component: UserUpdatePage
    },
    {
      path: '/user/edit',
      name: '编辑',
      component: UserEditPage
    },
    {
      path: '/user/list',
      name: '伙伴列表',
      component: SearchResultPage
    },
    {
      path: '/user/login',
      name: '登录',
      component: UserLoginPage
    },
    {
      path: '/team/add',
      name: '创建队伍',
      component: TeamAddPage
    },
    {
      path: '/team/update',
      name: '更新队伍',
      component: TeamUpdatePage
    },
    {
      path: '/user/team/join',
      name: '我加入的队伍',
      component: UserTeamJoinPage
    },
    {
      path: '/user/team/create',
      name: '我创建的队伍',
      component: UserTeamCreatePage
    },
  ]
})

export default router

