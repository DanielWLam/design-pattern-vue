<template>
  <div class="table">
    <article class="markdown-body">
      <h1 id="表格">
        <a class="header-link" href="#表格"></a>表格</h1>
      <p>表格既是一种可视化的交流模式，也是一种组织整理数据的手段。 在后台系统中，表格通常用于聚合信息，行程列表，供用户查看或选择。 通常表格会与排序，搜索，分页等功能一起协同作用。实际使用过程中，有几点需要注意的内容：
      </p>
      <ol class="list">
        <li>表格中的时间、状态、操作栏需保持词语完整不超过一行</li>
        <li>当数据为空时，使用
          <code>--</code>来表示暂无数据</li>
        <li>表格内容左对齐，在视觉上看更整齐</li>
      </ol>
    </article>
    <Table style="margin-top: 16px;" :columns="columns1" :data="data1"></Table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns1: [
        {
          title: '姓名',
          key: 'name'
        },
        {
          title: '年龄',
          key: 'age'
        },
        {
          title: '地址',
          key: 'address'
        }
      ],
      data1: [
        {
          name: '王小明',
          age: 18,
          address: '北京市朝阳区芍药居'
        },
        {
          name: '张小刚',
          age: 25,
          address: '北京市海淀区西二旗'
        },
        {
          name: '李小红',
          age: 30,
          address: '上海市浦东新区世纪大道'
        },
        {
          name: '周小伟',
          age: 26,
          address: '深圳市南山区深南大道'
        }
      ]
    }
  }
}
</script>
