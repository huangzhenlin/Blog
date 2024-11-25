import comp from "E:/前端/vuepress/vuepress-starter/docs/.vuepress/.temp/pages/CSS.html.vue"
const data = JSON.parse("{\"path\":\"/CSS.html\",\"title\":\"\",\"lang\":\"en-US\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"css\",\"slug\":\"css\",\"link\":\"#css\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"CSS.md\"}")
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
