<template>
  <form action="/">
    <van-search
        v-model="searchText"
        show-action
        placeholder="请输入要搜索的标签"
        @search="onSearch"
        @cancel="onCancel"
    />
  </form>

  <van-divider content-position="left">已选标签</van-divider>
  <div v-if="activeIds.length===0">请选择标签</div>
  <van-space wrap>
    <van-tag v-for="tag in activeIds" :show="true" closeable size="medium" type="primary" @close="doClose(tag)">
      {{ tag }}
    </van-tag>
  </van-space>
  <van-divider content-position="left">可选标签</van-divider>

  <van-tree-select
      v-model:active-id="activeIds"
      v-model:main-active-index="activeIndex"
      :items="tagList"
  />

</template>


<script setup lang="ts">
import { ref } from 'vue';

const searchText = ref('');

/**
 * 标签列表（从后端获取）
 */
const originalTagList = [
  {
    text: '性别',
    children: [
      { text: '男', id: '男' },
      { text: '女', id: '女' },
    ],
  },
  {
    text: '学习方向',
    children: [
      { text: 'Java', id: 'Java' },
      { text: 'C++', id: 'C++' },
      { text: 'Python', id: 'Python' },
    ],
  },
  {
    text: '本科生',
    children: [
      { text: '大一', id: '大一' },
      { text: '大二', id: '大二' },
      { text: '大三', id: '大三' },
      { text: '大四', id: '大四' },
    ],
  },
  {
    text: '研究生',
    children: [
      { text: '研一', id: '研一' },
      { text: '研二', id: '研二' },
    ],
  },
];

let tagList = ref(originalTagList);

/**
 * 搜索标签过滤
 * @param val
 */
const onSearch = (val) => {
  tagList.value = originalTagList.map(parentTag => {
    const tempChildren = [...parentTag.children];
    const tempParentTag = {...parentTag};
    tempParentTag.children = tempChildren.filter(item => item.text.includes(searchText.value));
    return tempParentTag;
  });
};

/**
 * 取消搜索
 */
const onCancel = () => {
  searchText.value='';
  tagList.value=originalTagList;
};

// 已选中的标签
const activeIds = ref([]);
const activeIndex = ref(0);


/**
 * 关闭标签
 * @param tag 要关闭的标签 id
 */
const doClose = (tag) => {
  activeIds.value = activeIds.value.filter(item => {
    return item !== tag;
  })
}

</script>


<style scoped>

</style>