<template>
  <div class="nav-menu-wrapper">
    <el-menu
      :default-active="activeIndex"
      class="nav-menu"
      mode="horizontal"
      :router="true"
      @select="handleSelect"
    >
      <el-menu-item
        v-for="item in menuList"
        :key="item.index"
        :index="item.index"
      >
        <i :class="item.icon" />
        <span>{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
  <div class="avatar-wrapper">
    <el-avatar
      size="large"
      src="https://pic3.zhimg.com/v2-89b980f785a7d9dd1068fb9d171ed6cd_is.jpg"
    ></el-avatar>
    <div class="avatar-cursor"><i class="el-icon-caret-top" /></div>
  </div>
  <div class="content">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuList: [
        { name: "我的", index: "/main/my", icon: "el-icon-user-solid" },
        {
          name: "社交",
          index: "main/social",
          icon: "el-icon-s-platform",
        },
        {
          name: "内容",
          index: "main/content",
          icon: "el-icon-document",
        },
        {
          name: "学习",
          index: "main/learning",
          icon: "el-icon-notebook-1",
        },
      ],
    };
  },
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
  padding: 0 10px;
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
</style>