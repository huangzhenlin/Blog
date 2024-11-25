## MVC/MVP/MVVM框架的区别

1. **MVC模式**

   Controller 是 MVC 中的 C，指控制层，在 Controller 层会接收用户所有的操作，并根据写好的代码进行相应的操作——触发 Model 层，或者触发 View 层，抑或是两者都触发。

   需要注意：Controller 层触发 View 层时，并不会更新 View 层中的数据，View 层中的数据是通过监听 Model 层数据变化而自动更新的，与 Controller 层无关。

   MVC 框架主要有两个缺点：

   - MVC 框架的大部分逻辑都集中在 Controller 层，代码量也都集中在 Controller 层，这带给 Controller 层很大的压力，而已经有独立处理事件能力的 View 层却没有用到。
   - 还有一个问题，就是 Controller 层和 View 层之间是一一对应的，断绝了 View 层复用的可能，因而产生了很多冗余代码。

2. **MVP模式**

   在 MVC 框架中，View 层可以通过访问 Model 层来更新，但在 MVP 框架中，View 层不能再直接访问 Model 层，必须通过 Presenter 层提供的接口，然后 Presenter 层再去访问 Model 层。首先是因为 Model 层和 View 层都必须通过 Presenter 层来传递信息，所以完全分离了 View 层和 Model 层，也就是说，View 层与 Model 层一点关系也没有，双方是不知道彼此存在的，在它们眼里，只有 Presenter 层。其次，因为 View 层与 Model 层没有关系，所以 View 层可以抽离出来做成组件，在复用性上比 MVC 模型好很多。

   View 层与 Model 层确实互不干涉，View 层也自由了很多。但还是有问题，因为 View 层和 Model 层都需经过 Presenter 层，致使 Presenter 层比较复杂，维护起来会有一定的问题。而且因为没有绑定数据，所有数据都需要 Presenter 层进行“手动同步”，代码量比较大，虽然比 MVC 模型好很多，但也是有比较多的冗余部分。

3. **MVVM模式**

   MVVM 的框架图与 MVP 的框架图相似，确实如此，两者都是从 View 层开始触发用户的操作，之后经过第三层，最后到达 Model 层。但是关键问题是这第三层的内容， ViewModel 层双向绑定了 View 层和 Model 层，因此，随着 View 层的数据变化，系统会自动修改 Model 层的数据，反之同理。

   而 Presenter 层是采用手动写方法来调用或者修改 View 层和 Model 层，两者孰优孰劣不言而喻。View 层和 Model 层之间数据的传递也经过了 ViewModel 层， ViewModel 层并没有对其进行“手动绑定”，不仅使速度有了一定的提高，代码量也减少很多，相比于 MVC 和 MVP，MVVM 有了长足的进步。至于双向数据绑定，可以这样理解：双向数据绑定是一个模板引擎，它会根据数据的变化实时渲染。

   MVVM 模型中数据绑定方法一般有以下3种：

   - 数据劫持；
   - 发布-订阅模式；
   - 脏值检查。


   Vue.js 使用的是数据劫持和发布-订阅模式两种方法。Observer 用于监听数据变化，如果数据发生改变，不论是在 View 层还是 Model 层， Oberver 都会知道，然后告诉 Watcher。Compiler 的作用是对数据进行解析，之后绑定指定的事件，在这里主要用于更新视图。Vue.js 数据绑定的流程：首先将需要绑定的数据用数据劫持方法找出来，之后用 Observer 监听这堆数据，如果数据发生变化，Observer 就会告诉 Watcher，然后 Watcher 会决定让哪个 Compiler 去做出相应的操作，这样就完成了数据的双向绑定。

4. **区别**

   MVC、MVP、MVVM 三者的主要区别就在于除 View 层和 Model 层之外的第三层，这一层的不同使得 MV 系列框架区分开来。
   其实很难说出 MVC、MVP、MVVM 哪一个更好，从表面上看，显然是 MVVM 最好，使用起来更方便，代码相对也较少。但问题是 MVVM 的框架体积较大，相比于 MVC 的不用框架、MVP 的 4KB 框架，MVVM 遥遥领先。虽然 MVVM 框架可以单独引用，但现在更多使用前端脚手架工具进行开发，并且使用打包工具，这样一来，它跟 MVC 相比，体积是天差地别。虽然机能过剩更令人放心，但是轻巧一些的框架会令项目锦上添花。所以要根据实际项目的需求来选择 MVC、MVP、MVVM，只有最适合的模式才是最好的框架。



## 对SPA单页面的理解

1. **概念**

   SPA（single-page application）单页应用是一种网络应用程序或网站的模型，它通过动态重写当前页面来与用户交互，这种方法避免了页面之间切换打断用户体验在单页应用中，所有必要的代码（HTML、JavaScript和CSS）都通过单个页面的加载而检索，或者根据需要（通常是为响应用户操作）动态装载适当的资源并添加到页面页面在任何时间点都不会重新加载，也不会将控制转移到其他页面。我们熟知的JS框架如react,vue,angular,ember都属于SPA

2. **和MPA的区别**

   多页应用MPA（MultiPage-page application），每个页面都是一个主页面，都是独立的当我们在访问另一个页面的时候，都需要重新加载html、css、js文件，公共文件则根据需求按需加载，区别如下：

   |                 | SPA                       | MPA                                 |
   | --------------- | ------------------------- | ----------------------------------- |
   | 组成            | 一个主页面和多个页面片段  | 多个主页面                          |
   | 刷新方式        | 局部刷新                  | 整页刷新                            |
   | url模式         | 哈希模式                  | history模式                         |
   | SEO搜索引擎优化 | 难实现，可使用SSR方式改善 | 容易实现                            |
   | 数据传递        | 容易                      | 通过url、cookie、localStorage等传递 |
   | 页面切换        | 速度快，用户体验良好      | 切换加载资源，速度慢，用户体验差    |
   | 维护成本        | 相对容易                  | 相对复杂                            |

3. **优缺点**

   优点：

   - 具有桌面应用的即时性、网站的可移植性和可访问性
   - 用户体验好、快，内容的改变不需要重新加载整个页面
   - 良好的前后端分离，分工更明确

   缺点：

   - 不利于搜索引擎的抓取
   - 首次渲染速度相对较慢

4. **实现**

   - hash 模式：核心通过监听url中的hash来进行路由跳转

     ```js
     // 定义 Router  
     class Router {  
         constructor () {  
             this.routes = {}; // 存放路由path及callback  
             this.currentUrl = '';  
               
             // 监听路由change调用相对应的路由回调  
             window.addEventListener('load', this.refresh, false);  
             window.addEventListener('hashchange', this.refresh, false);  
         }  
           
         route(path, callback){  
             this.routes[path] = callback;  
         }  
           
         push(path) {  
             this.routes[path] && this.routes[path]()  
         }  
     }  
       
     // 使用 router  
     window.miniRouter = new Router();  
     miniRouter.route('/', () => console.log('page1'))  
     miniRouter.route('/page2', () => console.log('page2'))  
       
     miniRouter.push('/') // page1  
     miniRouter.push('/page2') // page2
     ```

   - history模式：核心借用 HTML5 history api，api 提供了丰富的 router 相关属性先了解一个几个相关的api

     ```js
     // history.pushState 浏览器历史纪录添加记录
     // history.replaceState修改浏览器历史纪录中当前纪录
     // history.popState 当 history 发生变化时触发
     // 定义 Router  
     class Router {  
         constructor () {  
             this.routes = {};  
             this.listerPopState()  
         }  
           
         init(path) {  
             history.replaceState({path: path}, null, path);  
             this.routes[path] && this.routes[path]();  
         }  
           
         route(path, callback){  
             this.routes[path] = callback;  
         }  
           
         push(path) {  
             history.pushState({path: path}, null, path);  
             this.routes[path] && this.routes[path]();  
         }  
           
         listerPopState () {  
             window.addEventListener('popstate' , e => {  
                 const path = e.state && e.state.path;  
                 this.routers[path] && this.routers[path]()  
             })  
         }  
     }  
     // 使用 Router  
     window.miniRouter = new Router();  
     miniRouter.route('/', ()=> console.log('page1'))  
     miniRouter.route('/page2', ()=> console.log('page2'))  
     // 跳转  
     miniRouter.push('/page2')  // page2 
     ```

5. **如何做SEO**

   - **SSR服务端渲染**

     将组件或页面通过服务器生成html，再返回给浏览器，如nuxt.js

   - **静态化**

     目前主流的静态化主要有两种：
     一种是通过程序将动态页面抓取并保存为静态页面，这样的页面的实际存在于服务器的硬盘中；
     另外一种是通过WEB服务器的 URL Rewrite的方式，它的原理是通过web服务器内部模块按一定规则将外部的URL请求转化为内部的文件地址，一句话来说就是把外部请求的静态地址转化为实际的动态页面地址，而静态页面实际是不存在的。

     这两种方法都达到了实现URL静态化的效果

   - **使用Phantomjs针对爬虫处理**

     原理是通过Nginx配置，判断访问来源是否为爬虫，如果是则搜索引擎的爬虫请求会转发到一个node server，再通过PhantomJS来解析完整的HTML，返回给爬虫



## 对SSR后端渲染的理解

1. **概念**

   Server-Side Rendering 我们称其为SSR，意为服务端渲染。指由服务侧完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。

2. **和spa的区别**

   - 传统web开发：网页内容在服务端渲染完成，⼀次性传输到浏览器。打开页面查看源码，浏览器拿到的是全部的dom结构
   - 单页应用SPA：单页应用优秀的用户体验，使其逐渐成为主流，页面内容由JS渲染出来，这种方式称为客户端渲染；打开页面查看源码，浏览器拿到的仅有宿主元素#app，并没有内容
   - 服务端渲染SSR：后端渲染出完整的首屏的dom结构返回，前端拿到的内容包括首屏及完整spa结构，应用激活后依然按照spa方式运行

3. **作用**

   SSR主要解决了以下两种问题：

   - seo：搜索引擎优先爬取页面HTML结构，使用ssr时，服务端已经生成了和业务想关联的HTML，有利于seo
   - 首屏呈现渲染：用户无需等待页面所有js加载完成就可以看到页面视图（压力来到了服务器，所以需要权衡哪些用服务端渲染，哪些交给客户端）

4. **缺点**

   使用SSR存在以下的缺点：

   - 复杂度：整个项目的复杂度
   - 库的支持性，代码兼容
   - 性能问题
     - 每个请求都是n个实例的创建，不然会污染，消耗会变得很大
     - 缓存 node serve、 nginx判断当前用户有没有过期，如果没过期的话就缓存，用刚刚的结果。
     - 降级：监控cpu、内存占用过多，就spa，返回单个的壳
   - 服务器负载变大，相对于前后端分离服务器只需要提供静态资源来说，服务器负载更大，所以要慎重使用

   所以在我们选择是否使用SSR前，我们需要慎重问问自己这些问题：

   - 需要SEO的页面是否只是少数几个，这些是否可以使用预渲染（Prerender SPA Plugin）实现
   - 首屏的请求响应逻辑是否复杂，数据返回是否大量且缓慢

5. **实现**

   - 使用ssr不存在单例模式，每次用户请求都会创建一个新的vue实例
   - 实现ssr需要实现服务端首屏渲染和客户端激活
   - 服务端异步获取数据asyncData可以分为首屏异步获取和切换组件获取
     - 首屏异步获取数据，在服务端预渲染的时候就应该已经完成
     - 切换组件通过mixin混入，在beforeMount钩子完成数据获取



## 对vue的理解

1. **概念**

   Vue.js（/vjuː/，或简称为Vue）是一个用于创建用户界面的开源JavaScript框架，也是一个创建单页应用的Web应用框架。Vue所关注的核心是MVC模式中的视图层，同时，它也能方便地获取数据更新，并通过组件内部特定的方法实现视图与模型的交互。

