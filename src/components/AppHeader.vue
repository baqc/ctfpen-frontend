<script setup>
import { NLayoutHeader,NButton,NButtonGroup,NDropdown,NIcon,NMenu } from "naive-ui";
import { h } from "vue";
import { BookOutline, MenuOutline } from "@vicons/ionicons5";
import renderIcon from "../utils/renderIcon";
import { RouterLink } from 'vue-router';

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
      to: '/'
    }, { default: () => '主页' }),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookOutline),
  },
  {
    label: "排行榜",
    key: "pinball-1973",
    icon: renderIcon(BookOutline),
    children: [
      {
        label: "鼠",
        key: "rat"
      }
    ]
  },
  {
    label: "Challenges",
    key: "a-wild-sheep-chase",
    icon: renderIcon(BookOutline),
  },
  {
    label: "资料库",
    key: "a-wild-sheep-chase",
    icon: renderIcon(BookOutline),
  },
  {
    label: "活动",
    key: "a-wild-sheep-chase",
    icon: renderIcon(BookOutline),
  },
];
</script>

<template>
  <n-layout-header bordered>
    <div class="navigation">
      <n-dropdown trigger="click" :options="dropdown_props" :show-arrow="true">
        <n-button text large class="menu_icon">
          <template #icon>
            <n-icon size="20">
              <menu-outline />
            </n-icon>
          </template>
        </n-button>
      </n-dropdown>

      <h3 class="title">CTF Pen</h3>
      <n-menu
        class="menu"
        mode="horizontal"
        dropdown-placement="top-start"
        v-model:dropdown-props="dropdown_props"
        v-model:options="menuOptions"
      ></n-menu>

      <div class="action">
        <n-button-group>
          <n-button color="#18a058">
            <template #icon>
              <n-icon>
                <book-outline />
              </n-icon>
            </template>
            登录
          </n-button>
          <n-button ghost color="#18a058" class="register-btn">
            <template #icon>
              <n-icon>
                <book-outline />
              </n-icon>
            </template>
            注册
          </n-button>
        </n-button-group>
      </div>
    </div>
  </n-layout-header>
</template>

<style scoped lang="scss">
.navigation {
  padding: 6px 12px;
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
@media screen and (max-width: $breakpoints-sm) {
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
