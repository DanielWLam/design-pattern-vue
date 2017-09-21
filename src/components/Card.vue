<template>
  <div class="material-box card">
    <div class="card-header" v-if="$slots.header">
      <slot name="title"></slot>
      <slot name="control-bar"></slot>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
  }
</script>
<style lang="less" scoped>
  .card-header {
    padding: 8px;
  }
</style>
