<template>
  <!--推荐用户列表-->
  <van-card
      v-for="user in props.userList"
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
</template>

<script setup lang="ts">
import type {UserType} from "@/models/user";

interface UserCardListProps {
  userList: UserType[];
}

const props = withDefaults(defineProps<UserCardListProps>(), {
  userList: [],
})

</script>

<style scoped>

</style>