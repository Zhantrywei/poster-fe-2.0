<template>
  <div id="main" class="main clearfix">
    <header>
      <img src="../assets/img/header-logo.png">
      <h1>后台管理系统</h1>
    </header>
    <nav>
      <router-link :to="{name:'activity'}" tag="li" active-class="active"><i class="el-icon-setting"></i> 报名海报设置</router-link>
      <router-link :to="{name:'enroll'}" tag="li" active-class="active"><i class="el-icon-edit"></i> 活动报名详情</router-link>
    </nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow-y: auto;
}

.main > header {
  width: 100%;
  height: 100px;
  background-color: #1BC7D5;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
  padding: 0 50px;
}
.main > header > img {
  height: 74.67532467532468px;
}
.main > header > h1 {
  font-size: 50px;
  font-weight: 200;
  /* color: #fd9821; */
  color: #fff;
  font-family: '微软雅黑'
}
.main > nav{
  float: left;
  width: 200px;
  height: calc(100% - 100px);
  /* background-color: lightgreen; */
  background-color: #EFF2F4;
}

.main > nav > li {
  height: 40px;
  line-height: 40px;
  padding: 0 10px;
  box-sizing: border-box;
  cursor: pointer;
}

.main > main {
  float: right;
  width: calc(100% - 200px);
  height: calc(100% - 100px);
  /* background-color: lightcoral; */
  background-color: #FFFFFF;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;
}
</style>
<style>
.active {
  color: #489FFC;
  background-color:#ECF5FF;
}
</style>

