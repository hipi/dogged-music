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
import { onMounted } from 'vue'
import { ElScrollbar } from 'element-plus'
import Nav from './components/Nav.vue'
import { changeAppearance } from '@/utils/util'
onMounted(() => {
  changeAppearance()
})
</script>
<style lang="scss" scoped>
.app-contaienr {
  height: 100vh;
  display: flex;
  flex-direction: column;
  main {
    flex: 1;
    max-height: calc(100vh - 64px);
  }
}
</style>
