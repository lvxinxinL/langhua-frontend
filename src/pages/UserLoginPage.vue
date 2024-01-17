<template>
  <van-form @submit="onSubmit">
    <van-cell-group inset>
      <van-field
          v-model="userAccount"
          name="账户"
          label="账户"
          placeholder="账户"
          :rules="[{ required: true, message: '请填写账户' }]"
      />
      <van-field
          v-model="userPassword"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 16px;">
      <van-button round block type="primary" native-type="submit">
        提交
      </van-button>
    </div>
  </van-form>


</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import myAxios from "../plugins/myAxios";
// import {Toast} from "vant";
import 'vant/es/toast/style';

const router = useRouter();
const userAccount = ref('');
const userPassword = ref('');
const onSubmit = async (values) => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  })
  console.log(res, "用户登录");
  if (res.code === 0 && res.data) {
    router.replace("/");
  } else {
    Toast.fail("登录失败")
  }
};

</script>


<style scoped>

</style>