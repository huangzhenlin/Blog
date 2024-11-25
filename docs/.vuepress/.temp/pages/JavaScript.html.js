import comp from "E:/前端/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/JavaScript.html.vue"
const data = JSON.parse("{\"path\":\"/JavaScript.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"javascript\",\"slug\":\"javascript\",\"link\":\"#javascript\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"JavaScript.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
