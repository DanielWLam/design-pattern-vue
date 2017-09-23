<template>
  <article class="markdown-body">
    <h1 id="相关性原则">
      <a class="header-link" href="#相关性原则"></a>相关性原则</h1>
    <p>顾名思义，越相关的事物，位置上，要越亲密，越像一个模块的内容；反之，距离要越远，越像多个模块。</p>
    <h2 id="常见的模块分隔手段">
      <a class="header-link" href="#常见的模块分隔手段"></a>常见的模块分隔手段</h2>
    <h3 id="纵向">
      <a class="header-link" href="#纵向"></a>纵向</h3>
    <ol class="list">
      <li>间距<br>通过在间距中介绍的方法，全站保持统一的间距设计，让元素与元素之间，按亲密关系分隔开。</li>
      <li>线<br> 有时候，单纯用间距不足以区分模块，这时候使用分割线也能达到很好的划分效果。<br> 结合在光与阴影一节中介绍的光的方向，推荐使用这样的双线：
        <pre class="hljs">
  <code>
    {
      <span class="hljs-attribute">height</span>: 2px;
      <span class="hljs-attribute">width</span>: 100%;
      <span class="hljs-attribute">background-color</span>: #dfdfdf;
      <span class="hljs-attribute">border-bottom</span>: 1px solid #ffffff;
      <span class="hljs-attribute">margin</span>: 24px 0;
    }
  </code>
    </pre>
        <p>实例：</p>
        <div class="example">
          <Row style="padding-top: 24px">
            <Col span="24">上半部分</Col>
          </Row>
          <div class="splitter"></div>
          <Row style="padding-bottom: 24px">
            <Col span="24">下半部分</Col>
          </Row>
        </div>
      </li>
    </ol>
    <h3 id="横向">
      <a class="header-link" href="#横向"></a>横向</h3>
    <p>横向上，使用24栏栅格系统可以满足大多数的需求，并保持网站的设计风格统一。</p>
    <div class="grid-area">
      <Row>
        <Col span="12">col-12</Col>
        <Col span="12">col-12</Col>
      </Row>
      <br>
      <Row>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
        <Col span="8">col-8</Col>
      </Row>
      <br>
      <Row>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
        <Col span="6">col-6</Col>
      </Row>
    </div>
  </article>
</template>
<style lang="less" scoped>
.example {
  background-color: #ececec;
  font-size: 12px;
  text-align: center;
}

.grid-area {
  margin-top: 16px;
  .ivu-row {
    background-color: #ffffff;
    height: 50px;
  }
  .ivu-col {
    background-color: rgba(16, 142, 233, 0.5);
    height: 50px;
    line-height: 50px;
    color: #ffffff;
    font-size: 12px;
    text-align: center;
  }
}
</style>