2. **特性**

   - 渐进式 JavaScript 框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。
   - 易用性。vue 提供数据响应式、声明式模板语法和基于配置的组件系统等核心特性。这些使我们只需要关注应用的核心业务即可，只要会写js、html 和 css 就能轻松编写 vue 应用。
   - 灵活性。如果应用足够小，我们可能仅需要 vue 核心特性即可完成功能；随着应用规模不断扩大，我们才可能逐渐引入路由、状态管理、vue-cli 等库和工具，不管是应用体积还是学习难度都是一个逐渐增加的平和曲线
   - 高效性。超快的虚拟 DOM 和 diff算法使我们的应用拥有最佳的性能表现。追求高效的过程还在继续，vue3 中引入 Proxy 对数据响应式改进以及编译器中对于静态内容编译的改进都会让 vue 更加高效

3. **优点**

   - 前端专门负责前端页面和特效的编写，后端专门负责后端业务逻辑的处理；
   -  前端追求的是页面美观、页面流畅、页面兼容等，而后端追求的是“三高”（高并发、高可用、高性能），让它们负责各自的领域，让专业人员负责处理专业的事情，提高开发效率。
   - 响应式编程、组件化。Vue的优势：轻量级框架、简单易学、双向数据绑定、组件化、视图与数据和结构分离、虚拟DOM、运行速度快

4. **缺点**

   - 当接口发生改变的时候，前后端都需要改变；
   - 当发生异常的时候，前后端需要联调。联调是非常浪费时间的。



## vue与react的异同

1. 相同点

   - **都有组件化思想**
   - **都有 props 的概念，允许组件间的数据传递；**
   - **都支持服务器端渲染**
   - **都有Virtual DOM（虚拟dom）**
   - **数据驱动视图**
   - **都有支持native的方案：Vue的weex、React的React native**
   - **都有自己的构建工具：Vue的vue-cli、React的Create React App**

2. 区别

   - **数据流向**

     数据流向的不同。react从诞生开始就推崇单向数据流，而Vue是双向数据流

   - **组件化通信**

     react中我们通过使用回调函数来进行通信的，而Vue中子组件向父组件传递消息有两种方式：事件和回调函数

   - **diff算法**

     react主要使用diff队列保存需要更新哪些DOM，得到patch树，再统一操作批量更新DOM。Vue 使用双向指针，边对比，边更新DOM

   - **虚拟DOM**

     Vue2.x 开始引入"Virtual DOM"，消除了和 React 在这方面的差异，但是在具体的细节还是有各自的特点。Vue 宣称可以更快地计算出 Virtual DOM 的差异，这是由于它在渲染过程中，会跟踪每一个组件的依赖关系，不需要重新渲染整个组件树。

     对于 React 而言，每当应用的状态被改变时，全部子组件都会重新渲染。当然，这可以通过 PureComponent或shouldComponentUpdate这个生命周期方法来进行控制，但 Vue 将此视为默认的优化。

   - **模板编写**

     React 与 Vue 最大的不同是模板的编写。Vue 鼓励写近似常规 HTML 的模板。写起来很接近标准 HTML 元素，只是多了一些属性。React 推荐所有的模板通用 JavaScript 的语法扩展——JSX 书写。

     具体来讲：React 中 render 函数是支持闭包特性的，所以 import 的 组件在 render 中可以直接调用。但是在 Vue 中，由于模板中使用的数据都必须挂在 this 上进行一次中转，所以 import 一个组件完了 之后，还需要在 components 中再声明下。                                                                                                                                                                                                                                                                                    

   - **监听数据变化的实现原理**

     Vue 通过 getter/setter 以及一些函数的劫持，能精确知道数据变化，不需要特别的优化就能达到很好的性能 。

     React 默认是通过比较引用的方式进行的，如果不优化（PureComponent/shouldComponentUpdate）可能导致大量不必要的vDOM 的重新渲染。这是因为 Vue 使用的是可变数据，而 React 更强调数据的不可变。

   - **扩展**

     可以通过高阶组件（HOC）来扩展，而 Vue 需要通过 mixins 来扩展。高阶组件就是高阶函数，而 React 的组件本身就是纯粹的函数，所以高阶函数对 React 来说易如反掌。相反 Vue.js 使用 HTML 模板创建视图组件，这时模板无法有效的编译，因此 Vue 不能采用 HOC 来实现

   - **构建工具**

     React ==> Create React APP

     Vue ==> vue-cli

   - **跨平台**

     React ==> React Native

     Vue ==> Weex



## 对Vue 模版编译的理解

1. **概念**

   vue 中的模板 template 无法被浏览器解析并渲染，因为这不属于浏览器的标准，不是正确的 HTML 语法，所有需要将 template 转化成一个 JavaScript 函数，这样浏览器就可以执行这一个函数并渲染出对应的 HTML 元素，就可以让视图跑起来了，这一个转化的过程，就成为模板编译

2. **原理（阶段）**

   模板编译分三个阶段，解析 parse，优化 optimize，生成 generate，最终生成可执行函数 render。

   - 解析阶段：使用大量的正则表达式对 template 字符串进行解析，将标签、指令、属性等转化为抽象语法树 AST。
   - 优化阶段：遍历 AST，找到其中的一些静态节点并进行标记，方便在页面重渲染的时候进行 diff 比较时，直接跳过这一些静态节点，优化 runtime 的性能。
   - 生成阶段：将最终的 AST 转化为 render 函数字符串

3. **方式**

   两种方式：

   - template是HTML的方式，类似于html一样的模板来进行组件的封装
   - render是js的方式，通过createElement()进行虚拟DOM的创建，逻辑性比较强，适合复杂的组件封装

   区别：

   - template => render(h) => h()原生js的createElement 创建真实元素 => 虚拟dom =>真实dom 
   - render的性能比template的性能好很多
   - render函数优先级大于template

4. **花屏问题**

   使用 vue 开发时，在 vue 初始化之前，由于 div 是不归 vue 管的，所以我们写的代码在还没有解析的情况下会容易出现花屏现象，看到类似于的字样，虽然一般情况下这个时间很短暂，但是还是有必要让解决这个问题的。
   首先：在 css 里加上以下代码：

   ```css
   [v-cloak]{
    display:none;
   }
   ```

   如果没有彻底解决问题，则在根元素加上：
   ```vue
   <div style="display:none;" :style="{display: 'block'}></div>
   ```



## Vue实例挂载的过程

1. new Vue的时候调用会调用_init方法。参数options是用户传递过来的配置项，如data、methods等常用的方法

   ```js
   initLifecycle(vm) // 初始化组件生命周期标志位
   initEvents(vm) // 初始化组件事件侦听
   initRender(vm) // 初始化渲染方法
   callHook(vm, 'beforeCreate')
   initInjections(vm) // 初始化依赖注入内容，在初始化data、props之前
   props/data/method/watch/methods，initState(vm) // 初始化
   initProvide(vm)
   callHook(vm, 'created')
   ```

2. 调用$mount进行页面的挂载。最终都会解析成render函数，调用compileToFunctions，会将template解析成render函数。对template的解析步骤大致分为以下几步：

   - 将html文档片段解析成ast描述符
   - 将ast描述符解析成字符串
   - 生成render函数

   生成render函数，挂载到vm上后，会再次调用mount方法

   ```js
   Vue.prototype.$mount = function (
     el?: string | Element,
     hydrating?: boolean
   ): Component {
     el = el && inBrowser ? query(el) : undefined
     // 渲染组件
     return mountComponent(this, el, hydrating)
   }
   ```

3. 挂载的时候主要是通过mountComponent方法。调用mountComponent渲染组件。

4. 定义updateComponent更新函数。主要执行在vue初始化时声明的render，update方法。

5. 执行render生成虚拟DOM

6. _update将虚拟DOM生成真实DOM结构，并且渲染到页面中。调用patch，将vnode转换为真实DOM，并且更新到页面中。



## 对Vue.observable的理解

1. **概念**

   Vue.observable，让一个对象变成响应式数据。Vue 内部会用它来处理 data 函数返回的对象。返回的对象可以直接用于渲染函数和计算属性内，并且会在发生变更时触发相应的更新。也可以作为最小化的跨组件状态存储器。

   ```js
   Vue.observable({ count : 1})
   // 作用等同于new vue({ count : 1})
   // 在 Vue 2.x 中，被传入的对象会直接被 Vue.observable 变更，它和被返回的对象是同一个对象
   // 在 Vue 3.x 中，则会返回一个可响应的代理，而对源对象直接进行变更仍然是不可响应的
   ```

2. **使用场景**

   在非父子组件通信时，可以使用通常的bus或者使用vuex，但是实现的功能不是太复杂，而使用上面两个又有点繁琐。这时，observable就是一个很好的选择

   ```js
   // 引入vue
   import Vue from 'vue
   // 创建state对象，使用observable让state对象可响应
   export let state = Vue.observable({
     name: '张三',
     'age': 38
   })
   // 创建对应的方法
   export let mutations = {
     changeName(name) {
       state.name = name
     },
     setAge(age) {
       state.age = age
     }
   }
   ```

   ```vue
   <template>
     <div>
       姓名：{{ name }}
       年龄：{{ age }}
       <button @click="changeName('李四')">改变姓名</button>
       <button @click="setAge(18)">改变年龄</button>
     </div>
   </template>
   import { state, mutations } from '@/store
   export default {
     // 在计算属性中拿到值
     computed: {
       name() {
         return state.name
       },
       age() {
         return state.age
       }
     },
     // 调用mutations里面的方法，更新数据
     methods: {
       changeName: mutations.changeName,
       setAge: mutations.setAge
     }
   }
   ```



## 数据渲染时，如何保证将数据原样输出

1. **v-text**

   将数据输出到元素内部，如果输出的数据有HTML代码，会作为普通文本输出。

2. **v-html**

   将数据输出到元素内部，如果输出的数据有HTML代码，会被渲染。

3. **插值表达式**

   可以直接获取Vue实例中定义的数据或函数。使用插值表达式的时候，值可能闪烁；

   而使用v-html、v-text时不会闪烁，有值就显示，没有值就会被隐藏。



## Vue组件中data为什么必须是函数

1. **根实例对象data可以是对象也可以是函数**（根实例是单例）

   不会产生数据污染情况

2. **组件实例对象data必须为函数**

   目的是为了防止多个组件实例对象之间共用一个data，产生数据污染，采用函数的形式，initData时会将其作为工厂函数都会返回全新data对象。当data选项是一个函数的时候，每个实例可以维护一份被返回对象的独立备份，这样各个实例中的data不会相互影响，以确保是独立的。

   如果传给组件的data是一个原始对象，则在建立多个组件实例复用时，它们就会共用这个data对象，修改其中一个组件实例的数据就会影响其他组件实例的数据。



## 对Vue的响应式（双向绑定）的理解

1. **概念**

   先从单向绑定切入，单向绑定非常简单，就是把Model绑定到View，当用JavaScript代码更新Model时，View就会自动更新双向绑定就很容易联想到了，在单向绑定的基础上，用户更新了View，Model的数据也自动被更新了，这种情况就是双向绑定

2. **原理**

   当一个Vue实例创建时，Vue会遍历data选项的属性，用Object.defineProperty（vue3使用proxy）将它们转为getter/setter，并在内部追踪相关依赖，在属性被访问和修改时通知变化。

   每个组件实例都有相应的watcher实例，它会在组件渲染的过程中把属性记录为依赖，然后当依赖项的setter被调用时，会通知watcher重新计算，从而使它关联的组件得以更新。

3. **流程**

   - new Vue()首先执行初始化，对data执行响应化处理，这个过程发生Observe中
   - 同时对模板执行编译，找到其中动态绑定的数据，从data中获取并初始化视图，这个过程发生在Compile中
   - 同时定义⼀个更新函数和Watcher，将来对应数据变化时Watcher会调用更新函数
   - 由于data的某个key在⼀个视图中可能出现多次，所以每个key都需要⼀个管家Dep来管理多个Watcher
   - 将来data中数据⼀旦发生变化，会首先找到对应的Dep，通知所有Watcher执行更新函数

