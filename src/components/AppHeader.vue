<script setup>
import {NButton, NButtonGroup, NDropdown, NIcon, NLayoutHeader, NMenu} from "naive-ui";
import {h} from "vue";
import {BookOutline, MenuOutline,BarChartOutline,HomeOutline,FootstepsOutline,GridOutline,HappyOutline} from "@vicons/ionicons5";
import renderIcon from "../utils/renderIcon";
import {RouterLink} from 'vue-router';
import LoginModal from "../components/LoginModal.vue";

const dropdown_props = [
  {
    label: '滨海湾金沙，新加坡',
    key: 'marina bay sands',
    disabled: true
  },
  {
    label: '布朗酒店，伦敦',
    key: "brown's hotel, london"
  },
  {
    label: '亚特兰蒂斯巴哈马，拿骚',
    key: 'atlantis nahamas, nassau'
  },
  {
    label: '比佛利山庄酒店，洛杉矶',
    key: 'the beverly hills hotel, los angeles'
  }
]

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
        label: "WEB",
        key: "WEB"
      },
      {
        label: "Pwn",
        key: "Pwn"
      },
      {
        label: "Reverse",
        key: "Reverse"
      },
      {
        label: "Crypto",
        key: "Crypto"
      },
      {
        label: "Misc",
        key: "Misc"
      }
    ]
  },
  {
    label: "资料库",
    key: "knowledge",
    icon: renderIcon(GridOutline),
  },
  {
    label: "活动",
    key: "activity",
    icon: renderIcon(HappyOutline),
  },
];
</script>

<template>
  <n-layout-header bordered>
    <div class="navigation">
      <div class="menu_icon">
        <n-dropdown :options="dropdown_props" :show-arrow="true" trigger="click">
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
          class="menu"
          mode="horizontal"
          value="home"
      ></n-menu>

      <div class="action">
        <n-button-group>
          <login-modal/>
          <n-button class="register-btn" color="#18a058" ghost>
            <template v-slot:icon>
              <n-icon>
                <book-outline/>
              </n-icon>
            </template>
            注册
          </n-button>
        </n-button-group>
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
