<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>爬虫控制</span>
      </div>
    </template>
    <el-form @submit.prevent="crawl">
      <el-form-item label="关键词">
        <el-input v-model="keyword" placeholder="输入关键词"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="crawl" :loading="loading"
          >开始爬取</el-button
        >
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from "vue";

const keyword = ref("");
const loading = ref(false);
const emit = defineEmits(["crawl"]);

function crawl() {
  if (keyword.value.trim()) {
    loading.value = true;
    emit("crawl", keyword.value);
    setTimeout(() => {
      loading.value = false;
      keyword.value = "";
    }, 2000);
  }
}
</script>
