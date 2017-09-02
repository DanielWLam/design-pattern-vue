<template>
  <div class="admin">
    <Row>
      <Col span="24">
        <div class="header shadow">
          FACT设计规范
        </div>
      </Col>
    </Row>
    <div class="content shadow">
      <Row>
        <Col span="3">
          <Menu active-name="welcome" width="auto">
            <router-link to="welcome">
              <MenuItem name="welcome">欢迎！</MenuItem>
            </router-link>
            <MenuGroup title="三大基石">
              <router-link to="font">
                <MenuItem name="font">
                  字体
                </MenuItem>
              </router-link>
              <router-link to="margin">
                <MenuItem name="margin">间距</MenuItem>
              </router-link>
              <router-link to="color">
                <MenuItem name="color">色彩</MenuItem>
              </router-link>
            </MenuGroup>
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
