<template>
  <div class="table">
    <article class="markdown-body">
      <h1 id="文案">
        <a class="header-link" href="#文案"></a>文案</h1>
      <p>文案是用户与系统交互的重要桥梁，是两者沟通的基础。文案需要经过仔细地设计，准确、简洁的文案能让系统拥有更好的使用体验。</p>
      <h2 id="立足点">
        <a class="header-link" href="#立足点"></a>立足点</h2>
      <p>在平时的与人沟通的训练过程中，我们都知道，如果想让对方产生好感，应该多说你，少说我。<br>对于网页设计也是同样的原理，我们希望我们的网站能够带给用户亲切感，而不是一个冷冰冰的页面。 我们希望用户的关注点在于他们能用产品做什么，而不是产品在为他们做什么。
        <br>因此，在文案的设计上，</p>
      <ol class="list">
        <li>
          <code>多说你，少说我</code>；</li>
        <li>少说
          <code>您</code>，避免这类敬词拉远了产品与用户的关系；</li>
        <li>避免在同一个语句中混用【你】和【我】；</li>
        <li>鼓励用户，不要命令和强迫用户；</li>
        <li>表述不能过于绝对。</li>
      </ol>
      <h2 id="简练的语言">
        <a class="header-link" href="#简练的语言"></a>简练的语言</h2>
      <p>对于用户已经熟悉的内容，保持提示简洁，避免啰嗦；大多数的场景下，都不需要向用户说明全部的细节。</p>
      <h2 id="说人话">
        <a class="header-link" href="#说人话"></a>说人话</h2>
      <p>尽可能地使用用户熟悉的语言，词汇，适当地使用一些口头语，可以让系统更富有人性化。</p>
      <h2 id="主次分明">
        <a class="header-link" href="#主次分明"></a>主次分明</h2>
      <p>希望用户第一眼能看到的最重要的内容应该通过调整字号，颜色，排版等手段凸显出来。</p>
      <h2 id="大小写和标点符号">
        <a class="header-link" href="#大小写和标点符号"></a>大小写和标点符号</h2>
      <ol class="list">
        <li>产品名称用全程，首字母大写，如：
          <code>Broccoli</code>。产品缩写名用全大写，如
          <code>FACT</code>、
          <code>CMS</code>；</li>
        <li>专有名词使用官方的写法，如
          <code>iPhone</code>、
          <code>iOS</code>、
          <code>Android</code>等；</li>
        <li>普通英语语句，首字母大写</li>
        <li>统计数据使用阿拉伯数字，并做标准化，如
          <code>10,000,000</code>
        </li>
        <li>省略不必要的断句。 以下情况可以省略标点：
        </li>
        <li>标签</li>
        <li>标题</li>
        <li>输入框的提示</li>
        <li>悬停时的tooltiop提示</li>
        <li>表格中的句子</li>
      </ol>
      <h2 id="基本的标点规范">
        <a class="header-link" href="#基本的标点规范"></a>基本的标点规范</h2>
      <p>这里引用ant.design的标点规范，也即1995年中国标准出版社出版的
        <a href="http://www.gddx.gov.cn/jjxjyb/resource/cms/2016/05/2016051420583039892.pdf">《标点符号用法》</a>
      </p>
    </article>
    <div class="iview" style="margin-top: 16px;">
      <Table :data="data1" :columns="columns1">
      </Table>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      columns1: [
        {
          title: '标点符号',
          key: 'name'
        },
        {
          title: '字符',
          key: 'age'
        },
        {
          title: '用法',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '空格',
          age: ' ',
          address: '段落句子中的链接和文字之间增加空格； 全角字符和半角字符搭配时，需要添加空格，如：两个、2 个、50%。'
        },
        {
          name: '句号',
          age: '。',
          address: '以下情况中不使用句号：输入框下的提示；表格中的句子；句末为文字链（链接前使用句号）；按钮和标题。'
        },
        {
          name: '感叹号',
          age: '！',
          address: '只在需要表达强烈情感的情况下使用。'
        },
        {
          name: '连接号',
          age: '-',
          address: '不使用中文全角的连接号。如：2012-11-12。'
        },
        {
          name: '省略号',
          age: '...',
          address: '使用半角的『…』为省略号。'
        },
        {
          name: '星号',
          age: '*',
          address: '多用于替换显示隐私信息。'
        }
      ]
    }
  }
}
</script>

