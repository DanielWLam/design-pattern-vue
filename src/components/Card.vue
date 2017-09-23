<template>
  <div class="material-box card">
    <div class="header" v-if="$slots.title || $slots['control-bar']">
      <slot name="title"></slot>
      <div class="control-bar" v-if="$slots['control-bar']">
        <slot name="control-bar"></slot>
      </div>
    </div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  mounted () {
    console.log(this.$slots, '===')
  }
}
</script>
<style lang="less" scoped>
.card,
.material-box {
  //box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
  transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
  border-radius: 2px;
  overflow: hidden; 
  &:hover {
   box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
  }
}
.card {
  background-color: #ffffff;
  .header {
    background-color: #fafafa;
    padding: 8px;
    font-size: 14px;
    font-weight: 700;
    color: #333;
    line-height:28px;
    border-bottom: 1px solid #efefef;
    text-overflow: ellipsis;
    max-width: 100%; // 名字超长要截断
    overflow: visible;
    text-align: left;
    .control-bar {
      float: right;
      i {
        // icon
        margin: 0 4px;
        cursor: pointer;
      }
      .down-menu-btn {
        position: relative;
        display: inline-block;
        .down-menu {
          position: absolute;
          top: 30px;
          background-color: #fff;
          padding: 8px;
          z-index: 10;
          left: 50%;
          transform: translateX(-50%);
          box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.16), 0 0 0 1px rgba(0, 0, 0, 0.08);
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          border-radius: 2px;
          overflow: hidden;
          min-width: 95px;
          .el-checkbox+.el-checkbox {
            margin-left: 0;
          }
        }
      }
    }
  }
  .card-body {
    padding: 8px;
  }
  .disabled.grey-scale {
    filter: grayscale(100%);
    position: relative;
    .modal-bg {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.2);
      z-index: 100;
    }
  }
}

.card-header {
  padding: 8px;
}
</style>
