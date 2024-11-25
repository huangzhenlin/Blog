import "E:/前端/github/Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/base.css"
import "E:/前端/github/Blog/node_modules/@vuepress/plugin-prismjs/lib/client/styles/nord.css"
import "E:/前端/github/Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/line-numbers.css"
import "E:/前端/github/Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/notation-highlight.css"
import "E:/前端/github/Blog/node_modules/@vuepress/highlighter-helper/lib/client/styles/collapsed-lines.css"
import { setupCollapsedLines } from "E:/前端/github/Blog/node_modules/@vuepress/highlighter-helper/lib/client/composables/collapsedLines.js"

export default {
  setup() {
    setupCollapsedLines()
  }
}
