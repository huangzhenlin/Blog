import comp from "E:/前端/github/Blog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"features\":[{\"title\":\"HTML\",\"details\":null},{\"title\":\"CSS\",\"details\":null},{\"title\":\"JavaScript\",\"details\":null},{\"title\":\"浏览器\",\"details\":null},{\"title\":\"VUE\",\"details\":null},{\"title\":\"React\",\"details\":null},{\"title\":\"TypeScript\",\"details\":null},{\"title\":\"前端工程化\",\"details\":null},{\"title\":\"移动端\",\"details\":null},{\"title\":\"微前端\",\"details\":null},{\"title\":\"后端\",\"details\":null},{\"title\":\"数据结构和算法\",\"details\":null},{\"title\":\"场景\",\"details\":null},{\"title\":\"手写代码\",\"details\":null},{\"title\":\"HR\",\"details\":null}],\"footer\":\"MIT Licensed | Copyright © 2018-present VuePress Community\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
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
