export const themeData = JSON.parse("{\"navbar\":[\"/\",{\"text\":\"前端面试\",\"link\":\"/interview/\",\"children\":[{\"text\":\"HTML\",\"link\":\"/interview/HTML.md\"},{\"text\":\"CSS\",\"link\":\"/interview/CSS.md\"},{\"text\":\"JavaScript\",\"link\":\"/interview/JavaScript.md\"},{\"text\":\"手写代码\",\"link\":\"/interview/手写代码.md\"},{\"text\":\"浏览器\",\"link\":\"/interview/浏览器.md\"},{\"text\":\"VUE\",\"link\":\"/interview/VUE.md\"},{\"text\":\"React\",\"link\":\"/interview/React.md\"},{\"text\":\"TypeScript\",\"link\":\"/interview/TypeScript.md\"},{\"text\":\"前端工程化\",\"link\":\"/interview/前端工程化.md\"},{\"text\":\"移动端\",\"link\":\"/interview/移动端.md\"},{\"text\":\"微前端\",\"link\":\"/interview/微前端.md\"},{\"text\":\"Node\",\"link\":\"/interview/Node.md\"},{\"text\":\"项目场景\",\"link\":\"/interview/项目场景.md\"},{\"text\":\"数据结构和算法\",\"link\":\"/interview/数据结构和算法.md\"},{\"text\":\"HR\",\"link\":\"/interview/HR.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebar\":\"heading\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
