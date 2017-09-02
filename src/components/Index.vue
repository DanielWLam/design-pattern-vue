<template>
  <div class='main-view'>
    <canvas id="bgCanvas"></canvas>
    <p class="title">设计规范</p>
    <div class="choose">
      <router-link to="admin">
        <div class="btn">
          <img src="https://zos.alipayobjects.com/rmsportal/LvYKhbKsPzIRLGsBxUJA.png" alt="img" class="img" />
          中后台网站
        </div>
      </router-link>
      <div class="btn">
        展示型网站
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
    }
  },
  mounted () {
    this.renderRandomLine()
  },
  methods: {
    renderRandomLine () {
      var c = document.getElementById('bgCanvas') // 获取canvas元素
      var x = c.getContext('2d') // 获取context
      var pr = window.devicePixelRatio || 1 // 设备像素比：设备物理像素/设备独立像素
      var w = window.innerWidth // 屏幕宽度
      var h = window.innerHeight // 屏幕高度
      var f = 200 // TODO: 未知
      var q // TODO: 未知
      var m = Math // Math函数缩写
      var r = 0 // TODO: 未知
      var u = m.PI * 2 // TODO: 2PI, 可能与周长有关
      var v = m.cos // Math.cos, 余弦函数
      var z = m.random // 随机函数
      c.width = w * pr // context宽度
      c.height = h * pr // context高度
      x.scale(pr, pr)
      x.globalAlpha = 0.6
      function i () {
        x.clearRect(0, 0, w, h)
        q = [{ x: 0, y: h * 0.7 + f }, { x: 0, y: h * 0.7 - f }]
        while (q[1].x < w + f) d(q[0], q[1])
      }
      function d (i, j) {
        x.beginPath()
        x.moveTo(i.x, i.y) // 屏幕左边初始化的连线， q0起点
        x.lineTo(j.x, j.y) // 连到q1
        var k = j.x + (z() * 2 - 0.25) * f // 随机一个新的X点
        var n = y(j.y) // 随机一个大于0， 小于屏幕高度的y点

        x.lineTo(k, n)
        x.closePath()
        r -= u / -50
        x.fillStyle = '#' + (v(r) * 127 + 128 << 16 | v(r + u / 3) * 127 + 128 << 8 | v(r + u / 3 * 2) * 127 + 128).toString(16)
        x.fill()
        q[0] = q[1]
        q[1] = { x: k, y: n }
      }
      function y (p) {
        var t = p + (z() * 2 - 1.1) * f
        return (t > h || t < 0) ? y(p) : t
      }
      i()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .main-view {
    background-color: #1e262c;
    background-image: url('https://githubuniverse.com/assets/img/universe/shapes/stars-sm.svg');
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    overflow: hidden;
    .title {
      color: #ffffff;
      text-align: center;
      position: absolute;
      top: 30%;
      left: 50%;
      margin-left: -64px;
      font-size: 32px;
    }
    .choose {
      width: 500px;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-left: -250px;
      margin-top: -50px;
      .btn {
        color: #ffffff;
        border: 1px solid #efefef;
        border-radius: 4px;
        padding: 8px;
        width: 242px;
        height: 100px;
        line-height: 85px;
        text-align: center;
        cursor: pointer;
        margin-top: 0;
        transition: all .45s ease-in-out;
        float:left;
        position: relative;
        img {
          width: 226px;
          display: block;
          position: absolute;
          top: 8px;
          left: 8px;
          right: 16px;
          opacity: 0;
        }
        &:first-child {
          margin-right: 16px;
        }
        &:hover {
          height: 150px;
          margin-top: -50px;
          line-height: 200px;
          background-color: #ffffff;
          color: #000000;
          img {
            opacity: 1;
          }
        }
      }
    }
  }
  .material-box {
    .img {
      background: url('https://zos.alipayobjects.com/rmsportal/LvYKhbKsPzIRLGsBxUJA.png') no-repeat;
    }
  }
</style>
