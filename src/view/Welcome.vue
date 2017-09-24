<template>
  <div class="welcome">
    <Row :gutter="16" style="margin-bottom: 16px;">
      <Col span="12">
        <card>
          <a href="https://ant.design/docs/spec/introduce-cn" target="_blank" rel="noreferrer noopener">
            <div class="img-box">
              <img src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" alt="">
            </div>
          </a>
        </card>
      </Col>
      <Col span="12">
        <card>
          <a href="http://material.io/" target="_blank" rel="noreferrer noopener">
            <div class="img-box">
              <img style="padding: 16px;" src="https://material.io/static/images/hub/logo.svg" alt="">
            </div>
          </a>
        </card>
      </Col>
    </Row>
    <Row :gutter="16" style="margin-bottom: 16px;">
      <Col span="12">
      <card>
        <a href="https://fluent.microsoft.com/" target="_blank" rel="noreferrer noopener">
          <div class="img-box">
            <img src="https://fluent.microsoft.com/img/building-blocks/light.png" alt="">
          </div>
        </a>
      </card>
      </Col>
      <Col span="12">
      <card>
        <a href="https://developer.apple.com/macos/human-interface-guidelines/overview/themes/" target="_blank" rel="noreferrer noopener">
          <div class="img-box">
            <img style="padding: 32px;" src="https://developer.apple.com/macos/human-interface-guidelines/images/macOSHIG_Hero.svg" alt="">
          </div>
        </a>
      </card>
      </Col>
    </Row>
    <article class="markdown-body">
      <h1 id="fact-design">
        <a class="header-link" href="#fact-design"></a>FACT Design</h1>
      <p>本设计规范的定位是
        <code>集众所长</code>，通过对
        <a href="https://ant.design/docs/spec/introduce-cn">Ant Design</a>、
        <a href="http://material.io/">Material Design</a>、
        <a href="https://fluent.microsoft.com/">Fluent Design</a>、
        <a href="https://developer.apple.com/macos/human-interface-guidelines/overview/themes/">Apple人机交互指南</a>等业界大佬的设计规范进行学习，抽丝剥茧，取其精华，浓缩为本设计规范，用于为FACT等相关后台系统的设计风格提供参考。</p>
    </article>
  </div>
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
  .img-box {
    height: 200px;
    width: 100%;
    text-align: center;
    img {
      /*width: 100%;*/
      height: 100%;
    }
  }
</style>
