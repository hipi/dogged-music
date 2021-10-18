<template>
  <div class="app-contaienr">
    <Nav />
    <main>
      <el-scrollbar>
        <section class="section">
          <router-view />
        </section>
      </el-scrollbar>
    </main>
    <Player />
  </div>
</template>
<script setup>
import { onMounted } from 'vue'
import { ElScrollbar } from 'element-plus'
import Nav from './components/Nav.vue'
import Player from './components/Player.vue'
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
    max-height: calc(100vh - 128px);
    flex: 1;
    .section {
      margin: 32px 0;
      padding: 0 var(--padding-left-width);
    }
  }
}
</style>
