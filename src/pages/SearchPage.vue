<template>
  <form action="/">
    <van-search
        v-model="value"
        show-action
        placeholder="请输入要搜索的标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">已选标签</van-divider>

  <van-tag v-for="tag in activeIds" :show="true" closeable size="medium" type="primary">
    {{ tag }}
  </van-tag>

  <van-divider content-position="left">可选标签</van-divider>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tags"
  />

</template>


<script setup lang="ts">
import { ref } from 'vue';

const value = ref('');
const onSearch = (val) => alert(val);
const onCancel = () => alert('取消');

// 已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);
const tags = [
  {
    text: '性别',
    children: [
      { text: '男', id: 1 },
      { text: '女', id: 2 },
    ],
  },
  {
    text: '学习方向',
    children: [
      { text: 'Java', id: 4 },
      { text: 'C++', id: 5 },
      { text: 'Python', id: 6 },
    ],
  },
  { text: '福建', disabled: true },
];

</script>


<style scoped>

</style>