4. **实现**

   - 第一步：需要对Observer的数据对象进行递归遍历，包括子属性对象的属性，都加上setter和getter。这样给这个对象的某个属性赋值，就会触发setter，那么就能监听到数据变化了。

     ```js
     class Vue {  
       constructor(options) {  
         this.$options = options;  
         this.$data = options.data;  
             
         // 对data选项做响应式处理  
         observe(this.$data);  
             
         // 代理data到vm上  
         proxy(this);  
             
         // 执行编译  
         new Compile(options.el, this);  
       }  
     }  
     
     function observe(obj) {  
       if (typeof obj !== "object" || obj == null) {  
         return;  
       }  
       new Observer(obj);  
     }  
       
     class Observer {  
       constructor(value) {  
         this.value = value;  
         this.walk(value);  
       }  
       walk(obj) {  
         Object.keys(obj).forEach((key) => {  
           defineReactive(obj, key, obj[key]);  
         });  
       }  
     }  
     ```

   - 第二步：Compile解析模板指令，将模板中的变量替换成数据，然后初始化渲染页面视图，并将每个指令对应的节点绑定更新函数，添加监听数据的订阅者（一旦数据有变动，收到通知，更新视图）。

     ```js
     class Compile {  
       constructor(el, vm) {  
         this.$vm = vm;  
         this.$el = document.querySelector(el);  // 获取dom  
         if (this.$el) {  
           this.compile(this.$el);  
         }  
       }  
       compile(el) {  
         const childNodes = el.childNodes;   
         Array.from(childNodes).forEach((node) => { // 遍历子元素  
           if (this.isElement(node)) {   // 判断是否为节点  
             console.log("编译元素" + node.nodeName);  
           } else if (this.isInterpolation(node)) {  
             console.log("编译插值⽂本" + node.textContent);  // 判断是否为插值文本 {{}}  
           }  
           if (node.childNodes && node.childNodes.length > 0) {  // 判断是否有子元素  
             this.compile(node);  // 对子元素进行递归遍历  
           }  
         });  
       }  
       isElement(node) {  
         return node.nodeType == 1;  
       }  
       isInterpolation(node) {  
         return node.nodeType == 3 && /\{\{(.*)\}\}/.test(node.textContent);  
       }  
     }  
     ```

   - 第三步：Watcher订阅者是Observer和Compile间通信的“桥梁”，主要负责做的事情如下。在自身实例化时往属性订阅器（dep）中添加自身。自身必须有一个update()方法。待属性变动通知dep.notice()时，能调用自身的update()方法，并触发Compile中绑定的回调。

     ```js
     class Watcher {  
       constructor(vm, key, updater) {  
         this.vm = vm  
         this.key = key  
         this.updaterFn = updater  
       
         // 创建实例时，把当前实例指定到Dep.target静态属性上  
         Dep.target = this  
         // 读一下key，触发get  
         vm[key]  
         // 置空  
         Dep.target = null  
       }  
       
       // 未来执行dom更新函数，由dep调用的  
       update() {  
         this.updaterFn.call(this.vm, this.vm[this.key])  
       } 
      class Dep {  
       constructor() {  
         this.deps = [];  // 依赖管理  
       }  
       addDep(dep) {  
         this.deps.push(dep);  
       }  
       notify() {   
         this.deps.forEach((dep) => dep.update());  
       }  
     }  
     class Watcher {  
       constructor(vm, key, updateFn) {  
         Dep.target = this;  
         this.vm[this.key];  
         Dep.target = null;  
       }  
     }  
     
     function defineReactive(obj, key, val) {  
       this.observe(val);  
       const dep = new Dep();  
       Object.defineProperty(obj, key, {  
         get() {  
           Dep.target && dep.addDep(Dep.target);// Dep.target也就是Watcher实例  
           return val;  
         },  
         set(newVal) {  
           if (newVal === val) return;  
           dep.notify(); // 通知dep执行更新方法  
         },  
       });  
     }  
     ```

   - 第四步：MVVM作为数据绑定的入口，整合Observer、Compile和Watcher三者，通过Observer来监听自己的Model数据变化，通过Compile来解析编译模板指令，最终利用Watcher搭起Observer和Compile间的通信“桥梁”，达到“数据变化→视图更新、视图交互变化→Model数据变更”的双向绑定效果。

   

   

   ## vue如何监听数组的变化

   1. **问题**

      vue data 数组内部变化后，页面没有刷新

   2. **原因**

      在 Vue 中，对响应式处理利用的是 Object.defineProperty 对数据进行拦截，而这个方法并不能监听到数组内部变化，数组长度变化，数组的截取变化等

   3. **解决方案**

      - **Vue.set**

        通过Vue.set向响应式对象中添加一个property，并确保这个新 property同样是响应式的，且触发视图更新

        ```js
        Vue.set( target, propertyName/index, value )
        ```

      - **Object.assign**

        直接使用Object.assign()添加到对象的新属性不会触发更新。应创建一个新的对象，合并原对象和混入对象的属性

        ```js
        this.someObject = Object.assign({},this.someObject,{newProperty1:1,newProperty2:2 ...})
        ```

      - **$forcecUpdated**

        如果你发现你自己需要在 Vue中做一次强制更新，99.9% 的情况，是你在某个地方做错了事。$forceUpdate迫使Vue 实例重新渲染。

        注意：仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件

      - **hack**

        需要对这些操作进行 hack，让 Vue 能监听到其中的变化。Vue将被侦听的数据的变更方法进行了包裹，所以他们也将会触发视图更新。简单来说就是，重写了数组中的那些原生方法，首先获取到这个数组的__ob__，也就是它的 Observer 对象，如果有新的值，就调用 observeArray 继续对新的值观察变化（也就是通过 target__proto__== arrayMethods 来改变了数组实例的型），然后手动调用 notify， 通知渲染 watcher，执行 update。

        ```js
        const arrayProto = Array.prototype
        export const arrayMethods = Object.create(arrayProto)
        const methodsToPatch = ['push','pop','shift','unshift','splice','sort','reverse']
        methodsToPatch.forEach(function (method) {
          // cache original method
          const original = arrayProto[method]
          def(arrayMethods, method, function mutator (...args) {
            const result = original.apply(this, args)
            const ob = this.__ob__
            let inserted
            switch (method) {
              case 'push':
              case 'unshift':
                inserted = args
                break
              case 'splice':
                inserted = args.slice(2)
                break
            }
            if (inserted) ob.observeArray(inserted)
            // notify change
            ob.dep.notify()
            return result
          })
        })
        ```

   

   ## Vue 视图会立即同步执行重新渲染吗

   1. **问题**

      vue data 中某一个属性的值发生改变后，会不会立即同步执行重新渲染？

   2. **原因**

      data 中某一个属性的值发生改变后，不会立即同步执行重新渲染。

      Vue 实现响应式并不是数据发生变化之后 DOM 立即变化，而是按一定的策略进行 DOM 的更新。Vue 在更新DOM 时是异步执行的。只要侦听到数据变化， Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据变更。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作是非常重要的。然后，在下一个的事件循环 tick 中，Vue 刷新队列并执行实际（已去重的）工作



## 对$nextTick的理解

1. **原理**

   Vue 的 nextTick 其本质是对 JavaScript 执行原理 EventLoop 的一种应用。nextTick 的 核 心 是 利 用 了 如 Promise 、 MutationObserver 、setImmediate、setTimeout 的原生 JavaScript 方法来模拟对应的 微/宏任务的实现，本质是为了利用 JavaScript 的这些异步回调任务队列来实现 Vue 框架中自己的异步回调队列。nextTick 不仅是 Vue 内部的异步队列的调用方法，同时也允许开发者在实际项目中使用这个方法来满足实际应用中对 DOM 更新数据时机的后续逻辑处理。

   nextTick 是典型的将底层 JavaScript 执行原理应用到具体案例中的示例，引入异步更新队列机制的原因∶

   - 如果是同步更新，则多次对一个或多个属性赋值，会频繁触发 UI/DOM的渲染，可以减少一些无用渲染。
   - 同时由于 VirtualDOM 的引入，每一次状态发生变化后，状态变化的信号会发送给组件，组件内部使用 VirtualDOM 进行计算得出需要更新的具体的 DOM 节点，然后对 DOM 进行更新操作，每次更新状态后的渲染过程需要更多的计算，而这种无用功也将浪费更多的性能，所以异步渲染变得更加至关重要

   原理总结：

   - 把回调函数放入callbacks等待执行
   - 将执行函数放到微任务或者宏任务中
   - 事件循环到了微任务或者宏任务，执行函数依次执行callbacks中的回调

2. **场景**

   Vue 采用了数据驱动视图的思想，但是在一些情况下，仍然需要操作DOM。有时候，可能遇到这样的情况，DOM1 的数据发生了变化，而 DOM2需要从 DOM1 中获取数据，那这时就会发现 DOM1 的视图并没有更新，这时就需要用到了 nextTick 了。由于 Vue 的 DOM 操作是异步的，所以，在上面的情况中，就要将 DOM2获取数据的操作写在$nextTick 中。所以，在以下情况下会用到 nextTick：

   - 在数据变化后执行的某个操作，而这个操作需要使用随数据变化而变化的 DOM 结构的时候，这个操作就需要方法在 nextTick()的回调函数中。
   - 在 vue 生命周期中，如果在 created()钩子进行 DOM 操作，也一定要放在 nextTick()的回调函数中。因为在 created()钩子函数中，页面的 DOM 还未渲染，这时候也没办法操作 DOM，所以，此时如果想要操作 DOM，必须将操作的代码放在 nextTick()的回调函数中。



## v-if和v-show有什么区别

1. 相同点

   - 作用效果是相同的(不含v-else)，都能控制元素在页面是否显示
   - 在用法上也是相同的：当表达式为true的时候，都会占据页面的位置；当表达式都为false时，都不会占据页面位置

2. 不同点

   - **实现方式**

     v-if是根据后面数据的真假值，判断直接从DOM树上删除或重建元素节点；

     v-show只是修改元素的CSS样式，也就是display的属性值，元素始终在DOM树上

   - **编译过程**

     v-if切换有一个局部编译/卸载的过程，切换过程中合适地销毁和重建内部的事件监听和子组件

     v-show只是简单地基于CSS切换

   - **编译条件**

     v-if是惰性的，如果初始条件为假，则什么也不做，只有在条件第一次变为真时才开始局部编译

     v-show是在任何条件下（无论首次条件是否为真）都被编译，然后被缓存，而且DOM元素始终被保留

   - **性能消耗**

     v-if有较高的切换消耗，不适合做频繁的切换

     而v-show有较高的初始渲染消耗，适合做频繁的切换



## v-if 和 v-for 哪个优先级更高

1. **概念**

   v-if 指令用于条件性地渲染一块内容，这块内容只会在指令的表达式返回 true值的时候被渲染；

   v-for 指令基于一个数组来渲染一个列表，v-for 指令需要使用 item in items 形式的特殊语法，其中 items 是源数据数组或者对象，而 item 则是被迭代的数组元素的别名，在 v-for 的时候，建议设置key值，并且保证每个key值是独一无二的，这便于diff算法进行优化 

2. **优先级**

   v-for 优先于 v-if 被解析，如果同时出现，每次渲染都会先执行循环再判断条件，无论如何循环都不可避免，浪费了性能。

3. **做法**

   要避免出现这种情况，则在外层嵌套 template，在这一层进行 v-if判断，然后在内部进行 v-for 循环。如果条件出现在循环内部，可通过计算属性提前过滤掉那些不需要显示的项



## computed、methods、watch的区别

1. **computed**

   计算属性是用来声明式地描述一个值依赖了其他的值。当在模板中把数据绑定到一个计算属性上时，Vue会在其依赖的任何值导致该计算属性改变时更新DOM。这个功能是非常强大的，它可以让代码更加声明式、数据驱动且易于维护

2. **methods**

   methods函数绑定事件调用，不会使用缓存

3. **watch**

   监听的是定义的变量。当定义变量的值发生变化时，调用对应的方法。在`<div>`中编写一个表达式name，在data中写入num和lastname、firstname。在watch中，当num的值发生变化时，就会调用num的方法，方法里面的形参对应的是num的新值和旧值，而在computed中，计算的是name依赖的值，它不能计算在data中已经定义过的变量。



