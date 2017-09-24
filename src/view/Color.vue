<template>
  <div class="color">
    <article class="markdown-body">
      <h1 id="色彩">
        <a class="header-link" href="#色彩"></a>色彩</h1>
      <p>色彩是设计中的重要一环，正确地使用色彩，能有效地传达出网站的感情色彩，达到交互反馈，突出元素，信息传递的目的。<br>色彩的选择上，一般来说简洁一点比较好，太花哨的配色使人眼花缭乱，抓不到重点，简单来说有以下2点注意事项：</p>
      <ul class="list">
        <li>色彩应与产品定位相符，比如数据类网站，应该用冷色，保持客观等；</li>
        <li>颜色需要保持足够的对比度，让视障碍用户也能愉快地使用。</li>
      </ul>
      <h2 id="网站主色">
        <a class="header-link" href="#网站主色"></a>网站主色</h2>
      <p>根据网站定位和色彩的含义，选择一个主配色。界面用色，不建议超过3种（数据图表除外）。<br>不同的颜色代表了不同的感情色彩，一般来说：</p>
      <Row>
        <Col span="24">
          <ul class="list">
            <li>
              <color-box :color="'#f04134'"></color-box>
              红色：热情、警示
            </li>
            <li>
              <color-box :color="'#00a854'"></color-box>
              绿色：成功，通过，安全
            </li>
            <li>
              <color-box :color="'#108ee9'"></color-box>
              蓝色：专业，科技
            </li>
            <li><color-box :color="'#ffbf00'"></color-box>黄色：活力，警告</li>
            <li><color-box :color="'#f5317f'"></color-box>粉色：女性，典雅</li>
            <li><color-box :color="'#f56a00'"></color-box>橙色：温暖，活泼</li>
            <li><color-box :color="'#7265e6'"></color-box>紫色：高雅，浪漫</li>
            <li><color-box :color="'#00a2ae'"></color-box>青色：小清新</li>
            <li><color-box :color="'#bfbfbf'"></color-box>灰色：中性，不可用 </li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col span="12">
          <p>同时，颜色的深浅带来的感受也不一样，比较浅的颜色，给人感觉更清新。深色给人感觉沉稳但乏味。合理地选择颜色的深浅对网站整理艺术风格至关重要。</p>
        </Col>
        <Col span="12">
          <div style="text-align: center;">
            <color-box :color="'#ff6666'" style="display: inline-block;"></color-box>
            浅色
          </div>
          <div style="text-align: center;margin-top: 8px;">
            <color-box :color="'#f04134'" style="display: inline-block;"></color-box>
            深色
          </div>
        </Col>
      </Row>
      <h2 id="功能色">
        <a class="header-link" href="#功能色"></a>功能色</h2>
      <p>顾名思义，功能色是有功能作用的，比如红色通常表示不好的事情，需要提醒用户关注的事情；绿色表示成功，OK等。 有5种基本的功能色是通用的：
      </p>
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
      <h2 id="图表配色">
        <a class="header-link" href="#图表配色"></a>图表配色</h2>
      <p>图标配色其实并没有一个非常通用的一定好看的配色，因为这与网站的主色调有关系。但在参考了大量业界的方案后，这里可以给出一个供参考的配色方案：</p>
      <ul class="list">
        <li class="chart-color">
          <color-box :color="'#4990e2'" style="display: inline-block;"></color-box>
          <color-box :color="'#44b549'" style="display: inline-block;"></color-box>
          <color-box :color="'#eccb6c'" style="display: inline-block;"></color-box>
          <color-box :color="'#bd80a9'" style="display: inline-block;"></color-box>
          <color-box :color="'#da7036'" style="display: inline-block;"></color-box>
          <color-box :color="'#7ac5d8'" style="display: inline-block;"></color-box>
        </li>
      </ul>
      <p>另外，需要注意的是，以上配色对于一般的图表如：柱形图，折线图，饼图等比较适用。<br>在涉及热度，有渐变关系的图表时，推荐使用这种配色：</p>
      <ul class="list">
        <li class="chart-color">
          <img src="../assets/1-B29h3NSglI42HGhWZA-5Mg.png" alt="">
          <color-box :color="'#dcecc9'" style="display: inline-block;"></color-box>
          <color-box :color="'#8acdce'" style="display: inline-block;"></color-box>
          <color-box :color="'#62bed2'" style="display: inline-block;"></color-box>
          <color-box :color="'#46aace'" style="display: inline-block;"></color-box>
          <color-box :color="'#3d91be'" style="display: inline-block;"></color-box>
          <color-box :color="'#3577ae'" style="display: inline-block;"></color-box>
          <color-box :color="'#2d5e9e'" style="display: inline-block;"></color-box>
          <color-box :color="'#24448e'" style="display: inline-block;"></color-box>
          <color-box :color="'#1c2b7f'" style="display: inline-block;"></color-box>
        </li>
        <li class="chart-color">
          <img src="../assets/1-pH2QoOf47OqwtG9suWaRJw.png" alt="">
          <color-box :color="'#fded82'" style="display: inline-block;"></color-box>
          <color-box :color="'#fbdc68'" style="display: inline-block;"></color-box>
          <color-box :color="'#f5bc59'" style="display: inline-block;"></color-box>
          <color-box :color="'#ef9c49'" style="display: inline-block;"></color-box>
          <color-box :color="'#e97e3b'" style="display: inline-block;"></color-box>
          <color-box :color="'#e45e2d'" style="display: inline-block;"></color-box>
          <color-box :color="'#c04b29'" style="display: inline-block;"></color-box>
          <color-box :color="'#8a402b'" style="display: inline-block;"></color-box>
          <color-box :color="'#54362f'" style="display: inline-block;"></color-box>
        </li>
        <li class="chart-color">
          <img src="../assets/1--Vgr9hPpUU3PYtg_B4rd2g.png" alt="">
          <color-box :color="'#f8c7aa'" style="display: inline-block;"></color-box>
          <color-box :color="'#f19b9c'" style="display: inline-block;"></color-box>
          <color-box :color="'#ea708e'" style="display: inline-block;"></color-box>
          <color-box :color="'#d54d88'" style="display: inline-block;"></color-box>
          <color-box :color="'#a73b8f'" style="display: inline-block;"></color-box>
          <color-box :color="'#7a2995'" style="display: inline-block;"></color-box>
          <color-box :color="'#5b1f84'" style="display: inline-block;"></color-box>
          <color-box :color="'#451764'" style="display: inline-block;"></color-box>
          <color-box :color="'#300f45'" style="display: inline-block;"></color-box>
        </li>
      </ul>
      <p>这三种配色方案通过科学调配的渐变与对比度，在实际的应用效果也是棒棒哒。</p>
    </article>
  </div>
</template>
<script>
  import ColorBox from '../components/colorBox.vue'
  export default {
    components: {
      ColorBox
    }
  }
</script>
<style lang="less" scoped>
  .list {
    li {
      margin-bottom: 8px;
    }
  }
  .function-color {
    span {
      width: 55px;
      text-align: right;
      margin-right: 8px;
      display: inline-block;
    }
  }
  .chart-color {
    height: 58px;
    padding-top: 8px;
    display: inline-block;
    li {
      margin: 8px 0;
    }
  }
</style>
