<template>
  <article class="markdown-body">
    <h1 id="动画">
      <a class="header-link" href="#动画"></a>动画</h1>
    <blockquote>
      <p>人脑灰质（Gray Matter）会对动态的事物（eg：移动、形变、色变等）保持敏感。在界面中，适当的加入一些过渡效果，能让界面保持生动，同时也能增强用户和界面的沟通。 -And Design</p>
    </blockquote>
    <h2>常用几个动画状态的使用场景</h2>
    <p>1. ease-in-out</p>
    <card style="padding: 8px;margin: 8px;" class="in-out">
      <div class="animate-area">
        <div class="circle"></div>
      </div>
      <p>在可视范围内，点到点的运动用：
        <span class="highlight">ease-in-out</span>
      </p>
    </card>
    <p>2. ease-out</p>
    <card style="padding: 8px;margin: 8px;" class="out">
      <div class="animate-area">
        <div class="circle"></div>
      </div>
      <p>从外侧进入可视范围用：
        <span class="highlight">ease-out</span>
      </p>
    </card>
    <p>3. ease-in</p>
    <card style="padding: 8px;margin: 8px;" class="in">
      <div class="animate-area">
        <div class="circle"></div>
      </div>
      <p>在可视范围内向外侧运动用：
        <span class="highlight">ease-in</span>
      </p>
    </card>
    <h2 id="页面切换">
      <a class="header-link" href="#页面切换"></a>页面切换</h2>
    <p>页面切换时，使用滑入、滑出的动画，可以有效构建虚拟空间。</p>
    <h2 id="显示/隐藏元素">
      <a class="header-link" href="#显示/隐藏元素"></a>显示/隐藏元素</h2>
    <p>通过上拉，下拉动画控制元素的显示和隐藏，赋予网站更多的空间感。</p>
    <h2 id="改善卡顿感">
      <a class="header-link" href="#改善卡顿感"></a>改善卡顿感</h2>
    <p>当因为网络缓存等原因导致实际的性能无法提升时，通过适当的动画或loading来转移用户注意力，提升“感知性能”。</p>
    <h2 id="详细阅读">
      <a class="header-link" href="#详细阅读"></a>详细阅读</h2>
    <p>
      <a href="https://motion.ant.design/">Ant Motion</a>
    </p>
  </article>
</template>
<script>
import Card from '../components/Card.vue'
export default {
  components: {
    Card
  }
}
</script>
<style lang="less">
.animate-area {
  width: 500px;
  height: 58px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  .circle {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #108ee9;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.in-out {
  .circle {
    transition: left 1s ease-in-out;
  }
  &:hover {
    .circle {
      left: 400px;
    }
  }
}
.out {
  .circle {
    left: -45px;
    transition: left 1s ease-out;
  }
  &:hover {
    .circle {
      left: 400px;
    }
  }
}
.in {
  .circle {
    left: 0px;
    transition: left 1s ease-in;
  }
  &:hover {
    .circle {
      left: 500px;
    }
  }
}
</style>
