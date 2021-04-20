<template>
  <div class="nav-menu-wrapper">
    <el-menu
      default-active="/main/my"
      class="nav-menu"
      mode="horizontal"
      :router="true"
      @select="handleSelect"
    >
      <el-submenu v-for="item in menuList" :key="item.name" :index="item.name">
        <template #title>
          <i :class="item.icon" />
          <span>{{ item.name }}</span>
        </template>
        <el-menu-item
          v-for="children in item.children"
          :key="children.name"
          :index="children.index"
          >
            <i :class="children.icon"></i>
            <span>{{ children.name }}</span>
          </el-menu-item
        >
      </el-submenu>
    </el-menu>
  </div>
  <div class="avatar-wrapper" ref="avatarWrapper" draggable="true" :style="{right: avatarWrapperStyles.right + 'px', bottom: avatarWrapperStyles.bottom + 'px'}">
    <el-avatar
      size="large"
      src="https://pic3.zhimg.com/v2-89b980f785a7d9dd1068fb9d171ed6cd_is.jpg"
      draggable="true"
    ></el-avatar>
    <div class="avatar-cursor"><i class="el-icon-caret-top" /></div>
  </div>
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import { CommonProps } from 'element-plus/lib/el-cascader-panel';
export default {
  data() {
    return {
      menuActiveIndex: "my",
      avatarWrapperStyles: {
        right: 40,
        bottom: 144
      },
      menuList: [
        {
          name: "我的",
          icon: "el-icon-user-solid",
          index: "my",
          children: [
            { name: "我的主页", index: "/main/my", icon: "el-icon-s-home" },
            { name: "用户中心", index: "/main/users", icon: "el-icon-s-custom" },
            { name: "设置中心", index: "/main/settings", icon: "el-icon-s-tools" },
          ],
        },
        {
          name: "社交",
          icon: "el-icon-s-platform",
          index: "social",
          children: [
            { name: "我的笔友", index: "main/friends", icon: "el-icon-s-comment" },
            { name: "笔圈动态", index: "main/activities", icon: "el-icon-camera-solid" },
            { name: "与我相关" },
            { name: "转笔地图", index: "main/map", icon: "el-icon-map-location" },
            { name: "转笔广场", index: "main/square", icon: "el-icon-microphone" },
          ],
        },
        {
          name: "内容",
          icon: "el-icon-document",
          index: "content",
          children: [
            { name: "全网转笔" },
            { name: "发现内容" },
            { name: "发布内容" },
            { name: "我的收藏" },
          ],
        },
        {
          name: "学习",
          icon: "el-icon-notebook-1",
          index: "learning",
          children: [
            { name: "课程中心" },
            { name: "我的课程" },
            { name: "发布课程" },
          ],
        },
      ],
    };
  },
  mounted(){
    this.$refs.avatarWrapper.addEventListener("dragend", (e) =>{
      const x = e.screenX;
      const y = e.screenY;
      this.avatarWrapperStyles.right = screen.width - x;
      this.avatarWrapperStyles.bottom = screen.height - y;
    });
    this.$refs.avatarWrapper.addEventListener("drag", (e) =>{
      const x = e.screenX;
      const y = e.screenY;
      this.avatarWrapperStyles.right = screen.width - x;
      this.avatarWrapperStyles.bottom = screen.height - y;
    })
    this.$refs.avatarWrapper.addEventListener("touchmove", (e) =>{
      const x = e.changedTouches[0].screenX;
      const y = e.changedTouches[0].screenY;
      this.avatarWrapperStyles.right = screen.width - x;
      this.avatarWrapperStyles.bottom = screen.height - y;
    })
  }
};
</script>

<style lang="less" scoped>
.content {
  height: 1200px;
  background-color: #f1f2f7;
  padding-top: 64px;
}
.nav-menu-wrapper {
  position: fixed;
  width: 100%;
}
.avatar-wrapper {
  position: fixed;
  right: 40px;
  bottom: 144px;
  .el-avatar {
    width: 64px;
    height: 64px;
    box-shadow: 2px 2px 13px #ccc;
    cursor: pointer;
  }
  .avatar-cursor {
    text-align: center;
  }
}
@media screen and (max-width: 720px) {
  .nav-menu-wrapper {
    bottom: 0;
  }
  .nav-menu-wrapper ::v-deep(.el-submenu__title) {
    padding: 0 10px;
  }
}
@media screen and (min-width: 721px) {
  .nav-menu-wrapper {
    top: 0;
  }
  .nav-menu-wrapper ::v-deep(.el-submenu__title) {
    padding: 0 20px;
  }
}
</style>