<script setup>
import {NButton, NDropdown, NIcon, NLayoutHeader, NMenu} from "naive-ui";
import {h, ref} from "vue";
import {
  BarChartOutline,
  BookOutline,
  FootstepsOutline,
  GridOutline,
  HomeOutline,
  MenuOutline
} from "@vicons/ionicons5";
import renderIcon from "../utils/renderIcon";
import {RouterLink} from 'vue-router';
import LoginModal from "../components/LoginModal.vue";
import router from "@/router";

const menuOptions = [
  {
    label: () => h(RouterLink, {
      to: {
        name: 'home'
      }
    }, {default: () => '主页'}),
    key: "home",
    icon: renderIcon(HomeOutline),
  },
  {
    label: "排行榜",
    key: "rank",
    icon: renderIcon(BarChartOutline),
    children: [
      {
        label: "TOP100",
        key: "rat"
      },
      {
        label: "解题榜",
        key: "rat2"
      },
      {
        label: "出题榜",
        key: "rat3"
      }
    ]
  },
  {
    label: "Challenges",
    key: "challenges",
    icon: renderIcon(FootstepsOutline),
    children: [
      {
        label: () => h(RouterLink, {
          to: {
            name: 'challenges'
          }
        }, {default: () => 'WEB'}),
        key: "WEB"
      },
      {

        label: () => h(RouterLink, {
          to: {
            name: 'challenges'
          }
        }, {default: () => 'Pwn'}),
        key: "Pwn"
      },
      {

        label: () => h(RouterLink, {
          to: {
            name: 'challenges'
          }
        }, {default: () => 'Reverse'}),
        key: "Reverse"
      },
      {

        label: () => h(RouterLink, {
          to: {
            name: 'challenges'
          }
        }, {default: () => 'Crypto'}),
        key: "Crypto"
      },
      {
        label: () => h(RouterLink, {
          to: {
            name: 'challenges'
          }
        }, {default: () => 'Misc'}),
        key: "Misc"
      }
    ]
  },
  {
    label: () => h(RouterLink, {
      to: {
        name: 'knowledge'
      }
    }, {default: () => '资料库'}),
    key: "knowledge",
    icon: renderIcon(GridOutline),
  },
    /* 这个不紧急 */
  // {
  //   label: "活动(测试工具)",
  //   key: "activity",
  //   icon: renderIcon(HappyOutline),
  // },
  {
    label: () => h(RouterLink, {
      to: {
        name: 'account'
      }
    }, {default: () => '用户中心'}),
    key: "account",
    icon: renderIcon(HomeOutline),
  },
];
const name = ref(router.currentRoute.value.name);
</script>

<template>
  <n-layout-header bordered>
    <div class="navigation">
      <div class="menu_icon">
        <n-dropdown
            :options="menuOptions"
            :show-arrow="true"
            size="huge"
            trigger="click"
        >
          <n-button large text>
            <template v-slot:icon>
              <n-icon size="26">
                <menu-outline/>
              </n-icon>
            </template>
          </n-button>
        </n-dropdown>
      </div>

      <h3 class="title">CTF Pen</h3>
      <n-menu
          v-model:options="menuOptions"
          v-model:value="name"
          class="menu"
          mode="horizontal"
      ></n-menu>

      <div class="action">
        <login-modal/>
        <n-button class="register-btn" color="#18a058" ghost>
          <template v-slot:icon>
            <n-icon>
              <book-outline/>
            </n-icon>
          </template>
          注册
        </n-button>
      </div>

    </div>
  </n-layout-header>
</template>

<style lang="scss" scoped>
.navigation {
  padding: 6px 11px;
  user-select: none;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.navigation .title {
  margin: 8px;
  text-align: left;
  flex: 1;
  justify-content: flex-start;
}

.navigation .menu {
  justify-content: center;
}

.navigation .action {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  line-height: 1.75;
  font-size: 14px;
  cursor: pointer;
}

.register-btn {
  margin-left: 4px;
}

@media screen and (max-width: $breakpoints-md) {
  .navigation .menu {
    display: none;
  }
  .navigation .menu_icon {
    margin-right: 14px;
  }
  .navigation .register-btn {
    display: none;
  }
}

@media screen and (min-width: $breakpoints-md) {
  .navigation .menu_icon {
    display: none;
  }
}
</style>