## 对Vue中的过滤器的理解

1. **概念**

   过滤器（filter）是输送介质管道上不可缺少的一种装置。大白话，就是把一些不必要的东西过滤掉。过滤器实质不改变原始数据，只是对数据进行加工处理后返回过滤后的数据再进行调用处理，我们也可以理解其为一个纯函数。Vue 允许你自定义过滤器，可被用于一些常见的文本格式化。

   注意：Vue3中已废弃filter

2. **原理**

   - 在编译阶段通过parseFilters将过滤器编译成函数调用（串联过滤器则是一个嵌套的函数调用，前一个过滤器执行的结果是后一个过滤器函数的参数）
   - 编译后通过调用resolveFilter函数找到对应过滤器并返回结果
   - 执行结果作为参数传递给toString函数，而toString执行后，其结果会保存在Vnode的text属性中，渲染到视图

3. **使用**

   vue中的过滤器可以用在两个地方：双花括号插值和 v-bind 表达式，过滤器应该被添加在 JavaScript表达式的尾部，由“管道”符号指示：

   ```vue
   <!-- 在双花括号中 -->
   {{ message | capitalize }}
   <!-- 在 `v-bind` 中 -->
   <div v-bind:id="rawId | formatId"></div>
   ```

   在组件的选项中定义本地的过滤器：

   ```js
   filters: {
     capitalize: function (value) {
       if (!value) return ''
       value = value.toString()
       return value.charAt(0).toUpperCase() + value.slice(1)
     }
   }
   ```

   定义全局过滤器：

   ```js
   Vue.filter('capitalize', function (value) {
     if (!value) return ''
     value = value.toString()
     return value.charAt(0).toUpperCase() + value.slice(1)
   })
   
   new Vue({
     // ...
   })
   ```

   注意：当全局过滤器和局部过滤器重名时，会采用局部过滤器

4. **应用场景**

   平时开发中，需要用到过滤器的地方有很多，比如单位转换、数字打点、文本格式化、时间格式化之类的等

   ```js
   Vue.filter('toThousandFilter', function (value) {
        if (!value) return ''
        value = value.toString()
        return .replace(str.indexOf('.') > -1 ? /(\d)(?=(\d{3})+\.)/g : /(\d)(?=(?:\d{3})+$)/g, '$1,')
   })
   ```



## 自定义指令有哪些用法

1. **概念**

   在vue中提供了一套为数据驱动视图更为方便的操作，这些操作被称为指令系统。我们看到的v-开头的行内属性，都是指令，不同的指令可以完成或实现不同的功能。除了核心功能默认内置的指令 (v-model 和 v-show)，Vue 也允许注册自定义指令

   ```js
   //会实例化一个指令，但这个指令没有参数 
   `v-xxx`
   // -- 将值传到指令中
   `v-xxx="value"`  
   // -- 将字符串传入到指令中，如`v-html="'<p>内容</p>'"`
   `v-xxx="'string'"` 
   // -- 传参数（`arg`），如`v-bind:class="className"`
   `v-xxx:arg="value"` 
   // -- 使用修饰符（`modifier`）
   `v-xxx:arg.modifier="value"`
   ```

2. **使用**

   注册一个自定义指令有全局注册与局部注册。全局注册主要是通过Vue.directive方法进行注册，Vue.directive第一个参数是指令的名字（不需要写上v-前缀），第二个参数可以是对象数据，也可以是一个指令函数。部注册通过在组件options选项中设置directive属性。自定义指令也像组件那样存在钩子函数：

   - bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置
   - inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)
   - update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode 更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
   - componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用
   - unbind：只调用一次，指令与元素解绑时调用

   所有的钩子函数的参数都有以下：

   - el：指令所绑定的元素，可以用来直接操作 DOM
   - binding：一个对象，包含以下 property：
     - name：指令名，不包括 v- 前缀。
     - value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
     - oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。
     - expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。
     - arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。
     - modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }
   - vnode：Vue 编译生成的虚拟节点
   - oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用

3. **使用场景**

   - 表单防止重复提交

     ```js
     Vue.directive('throttle', {
       bind: (el, binding) => {
         let throttleTime = binding.value; // 节流时间
         if (!throttleTime) { // 用户若不设置节流时间，则默认2s
           throttleTime = 2000;
         }
         let cbFun;
         el.addEventListener('click', event => {
           if (!cbFun) { // 第一次执行
             cbFun = setTimeout(() => {
               cbFun = null;
             }, throttleTime);
           } else {
             event && event.stopImmediatePropagation();
           }
         }, true);
       },
     });
     // 为button标签设置v-throttle自定义指令
     <button @click="sayHello" v-throttle>提交</button>
     ```

   - 图片懒加载

     ```js
     const LazyLoad = {
         // install方法
         install(Vue,options){
         	  // 代替图片的loading图
             let defaultSrc = options.default;
             Vue.directive('lazy',{
                 bind(el,binding){
                     LazyLoad.init(el,binding.value,defaultSrc);
                 },
                 inserted(el){
                     // 兼容处理
                     if('IntersectionObserver' in window){
                         LazyLoad.observe(el);
                     }else{
                         LazyLoad.listenerScroll(el);
                     }
                     
                 },
             })
         },
         // 初始化
         init(el,val,def){
             // data-src 储存真实src
             el.setAttribute('data-src',val);
             // 设置src为loading图
             el.setAttribute('src',def);
         },
         // 利用IntersectionObserver监听el
         observe(el){
             let io = new IntersectionObserver(entries => {
                 let realSrc = el.dataset.src;
                 if(entries[0].isIntersecting){
                     if(realSrc){
                         el.src = realSrc;
                         el.removeAttribute('data-src');
                     }
                 }
             });
             io.observe(el);
         },
         // 监听scroll事件
         listenerScroll(el){
             let handler = LazyLoad.throttle(LazyLoad.load,300);
             LazyLoad.load(el);
             window.addEventListener('scroll',() => {
                 handler(el);
             });
         },
         // 加载真实图片
         load(el){
             let windowHeight = document.documentElement.clientHeight
             let elTop = el.getBoundingClientRect().top;
             let elBtm = el.getBoundingClientRect().bottom;
             let realSrc = el.dataset.src;
             if(elTop - windowHeight<0&&elBtm > 0){
                 if(realSrc){
                     el.src = realSrc;
                     el.removeAttribute('data-src');
                 }
             }
         },
         // 节流
         throttle(fn,delay){
             let timer; 
             let prevTime;
             return function(...args){
                 let currTime = Date.now();
                 let context = this;
                 if(!prevTime) prevTime = currTime;
                 clearTimeout(timer);
                 
                 if(currTime - prevTime > delay){
                     prevTime = currTime;
                     fn.apply(context,args);
                     clearTimeout(timer);
                     return;
                 }
     
                 timer = setTimeout(function(){
                     prevTime = Date.now();
                     timer = null;
                     fn.apply(context,args);
                 },delay);
             }
         }
     
     }
     export default LazyLoad;
     ```

   - 一键 Copy的功能

     ```js
     import { Message } from 'ant-design-vue';
     const vCopy = { //
       /*
         bind 钩子函数，第一次绑定时调用，可以在这里做初始化设置
         el: 作用的 dom 对象
         value: 传给指令的值，也就是我们要 copy 的值
       */
       bind(el, { value }) {
         el.$value = value; // 用一个全局属性来存传进来的值，因为这个值在别的钩子函数里还会用到
         el.handler = () => {
           if (!el.$value) {
           // 值为空的时候，给出提示，我这里的提示是用的 ant-design-vue 的提示，你们随意
             Message.warning('无复制内容');
             return;
           }
           // 动态创建 textarea 标签
           const textarea = document.createElement('textarea');
           // 将该 textarea 设为 readonly 防止 iOS 下自动唤起键盘，同时将 textarea 移出可视区域
           textarea.readOnly = 'readonly';
           textarea.style.position = 'absolute';
           textarea.style.left = '-9999px';
           // 将要 copy 的值赋给 textarea 标签的 value 属性
           textarea.value = el.$value;
           // 将 textarea 插入到 body 中
           document.body.appendChild(textarea);
           // 选中值并复制
           textarea.select();
           // textarea.setSelectionRange(0, textarea.value.length);
           const result = document.execCommand('Copy');
           if (result) {
             Message.success('复制成功');
           }
           document.body.removeChild(textarea);
         };
         // 绑定点击事件，就是所谓的一键 copy 啦
         el.addEventListener('click', el.handler);
       },
       // 当传进来的值更新的时候触发
       componentUpdated(el, { value }) {
         el.$value = value;
       },
       // 指令与元素解绑的时候，移除事件绑定
       unbind(el) {
         el.removeEventListener('click', el.handler);
       },
     };
     export default vCopy;
     ```



## Vue常用的修饰符

1. **概念**

   在程序世界里，修饰符是用于限定类型以及类型成员的声明的一种符号。
   在Vue中，修饰符处理了许多DOM事件的细节，让我们不再需要花大量的时间去处理这些烦恼的事情，而能有更多的精力专注于程序的逻辑处理

2. **分类**

   - 表单修饰符：lazy、trim、number

     ```vue
     <!--在我们填完信息，光标离开标签的时候，才会将值赋予给value，也就是在change事件之后再进行信息同步-->
     <input type="text" v-model.lazy="value">
     <!--自动过滤用户输入的首空格字符，而中间的空格不会过滤-->
     <input type="text" v-model.trim="value">
     <!--自动将用户的输入值转为数值类型，但如果这个值无法被parseFloat解析，则会返回原来的值-->
     <input v-model.number="age" type="number">
     ```

   - 事件修饰符：stop、prevent、self、once、capture、passive、native

     ```vue
     <!--阻止了事件冒泡，相当于调用了event.stopPropagation方法-->
     <div @click="shout(2)">
       <button @click.stop="shout(1)">ok</button>  <!--只输出1-->
     </div>
     <!--阻止了事件的默认行为，相当于调用了event.preventDefault方法-->
     <form v-on:submit.prevent="onSubmit"></form>
     <!--只当在 event.target 是当前元素自身时触发处理函数-->
     <div v-on:click.self="doThat">...</div>
     <!--绑定了事件以后只能触发一次，第二次就不会触发-->
     <button @click.once="shout(1)">ok</button>
     <!--使事件触发从包含这个元素的顶层开始往下触发-->
     <div @click.capture="shout(1)">
         <div @click.capture="shout(2)">
             <div @click="shout(3)">
                 <div @click="shout(4)">obj4</div>
             </div>
         </div>
     </div>
     <!--相当于给onscroll事件整了一个.lazy修饰符, 滚动事件的默认行为 (即滚动行为) 将会立即触发,不会等待 `onScroll` 完成-->
     <div v-on:scroll.passive="onScroll">...</div>
     <!--让组件变成像html内置标签那样监听根元素的原生事件，否则组件上使用 v-on 只会监听自定义事件-->
     <!--使用.native修饰符来操作普通HTML标签是会令事件失效的-->
     <my-component v-on:click.native="doSomething"></my-component>
     ```

   - 鼠标按键修饰符：left、right、middle

     ```vue
     <button @click.left="shout(1)">ok</button>
     <button @click.right="shout(1)">ok</button>
     <button @click.middle="shout(1)">ok</button>
     ```

   - 键值修饰符：普通键（enter、tab、delete、space、esc、up...）、系统修饰键（ctrl、alt、meta、shift...）

     ```vue
     <!--只有按键为keyCode的时候才触发-->
     <!--Vue.config.keyCodes.f2 = 113-->
     <input type="text" @keyup.keyCode="shout()">
     ```

   - v-bind修饰符：

     - async：能对props进行一个双向绑定。使用async需要注意以下两点：使用sync的时候，子组件传递的事件名格式必须为update:value，其中value必须与子组件中props中声明的名称完全一致；注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用，将 v-bind.sync 用在一个字面量的对象上，例如 v-bind.sync=”{ title: doc.title }”，是无法正常工作的。

       ```js
       // 父组件
       <comp :myMessage.sync="bar"></comp>
       /* 等价于
       *<comp :myMessage="bar" @update:myMessage="func"></comp>
       * func(e){
       *   this.bar = e;
       * }
       */
       // 子组件
       this.$emit('update:myMessage',params);
       ```

     - prop：设置自定义标签属性，避免暴露数据，防止污染HTML结构

       ```vue
       <input id="uid" title="title1" value="1" :index.prop="index">
       ```

     - camel：将命名变为驼峰命名法，如将view-Box属性名转换为 viewBox

       ```vue
       <svg :viewBox="viewBox"></svg>
       ```

