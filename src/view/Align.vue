<template>
  <article class="markdown-body">
    <h1 id="对齐">
      <a class="header-link" href="#对齐"></a>对齐</h1>
    <p>Ant Design中说过：正如『格式塔学派』中的连续律（Law of Continuity）所描述的，在知觉过程中人们往往倾向于使知觉对象的直线继续成为直线，使曲线继续成为曲线。在界面设计中，将元素进行对齐，既符合用户的认知特性，也能引导视觉流向，让用户更流畅地接收信息。</p>
    <blockquote>
      <p>格式塔学派（德语：Gestalttheorie） ：是心理学重要流派之一，兴起于 20 世纪初的德国，又称为完形心理学；主张人脑的运作原理是整体的，『整体不同于其部件的总和』。 ——摘自『维基百科』
      </p>
    </blockquote>
    <h2 id="文案类对齐">
      <a class="header-link" href="#文案类对齐"></a>文案类对齐</h2>
      <Row>
        <Col span="12">
          <p>当某个模块中的文字比较松散时，需要定一个统一的视觉起点，一般是左对齐</p>
        </Col>
        <Col span="12" class="display">
          <Row :gutter="16">
            <Col span="12">
              <div class="correct">
                <card>
                  <img src="https://os.alipayobjects.com/rmsportal/xvmiAZAIxrEcqdP.png" alt="">
                </card>
                <p>推荐（图片来自Ant Design）</p>
              </div>
            </Col>
            <Col span="12">
              <div class="wrong">
                <card>
                  <img src="https://os.alipayobjects.com/rmsportal/qvycImsTiDGVgLJ.png" alt="">
                </card>
                <p>不推荐（图片来自Ant Design）</p>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    <h2 id="表单类对齐">
      <a class="header-link" href="#表单类对齐"></a>表单类对齐</h2>
      <Row :gutter="16">
        <Col span="12">
          <p>表单设计中经常会出现如右图所示的表单项，通过冒号对齐（右对齐）能使内容锁定在一定的范围内，保证右边的输入项整齐，是界面看上去更美观，对于用户来说，也能提升阅读速度和录入速度。</p>
        </Col>
        <Col span="12"  class="display">
          <Row>
            <Col span="24">
              <card>
                <img src="https://os.alipayobjects.com/rmsportal/DmEbaUsrpJkRyUh.png" alt="">
              </card>
              <p>图片来自（Ant Design）</p>
            </Col>
          </Row>
        </Col>
      </Row>
    <h2 id="数字类对齐">
      <a class="header-link" href="#数字类对齐"></a>数字类对齐</h2>
      <Row>
        <Col span="12">
          <p>通常数字需要比较，建议全局设置数字的有效位数为2位小数，并右对齐</p>
        </Col>
        <Col span="12" class="display">
          <Row :gutter="16">
            <Col span="12">
              <div class="correct">
                <card>
                  <img src="https://os.alipayobjects.com/rmsportal/hCSQTEmahFyQcWk.png" alt="">
                </card>
                <p>推荐（图片来自Ant Design）</p>
              </div>
            </Col>
            <Col span="12">
              <div class="wrong">
                <card>
                  <img src="https://os.alipayobjects.com/rmsportal/FDjScmPlWFPxkxL.png" alt="">
                </card>
                <p>不推荐（图片来自Ant Design）</p>
              </div>
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
  .display.ivu-col {
    p {
      text-align: center;
      font-size: 12px;
      margin-top: 8px;
    }
  }
  .correct {
    p {
      border-top: 5px solid #108ee9;
      text-align: center;
      font-size: 12px;
    }
  }
  .wrong {
    p {
      border-top: 5px solid #f04134;
      text-align: center;
      font-size: 12px;
    }
  }
</style>
