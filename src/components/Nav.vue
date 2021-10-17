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
      <router-link to="/playlist/111">音乐库</router-link>
    </div>
    <div class="right-part">
      <div class="search-box">
        <div class="container">
          <svg aria-hidden="true" class="svg-icon">
            <use xlink:href="#icon-search" />
          </svg>
          <div class="input">
            <input placeholder="搜索" />
          </div>
        </div>
      </div>
      <img
        data-v-6e9e7e42
        src="http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60"
        class="avatar"
      />
    </div>
  </nav>
</template>
<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const $router = useRouter();
    const go = (where) => {
      if (where === "back") {
        $router.go(-1);
      } else {
        $router.go(1);
      }
    };
    return {
      go,
    };
  },
};
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
      &:last-child {
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
      }
    }
  }
  .right-part {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }
}
</style>