3. **应用场景**

   根据每一个修饰符的功能，可以得到以下修饰符的应用场景：

   - .stop：阻止事件冒泡
   - .native：绑定原生事件
   - .once：事件只执行一次
   - .self ：将事件绑定在自身身上，相当于阻止事件冒泡
   - .prevent：阻止默认事件
   - .caption：用于事件捕获
   - .once：只触发一次
   - .keyCode：监听特定键盘按下
   - .right：右键



## Vue中Key值的作用是什么

1. **概念**

   key是给每一个vnode的唯一id，也是diff的一种优化策略，可以根据key，更准确， 更快的找到对应的vnode节点。

2. **过渡中使用key**

   在Vue中使用相同标签名元素过渡切换时，会使用到Key属性，其目的是让Vue可以区分它们，否则Vue只会替换其内部属性，而不会触发过渡效果。

3. **v-if中使用key**

   由于 Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。因此当使用 v-if 来实现元素切换的时候，如果切换前后含有相同类型的元素，那么这个元素就会被复用。

   如果是相同的 input 元素，那么切换前后用户的输入不会被清除掉，这样是不符合需求的。因此可以通过使用 key 来唯一的标识一个元素，这个情况下，使用 key 的元素不会被复用。这个时候 key 的作用是用来标识一个独立的元素。

4. **v-for使用key**

   当 Vue.js 用 v-for 正在更新已渲染过的元素列表时，它默认用“就地复用”策略。如果数据项的顺序被改变，Vue 将不会移动 DOM 元素来匹配数据项的顺序， 而是简单复用此处每个元素，并且确保它在特定索引下显示已被渲染过的每个元素。因此通过为每个列表项提供一个 key 值，来以便 Vue跟踪元素的身份，从而高效的实现复用。这个时候 key 的作用是为了高效的更新渲染虚拟 DOM。这个默认的模式是高效的，但是只适用于不依赖子组件状态或临时 DOM 状态 (例如：表单输入值) 的列表渲染输出。建议尽可能在使用 v-for 时提供 key，除非遍历输出的 DOM 内容非常简单，或者是刻意依赖默认行为以获取性能上的提升。



## 对虚拟dom的理解

1. **概念**

   虚拟DOM其实就是一棵以JavaScript对象（VNode节点）作为基础的树，用对象属性来描述节点。实际上，它只是一层对真实DOM的抽象，最终可以通过一系列操作使这棵树映射到真实环境上。简单来说，可以把虚拟DOM理解为一个简单的JavaScript对象，并且最少包含标签名（tag）、属性（attrs）和子元素对象（children）三个属性。不同的框架对这三个属性的命名会有所区别。

   createElement 创建 VNode 的过程，每个 VNode 有 children，children 每个元素也是一个VNode，这样就形成了一个虚拟树结构，用于描述真实的DOM树结构

2. **作用**

   - DOM是很慢的，其元素非常庞大，页面的性能问题，大部分都是由DOM操作引起的，操作DOM的代价仍旧是昂贵的，频繁操作还是会出现页面卡顿，影响用户的体验。
   - 很多人认为虚拟 DOM 最大的优势是 diff 算法，减少 JavaScript 操作真实 DOM 的带来的性能消耗。虽然这一个虚拟 DOM 带来的一个优势，但并不是全部。
   - 虚拟 DOM 最大的优势在于抽象了原本的渲染过程，实现了跨平台的能力，而不仅仅局限于浏览器的 DOM，可以是安卓和 IOS 的原生组件，可以是近期很火热的小程序，也可以是各种GUI。

3. **解析过程**

   首先对将要插入到文档中的 DOM 树结构进行分析，使用 js 对象将其表示出来，比如一个元素对象，包含 TagName、props 和 Children这些属性。然后将这个 js 对象树给保存下来，最后再将 DOM 片段插入到文档中。

   当页面的状态发生改变，需要对页面的 DOM 的结构进行调整的时候，首先根据变更的状态，重新构建起一棵对象树，然后将这棵新的对象树和旧的对象树进行比较，记录下两棵树的的差异。最后将记录的有差异的地方应用到真正的 DOM 树中去，这样视图就更新了。

4. **diff算法**

   在新老虚拟 DOM 对比时：

   - 首先，对比节点本身，判断是否为同一节点，如果不为相同节点，则删除该节点重新创建节点进行替换；
   - 如果为相同节点，进行 patchVnode，判断如何对该节点的子节点进行处理，先判断一方有子节点一方没有子节点的情况(如果新的children 没有子节点，将旧的子节点移除)；
   - 比较如果都有子节点，则进行 updateChildren。判断如何对这些新老节点的子节点进行操作（diff 核心）。
   - 匹配时，找到相同的子节点，递归比较子节点在 diff 中，只对同层的子节点进行比较，放弃跨级的节点比较，使得时间复杂从 O(n3)降低值 O(n)，也就是说，只有当新旧 children都为多个子节点时才需要用核心的 Diff 算法进行同层级比较。

   总结其有两个特点：

   - 比较只会在同层级进行, 不会跨层级比较
   - 在diff比较的过程中，循环从两边向中间比较
   - vue2使用双端diff算法、vue3使用快速diff算法



## 对 Vue 组件化的理解

1. **概念**

   组件是独立和可复用的代码组织单元。组件系统是 Vue 核心特性之一，它使开发者使用小型、独立和通常可复用的组件构建大型应用；组件应该是高内聚、低耦合的。vue 的组件是基于配置的，我们通常编写的组件是组件配置而非组件，框架后续会生成其构造函数，它们基于 VueComponent，扩展于Vue。组件化开发能大幅提高应用开发效率、测试性、复用性等。

2. **分类**

   组件使用按分类有：页面组件、业务组件、通用组件；

   合理的划分组件，有助于提升应用性能；

3. **使用**

   vue 中常见组件化技术有：属性 prop，自定义事件，插槽等，它们主要用于组件通信、扩展等；

4. **原则**

   遵循单向数据流的原则：

   - Vue 提倡单向数据流，即父级 props 的更新会流向子组件，但是反过来则不行。这是为了防止意外的改变父组件状态，使得应用的数据流变得难以理解，导致数据流混乱。如果破坏了单向数据流，当应用复杂时，debug 的成本会非常高。只能通过 $emit 派发一个自定义事件，父组件接收到后，由父组件修改。
   - 子组件不可以直接改变父组件的数据。这样做主要是为了维护父子组件的单向数据流。每次父级组件发生更新时，子组件中所有的 prop都将会刷新为最新的值。



## Vue的生命周期是什么

1. **beforeCreate：组件实例被创建之初**

   数据观测和初始化事件还未开始，此时data 的响应式追踪、event/watcher 都还没有被设置，也就是说不能访问到 data、computed、watch、methods 上的方法和数据。

2. **created：组件实例已经完全创建**

   实例创建完成，实例上配置的 options 包括 data、computed、watch、methods 等都配置完成，但是此时渲染的节点还未挂载到 DOM，所以不能访问到 $el 属性。一般在此节点请求异步数据。

3. **beforeMount：组件挂载之前**

   在挂载开始之前被调用，相关的 render函数首次被调用。实例已完成以下的配置：编译模板，把 data 里面的数据和模板生成 html。此时还没有挂载 html 到页面上。

4. **mounted：组件挂载到实例上去之后**

   在 el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用。实例已完成以下的配置：用上面编译好的 html 内容替换 el 属性指向的 DOM 对象。完成模板中的 html 渲染到 html 页面中。此过程中进行 ajax 交互。

5. **beforeUpdate：组件数据发生变化，更新之前**

   响应式数据更新时调用，此时虽然响应式数据更新了，但是对应的真实 DOM 还没有被渲染。

6. **updated：组件数据更新之后**

   在由于数据更改导致的虚拟 DOM 重新渲染和打补丁之后调用。此时 DOM 已经根据响应式数据的变化更新了。调用时，组件 DOM 已经更新，所以可以执行依赖于 DOM 的操作。然而在大多数情况下，应该避免在此期间更改状态，因为这可能会导致更新无限循环。该钩子在服务器端渲染期间不被调用

7. **beforeDestroy：组件实例销毁之前**

   这一步，实例仍然完全可用，this 仍能获取到实例。

8. **destored：组件实例销毁之后**

   实例销毁后调用，调用后，Vue 实例指示的所有东西都会解绑定，所有的事件监听器会被移除，所有的子实例也会被销毁。该钩子在服务端渲染期间不被调用。

9. **activated：keep-alive 缓存的组件激活时**

   用 keep-alive 包裹的组件在切换时不会进行销毁，而是缓存到内存中并执行 deactivated 钩子函数，命中缓存渲染后会执行 activated钩子函数

10. **deactivated：keep-alive 缓存的组件停用时调用**

11. **errorCaptured：捕获一个来自子孙组件的错误时被调用**



## Vue组件间是如何传值通信

1. 父子组件传值

   - **props+emit**

     子组件通过 props 属性来接受父组件的数据，

     然后父组件在子组件上注册监听事件，子组件通过 emit 触发事件来向父组件发送数据 

     ```vue
     <Children @add="cartAdd($event)" name="jack" age=18 />
     <script>
     props:{  
      	name:String // 接收的类型参数  
       	age:{    
             type:Number, // 接收的类型为数值  
             defaule:18,  // 默认值为18  
             require:true // age属性必须传递  
         }  
     } 
     this.$emit('add', good)  
     </script>
     ```

   - **ref**

     通过 ref 属性给子组件设置一个名字。父组件通过 $refs 组件名来获得子组件，

     子组件通过 $parent 获得父组件，这样也可以实现通信 

     ```js
     <Children ref="foo" />  
     this.$refs.foo  // 获取子组件实例，通过子组件实例我们就能拿到对应的数据  
     ```

2. 兄弟组件传值

   - **eventBus**

     用eventBus创建一个事件中心（相当于中转站），用来传递事件和接收事件。兄弟组件通过$emit触发自定义事件，$emit第二个参数为传递的数值。另一个兄弟组件通过$on监听自定义事件

     ```js
     // 创建一个中央时间总线类  
     class Bus {  
       constructor() {  
         this.callbacks = {};   // 存放事件的名字  
       }  
       $on(name, fn) {  
         this.callbacks[name] = this.callbacks[name] || [];  
         this.callbacks[name].push(fn);  
       }  
       $emit(name, args) {  
         if (this.callbacks[name]) {  
           this.callbacks[name].forEach((cb) => cb(args));  
         }  
       }  
     }  
     // main.js  
     Vue.prototype.$bus = new Bus() // 将$bus挂载到vue实例的原型上  
     // 另一种方式  
     Vue.prototype.$bus = new Vue() // Vue已经实现了Bus的功能 
     this.$bus.$emit('foo') 
     this.$bus.$on('foo', this.handle) 
     ```

   - **$parent.$refs**

     通过共同祖辈$parent或者$root搭建通信桥连

     ```js
     this.$parent.on('add',this.add)
     this.$parent.emit('add')
     ```

3. 祖孙与后代组件传值

   - **provider/inject**

     在祖先组件中通过 provider 提供变量，在子孙组件中通过 inject 来将变量注入到组件中，不论子组件有多深，只要调用了 inject 那么就可以注入 provider 中的数据 

     ```js
     provide(){  
         return {  
             foo:'foo'  
         }  
     } 
     inject:['foo'] // 获取到祖先组件传递过来的值
     ```

   - **$attrs 与$ listeners**

     设置批量向下传属性$attrs和 $listeners，包含了父级作用域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。可以通过 v-bind="$attrs" 传⼊内部组件

     ```vue
     <Child2 msg="lalala" @some-event="onSomeEvent"></Child2>  
     // Child2做展开  
     <Grandson v-bind="$attrs" v-on="$listeners"></Grandson>  
     // Grandson使⽤  
     <div @click="$emit('some-event', 'msg from grandson')">  {{msg}}  </div>  
     ```

