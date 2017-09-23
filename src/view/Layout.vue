<template>
  <article class="markdown-body">
    <h1 id="布局">
      <a class="header-link" href="#布局"></a>布局</h1>
    <p>选好布局，是网站建设的第一步</p>
    <h2 id="常见布局">
      <a class="header-link" href="#常见布局"></a>常见布局</h2>
    <p>开门见山的说，常见的后台布局有以下几种：</p>
    <card class="layout-container">
      <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            导航一
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            导航二
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            导航三
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            导航四
            </MenuItem>
          </div>
        </Menu>
        <div class="layout-breadcrumb">
          <Breadcrumb>
            <BreadcrumbItem href="#">首页</BreadcrumbItem>
            <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
            <BreadcrumbItem>某应用</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div class="layout-content">
          内容区域
        </div>
      </div>
    </card>
    <card class="layout-container">
      <div class="layout">
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
            <Icon type="ios-navigate"></Icon>
            导航一
            </MenuItem>
            <MenuItem name="2">
            <Icon type="ios-keypad"></Icon>
            导航二
            </MenuItem>
            <MenuItem name="3">
            <Icon type="ios-analytics"></Icon>
            导航三
            </MenuItem>
            <MenuItem name="4">
            <Icon type="ios-paper"></Icon>
            导航四
            </MenuItem>
          </div>
        </Menu>
        <div class="layout-content">
          <Row>
            <Col span="5">
            <Menu active-name="1-2" width="auto" :open-names="['1']">
              <Submenu name="1">
                <template slot="title">
                  <Icon type="ios-navigate"></Icon>
                  子导航一
                </template>
                <MenuItem name="1-1">选项 1</MenuItem>
                <MenuItem name="1-2">选项 2</MenuItem>
                <MenuItem name="1-3">选项 3</MenuItem>
              </Submenu>
              <Submenu name="2">
                <template slot="title">
                  <Icon type="ios-keypad"></Icon>
                  子导航二
                </template>
                <MenuItem name="2-1">选项 1</MenuItem>
                <MenuItem name="2-2">选项 2</MenuItem>
              </Submenu>
              <Submenu name="3">
                <template slot="title">
                  <Icon type="ios-analytics"></Icon>
                  子导航三
                </template>
                <MenuItem name="3-1">选项 1</MenuItem>
                <MenuItem name="3-2">选项 2</MenuItem>
              </Submenu>
            </Menu>
            </Col>
            <Col span="19">
            <div class="layout-content-main">内容区域</div>
            </Col>
          </Row>
        </div>
      </div>
    </card>
    <card class="layout-container">
      <div class="layout">
        <Row type="flex">
          <Col span="5" class="layout-menu-left">
          <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
            <div class="layout-logo-left"></div>
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>
                导航一
              </template>
              <MenuItem name="1-1">选项 1</MenuItem>
              <MenuItem name="1-2">选项 2</MenuItem>
              <MenuItem name="1-3">选项 3</MenuItem>
            </Submenu>
            <Submenu name="2">
              <template slot="title">
                <Icon type="ios-keypad"></Icon>
                导航二
              </template>
              <MenuItem name="2-1">选项 1</MenuItem>
              <MenuItem name="2-2">选项 2</MenuItem>
            </Submenu>
            <Submenu name="3">
              <template slot="title">
                <Icon type="ios-analytics"></Icon>
                导航三
              </template>
              <MenuItem name="3-1">选项 1</MenuItem>
              <MenuItem name="3-2">选项 2</MenuItem>
            </Submenu>
          </Menu>
          </Col>
          <Col span="19">
          <div class="layout-header"></div>
          <div class="layout-breadcrumb">
            <Breadcrumb>
              <BreadcrumbItem href="#">首页</BreadcrumbItem>
              <BreadcrumbItem href="#">应用中心</BreadcrumbItem>
              <BreadcrumbItem>某应用</BreadcrumbItem>
            </Breadcrumb>
          </div>
          <div class="layout-content">
            <div class="layout-content-main">内容区域</div>
          </div>
          <div class="layout-copy">
            2011-2016 &copy; TalkingData
          </div>
          </Col>
        </Row>
      </div>
    </card>
    <h2 id="栅格系统">
      <a class="header-link" href="#栅格系统"></a>栅格系统</h2>
    目前ant.design、element等常用的UI框架都流行采用24栏的布局。简单来说，通过内置的
    <code>Row</code>、
    <code>Col</code>组件，<br>把一行分为24列，可以根据元素的需要，自由分配这24列。<br>但要注意，一行排列的元素最好不要超过4个，避免影响视觉上的舒适感。
    <div class="grid-area">
      <Row>
        <Col span="6"></Col>
        <Col span="6"></Col>
        <Col span="6"></Col>
        <Col span="6"></Col>
      </Row>
    </div>
  </article>
</template>
<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>
<style lang="less">
.layout-container {
  margin: 24px 0;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  ul {
    padding: 0;
  }
}

.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}

.layout-nav {
  width: 420px;
  margin: 0 auto;
}

.layout-assistant {
  width: 300px;
  margin: 0 auto;
  height: inherit;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
}

.layout-breadcrumb {
  padding: 10px 15px 0;
}

.layout-content {
  min-height: 200px;
  margin: 15px;
  overflow: hidden;
  background: #fff;
  border-radius: 4px;
}

.layout-content-main {
  padding: 10px;
}

.layout-copy {
  text-align: center;
  padding: 10px 0 20px;
  color: #9ea7b4;
}

.layout-menu-left {
  background: #464c5b;
}

.layout-header {
  height: 60px;
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .1);
}

.layout-logo-left {
  width: 90%;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  margin: 15px auto;
}
</style>
<style lang="less">
  .grid-area {
    .ivu-row {
      background-color: #4a4a4a;
      height: 50px;
    }
    .ivu-col {
      background-color: rgba(16, 142, 233, 0.5);
      height: 50px;
    }
  }
</style>
