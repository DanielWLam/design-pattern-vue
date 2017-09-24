<template>
  <div class="color-box" :style="{'background-color': color, color: fontColor}">
    <span>{{color}}</span>
  </div>
</template>
<script>
  export default {
    props: {
      color: {
        type: String,
        default () {
          return '#ffffff'
        }
      }
    },
    computed: {
      fontColor () {
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
    }
  }
</script>
<style lang="less" scoped>
  .color-box {
    width: 100px;
    height: 50px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    text-align: center;
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
  }
</style>
