<!--
 * @Author: Pmy
 * @Date: 2021-05-16 09:59:33
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 16:12:41
-->
<template>
  <div class="title">首页</div>
</template>
<script lang="ts" setup>
import { reactive, onMounted } from "vue";
import { getHomeAllData } from "network/home";
const state = reactive({});
onMounted(() => {
  getHomeAllData().then((res) => {
    console.log(res);
  });
});
</script>
<style lang="less" scoped>
.title{
  font-size: 12px;
}
</style>
