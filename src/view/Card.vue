<template>
  <article class="markdown-body">
    <h1 id="卡片式设计">
      <a class="header-link" href="#卡片式设计"></a>卡片式设计</h1>
    <p>卡片式设计这个概念其实是在Material Design中提出。具体来说，卡片是包含一组特定数据集的纸片，数据集含有各种相关信息，例如，关于单一主题的照片，文本，和链接。</p>
    <h2 id="用途">
      <a class="header-link" href="#用途"></a>用途</h2>
    <p>卡片是用来显示由不同种类对象组成的内容的便捷途径。它们也适用于展示尺寸或操作相当不同的相似对象，像带有不同长度标题的照片。 在后台系统中，卡片式设计非常适合用来做模块，把信息聚合在某个模块下。
    </p>
    <h2 id="特点">
      <a class="header-link" href="#特点"></a>特点</h2>
    <Row>
      <Col :span="12">
      <ol class="list">
        <li>轻薄 卡片的设计，在视觉上要让人觉得轻薄，不沉重
        </li>
        <li>阴影 要使用恰到好处的阴影，太虚的阴影缺乏质感。推荐使用：<br>
          <code>box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);</code>
        </li>
        <li>操作栏信息聚合 顶部预留title，在右边预留操作区域，一般情况下，最多显示3种更高频的操作，剩余的功能放在下拉菜单中
        </li>
        <li>响应式 宽高结合24栏的布局，实现响应式的卡片
        </li>
      </ol>
      </Col>
      <Col :span="12" style="text-align:center;" class="display-area">
      <Row>
        <Col :span="24">
        <card>
          <p style="margin-top: 16px">普通卡片</p>
        </card>
        </Col>
      </Row>
      <Row>
        <Col :span="24">
        <card>
          <img src="../assets/57f855dd96955.jpg" alt="">
          <p style="margin: 16px 0">图片卡片</p>
        </card>
        </Col>
      </Row>
      <Row>
        <Col :span="24">
        <card>
          <span slot="title">带标题的卡片</span>
          <p style="margin: 16px 0">带标题的卡片</p>
        </card>
        </Col>
      </Row>
      <Row>
        <Col :span="24">
        <card>
          <span slot="title">带标题和操作栏的卡片</span>
          <div slot="control-bar">
            <Tooltip content="移动" placement="top">
              <Icon type="arrow-move"></Icon>
            </Tooltip>
            <Tooltip content="关闭" placement="top">
              <Icon type="close-round"></Icon>
            </Tooltip>
            <Tooltip content="更多" placement="top">
              <div class="down-menu-btn">
                <Icon type="more" class="down-menu-btn"></Icon>
                <div slot="down-menu" class="down-menu" style="display: none;">
                </div>
              </div>
            </Tooltip>
          </div>
          <p style="margin: 16px 0;">带标题和操作栏的卡片</p>
        </card>
        </Col>
      </Row>
      </Col>
    </Row>
  </article>
</template>
<script>
import Card from '../components/card.vue'
export default {
  components: {
    Card
  }
}
</script>
<style lang="less" scoped>
.display-area {
  padding: 16px 0;
  .ivu-row {
    margin: 16px;
  }
}
</style>
