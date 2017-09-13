<template>
  <div class="markdown-body">
    {{content}}
  </div>
</template>
<script>
  const fs = require('fs')
  export default {
    props: {
      fileName: {
        type: 'string'
      }
    },
    computed: {
      content: function () {
        // generate-md --layout github --input ./input --output ./output
        // src/markdown_src/output/filename
        let file = fs.readFileSync(`../markdown_src/output/${this.fileName}`)
        console.log(file)
        return ''
      }
    }
  }
</script>
