<template>
  <div class='color'>
    <div class='test'></div>
    <article class='markdown-body'>
      <h1 id='色彩'>
        <a class='header-link' href='#色彩'></a>色彩</h1>
      <p>色彩是设计中的重要一环，正确地使用色彩，能有效地传达出网站的感情色彩，达到交互反馈，突出元素，信息传递的目的。<br>色彩的选择上，一般来说简洁一点比较好，太花哨的配色使人眼花缭乱，抓不到重点，简单来说有以下2点注意事项：</p>
      <ul class='list'>
        <li>色彩应与产品定位相符，比如数据类网站，应该用冷色，保持客观等；</li>
        <li>颜色需要保持足够的对比度，让视障碍用户也能愉快地使用。</li>
      </ul>
      <h2 id='网站主色'>
        <a class='header-link' href='#网站主色'></a>网站主色</h2>
      <p>根据网站定位和色彩的含义，选择一个主配色。界面用色，不建议超过3种（数据图表除外）。<br>不同的颜色代表了不同的感情色彩，一般来说：</p>
      <template v-for='(item, index) in colorBoardData'>
        <Row :key='"name" + index' style='text-align: center;margin-top: 16px;margin-bottom: 16px;'>
          <Col span='24'> {{item.name}}
          </Col>
        </Row>
        <Row :key='"row" + index' :gutter='16'>
          <Col span='3' :key=cIndex v-for='(color, cIndex) in item.colors'>
            <color-box :color='color'></color-box>
          </Col>
        </Row>
      </template>
      <Row style="margin-top: 24px;" :gutter="16">
        <Col span='12'>
        <p>同时，颜色的深浅带来的感受也不一样，比较浅的颜色，给人感觉更清新。深色给人感觉沉稳但乏味。合理地选择颜色的深浅对网站整理艺术风格至关重要。</p>
        </Col>
        <Col span='12'>
        <div style='text-align: center;'>
          <color-box :color='"#ff6666"' style='display: inline-block;'></color-box>
          浅色
        </div>
        <div style='text-align: center;margin-top: 8px;'>
          <color-box :color='"#f04134"' style='display: inline-block;'></color-box>
          深色
        </div>
        </Col>
      </Row>
      <h2 id='功能色'>
        <a class='header-link' href='#功能色'></a>功能色</h2>
      <p>顾名思义，功能色是有功能作用的，比如红色通常表示不好的事情，需要提醒用户关注的事情；绿色表示成功，OK等。 有5种基本的功能色是通用的：
      </p>
      <div class='function-color'>
        <p>
          <span>success:</span>
          <color-box :noHover='true' :color='"#00a854"' style='display: inline-block; margin-top: 16px;'></color-box>
        </p>
        <p>
          <span>fail:</span>
          <color-box :noHover='true' :color='"#f04134"' style='display: inline-block;'></color-box>
        </p>
        <p>
          <span>warning:</span>
          <color-box :noHover='true' :color='"#ffbf00"' style='display: inline-block;'></color-box>
        </p>
        <p>
          <span>primary:</span>
          <color-box :noHover='true' :color='"#108ee9"' style='display: inline-block;'></color-box>
        </p>
        <p>
          <span>info:</span>
          <color-box :noHover='true' :color='"#bfbfbf"' style='display: inline-block;'></color-box>
        </p>
      </div>
      <h2 id='图表配色'>
        <a class='header-link' href='#图表配色'></a>图表配色</h2>
      <p>图标配色其实并没有一个非常通用的一定好看的配色，因为这与网站的主色调有关系。但在参考了大量业界的方案后，这里可以给出一个供参考的配色方案：</p>
      <Row :gutter="16">
        <Col :span="4"><color-box :color='"#4990e2"' style='float: left; margin-left: 8px;'></color-box></Col>
        <Col :span="4"><color-box :color='"#44b549"' style='float: left; margin-left: 8px;'></color-box></Col>
        <Col :span="4"><color-box :color='"#eccb6c"' style='float: left; margin-left: 8px;'></color-box></Col>
        <Col :span="4"><color-box :color='"#bd80a9"' style='float: left; margin-left: 8px;'></color-box></Col>
        <Col :span="4"><color-box :color='"#da7036"' style='float: left; margin-left: 8px;'></color-box></Col>
        <Col :span="4"><color-box :color='"#7ac5d8"' style='float: left; margin-left: 8px;'></color-box></Col>
      </Row>
      <p style='margin-top: 16px'>另外，需要注意的是，以上配色对于一般的图表如：柱形图，折线图，饼图等比较适用。尽管是图表配色，但最好不要超过6项数据，否则会让用户感到眼花缭乱。</p>
      <p style="margin-top: 16px">在涉及热度，有渐变关系的图表时，推荐使用这种配色：</p>
      <Row>
        <Col>
          <img src='../assets/1-B29h3NSglI42HGhWZA-5Mg.png' alt="">
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 16px;">
        <Col span="3"><color-box :color='"#dcecc9"'></color-box></Col>
        <Col span="3"><color-box :color='"#8acdce"'></color-box></Col>
        <Col span="3"><color-box :color='"#62bed2"'></color-box></Col>
        <Col span="3"><color-box :color='"#46aace"'></color-box></Col>
        <Col span="3"><color-box :color='"#3d91be"'></color-box></Col>
        <Col span="3"><color-box :color='"#3577ae"'></color-box></Col>
        <Col span="3"><color-box :color='"#2d5e9e"'></color-box></Col>
        <Col span="3"><color-box :color='"#24448e"'></color-box></Col>
      </Row>
      <Row style="margin-top: 20px">
        <Col>
          <img src='../assets/1--Vgr9hPpUU3PYtg_B4rd2g.png' alt="">
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 16px;">
        <Col span="3"><color-box :color='"#fded82"'></color-box></Col>
        <Col span="3"><color-box :color='"#fbdc68"'></color-box></Col>
        <Col span="3"><color-box :color='"#f5bc59"'></color-box></Col>
        <Col span="3"><color-box :color='"#ef9c49"'></color-box></Col>
        <Col span="3"><color-box :color='"#e97e3b"'></color-box></Col>
        <Col span="3"><color-box :color='"#e45e2d"'></color-box></Col>
        <Col span="3"><color-box :color='"#c04b29"'></color-box></Col>
        <Col span="3"><color-box :color='"#8a402b"'></color-box></Col>
      </Row>
      <Row style="margin-top: 16px;">
        <Col>
          <img src='../assets/1-pH2QoOf47OqwtG9suWaRJw.png' alt="">
        </Col>
      </Row>
      <Row :gutter="16" style="margin-top: 16px;">
        <Col span="3"><color-box :color='"#f8c7aa"'></color-box></Col>
        <Col span="3"><color-box :color='"#f19b9c"'></color-box></Col>
        <Col span="3"><color-box :color='"#ea708e"'></color-box></Col>
        <Col span="3"><color-box :color='"#d54d88"'></color-box></Col>
        <Col span="3"><color-box :color='"#a73b8f"'></color-box></Col>
        <Col span="3"><color-box :color='"#7a2995"'></color-box></Col>
        <Col span="3"><color-box :color='"#5b1f84"'></color-box></Col>
        <Col span="3"><color-box :color='"#451764"'></color-box></Col>
      </Row>
      <p style="margin-top: 16px">这三种配色方案通过科学调配的渐变与对比度，在实际的应用效果也是棒棒哒。</p>
    </article>
  </div>
