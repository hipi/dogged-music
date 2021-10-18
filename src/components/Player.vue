<template>
  <div class="player">
    <div class="progress-bar">
      <el-slider v-model="player.process" class="progress" height="2px" tooltip-class="music-time"></el-slider>
    </div>
    <div class="controls">asd</div>
  </div>
</template>
<script setup>
import { ElSlider } from 'element-plus'
import { reactive } from 'vue'
const player = reactive({
  process: 0,
})
</script>
<style lang="scss" scoped>
.player {
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  backdrop-filter: saturate(180%) blur(30px);
  background-color: var(--color-navbar-bg);
  .progress-bar {
    .progress {
      --el-slider-height: 2px;
      --el-slider-button-size: 10px;
      --el-slider-button-wrapper-size: 10px;
      --el-slider-button-wrapper-offset: -11px;
      --el-slider-margin: -11px 0;
    }
  }
  .controls {
    padding: 0 var(--padding-left-width);
  }
}
</style>