4. 任意组件传值

   - **eventbus**

     使用 eventBus ，其实就是创建一个事件中心，相当于中转站，可以用它来传递事件和接收事件 

   - **vuex**

     如果业务逻辑复杂，很多组件之间需要同时处理一些公共的数据，这个时候采用上面这一些方法可能不利于项目的维护。这个时候可以使用 vuex ，vuex 的思想就是将这一些公共的数据抽离出来，将它作为一个全局的变量来管理，然后其他组件就可以对这个公共数据进行读写操作，这样达到了解耦的目的



## Vue子组件调用父组件方法的方式

1. **this.$parent.event**

   直接在子组件中通过this.$parent.event来调用父组件的方法

2. **$emit**

   在子组件中用$emit向父组件触发一个事件，父组件监听这个事件



## Vue 子组件和父组件执行顺序

1. **加载渲染过程**
   - 父组件 beforeCreate
   - 父组件 create
   - 父组件 beforeMountd
   - 子组件 beforeCreate
   - 子组件 created
   - 子组件 beforeMount
   - 子组件 mounted
   - 父组件 mounted
2. **更新过程**
   - 父组件 beforeUpdate
   - 子组件 beforeUpdate
   - 子组件 updated
   - 父组件 updated
3. **销毁过程**
   - 父组件 beforeDestroy
   - 子组件 beforeDestroy
   - 子组件 destroyed
   - 父组件 destoryed



## 对keep-alive的理解

1. **概念**

   keep-alive是vue中的内置组件，能在组件切换过程中将状态保留在内存中，防止重复渲染DOM。keep-alive 包裹动态组件时，会缓存不活动的组件实例，而不是销毁它们。

   keep-alive可以设置以下props属性：

   - include - 字符串或正则表达式。只有名称匹配的组件会被缓存
   - exclude - 字符串或正则表达式。任何名称匹配的组件都不会被缓存
   - max - 数字。最多可以缓存多少组件实例

2. **使用场景**

   使用原则：当我们在某些场景下不需要让页面重新加载时我们可以使用keepalive

   例如：从首页–>列表页–>商详页–>返回到列表页(需要缓存)–>返回到首页(需要缓存)–>再次进入列表页(不需要缓存)，这时候可以按需来控制页面的keep-alive。在路由中设置keepAlive属性判断是否需要缓存

   ```vue
   {
     path: 'list',
     name: 'itemList', // 列表页
     component (resolve) {
       require(['@/pages/item/list'], resolve)
    },
    meta: {
     keepAlive: true,
     title: '列表页'
    }
   }
   
   <div id="app" class='wrapper'>
       <keep-alive>
           <!-- 需要缓存的视图组件 --> 
           <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
         <!-- 不需要缓存的视图组件 -->
        <router-view v-if="!$route.meta.keepAlive"></router-view>
   </div>
   ```

3. **原理**

   关于keep-alive的最强大缓存功能是在render函数中实现：

   - 首先获取组件的key值
   - 拿到key值后去this.cache对象中去寻找是否有该值，如果有则表示该组件有缓存，即命中缓存。直接从缓存中拿 vnode 的组件实例，此时重新调整该组件key的顺序，将其从原来的地方删掉并重新放在this.keys中最后一个
   - this.cache对象中没有该key值的情况，则以该组件的key为键，组件vnode为值，将其存入this.cache中，并且把key存入this.keys中，此时再判断this.keys中缓存组件的数量是否超过了设置的最大缓存数量值this.max，如果超过了，则把第一个缓存组件删掉



## 对插槽slot的理解

1. **概念**

   是 Vue 的内容分发机制，组件内部的模板引擎使用slot 元素作为承载分发内容的出口。插槽 slot 是子组件的一个模板标签元素，而这一个标签元素是否显示，以及怎么显示是由父组件决定的

2. **分类**

   - **默认插槽**

     又名匿名插槽，当 slot 没有指定 name 属性值的时候一个默认显示插槽，一个组件内只有有一个匿名插槽。

     ```vue
     <Child>
       <div>默认插槽</div>  
     </Child>
     <template>
         <slot>
           <p>插槽后备的内容</p>
         </slot>
     </template>
     ```

   - **具名插槽**

     带有具体名字的插槽，也就是带有 name 属性的 slot，一个组件可以出现多个具名插槽。

     ```vue
     <child>
         <template v-slot:default>具名插槽</template>
         <!-- 具名插槽⽤插槽名做参数 -->
         <template v-slot:content>内容...</template>
     </child>
     <template>
         <slot>插槽后备的内容</slot>
       	<slot name="content">插槽后备的内容</slot>
     </template>
     ```

   - **作用域插槽**

     默认插槽、具名插槽的一个变体，可以是匿名插槽，也可以是具名插槽，该插槽的不同点是在子组件渲染作用域插槽时，可以将子组件内部的数据传递给父组件，让父组件根据子组件的传递过来的数据决定如何渲染该插槽

     ```vue
     <child> 
         <!-- 把v-slot的值指定为作⽤域上下⽂对象 -->
         <template v-slot:default="slotProps">
           来⾃⼦组件数据：{{slotProps.testProps}}
         </template>
         <template #default="slotProps">
           来⾃⼦组件数据：{{slotProps.testProps}}
         </template>
     </child>
     <template> 
       <slot name="footer" testProps="子组件的值">
               <h3>没传footer插槽</h3>
         </slot>
     </template>
     ```

3. **原理**

   子组件 vm 实例化时，获取到父组件传入的 slot 标签的内容，存放在 vm.$slot 中，默认插槽为 vm.$slot.default，具名插槽为 vm.$slot.xxx，xxx 为插槽名，当组件执行渲染函数时候，遇到 slot 标签，使用$slot 中的内容进行替换，此时可以为插槽传递数据，若存在数据，则可称该插槽为作用域插槽。

   ```js
   function renderSlot (
     name,
     fallback,
     props,
     bindObject
   ) {
     // 得到渲染插槽内容的函数    
     var scopedSlotFn = this.$scopedSlots[name];
     var nodes;
     // 如果存在插槽渲染函数，则执行插槽渲染函数，生成nodes节点返回
     // 否则使用默认值
     nodes = scopedSlotFn(props) || fallback;
     return nodes;
   }
   ```



## 对vue的mixin的理解

1. **概念**

   Mixin是面向对象程序设计语言中的类，提供了方法的实现。其他类可以访问mixin类的方法而不必成为其子类。Mixin类通常作为功能模块使用，在需要该功能时“混入”，有利于代码复用又避免了多继承的复杂。

   Vue中的mixin本质其实就是一个js对象，它可以包含我们组件中任意功能选项，如data、components、methods、created、computed等等。我们只要将共用的功能以对象的方式传入 mixins选项中，当组件使用 mixins对象时所有mixins对象的选项都将被混入该组件本身的选项中来

2. **分类**

   - **局部混入**

     定义一个mixin对象，有组件options的data、methods属性

     ```js
     var myMixin = {
       created: function () {
         this.hello()
       },
       methods: {
         hello: function () {
           console.log('hello from mixin!')
         }
       }
     }
     ```

     组件通过mixins属性调用mixin对象

     ```js
     Vue.component('componentA',{
       mixins: [myMixin]
     })
     ```

     该组件在使用的时候，混合了mixin里面的方法，在自动执行created生命钩子，执行hello方法

   - **全局混入**

     通过Vue.mixin()进行全局的混入

     ```js
     Vue.mixin({
       created: function () {
           console.log("全局混入")
         }
     })
     ```

     使用全局混入需要特别注意，因为它会影响到每一个组件实例（包括第三方组件）

     注意：全局混入常用于插件的编写

3. **使用**

   在日常的开发中，我们经常会遇到在不同的组件中经常会需要用到一些相同或者相似的代码，这些代码的功能相对独立。这时，可以通过Vue的mixin功能将相同或者相似的代码提出来

   注意：当组件存在与mixin对象相同的选项的时候，进行递归合并的时候组件的选项会覆盖mixin的选项。但是如果相同选项为生命周期钩子的时候，会合并成一个数组，先执行mixin的钩子，再执行组件的钩子

4. **原理（策略）**

   - 替换型策略有props、methods、inject、computed，就是将新的同名参数替代旧的参数
   - 合并型策略是data, 通过set方法进行合并和重新赋值
   - 队列型策略有生命周期函数和watch，原理是将函数存入一个数组，然后正序遍历依次执行
   - 叠加型有component、directives、filters，通过原型链进行层层的叠加

5. **与extend的区别**

   mixin 和 extends 均是用于合并、拓展组件的，两者均通过mergeOptions 方法实现合并。

   - mixins 接收一个混入对象的数组，其中混入对象可以像正常的实例对象一样包含实例选项，这些选项会被合并到最终的选项中。Mixin钩子按照传入顺序依次调用，并在调用组件自身的钩子之前被调用。
   - extends 主要是为了便于扩展单文件组件，接收一个对象或构造函数。返回一个未被实例化的vue子类。



## 过渡动画实现的方式

1. 使用Vue的`<transition>`标签结合CSS样式
2. 利用Animate.css结合`<transition>`实现动画
3. 利用Vue中的钩子函数实现动画



## vue3有什么更新

1. 新增特性

   - **createRenderer**

     支持自定义渲染器，我们能够构建自定义渲染器，我们能够将 vue 的开发模型扩展到其他平台。我们可以将其生成在canvas画布上。

     ```js
     import { createRenderer } from '@vue/runtime-core'
     const { render, createApp } = createRenderer({
       patchProp,
       insert,
       remove,
       createElement,
       // ...
     })
     export { render, createApp }
     export * from '@vue/runtime-core'
     ```

   - **framents**

     支持 Fragment（多个根节点）

     ```vue
     <!-- Layout.vue -->
     <template>
       <header>...</header>
       <main v-bind="$attrs">...</main>
       <footer>...</footer>
     </template>
     ```

   - **Teleport**

     Teleport 是一种能够将我们的模板移动到 DOM 中 Vue app 之外的其他位置的技术，就有点像哆啦A梦的“任意门”。在vue2中，像 modals,toast 等这样的元素，如果我们嵌套在 Vue 的某个组件内部，那么处理嵌套组件的定位、z-index 和样式就会变得很困难

     通过Teleport，我们可以在组件的逻辑位置写模板代码，然后在 Vue 应用范围之外渲染它

     ```vue
     <button @click="showToast" class="btn">打开 toast</button>
     <!-- to 属性就是目标位置 -->
     <teleport to="#teleport-target">
         <div v-if="visible" class="toast-wrap">
             <div class="toast-msg">我是一个 Toast 文案</div>
         </div>
     </teleport>
     ```

   - **composition Api**

     也就是组合式api，通过这种形式，我们能够更加容易维护我们的代码，将相同功能的变量进行一个集中式的管理