</template>
<script>
import ColorBox from '../components/colorBox.vue'
export default {
  data() {
    return {
      colorBoardData: [
        {
          name: '红色：热情，告警，危险',
          colors: ['#fef0ef', '#fcdbd9', '#fabeb9', '#f79992', '#f46e65', '#F04134', '#d73435', '#bd2636']
        },
        {
          name: '绿色：成功，通过，安全',
          colors: ['#ebf8f2', '#cfefdf', '#a7e1c4', '#76d0a3', '#3dbd7d', '#00a854', '#00924c', '#007b43']
        },
        {
          name: '蓝色：专业，科技',
          colors: ['#ecf6fd', '#d2eafb', '#add8f7', '#7ec2f3', '#49a9ee', '#108ee9', '#0e77ca', '#0c60aa']
        },
        {
          name: '黄色：活力，警告',
          colors: ['#fffaeb', '#fff3cf', '#ffe9a7', '#ffdd76', '#ffce3d', '#ffbf00', '#e09a00', '#c17500']
        },
        {
          name: '粉色：女性，典雅',
          colors: ['#feeff5', '#fdd8e7', '#fcb8d3', '#fa90ba', '#f7629e', '#f5317f', '#dc277d', '#c11c7b']
        },
        {
          name: '橙色：温暖，活泼',
          colors: ['#fef3eb', '#fde3cf', '#fccca7', '#faaf76', '#f78e3d', '#F56A00', '#d75000', '#b93600']
        },
        {
          name: '紫色：高雅，浪漫',
          colors: ['#f4f3fd', '#e4e2fa', '#cfcaf6', '#b3acf2', '#948aec', '#7265E6', '#6252cd', '#533eb4']
        },
        {
          name: '青色：小清新',
          colors: ['#ebf8f9', '#cfedf0', '#a7dfe3', '#76cdd3', '#3db8c1', '#00A2AE', '#008997', '#00707f']
        },
        {
          name: '灰色：中性，不可用',
          colors: ['#fafafa', '#f3f3f3', '#e9e9e9', '#dddddd', '#cecece', '#bfbfbf', '#a6a6a6', '#8b8b8b']
        }
      ]
    }
  },
  components: {
    ColorBox
  }
}
</script>
<style lang='less' scoped>
@import '../assets/ant-color/colorPalette.less';
.list {
  li {
    margin-bottom: 8px;
  }
}

.function-color {
  span {
    width: 55px;
    text-align: left;
    margin-right: 8px;
    display: inline-block;
  }
}

.chart-color {
  padding-top: 8px;
  display: inline-block;
  li {
    margin: 8px 0;
  }
}

.inline-color {
  overflow: visible;
  .color-box {
    float: left;
    margin-left: 8px;
    margin-top: 8px;
  }
}
@blue-1: color(~`colorPalette('@{blue-6}', 1)`);
@blue-2: color(~`colorPalette('@{blue-6}', 2)`);
@blue-3: color(~`colorPalette('@{blue-6}', 3)`);
@blue-4: color(~`colorPalette('@{blue-6}', 4)`);
@blue-5: color(~`colorPalette('@{blue-6}', 5)`);
@blue-6: #bfbfbf;
@blue-7: color(~`colorPalette('@{blue-6}', 7)`);
@blue-8: color(~`colorPalette('@{blue-6}', 8)`);
.test {
  background-color: `'@{blue-1}'`, `'@{blue-2}'`, `'@{blue-3}'`, `'@{blue-4}'`, `'@{blue-5}'`, `'@{blue-6}'`, `'@{blue-7}'`, `'@{blue-8}'`;
  width: 60px;
  height: 60px;
}
</style>
