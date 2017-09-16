<template>
  <div class="admin">
    <Row>
      <Col span="24">
        <div class="header shadow">
          <router-link :to="{name: 'index'}">FACT设计规范</router-link>
        </div>
      </Col>
    </Row>
    <div class="content shadow">
      <Row>
        <Col span="3">
          <Menu active-name="welcome" width="auto" :open-names="['threeBase', 'pattern']">
            <router-link :to="{name: 'welcome'}">
              <MenuItem name="welcome">欢迎！</MenuItem>
            </router-link>
            <Submenu name="threeBase">
              <template slot="title">
                <Icon type="ios-paper"></Icon>
                三大基石
              </template>
              <router-link :to="{name: 'font'}">
                <MenuItem name="font">
                  字体
                </MenuItem>
              </router-link>
              <router-link :to="{name: 'margin'}">
                <MenuItem name="margin">间距</MenuItem>
              </router-link>
              <router-link :to="{name: 'color'}">
                <MenuItem name="color">色彩</MenuItem>
              </router-link>
            </Submenu>
            <MenuItem name="layout">布局</MenuItem>
            <Submenu name="pattern">
              <template slot="title">
                设计原则
              </template>
              <MenuItem name="closeTheory">亲密性原理</MenuItem>
            </Submenu>
          </Menu>
        </Col>
        <Col span="21">
          <div class="main-content">
            <router-view></router-view>
          </div>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script></script>
<style lang="less" scoped>
  .header {
    height: 60px;
    background-color: #ffffff;
    color: #108ee9;
    line-height: 60px;
    padding: 0 24px;
    font-weight: 200;
    margin-bottom: 24px;
  }
  .content {
    padding: 24px;
    background-color: #ffffff;
    margin: 0 24px;
  }
  .main-content {
    padding: 0 24px;
  }
  .ivu-menu {
    a {
      color: #495060;
    }
  }
</style>
