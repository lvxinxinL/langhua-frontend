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
      name: 'home',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: TeamPage
    },
    {
      path: '/user',
      name: 'user',
      component: UserPage
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage
    },
    {
      path: '/user/update',
      name: 'update',
      component: UserUpdatePage
    },
    {
      path: '/user/edit',
      name: 'edit',
      component: UserEditPage
    },
    {
      path: '/user/list',
      name: 'searchUserList',
      component: SearchResultPage
    },
    {
      path: '/user/login',
      name: 'userLoginPage',
      component: UserLoginPage
    },
    {
      path: '/team/add',
      name: 'teamAddPage',
      component: TeamAddPage
    },
    {
      path: '/team/update',
      name: 'teamUpdatePage',
      component: TeamUpdatePage
    },
    {
      path: '/user/team/join',
      name: 'userTeamJoinPage',
      component: UserTeamJoinPage
    },
    {
      path: '/user/team/create',
      name: 'userTeamCreatePage',
      component: UserTeamCreatePage
    },
  ]
})

export default router
