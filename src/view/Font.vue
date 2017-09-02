<template>
  <div class="font read markdown-body">
    <h1 id="字体"><a class="header-link" href="#字体"></a>字体</h1>
    <p>字体的选择，要保证在不同的平台下都能有最佳的展示效果。</p>
    <p>字体是网页中最基本也是最重要的构成之一，用户通过字体理解网站想要传达的信息，是网站与人交互的重要输出手段。</p>
    <h2 id="字形"><a class="header-link" href="#字形"></a>字形</h2>
    <p>在字体的选择上，推荐使用以下规则，</p>
    <pre class="hljs"><code>{
  <span class="hljs-attribute">font-family</span>: -apple-system, BlinkMacSystemFont, <span class="hljs-string">"Segoe UI"</span>, Roboto,
    <span class="hljs-string">"Helvetica Neue"</span>, Helvetica, <span class="hljs-string">"PingFang SC"</span>, <span
        class="hljs-string">"Hiragino Sans GB"</span>, <span class="hljs-string">"Microsoft YaHei"</span>,
    SimSun, sans-serif;
}</code></pre>
    <h2 id="字号"><a class="header-link" href="#字号"></a>字号</h2>
    <p>字号的不同，决定了想要传达信息的重要性的不同。默认字体为<code>12px</code>或<code>14px</code>，
      对于中后台系统，选择<code>12px</code>可以保证在视觉上，系统比较精致。
      对于展示型的页面，选择<code>14px</code>大小的字体保障了可阅读性。</p>
    <h2 id="字体颜色"><a class="header-link" href="#字体颜色"></a>字体颜色</h2>
    <Row>
      <Col span="12">
        <p>字体颜色的选择一定要考虑字体所在背景的颜色，简单来说就是<code>浅背景深字体，深背景浅字体</code></p>
      </Col>
      <Col span="12" style="text-align: center;">
        <img src="http://git.cn-hangzhou.oss-cdn.aliyun-inc.com/uploads/yes/fact/85684007d9c9ed424d56b522f4d83d65/image.png" alt="img">
      </Col>
    </Row>
  </div>
</template>
<style lang="less">
  .read {
    font-size: 14px;
  }
</style>
