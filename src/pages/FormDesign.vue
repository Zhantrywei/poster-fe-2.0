<template>
  <div id="formdesign" class="formdesign clearfix main">
    <header>
      <img src="../assets/img/header-logo.png">
      <h2>表单设计</h2>        
    </header>
    <icon name="address-book"></icon>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
      <el-menu-item index="1" @click="changeTabsIndex(1)">
        <i class="el-icon-menu"></i>
        <span slot="title">背景</span>
      </el-menu-item>
      <el-menu-item index="2" @click="changeTabsIndex(2)">
        <i class="el-icon-edit"></i>
        <span slot="title">文本</span>
      </el-menu-item>
      <el-menu-item index="3" @click="changeTabsIndex(3)">
        <i class="el-icon-picture"></i>
        <span slot="title">图片</span>
      </el-menu-item>
      <el-submenu index="4">
         <template slot="title">
          <i class="el-icon-tickets"></i>
          <span slot="title">表单</span>
        </template>
        <!-- <el-menu-item-group>
          <span slot="title">常用表单</span>
          <el-menu-item index="4-1"  @click="changeTabsIndex(4)">单行文本框</el-menu-item>
        </el-menu-item-group> -->
        <el-menu-item-group title="基础表单控件">
          <el-menu-item index="4-1"  @click="changeTabsIndex(4)">单行文本框</el-menu-item>
          <el-menu-item index="4-2"  @click="changeTabsIndex(6)">多行文本框</el-menu-item>
          <el-menu-item index="4-5"  @click="changeTabsIndex(7)">单选框</el-menu-item>
          <el-menu-item index="4-6"  @click="changeTabsIndex(8)">多选框</el-menu-item>
          <el-menu-item index="4-7"  @click="changeTabsIndex(9)">下拉框</el-menu-item>
          <el-menu-item index="4-8"  @click="changeTabsIndex(10)">上传附件</el-menu-item>
          <el-menu-item index="4-4"  @click="changeTabsIndex(11)">提交按钮</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="5">
        <i class="el-icon-check"></i>
        <span slot="title">保存</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-delete"></i>
        <span slot="title">清空</span>
      </el-menu-item>
      <el-menu-item index="7">
        <i class="el-icon-view"></i>
        <span slot="title">预览</span>
      </el-menu-item>
    </el-menu>
    <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" class="tool-tabs">
      <el-tab-pane label="活动配置" name="first">活动配置</el-tab-pane>
      <el-tab-pane label="图层管理" name="third">图层管理</el-tab-pane>
      <el-tab-pane label="背景管理" name="second" v-if="tabIndex==1">背景管理</el-tab-pane>
      <el-tab-pane label="文本管理" name="second" v-if="tabIndex==2">文本管理</el-tab-pane>
      <el-tab-pane label="图片管理" name="second" v-if="tabIndex==3">图片管理</el-tab-pane>
      <el-tab-pane label="单行输入" name="second" v-if="tabIndex==4">单行输入</el-tab-pane>
      <el-tab-pane label="密码输入" name="second" v-if="tabIndex==5">密码输入</el-tab-pane>
      <el-tab-pane label="多行输入" name="second" v-if="tabIndex==6">多行输入</el-tab-pane>
      <el-tab-pane label="单选框" name="second" v-if="tabIndex==7">单选框</el-tab-pane>
      <el-tab-pane label="多选框" name="second" v-if="tabIndex==8">多选框</el-tab-pane>
      <el-tab-pane label="下拉框" name="second" v-if="tabIndex==9">下拉框</el-tab-pane>
      <el-tab-pane label="上传附件" name="second" v-if="tabIndex==10">上传附件</el-tab-pane>
      <el-tab-pane label="提交按钮" name="second" v-if="tabIndex==11">提交按钮</el-tab-pane>
    </el-tabs>
    <div class="preview">
      <div class="phone"></div>
    </div>
  </div>
</template>

<style scoped>
.formdesign {
  width: 100%;
  height: 100%;
  overflow-y: hidden;
}

.formdesign > header {
  width: 100%;
  height: 100px;
  background-color: #1bc7d5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
}
.formdesign > header > img {
  height: 74.67532467532468px;
}
.formdesign > header > h2 {
  font-size: 40px;
  font-weight: 200;
  /* color: #fd9821; */
  color: #fff;
  font-family: "微软雅黑";
}
.preview {
  /* float: left; */
  background-color: #eee;
  height: calc(100% - 100px);
  /* width: auto; */
  margin: 0 260px 0 65px;
  overflow-y: auto;
  /* display: flex; */
  flex-direction: row;
  justify-content: center;
  align-items: center;
} 
.phone {
  margin: 40px auto;
  width: 375px;
  height: 667px;
  background-color: #fff;
  border-left: 10px solid #ccc;
  border-right: 10px solid #ccc;
  border-top: 30px solid #ccc;
  border-bottom: 30px solid #ccc;
  border-radius: 30px;
  overflow-y: auto;
  /* background-image: url("../assets/img/BGimg.jpg"); */
  /* background-color: pink; */
  opacity: 0.5;
}
.tool-tabs {
  float: right;
  height: calc(100% - 100px);
  min-width: 260px;
}
</style>

<script>
export default {
  data() {
    return {
      isCollapse: true,
      activeName: "first",
      tabIndex: 1
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    changeTabsIndex(index){
      this.tabIndex = index;
      this.activeName = "second"
    }
  }
};
</script>

<style>
.el-menu-vertical-demo {
  /* width: 200px; */
  /* min-height: 400px; */
  height: calc(100% - 100px);
  float: left;
}
.el-tabs__nav {
  width: 100%;
}
.el-tabs__item {
  width: 34%;
  text-align: center;
}
</style>

