import comp from "E:/前端/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/HTML.html.vue"
const data = JSON.parse("{\"path\":\"/HTML.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"html\",\"slug\":\"html\",\"link\":\"#html\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"HTML.md\"}")
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
