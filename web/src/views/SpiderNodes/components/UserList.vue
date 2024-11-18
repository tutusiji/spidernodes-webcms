<template>
  <el-card class="box-card">
    <template #header>
      <div class="card-header">
        <span>用户列表</span>
      </div>
    </template>
    <el-table :data="users" style="width: 100%">
      <el-table-column prop="username" label="用户名" width="180">
      </el-table-column>
      <el-table-column prop="location" label="位置" width="180">
      </el-table-column>
      <el-table-column prop="followers" label="粉丝数"> </el-table-column>
      <el-table-column prop="posts" label="发帖数"> </el-table-column>
      <el-table-column prop="lastActive" label="最后活跃时间">
        <template #default="scope">
          {{ new Date(scope.row.lastActive).toLocaleString() }}
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
defineProps({
  users: Array,
});
</script>
