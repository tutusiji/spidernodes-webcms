<template>
  <div class="user-list">
    <el-container>
      <el-header>
        <h1>微博用户数据</h1>
      </el-header>

      <el-main>
        <el-form :inline="true" label-width="100px">
          <el-form-item label="关键词">
            <el-input
              v-model="filters.keyword"
              placeholder="输入关键词"
            ></el-input>
          </el-form-item>
          <el-form-item label="粉丝数最少">
            <el-input
              v-model="filters.minFollowers"
              placeholder="输入最少粉丝数"
              type="number"
            ></el-input>
          </el-form-item>
          <el-form-item label="粉丝数最多">
            <el-input
              v-model="filters.maxFollowers"
              placeholder="输入最多粉丝数"
              type="number"
            ></el-input>
          </el-form-item>
          <el-form-item label="地区">
            <el-input
              v-model="filters.location"
              placeholder="输入地区"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="filterUsers">过滤</el-button>
          </el-form-item>
        </el-form>

        <el-table :data="users" stripe style="width: 100%; margin-top: 20px">
          <el-table-column
            prop="userName"
            label="用户名"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="location"
            label="地区"
            width="180"
          ></el-table-column>
          <el-table-column
            prop="followersCount"
            label="粉丝数"
            width="120"
          ></el-table-column>
          <el-table-column prop="postTime" label="发帖时间" width="200">
            <template #default="scope">
              <span>{{ new Date(scope.row.postTime).toLocaleString() }}</span>
            </template>
          </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const users = ref([]);
const filters = ref({
  keyword: "",
  minFollowers: "",
  maxFollowers: "",
  location: "",
});

const fetchUsers = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/users");
    users.value = response.data;
  } catch (error) {
    console.error("无法获取用户数据:", error);
  }
};

const filterUsers = async () => {
  try {
    const params = {
      keyword: filters.value.keyword,
      minFollowers: filters.value.minFollowers,
      maxFollowers: filters.value.maxFollowers,
      location: filters.value.location,
    };
    const response = await axios.get("http://localhost:3000/api/users/filter", {
      params,
    });
    users.value = response.data;
  } catch (error) {
    console.error("无法过滤用户数据:", error);
  }
};

onMounted(fetchUsers);
</script>

<style scoped>
.user-list {
  padding: 20px;
}
</style>
