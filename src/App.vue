<template>
  <div class="app-contaienr">
    <Nav />
    <main>
      <el-scrollbar>
        <router-view />
      </el-scrollbar>
    </main>
  </div>
</template>
<script setup>
import { ElScrollbar } from 'element-plus'
import Nav from './components/Nav.vue'
</script>
<style lang="scss" scoped>
main {
  position: fixed;
  top: 64px;
  right: 0;
  left: 0;
  bottom: 0;
}
.app-contaienr {
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
  }
}
</style>