2. 性能提升

   - 编译阶段

     - **diff算法优化**

       vue3在diff算法中相比vue2增加了静态标记。关于这个静态标记，其作用是为了会发生变化的地方添加一个flag标记，下次发生变化的时候直接找该地方进行比较

     - **静态提升**

       vue3中对不参与更新的元素，会做静态提升，只会被创建一次，在渲染时直接复用。这样就免去了重复的创建节点，大型应用会受益于这个改动，免去了重复的创建操作，优化了运行时候的内存占用

     - **事件监听缓存**

       默认情况下绑定事件行为会被视为动态绑定，所以每次都会去追踪它的变化。开启了缓存后，没有了静态标记。也就是说下次diff算法的时候直接使用

     - **SSR优化**

       当静态内容大到一定量级时候，会用createStaticVNode方法在客户端去生成一个static node，这些静态node，会被直接innerHtml，就不需要创建对象，然后根据对象渲染

   - **源码体积**

     相比Vue2，Vue3整体体积变小了，除了移出一些不常用的API，再重要的是Tree shanking

     任何一个函数，如ref、reavtived、computed等，仅仅在用到的时候才打包，没用到的模块都被摇掉，打包的整体体积变小

     ```js
     import { computed, defineComponent, ref } from 'vue';
     export default defineComponent({
         setup(props, context) {
             const age = ref(18)
             let state = reactive({
                 name: 'test'
             })
             const readOnlyAge = computed(() => age.value++) // 19
             return {
                 age,
                 state,
                 readOnlyAge
             }
         }
     });
     ```

   - **响应式系统**

     vue2中采用 defineProperty来劫持整个对象，然后进行深度遍历所有属性，给每个属性添加getter和setter，实现响应式。限制是：检测不到对象属性的添加和删除；数组API方法无法监听到；需要对每个属性进行遍历监听，如果嵌套对象，需要深层监听，造成性能问题

     vue3采用proxy重写了响应式系统，因为proxy可以对整个对象进行监听，所以不需要深度遍历：可以监听动态属性的添加；可以监听到数组的索引和数组length属性；可以监听删除属性



## 对Composition Api的理解

1. **概念**

   Composition API 可以说是Vue3的最大特点，那么为什么要推出Composition Api，解决了什么问题？

   通常使用Vue2开发的项目，普遍会存在以下问题：

   - 代码的可读性随着组件变大而变差
   - 每一种代码复用的方式，都存在缺点
   - TypeScript支持有限

   以上通过使用Composition Api都能迎刃而解

2. **常用**

   - 导入的组件直接使用

   - props 接受外部参数

     ```js
      const { msg } = defineProps({
         msg: String
     })
     ```

   - emit 向外发布事件

     ```js
     const emit = defineEmits(['clickOut']);
     function clickOut(){
         emit('clickOut', 100)
     }
     ```

   - 数据

     ```js
     // 普通数据、简单响应数据、复杂响应数据、只读数据
     let message1 = 'hello1';
     let message2 = ref('hello2');
     let message3 = reactive({ msg: 'hello3' });
     let message4 = readonly(message3);
     ```

   - 方法

     ```js
     // 方法
     function btnClick() {
         console.log('click')
     }
     ```

   - 计算属性computed 

     ```js
     // 计算属性computed 
     const addMessage = computed(() => {
         return message1 + message2.value
     })
     ```

   - 监听watch和 watchEffect

     ```js
     // 监听watch和 watchEffect
     watch(message2, (newValue, oldValue) => {
         console.log(newValue, oldValue)
     })
     watch(message3, (newValue, oldValue) => {
         console.log(newValue, oldValue)
     },{
         deep: true,
         immediate: true,
     })
     watchEffect( ()=> { // 返回值调用可以停止监听
         console.log(message2.value);
     })
     ```

   - 生命周期

     ```js
     const ulRef = ref();
     console.log('beforeCreate和create周期都在setup里面完成');
     onBeforeMount( () => {
         console.log('onBeforeMount')
     })
     onMounted( () => {
         console.log(ulRef.value);
         console.log('onMounted');
     })
     onBeforeUpdate( () => {
         console.log('onBeforeUpdate')
     })
     onUpdated( () => {
         console.log('onUpdated')
     })
     onBeforeUnmount( () => {
         console.log('onBeforeUnmount')
     })
     onUnmounted( () => {
         console.log('onUnmounted')
     })
     ```

   - 通信：provide和inject

     ```js
     // 通信：provide和inject
     let count = inject('count')
     ```

   - 向外暴漏函数

     ```js
     // 向外暴漏函数
     defineExpose(['btnclick']);
     ```

3. **优点**

   - 逻辑组织和逻辑复用方面，Composition API是优于Options API
   - 因为Composition API几乎是函数，会有更好的类型推断。
   - Composition API对 tree-shaking 友好，代码也更容易压缩
   - Composition API中见不到this的使用，减少了this指向不明的情况
   - 如果是小型组件，可以继续使用Options API，也是十分友好的



## 对vue-router的理解

1. **概念**

   $route是“路由信息”对象，包括path、params、hash、query、fullPath、matched、name等路由信息参数。

   $router是“路由实例”对象，包括路由的跳转方法、钩子函数等。

2. **原理**

   vue-router的原理就是通过对URL地址变化的监听，继而对不同的组件进行渲染。每当URL地址改变时，就对相应的组件进行渲染 。

   利用 vue-router 的 beforeEach 事件，可以在跳转页面前判断用户的权限（利用 cookie 或 token），是否能够进入此页面，如果不能则提示错误或重定向到其他页面，在后台管理系统中这种场景经常能遇到 。

3. **导航守卫**

   - 全局守卫：
     - beforeEach 路由进入之前
     - beforeResolve路由解析之前
     - after路由进入之后
   - 组件内的钩子
     - beforeRouteEnter路由进入之前、
     - beforeRouteUpdate路由更新之前、
     - beforeRouteLeave路由离开之前
   - 单独路由独享组件
     - beforeEnter 路由进入之前

4. **流程**

   触发进入其他路由：

   - 调用要离开路由的组件守卫beforeRouteLeave 
   - 调用全局前置守卫：beforeEach 
   - 在重用的组件里调用 beforeRouteUpdate 
   - 调用路由独享守卫 beforeEnter。 

   解析异步路由组件：

   - 在将要进入的路由组件中调用beforeRouteEnter 
   - 调用全局解析守卫 beforeResolve 导航被确认。 
   - 调用全局后置钩子的 afterEach 钩子。 

   触发DOM更新(mounted)：

   - 执行beforeRouteEnter 守卫中传给 next 的回调函数



## 路由模式的区别

1. **hash模式**

   简介：hash 模式是开发中默认的模式，它的 URL 带着一个#，例如：http://www.abc.com/#/vue，它的 hash 值就是#/vue。

   特点：hash 值会出现在 URL 里面，但是不会出现在 HTTP 请求中，对后端完全没有影响。所以改变 hash 值，不会重新加载页面。这种模式的浏览器支持度很好，低版本的 IE 浏览器也支持这种模式。hash路由被称为是前端路由，已经成为 SPA（单页面应用）的标配

   原理： hash 模式的主要原理就是 onhashchange()事件
   ```js
   window.onhashchange = function(event){
    console.log(event.oldURL,event.newURL);
    let hash = location.hash.slice(1);
   }
   ```

   使用 onhashchange()事件的好处就是，在页面的 hash 值发生变化时，无需向后端发起请求，window 就可以监听事件的改变，并按规则加载相应的代码。除此之外，hash 值变化对应的 URL 都会被浏览器记录下来，这样浏览器就能实现页面的前进和后退。虽然是没有请求后端服务器，但是页面的 hash 值和对应的 URL 关联起来了。

2. **history模式**

   简介： history 模式的 URL 中没有#，它使用的是传统的路由分发模式，即用户在输入一个 URL 时，服务器会接收这个请求，并解析这个URL，然后做出相应的逻辑处理。

   特 点 ： 当 使 用 history 模 式 时 ， URL 就 像 这 样 ：http://abc.com/user/id。相比 hash 模式更加好看。但是，history模式需要后台配置支持。如果后台没有正确配置，访问时会返回 404。

   API： history api 可以分为两大部分，切换历史状态和修改历史状态：

   - 修 改 历 史 状 态 ： 包 括 了 HTML5 History Interface 中 新 增 的pushState() 和 replaceState() 方法，这两个方法应用于浏览器的历史记录栈，提供了对历史记录进行修改的功能。只是当他们进行修改时，虽然修改了 url，但浏览器不会立即向后端发送请求。如果要做到改变 url 但又不刷新页面的效果，就需要前端用上这两个 API。
   - 切换历史状态： 包括 forward()、back()、go()三个方法，对应浏览器的前进，后退，跳转操作。

   缺点：虽然 history 模式丢弃了丑陋的#。但是，它也有自己的缺点，就是在刷新页面的时候，如果没有相应的路由或资源，就会刷出 404 来。如果想要切换到 history 模式，就要进行以下配置（后端也要进行配置）
   ```js
   const router = new VueRouter({
    	mode: 'history',
    	routes:[...]
   });
   ```

3. **区别**

   hash 模式和 history 模式都有各自的优势和缺陷，要根据实际情况选择性的使用。调用 history.pushState() 相比于直接修改 hash，存在以下优势:

   - pushState() 设置的新 URL 可以是与当前 URL 同源的任意 URL；而hash 只可修改 # 后面的部分，因此只能设置与当前 URL 同文档的URL；
   - pushState() 设置的新 URL 可以与当前 URL 一模一样，这样也会把记录添加到栈中；而 hash 设置的新值必须与原来不一样才会触发动作将记录添加到栈中；
   - pushState() 通过 stateObject 参数可以添加任意类型的数据到记录中；而 hash 只可添加短字符串；
   - pushState() 可额外设置 title 属性供后续使用。
   - hash 模式下，仅 hash 符号之前的 url 会被包含在请求中，后也不会返回 404 错误；history 模式下，前端的 url 必须端如果没有做到对路由的全覆盖，和实际向后端发起请求的 url 一致，如果没有对用的路由处理，将返回 404 错误。



## 对Vuex 的理解

1. **原理**

   Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。每一个Vuex 应用的核心就是 store（仓库）。“store” 基本上就是一个容器，它包含着你的应用中大部分的状态 ( state )。Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。改变store中的状态的唯一途径就是显式地提交 (commit)mutation。这样可以方便地跟踪每一个状态的变化。
   Vuex 为 Vue Components 建立起了一个完整的生态圈，包括开发中的API 调用一环。

   Vuex 实现了一个单向数据流，在全局拥有一个 State 存放数据，当组件要更改 State 中的数据时，必须通过 Mutation 提交修改信息， Mutation 同时提供了订阅者模式供外部插件调用获取 State 数据的更新。而当所有异步操作(常见于调用后端接口异步获取更新数据)或批量的同步操作需要走 Action ，但 Action 也是无法直接修改State 的，还是需要通过 Mutation 来修改 State 的数据。最后，根据 State 的变化，渲染到视图上。

2. 属性

   - **state ：基本数据(数据源存放地)**

     页面状态管理容器对象。集中存储 Vuecomponents 中 data对象的零散数据，全局唯一，以进行统一的状态管理。页面显示所需的数据从该对象中进行读取，利用 Vue 的细粒度数据响应机制来进行高效的状态更新。

   - **getters ：从基本数据派生出来的数据**

     state 对象读取方法。图中没有单独列出该模块，应该被包含在了 render 中，Vue Components 通过该方法读取全局 state 对象

   - **mutations ：提交更改数据的方法，同步**

     状态改变操作方法。是 Vuex 修改 state 的唯一推荐方法，其他修改方式在严格模式下将会报错。该方法只能进行同步操作，且方法名只能全局唯一。操作之中会有一些 hook 暴露出来，以进行state 的监控等。

     commit∶状态改变提交操作方法。对 mutation 进行提交，是唯一能执行 mutation 的方法。

   - **actions ：包裹 mutations，使之可以异步**

     操作行为处理模块。负责处理 Vue Components 接收到的所有交互行为。包含同步/异步操作，支持多个同名方法，按照注册的顺序依次触发。向后台 API 请求的操作就在这个模块中进行，包括触发其他 action 以及提交 mutation 的操作。该模块提供了 Promise的封装，以支持 action 的链式触发。

     dispatch∶操作行为触发方法，是唯一能执行 action 的方法

   - **modules ：模块化 Vuex**

3. **流程**

   - Vue Components 是 vue 组件，组件会触发（dispatch）一些事件或动作，也就是 Actions;
   - 在组件中发出的动作，肯定是想获取或者改变数据的，但是在 vuex中，数据是集中管理的，不能直接去更改数据，所以会把这个动作提交（Commit）到 Mutations 中;
   - 然后 Mutations 就去改变（Mutate）State 中的数据;
   - 当 State 中的数据被改变之后，就会重新渲染（Render）到 VueComponents 中去，组件展示更新后的数据，完成一个流程。

