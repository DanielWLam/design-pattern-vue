<template>
  <div class="color-box" :class="{'no-hover': noHover}" :data-clipboard-text="color" :style="{'background-color': color, color: fontColor}" @click="clipColor">
    <span>{{color}}</span>
  </div>
</template>
<script>
import Clipboard from 'clipboard'
export default {
  props: {
    color: {
      type: String,
      default() {
        return '#ffffff'
      }
    },
    noHover: {
      type: Boolean,
      default () {
        return false
      }
    }
  },
  computed: {
    fontColor() {
      // rgb => 16 * n + m
      let r = parseInt(this.color[1] + this.color[2], 16)
      let g = parseInt(this.color[3] + this.color[4], 16)
      let b = parseInt(this.color[5] + this.color[6], 16)
      if ((r * 0.299 + g * 0.587 + b * 0.114) > 186) {
        return '#000000'
      } else {
        return '#ffffff'
      }
    }
  },
  data () {
    return {
      clipboard: null
    }
  },
  mounted () {
    this.clipboard = new Clipboard(this.$el)
  },
  methods: {
    clipColor() {
      let that = this
      this.clipboard.on('success', function(e) {
        that.$Message.success('已复制颜色：' + e.text)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.color-box {
  width: 100%;
  height: 50px;
  border-radius: 4px;
  transition: all 0.2s ease-in-out;
  text-align: center;
  margin-top:0;
  cursor: pointer;
  span {
    font-size: 12px;
    line-height: 50px;
    opacity: 0;
  }
  &:hover {
    margin-top: -8px;
    height: 58px;
    span {
      opacity: 1;
    }
  }
  &.no-hover:hover {
    margin-top: 0;
    height: 50px;
    span {
      opacity: 1;
    }
  }
}
</style>
