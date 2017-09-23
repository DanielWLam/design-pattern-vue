<template>
  <article class="markdown-body">
    <h1 id="对话框"><a class="header-link" href="#对话框"></a>对话框</h1>
    <p>对话框在网页设计中也是比较常见的一种交互手段，通常用来：</p>
    <ol class="list">
      <li>提示用户现在发生了什么，比如提交失败；</li>
      <li>在重要事项上让用户谨慎做出决定；</li>
      <li>需要用户填写内容等</li>
    </ol>
    <h2 id="构成"><a class="header-link" href="#构成"></a>构成</h2>
    <ol class="list">
      <li>头部标题</li>
      <li>内容</li>
      <li>底部操作栏</li>
    </ol>
    <h2 id="头部title"><a class="header-link" href="#头部title"></a>头部title</h2>
    <p>只有需要用户填写信息的form表单，需要添加title，来告诉用户现在在干嘛，其他的提示，可以不加，保持提示的简洁。</p>
    <h2 id="内容"><a class="header-link" href="#内容"></a>内容</h2>
    <ol class="list">
      <li>注意对齐，边距等，保持内容美观。</li>
      <li>内容不建议过多，当内容很多时，可以使用步骤条分步让用户填写。
        <blockquote>
          <p>据有关调查，登录注册页面如果采用分页设计，最后成功注册的用户转化率比一开始让用户填写一大片表单的情况下高。</p>
        </blockquote>
      </li>
    </ol>
    <h2 id="底部操作栏"><a class="header-link" href="#底部操作栏"></a>底部操作栏</h2>
    <p>通常底部的操作栏包含的操作不会超过2个：表示确定的操作和表示否定的操作。在文案的选择上，大多数情况下，确定操作按钮文案为：<code>确定</code>、<code>取消</code>已经可以满足大多数需求。有特殊情况的，可以再进行调整。</p>
    <h3 id="按钮的摆放位置"><a class="header-link" href="#按钮的摆放位置"></a>按钮的摆放位置</h3>
    <p>这是个有趣的问题，也是人机交互史上一个老生常谈的问题。 这在不同的系统上，有不同的表现：
    </p>
      <ol class="list">
        <li>Windows 确定在左（带tab index），取消在右</li>
        <li>Mac OS 取消在左，确定在右（文案会变，高亮）
        </li>
        <li>Linux 确定在左（高亮），取消在右
        </li>
        <li>iOS 取消在左，确定在右（文案会变，加粗）
        </li>
        <li>Android
          <ol class="list">
            <li>Before 4.0 确定在左，取消在右
            </li>
            <li>After 4.0 取消在左，确定在右 </li>
          </ol>
        </li>
      </ol>
    <p>那么，到底应该怎么取舍。这个问题没有一个百分百正确的答案。无论怎么选择，另一个选择总有理由进行反驳。
      <br>这里给出的一个推荐方案是：<br><strong>取消在左，确定在右</strong></p>
    <p>原因是因为：</p>
    <ol class="list">
      <li>从用户的使用习惯来看，用户使用移动端比使用传统PC网站的更多了；</li>
      <li>取消在左，确定在右的逻辑隐含了一种过去在左，未来在右的逻辑，这更符合人们的认知。</li>
      <li>保持系统自身的统一，保持与业界的统一。</li>
    </ol>
  </article>
</template>
