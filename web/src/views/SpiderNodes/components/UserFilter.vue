<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>用户过滤</span>
      </div>
    </template>
    <el-form @submit.prevent="applyFilter">
      <el-form-item label="最小粉丝数">
        <el-input-number
          v-model="filters.minFollowers"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="活跃天数">
        <el-input-number
          v-model="filters.daysActive"
          :min="0"
        ></el-input-number>
      </el-form-item>
      <el-form-item label="最小发帖数">
        <el-input-number v-model="filters.minPosts" :min="0"></el-input-number>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="applyFilter">应用过滤</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { reactive } from "vue";

const filters = reactive({
  minFollowers: 0,
  daysActive: 0,
  minPosts: 0,
});

const emit = defineEmits(["filter"]);

function applyFilter() {
  emit("filter", { ...filters });
}
</script>