4. 问题

   - **为什么 mutation 中不能做异步操作**

     Vuex 中所有的状态更新的唯一途径都是 mutation，异步操作通过Action 来提交 mutation 实现，这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。

     每个 mutation 执行完成后都会对应到一个新的状态变更，这样devtools就可以打个快照存下来，然后就可以实现 time-travel 了。

     如果 mutation 支持异步操作，就没有办法知道状态是何时更新的，无法很好的进行状态的追踪，给调试带来困难。

   - **和单纯的全局对象的区别**

     Vuex 的状态存储是响应式的。当 Vue 组件从 store 中读取状态的时候，若 store 中的状态发生变化，那么相应的组件也会相应地得到高效更新。不能直接改变 store 中的状态。改变 store 中的状态的唯一途径就是显式地提交 (commit) mutation。这样可以方便地跟踪每一个状态的变化，从而能够实现一些工具帮助更好地了解我们的应用。

   - **和 localStorage 的区别**

     最重要的区别

     - vuex 存储在内存中
     - localstorage 则以文件的方式存储在本地，只能存储字符串类型的数据，存储对象需要 JSON 的 stringify 和 parse 方法进行处理。 读取内存比读取硬盘速度要快。

     应用场景

     - Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式。它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化。vuex 用于组件之间的传值。
     - localstorage 是本地存储，是将数据存储到浏览器的方法，一般是在跨页面传递数据时使用 。
     - Vuex 能做到数据的响应式，localstorage 不能
     - 永久性：刷新页面时 vuex 存储的值会丢失，localstorage 不会。

     注意：对于不变的数据确实可以用 localstorage 可以代替 vuex，但是当两个组件共用一个数据源（对象或数组）时，如果其中一个组件改变了该数据源，希望另一个组件响应该变化时，localstorage 无法做到，原因就是区别 1



## 对Pinia的理解

1. **概念**

   状态管理库，比vuex提供更简单的API，适配vue3的组合式API（没有Mutation；不再有Module的嵌套结构；不再有可命名的模块），与TypeScript一起使用具有可靠的类型推断支持

   ```js
   import { createApp } from 'vue'
   import { createPinia } from 'pinia'
   import App from './App.vue'
   const pinia = createPinia()
   const app = createApp(App)
   app.use(pinia)
   app.mount('#app')
   ```

2. 使用

   - **Store的使用**

     ```js
     import { defineStore } from 'pinia';
     import { ref, computed } from 'vue';
     // options API 风格
     const useCounterStore = defineStore('counter', {
       state: () => ({ count: 0 }),
       getters: {
         double: (state) => state.count * 2,
       },
       actions: {
         increment() {
           this.count++
         },
       },
     })
     // setup API 风格
     const useCounterStore = defineStore('counter', {
      	 const count = ref(0)
           const doubleCount = computed(() => count.value * 2)
           function increment() {
             count.value++
           }
           return { count, doubleCount, increment }
     })
     export default useCounterStore
     
     <template>
     	<h2>{{ count }}</h2>
     	<h2>{{ double }}</h2>
     	<button @click='increment'>增加</button>
     </template>
     <script setup>
         import { storeToRefs } from 'pinia';
         import { useCounterStore } from '@/stores/counter'
         const store = useCounterStore();
         const { count, double } = storeToRefs(store);
         const { increment } = store;
     </script>
     ```

   - **state的使用**

     ```vue
     import { defineStore } from 'pinia';
     import { ref } from 'vue';
     const useCounterStore = defineStore('counter', {
      	 const count = ref(0);
     	 const num = ref(10);
           return { count, num }
     })
     export default useCounterStore;
     
     <template>
     	<h2>{{ count }}</h2>
     	<h2>{{ num }}</h2>
     	<button @click='btnClick1'>修改count<button>
         <button @click='btnClick2'>修改count<button>
         <button @click='btnClick3'>修改count<button>
     </template>
     <script setup>
         import { storeToRefs } from 'pinia';
         import { useCounterStore } from '@/stores/counter'
         const store = useCounterStore();
         const { count , num } = storeToRefs(store);
         // 修改方式1：直接修改
         function btnClick1(){
             store.count ++ 
         }
         // 修改方式2：重置
          function btnClick2(){
             store.$reset()
          }
         // 修改方式3：一次修改多个
         function btnClick2(){
             store.$patch({
                 count: 10,
                 num: 100,
             })
          }
     </script>
     ```

   - **getters的使用**

     ```vue
     import { defineStore } from 'pinia';
     import { ref, computed } from 'vue';
     const useCounterStore = defineStore('counter', {
      	 const count = ref(0);
     	 const doubleCount = computed( ()=> {
              return count * 2
          })
           return { doubleCount }
     })
     export default useCounterStore;
     
     <template>
     	<h2>{{ doubleCount }}</h2>
     	<button @click='btnClick'>修改count<button>
     </template>
     <script setup>
         import { storeToRefs } from 'pinia';
         import { useCounterStore } from '@/stores/counter'
         const store = useCounterStore();
         const { doubleCount } = storeToRefs(store);
     </script>
     ```

   - **actions的使用**

     ```vue
     import { defineStore } from 'pinia';
     import { ref, computed } from 'vue';
     const useCounterStore = defineStore('counter', {
      	 const count = ref(0);
     	 function increment() {
              count.value++
           } 
           return { increment }
     })
     export default useCounterStore;
     
     <template>
     	<h2>{{ doubleCount }}</h2>
     	<button @click='increment'>修改count<button>
     </template>
     <script setup>
         import { storeToRefs } from 'pinia';
         import { useCounterStore } from '@/stores/counter'
         const store = useCounterStore();
         const { increment } = storeToRefs(store);
     </script>
     ```



## Redux 和 Vuex 有什么区别

1. **使用的原因**

   由于传参的方法对于多层嵌套的组件将会非常繁琐，并且对于兄弟组件间的状态传递无能为力。我们经常会采用父子组件直接引用或者通过事件来变更和同步状态的多份拷贝。以上的这些模式非常脆弱，通常会导致代码无法维护。所以需要把组件的共享状态抽取出来，以一个全局单例模式管理。在这种模式下，组件树构成了一个巨大的"视图"，不管在树的哪个位置，任何组件都能获取状态或者触发行为。另外，通过定义和隔离状态管理中的各种概念并强制遵守一定的规则，代码将会变得更结构化且易维护

2. **共同思想**

   - 单—的数据源
   - 变化可以预测
   - 本质上：redux 与 vuex 都是对 mvvm 思想的服务，将数据从视图中抽离的一种方案;
   - 形式上：vuex 借鉴了 redux，将 store 作为全局的数据中心，进行mode 管理;

3. **区别**

   Redux 和 Vuex 区别

   - Vuex 改进了 Redux 中的 Action 和 Reducer 函数，以 mutations 变化函数取代 Reducer，无需 switch，只需在对应的 mutation 函数里改变 state 值即可
   - Vuex 由于 Vue 自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的 State 即可
   - Vuex 数据流的顺序是∶View 调用 store.commit 提交对应的请求到Store 中对应的 mutation 函数->store 改变（vue 检测到数据变化自动渲染）

   通俗点理解就是，vuex 弱化 dispatch，通过 commit 进行 store 状态的一次更变;取消了 action 概念，不必传入特定的 action 形式进行指定变更;弱化 reducer，基于 commit 参数直接对数据进行转变，使得框架更加简易



## 封装axios

1. **axios特性**

   - 从浏览器中创建 XMLHttpRequests
   - 从 node.js 创建 http请求
   - 支持 Promise API
   - 拦截请求和响应
   - 转换请求数据和响应数据
   - 取消请求
   - 自动转换JSON 数据
   - 客户端支持防御XSRF

2. **基本使用**

   ```js
   axios({        
     url:'xxx',    // 设置请求的地址
     method:"GET", // 设置请求方法
     params:{      // get请求使用params进行参数凭借,如果是post请求用data
       type: '',
       page: 1
     }
   }).then(res => {  
     // res为后端返回的数据
     console.log(res);   
   })
   function getUserAccount() {
       return axios.get('/user/12345');
   }
   function getUserPermissions() {
       return axios.get('/user/12345/permissions');
   }
   axios.all([getUserAccount(), getUserPermissions()])
       .then(axios.spread(function (res1, res2) { 
       // res1第一个请求的返回的内容，res2第二个请求返回的内容
       // 两个请求都执行完成才会执行
   }));
   ```

3. 封装

   - **设置接口请求前缀**

     利用node环境变量来作判断，用来区分开发、测试、生产环境

     ```js
     if (process.env.NODE_ENV === 'development') {
       axios.defaults.baseURL = 'http://dev.xxx.com'
     } else if (process.env.NODE_ENV === 'production') {
       axios.defaults.baseURL = 'http://prod.xxx.com'
     }
     ```

     在本地调试的时候，还需要在vue.config.js文件中配置devServer实现代理转发，从而实现跨域

     ```js
     devServer: {
         proxy: {
           '/proxyApi': {
             target: 'http://dev.xxx.com',
             changeOrigin: true,
             pathRewrite: {
               '/proxyApi': ''
             }
           }
         }
       }
     ```

   - **设置请求头与超时时间**

     大部分情况下，请求头都是固定的，只有少部分情况下，会需要一些特殊的请求头，这里将普适性的请求头作为基础配置。当需要特殊请求头时，将特殊请求头作为参数传入，覆盖基础配置

     ```js
     const service = axios.create({
         ...
         timeout: 30000,  // 请求 30s 超时
     	  headers: {
             get: {
               'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
               // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
             },
             post: {
               'Content-Type': 'application/json;charset=utf-8'
               // 在开发中，一般还需要单点登录或者其他功能的通用请求头，可以一并配置进来
             }
       },
     })
     ```

   - **封装请求方法**

     先引入封装好的方法，在要调用的接口重新封装成一个方法暴露出去

     ```js
     // get 请求
     export function httpGet({
       url,
       params = {}
     }) {
       return new Promise((resolve, reject) => {
         axios.get(url, {
           params
         }).then((res) => {
           resolve(res.data)
         }).catch(err => {
           reject(err)
         })
       })
     }
     
     // post
     // post请求
     export function httpPost({
       url,
       data = {},
       params = {}
     }) {
       return new Promise((resolve, reject) => {
         axios({
           url,
           method: 'post',
           transformRequest: [function (data) {
             let ret = ''
             for (let it in data) {
               ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
             }
             return ret
           }],
           // 发送的数据
           data,
           // url参数
           params
     
         }).then(res => {
           resolve(res.data)
         })
       })
     }
     ```


     把封装的方法放在一个api.js文件中

     ```js
     import { httpGet, httpPost } from './http'
     export const getorglist = (params = {}) => httpGet({ url: 'apps/api/org/list', params })
     ```

     页面中就能直接调用

     ```js
     // .vue
     import { getorglist } from '@/assets/js/api'
     getorglist({ id: 200 }).then(res => {
       console.log(res)
     })
     ```

   - **请求拦截器**

     可以在每个请求里加上token，做了统一处理后维护起来也方便

     ```js
     axios.interceptors.request.use( config => {
         // 每次发送请求之前判断是否存在token
         // 如果存在，则统一在http请求的header都加上token，这样后台根据token判断你的登录情况，
         // 此处token一般是用户完成登录后储存到localstorage里的
         token && (config.headers.Authorization = token)
         return config
       },
       error => {
         return Promise.error(error)
       })
     ```

   - **响应拦截器**

     可以在接收到响应后先做一层操作，如根据状态码判断登录状态、授权

     ```js
     axios.interceptors.response.use(response => {
       // 如果返回的状态码为200，说明接口请求成功，可以正常拿到数据
       // 否则的话抛出错误
       if (response.status === 200) {
         if (response.data.code === 511) {
           // 未授权调取授权接口
         } else if (response.data.code === 510) {
           // 未登录跳转登录页
         } else {
           return Promise.resolve(response)
         }
       } else {
         return Promise.reject(response)
       }
     }, error => {
       // 我们可以在这里对异常状态作统一处理
       if (error.response.status) {
         // 处理请求失败的情况
         // 对不同返回码对相应处理
         return Promise.reject(error.response)
       }
     })
     ```

     