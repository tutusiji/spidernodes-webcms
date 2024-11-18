<template>
  <el-container>
    <el-header>
      <h1>微博用户数据爬虫</h1>
    </el-header>
    <el-main>
      <el-row :gutter="20">
        <el-col :span="12">
          <crawler-form @crawl="performCrawl" />
        </el-col>
        <el-col :span="12">
          <user-filter @filter="filterUsers" />
        </el-col>
      </el-row>
      <user-list :users="users" />
    </el-main>
  </el-container>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import CrawlerForm from "./components/CrawlerForm.vue";
import UserFilter from "./components/UserFilter.vue";
import UserList from "./components/UserList.vue";

const users = ref([]);

async function performCrawl(keyword) {
  try {
    await axios.post("http://localhost:3000/api/crawl", { keyword });
    ElMessage.success("爬取完成");
  } catch (error) {
    console.error("爬取失败:", error);
    ElMessage.error("爬取失败");
  }
}

async function filterUsers(filters) {
  try {
    const response = await axios.get("http://localhost:3000/api/users", {
      params: filters,
    });
    users.value = response.data;
  } catch (error) {
    console.error("获取用户数据失败:", error);
    ElMessage.error("获取用户数据失败");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
