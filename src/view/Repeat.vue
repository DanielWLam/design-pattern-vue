<template>
  <article class="markdown-body">
    <h1 id="重复性原理">
      <a class="header-link" href="#重复性原理"></a>重复性原理</h1>
    <p>中小学语文学过一种修辞手法：
      <code>反复</code>，作用是强调某种意思，突出某种情感。套用到网页设计中，则是通过重复地使用某些元素，培养起用户的习惯，帮助用户识别出元素之间的关联性。</p>
    <h2 id="重复元素">
      <a class="header-link" href="#重复元素"></a>重复元素</h2>
    <ol class="list">
      <li>分割线
        <br>
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
      <li>功能色<br>
        <div class="function-color">
          <p>
            <span>success:</span>
            <color-box :color="'#00a854'" style="display: inline-block;"></color-box>
          </p>
          <p>
            <span>fail:</span>
            <color-box :color="'#f04134'" style="display: inline-block;"></color-box>
          </p>
          <p>
            <span>warning:</span>
            <color-box :color="'#ffbf00'" style="display: inline-block;"></color-box>
          </p>
          <p>
            <span>primary:</span>
            <color-box :color="'#108ee9'" style="display: inline-block;"></color-box>
          </p>
          <p>
            <span>info:</span>
            <color-box :color="'#bfbfbf'" style="display: inline-block;"></color-box>
          </p>
        </div>
      </li>
      <li>卡片<br>
        <Row>
          <Col :span="12">
          <card>
            <img src="../assets/57f855dd96955.jpg" alt="">
            <p style="margin: 16px 0;text-align: center;font-size: 12px;">图片卡片</p>
          </card>
          </Col>
        </Row>
      </li>
      <br>
      <li>某种格式等等</li>
    </ol>
  </article>
</template>
<script>
import ColorBox from '../components/colorBox.vue'
import Card from '../components/card.vue'
export default {
  components: {
    ColorBox,
    Card
  }
}
</script>
<style lang="less" scoped>
.example {
  background-color: #ececec;
  font-size: 12px;
  text-align: center;
}

.function-color {
  span {
    width: 55px;
    text-align: right;
    margin-right: 8px;
    display: inline-block;
  }
}
</style>
