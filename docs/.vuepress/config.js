import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'en-US',

  title: '前端知识手册',

  theme: defaultTheme({
    navbar: [
      '/',
      {
        text:'前端面试',
        link:'/interview/',
        children: [
          {text: 'HTML', link:'/interview/HTML.md'},
          {text: 'CSS', link:'/interview/CSS.md'},
          {text: 'JavaScript', link:'/interview/JavaScript.md'},
          {text: '手写代码', link:'/interview/手写代码.md'},
          {text: '浏览器', link:'/interview/浏览器.md'},
          {text: 'VUE', link:'/interview/VUE.md'},
          {text: 'React', link:'/interview/React.md'},
          {text: 'TypeScript', link:'/interview/TypeScript.md'},
          {text: '前端工程化', link:'/interview/前端工程化.md'},
          {text: '移动端', link:'/interview/移动端.md'},
          {text: '微前端', link:'/interview/微前端.md'},
          {text: 'Node', link:'/interview/Node.md'},
          {text: '项目场景', link:'/interview/项目场景.md'},
          {text: '数据结构和算法', link:'/interview/数据结构和算法.md'},
          {text: 'HR', link:'/interview/HR.md'},
        ]
      },
    ],
  }),

  bundler: viteBundler(),
  base:'/Blog'
})
