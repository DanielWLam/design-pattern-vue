<template>
  <article class="markdown-body">
    <h1 id="光与阴影">
      <a class="header-link" href="#光与阴影"></a>光与阴影</h1>
    <p>在Microsoft新提出的Fluent Design中，光和阴影是其中的两个重要构成。 </p>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/vcBGj4R7Fo0" frameborder="0" allowfullscreen></iframe>
    <p>控制好全局的阴影样式，等于确定了光从哪里来，一般来说，用户的使用场景中，光都是从上方来，配合恰当的阴影，可以打通虚拟和显示，营造良好的用户体验。
    </p>
    <p>
      推荐使用的阴影样式：
      <br>
      <pre class="hljs"><code>{
      <span class="hljs-attribute">box-shadow</span>: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08); 
      <span class="hljs-attribute">transition</span>: all 0.3s cubic-bezier(.25, .8, .25, 1);
      <span class="hljs-attribute">&:hover</span> { box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22); }
  }</code></pre>
    </p>
    <p>效果：</p>
    <Row>
        <Col :span="12">
        <card style="margin: 24px;">
          <img src="../assets/57f855dd96955.jpg" alt="">
          <p style="margin: 16px 0;text-align: center;font-size: 12px;">图片卡片</p>
        </card>
        </Col>
      </Row>
  </article>
</template>
<script>
  import Card from '../components/card.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      Card
    }
  }
</script>
