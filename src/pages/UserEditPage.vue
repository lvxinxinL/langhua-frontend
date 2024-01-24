<template>

  <van-form @submit="onSubmit">
      <van-field
          v-model="editUser.currentValue"
          :name="editUser.editKey"
          :label="editUser.editName"
          :placeholder="`请输入${editUser.editName}`"
      />
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import myAxios from "../plugins/myAxios";
import {Toast} from "vant";
import router from "@/router";
import {getCurrentUser} from "@/services/user";
import {getCurrentUserState} from "@/states/user";

const route = useRoute();

const editUser = ref({
  editKey: route.query.editKey,
  editName: route.query.editName,
  currentValue: route.query.currentValue,
});

const onSubmit = async () => {
  const currentUser = await getCurrentUser();
  if (!currentUser) {
    console.log("用户未登录")
    return;
  }
  // 发送更新请求
  const res = await myAxios.post('/user/update', {
    'id': currentUser.id,
    [editUser.value.editKey as string]: editUser.value.currentValue,
  })
  if (res.code === 0 && res.data > 0) {
    router.back();
    console.log("修改成功！");
  } else {
    console.log("修改失败！");
  }
};


</script>


<style scoped>

</style>