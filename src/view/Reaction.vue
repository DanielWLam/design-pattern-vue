<template>
  <article class="markdown-body">
    <h1 id="即时反应">
      <a class="header-link" href="#即时反应"></a>即时反应</h1>
    <p>用户在对系统做出操作后，要及时地给出反应。不能给出反应或者说不能交互的事物，不应该引起用户的注意，甚至点击。 反馈太少甚至没有反馈的系统，会让人觉得系统迟钝，生硬。
    </p>
    <h2 id="查询式反应">
      <a class="header-link" href="#查询式反应"></a>查询式反应</h2>
    <Row :gutter="16">
      <Col span="12">
      <p>在用户进行搜索等操作时，给出可能的匹配项</p>
      </Col>
      <Col span="12" class="display">
      <Row>
        <Col span="24">
        <card>
          <img src="https://os.alipayobjects.com/rmsportal/fgQfkNakHrUiAun.png" alt="">
        </card>
        <p>图片来自（Ant Design）</p>
        </Col>
      </Row>
      </Col>
    </Row>
    <h2 id="反馈型反应">
      <a class="header-link" href="#反馈型反应"></a>反馈型反应</h2>
    <div class="list">
      <Row :gutter="16">
        <Col span="12">1. 实时预览 在表单项中，要进行必要的数据校验，并及时给出反馈。解决错误的最好方法就是不让错误发生。
        </Col>
        <Col span="12" class="display">
        <Row>
          <Col span="24">
          <card>
            <img src="https://os.alipayobjects.com/rmsportal/jecYhRgfbHleGDJ.png" alt="">
          </card>
          <p>图片来自（Ant Design）</p>
          </Col>
        </Row>
        </Col>
      </Row>
      <Row :gutter="16">
        <Col span="12">2. 进度提示 在前后端通信过程中，由于网络的原因，有些操作需要一定的事件完成，这时要告知用户进度，让用户保持“知情权”，让他们安心。
        </Col>
        <Col span="12" class="display">
        <Row>
          <Col span="24">
          <card>
            <img src="https://os.alipayobjects.com/rmsportal/FBAZGqfeUnDlUtw.png" alt="">
          </card>
          <p>图片来自（Ant Design）</p>
          </Col>
        </Row>
        </Col>
      </Row>
    </div>
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
