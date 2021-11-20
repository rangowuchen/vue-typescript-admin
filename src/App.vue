<!--
 * @Author: wuchen
 * @Date: 2021-11-16 14:39:23
 * @LastEditors: wuchen
 * @LastEditTime: 2021-11-20 14:50:31
 * @Description: 
 * @Email: rangowu@163.com
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {},
})
export default class App extends Vue {}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
