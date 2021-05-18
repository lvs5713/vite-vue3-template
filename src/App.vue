<!--
 * @Author: Pmy
 * @Date: 2021-05-16 09:43:15
 * @LastEditors: Pmy
 * @LastEditTime: 2021-05-16 11:41:44
-->
<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Button } from "vant";
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
}
</style>
