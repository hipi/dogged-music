<template>
  <nav>
    <div class="nav-buttons">
      <button class="button-icon" @click="go('back')">
        <svg-icon name="arrow-left"></svg-icon>
      </button>
      <button class="button-icon" @click="go('forward')">
        <svg-icon name="arrow-right"></svg-icon>
      </button>
    </div>
    <div class="nav-links">
      <router-link to="/">首页</router-link>
      <router-link to="/explore">发现</router-link>
      <router-link to="/login">音乐库</router-link>
    </div>
    <div class="right-part">
      <div class="search-box">
        <div class="container" :class="{ active: inputFocus }">
          <svg-icon name="search"></svg-icon>
          <div class="input"><input :placeholder="inputFocus ? '' : '搜索'" @keydown.enter="doSearch" @focus="inputFocus = true" @blur="inputFocus = false" /></div>
        </div>
      </div>

      <div class="avatar-container">
        <img src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60" class="avatar" @click="handleOpenMenu" />
        <div ref="menu" class="menu" :style="menuStyle" @blur="handleCloseMenu">
          <div class="menu-item">
            <svg-icon name="login" />
            登录
          </div>
          <div class="menu-item">
            <svg-icon name="login" />
            登录
          </div>
          <div class="menu-item divided">
            <svg-icon name="login" />
            登录
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

export default {
  components: {},
  setup() {
    const $router = useRouter()
    // 路由跳转
    const go = (where) => {
      if (where === 'back') {
        $router.go(-1)
      } else {
        $router.go(1)
      }
    }
    // inputFocus
    const inputFocus = ref(false)

    // TODO: doSearch
    const doSearch = () => {}
    // TODO: handleDropdownItemClick

    const menuStyle = ref({})
    const menu = ref(null)
    const handleOpenMenu = (e) => {
      console.log(menu.value.offsetHeight)
      let top = e.y
      let left = e.x
      let largestHeight = window.innerHeight - menu.value.offsetHeight - 25
      let largestWidth = window.innerWidth - menu.value.offsetWidth - 25
      if (top > largestHeight) top = largestHeight
      if (left > largestWidth) left = largestWidth
      menuStyle.value = {
        top: top + 'px',
        left: left + 'px',
      }
    }
    const handleCloseMenu = () => {
      console.log(11111)
      menuStyle.value.display = 'none'
    }
    return {
      go,
      inputFocus,
      doSearch,
      handleOpenMenu,
      menuStyle,
      menu,
      handleCloseMenu,
    }
  },
}
</script>
<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 10vw;
  backdrop-filter: saturate(180%) blur(20px);
  background-color: var(--color-navbar-bg);
  position: relative;
  z-index: 99;
  .nav-buttons {
    flex: 1;
    display: flex;
    align-items: center;
    .button-icon {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px;
      background: transparent;
      margin: 4px;
      border-radius: 25%;
      transition: 0.2s;
      border: none;
      cursor: pointer;
      user-select: none;
      font-size: 24px;
      color: var(--color-text);
      &:first-child {
        margin-left: 0;
      }
      &:hover {
        background: var(--color-secondary-bg-for-transparent);
      }
    }
  }
  .nav-links {
    flex: 1;
    display: flex;
    justify-content: center;
    text-transform: uppercase;
    user-select: none;
    a {
      font-size: 18px;
      font-weight: 700;
      text-decoration: none;
      border-radius: 6px;
      padding: 6px 10px;
      color: var(--color-text);
      transition: 0.2s;
      -webkit-user-drag: none;
      margin-right: 12px;
      margin-left: 12px;
      &.router-link-active {
        color: var(--color-primary);
        transform: scale(0.92);
        transition: 0.2s;
      }
      &:hover {
        background: var(--color-secondary-bg-for-transparent);
      }
      &:active {
        transform: scale(0.92);
        transition: 0.2s;
      }
    }
  }
  .right-part {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .search-box {
      display: flex;
      justify-content: flex-end;
      -webkit-app-region: no-drag;
      .container {
        display: flex;
        align-items: center;
        height: 32px;
        background: var(--color-secondary-bg-for-transparent);
        border-radius: 8px;
        width: 200px;
        .svg-icon {
          height: 15px;
          width: 15px;
          color: var(--color-text);
          opacity: 0.28;
          margin-left: 8px;
          margin-right: 4px;
        }
        input {
          font-size: 16px;
          border: none;
          background: transparent;
          width: 96%;
          font-weight: 600;
          margin-top: -1px;
          color: var(--color-text);
        }
        &.active {
          background: var(--color-primary-bg-for-transparent);
          .svg-icon,
          input {
            opacity: 1;
            color: var(--color-primary);
          }
        }
      }
    }
    .avatar-container {
      margin-left: 12px;
      .avatar {
        user-select: none;
        height: 30px;
        vertical-align: -7px;
        border-radius: 50%;
        cursor: pointer;
        -webkit-app-region: no-drag;
        -webkit-user-drag: none;
      }
      .menu {
        position: fixed;
        min-width: 136px;
        max-width: 240px;
        background: rgba(255, 255, 255, 0.88);
        box-shadow: 0 6px 12px -4px rgba(0, 0, 0, 0.08);
        border: 1px solid rgba(0, 0, 0, 0.06);
        backdrop-filter: blur(12px);
        border-radius: 8px;
        box-sizing: border-box;
        padding: 6px;
        z-index: 1000;
        -webkit-app-region: no-drag;
        .menu-item {
          font-weight: 600;
          font-size: 14px;
          padding: 10px 14px;
          border-radius: 7px;
          color: var(--color-text);
          display: flex;
          align-items: center;
          cursor: pointer;
          &:hover {
            color: var(--color-primary);
            background: var(--color-primary-bg-for-transparent);
          }
          .svg-icon {
            height: 16px;
            width: 16px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}

[data-theme='dark'] nav .right-part .search-box .container.active {
  .svg-icon,
  input {
    color: var(--color-text) !important;
  }
}
</style>
