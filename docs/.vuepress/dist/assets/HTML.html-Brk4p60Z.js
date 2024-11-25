import{_ as s,c as a,a as t,o as p}from"./app-QHj2oM_u.js";const e={};function l(i,n){return p(),a("div",null,n[0]||(n[0]=[t(`<h2 id="doctype-文档类型-的作用" tabindex="-1"><a class="header-anchor" href="#doctype-文档类型-的作用"><span>DOCTYPE(⽂档类型) 的作用</span></a></h2><ol><li><p><strong>两种模式</strong></p><p>览器渲染页面的两种模式（可通过 document.compatMode 获取，比如，语雀官网的文档类型是 CSS1Compat）</p><ul><li>CSS1Compat：标准模式（Strick mode），默认模式，浏览器使用 W3C的标准解析渲染页面。在标准模式中，浏览器以其支持的最高标准呈现页面。</li><li>BackCompat：怪异模式(混杂模式)(Quick mode)，浏览器使用自己的怪异模式解析渲染页面。在怪异模式中，页面以一种比较宽松的向后兼容的方式显示</li></ul></li><li><p><strong>作用</strong></p><p>DOCTYPE 是 HTML5 中一种标准通用标记语言的文档类型声明，它的目的是告诉浏览器（解析器）应该以什么样（html 或 xhtml）的文档类型定义来解析文档，不同的渲染模式会影响浏览器对 CSS 代码甚⾄JavaScript 脚本的解析。它必须声明在 HTML⽂档的第⼀⾏。</p></li></ol><h2 id="元素有哪些种类" tabindex="-1"><a class="header-anchor" href="#元素有哪些种类"><span>元素有哪些种类</span></a></h2><ol><li><p><strong>行内元素</strong></p><p>行内元素只占据它对应标签的边框所包含的空间， 一般情况下，行内元素只能包含数据和其他行内元素，无法设置宽高，宽高由内容决定，包括：b, big, i, small, tt，abbr, acronym, cite, code, dfn, em, kbd, strong, samp, vara, bdo, br,map, object, q, script, span, sub, sup</p></li><li><p><strong>块级元素</strong></p><p>占据一整行，高度、行高、内边距和外边距都可以改变，可以容纳块级标签和其他行内标签，具有继承关系，包括：header,form,ul,ol,table,article,div,hr,aside,figure，canvas,video,audio,footer</p></li><li><p><strong>行内块元素</strong></p><p>浏览器还有默认的天生 inline-block 行内块级元素（拥有内在尺寸，可设置高宽，但不会自动换行），包括：input、img、button、texterea、label</p></li><li><p><strong>空元素</strong></p><p>空元素，即没有内容的 HTML 元素。空元素是在开始标签中关闭的，也就是空元素没有闭合标签，常见的有：<code>&lt;br&gt;、&lt;hr&gt;、&lt;img&gt;、&lt;input&gt;、&lt;link&gt;、&lt;meta&gt;</code>；鲜见的有：<code>&lt;area&gt;、&lt;base&gt;、&lt;col&gt;、&lt;colgroup&gt;、&lt;command&gt;、&lt;embed&gt;、&lt;keygen&gt;、&lt;param&gt;、&lt;source&gt;、&lt;track&gt;、&lt;wbr&gt;</code></p></li></ol><h2 id="script-标签中-defer-和-async-的区别" tabindex="-1"><a class="header-anchor" href="#script-标签中-defer-和-async-的区别"><span>script 标签中 defer 和 async 的区别</span></a></h2><ol><li><p><strong>都是异步</strong></p><p>如果没有defer或async属性，浏览器会立即加载并执行相应的脚本。它不会等待后续加载的文档元素，读取到就会开始加载和执行，这样就阻塞了后续文档的加载。defer 和 async 属性都是去异步加载外部的 JS 脚本文件，它们都不会阻塞页面的解析</p></li><li><p><strong>执行顺序</strong></p><p>多个带 async 属性的标签，不能保证加载的顺序；</p><p>多个带defer 属性的标签，按照加载顺序执行；</p></li><li><p><strong>脚本是否并行执行</strong></p><p>async 属性，表示后续文档的加载和执行与 js脚本的加载和执行是并行进行的，即异步执行；</p><p>defer 属性，加载后续文档的过程和 js 脚本的加载(此时仅加载不执行)是并行进行的(异步)，js 脚本需要等到文档所有元素解析完成之后才执行，DOMContentLoaded 事件触发执行之前。</p></li></ol><h2 id="href和src区别" tabindex="-1"><a class="header-anchor" href="#href和src区别"><span>href和src区别</span></a></h2><p>href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系，若在文档中添加href ，浏览器会识别该文档为 CSS 文件，就会并行下载资源并且不会停止对当前文档的处理。这也是为什么建议使用 link 方式加载 CSS，而不是使用 @import 方式</p><p>src表示引用资源，替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。 当浏览器解析到src ，会暂停其他资源的下载和处理（图片不会暂停其他资源下载和处理），直到将该资源加载、编译、执行完毕，图片和框架等也如此，类似于将所指向资源应用到当前内容。这也是为什么建议把 js 脚本放在底部而不是头部的原因</p><h2 id="对viewport的理解" tabindex="-1"><a class="header-anchor" href="#对viewport的理解"><span>对viewport的理解</span></a></h2><ol><li><p><strong>布局窗口</strong></p><p>在PC端上，布局视口等于浏览器窗口的宽度。而在移动端上，由于要使为PC端浏览器设计的网站能够完全显示在移动端的小屏幕里，此时的布局视口会远大于移动设备的屏幕，就会出现滚动条。js获取布局视口：document.documentElement.clientWidth | document.body.clientWidth；</p></li><li><p><strong>视觉窗口</strong></p><p>用户正在看到的网页的区域。用户可以通过缩放来查看网站的内容。如果用户缩小网站，我们看到的网站区域将变大，此时视觉视口也变大了，同理，用户放大网站，我们能看到的网站区域将缩小，此时视觉视口也变小了。不管用户如何缩放，都不会影响到布局视口的宽度。js获取视觉视口：window.innerWidth</p></li><li><p><strong>理想窗口</strong></p><p>布局视口的一个理想尺寸，只有当布局视口的尺寸等于设备屏幕的尺寸时，才是理想视口。js获取理想视口：window.screen.width；</p></li><li><p><strong>设置</strong></p><p>meta的作用是让当前viewport的宽度等于设备的宽度，不允许用户手动缩放。属性对应如下：</p><ul><li>width=device-width: 是自适应手机屏幕的尺寸宽度</li><li>maximum-scale:是缩放比例的最大值</li><li>inital-scale:是缩放的初始化</li><li>user-scalable:是用户的可以缩放的操作</li></ul><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0 , maximum-scale=1.0 , user-scalable=no<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li></ol><h2 id="离线储存资源的管理和加载" tabindex="-1"><a class="header-anchor" href="#离线储存资源的管理和加载"><span>离线储存资源的管理和加载</span></a></h2><ol><li><p><strong>加载</strong></p><p>在线的情况下，浏览器发现 html 头部有 manifest 属性，它会请求manifest 文件，如果是第一次访问页面 ，那么浏览器就会根据 manifest 文件的内容下载相应的资源并且进行离线存储。如果已经访问过页面并且资源已经进行离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的 manifest 文件与旧的manifest 文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，就会重新下载文件中的资源并进行离线存储。浏览器将获取最新的资源文件，并替换掉旧的缓存版本。</p><p>离线的情况下，浏览器会直接使用离线存储的资源。即使没有互联网连接，应用程序仍然能够访问存储在设备上的数据和内容。这意味着用户可以在离线时继续使用应用程序，并能够在以后在线时同步任何未完成的工作。</p></li><li><p><strong>管理</strong></p><ul><li><p>Cache API：提供了一种机制，允许开发者指定哪些资源应该被缓存以及如何更新它们</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">let</span> cacheName <span class="token operator">=</span> <span class="token string">&#39;userSettings&#39;</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">&#39;/api/get/usersettings&#39;</span><span class="token punctuation">;</span></span>
<span class="line">caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>cacheName<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token parameter">cache</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">   cache<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">       console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Data cached &quot;</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>Service Workers：提供了一种更强大和灵活的方式来处理离线缓存和网络请求，开发者可以使用它来拦截网络请求、处理响应以及管理缓存策略</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// app.js</span></span>
<span class="line">navigator<span class="token punctuation">.</span>serviceWorker<span class="token punctuation">.</span><span class="token function">register</span><span class="token punctuation">(</span><span class="token string">&quot;/sw.js&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//sw.js</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">addResourcesToCache</span> <span class="token operator">=</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">resources</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> cache <span class="token operator">=</span> <span class="token keyword">await</span> caches<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span><span class="token string">&quot;v1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">await</span> cache<span class="token punctuation">.</span><span class="token function">addAll</span><span class="token punctuation">(</span>resources<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;install&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  event<span class="token punctuation">.</span><span class="token function">waitUntil</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token function">addResourcesToCache</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/index.html&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/style.css&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/app.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/image-list.js&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/star-wars-logo.jpg&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/gallery/bountyHunters.jpg&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/gallery/myLittleVader.jpg&quot;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&quot;/gallery/snowTroopers.jpg&quot;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">self<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&quot;fetch&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>
<span class="line">  event<span class="token punctuation">.</span><span class="token function">respondWith</span><span class="token punctuation">(</span>caches<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>event<span class="token punctuation">.</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul></li></ol><h2 id="html5-的新特性" tabindex="-1"><a class="header-anchor" href="#html5-的新特性"><span>HTML5 的新特性</span></a></h2><ol><li><p><strong>语义元素</strong></p><p>HTML5 语义元素：article、aside、header、nav、footer、section、progress、time等</p></li><li><p><strong>canvas</strong></p><p>元素用于图形的绘制，通过脚本 (通常是 JavaScript)来完成</p></li><li><p><strong>拖放</strong></p><p>HTML5 拖放： <code>&lt;img draggable=&quot;true&quot;&gt;</code></p></li><li><p><strong>地理定位</strong></p><p>Geolocation API 用于获得用户的地理位置</p></li><li><p><strong>视频和音频</strong></p><p>HTML5 Audio(音频)、Video(视频)</p></li><li><p><strong>webStorage</strong></p><p>HTML5 Web 存储：localStorage和sessionStorage</p></li></ol><h2 id="对-html-语义化的理解" tabindex="-1"><a class="header-anchor" href="#对-html-语义化的理解"><span>对 HTML 语义化的理解</span></a></h2><p>语义化是指根据内容的结构化（内容语义化），选择合适的标签（代码语义化）。通俗来讲就是用正确的标签做正确的事情。</p><p>语义化的优点如下：</p><ul><li>对机器友好，带有语义的文字表现力丰富，更适合搜索引擎的爬虫爬取有效信息，有利于 SEO。除此之外，语义类还支持读屏软件，根据文章可以自动生成目录；</li><li>对开发者友好，使用语义类标签增强了可读性，结构更加清晰，开发者能清晰的看出网页的结构，便于团队的开发与维护。</li></ul><p>常见的语义化标签：</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>header</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>header</span><span class="token punctuation">&gt;</span></span>     头部</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">&gt;</span></span>           导航栏</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>section</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>section</span><span class="token punctuation">&gt;</span></span>   区块(有语义化的div)</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>main</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>main</span><span class="token punctuation">&gt;</span></span>         主要区域</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>article</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>article</span><span class="token punctuation">&gt;</span></span>   主要内容</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aside</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aside</span><span class="token punctuation">&gt;</span></span>       侧边栏</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>footer</span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>footer</span><span class="token punctuation">&gt;</span></span>     底部</span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="canvas-和-svg-的区别" tabindex="-1"><a class="header-anchor" href="#canvas-和-svg-的区别"><span>Canvas 和 SVG 的区别</span></a></h2><p>SVG 可缩放矢量图形（Scalable Vector Graphics）是基于可扩展标记语言 XML 描述的 2D 图形的语言，SVG 基于 XML 就意味着 SVG DOM中的每个元素都是可用的，可以为某个元素附加 Javascript 事件处理器。在 SVG 中，每个被绘制的图形均被视为对象。如果 SVG 对象的属性发生变化，那么浏览器能够自动重现图形。其特点如下：</p><ul><li>不依赖分辨率</li><li>支持事件处理器</li><li>最适合带有大型渲染区域的应用程序（比如谷歌地图）</li><li>复杂度高会减慢渲染速度（任何过度使用 DOM 的应用都不快）</li><li>不适合游戏应用</li></ul><p>Canvas Canvas 是画布，通过 Javascript 来绘制 2D 图形，是逐像素进行渲染的。其位置发生改变，就会重新进行绘制。其特点如下：</p><ul><li>依赖分辨率</li><li>不支持事件处理器</li><li>弱的文本渲染能力</li><li>能够以 .png 或 .jpg 格式保存结果图像</li><li>最适合图像密集型的游戏，其中的许多对象会被频繁重绘</li></ul><h2 id="说一下-html5-drag-api" tabindex="-1"><a class="header-anchor" href="#说一下-html5-drag-api"><span>说一下 HTML5 drag API</span></a></h2><ol><li>被拖动元素 <ul><li>dragstart：事件主体是被拖放元素，在开始拖放被拖放元素时触发。</li><li>drag：事件主体是被拖放元素，在正在拖放被拖放元素时触发。</li><li>dragend：事件主体是被拖放元素，在整个拖放操作结束时触发</li></ul></li><li>目标元素 <ul><li>dragenter：事件主体是目标元素，在被拖放元素进入某元素时触发。</li><li>dragover：事件主体是目标元素，在被拖放在某元素内移动时触发。</li><li>dragleave：事件主体是目标元素，在被拖放元素移出目标元素是触发。</li><li>drop：事件主体是目标元素，在目标元素完全接受被拖放元素时触发</li></ul></li></ol><h2 id="对history-api的理解" tabindex="-1"><a class="header-anchor" href="#对history-api的理解"><span>对History Api的理解</span></a></h2><p>history.pushState() 和 history.replaceState() 方法，它们分别可以添加和修改历史记录条目，做到修改url参数页面不刷新。</p><p>pushState() 需要三个参数: 一个状态对象, 一个标题 (目前被忽略), 和 (可选的) 一个 URL</p><ul><li>状态对象 ： 状态对象 state 是一个 JavaScript 对象，通过 pushState () 创建新的历史记录条目。无论什么时候用户导航到新的状态，popstate 事件就会被触发，且该事件的 state 属性包含该历史记录条目状态对象的副本。 状态对象可以是能被序列化的任何东西。原因在于 Firefox 将状态对象保存在用户的磁盘上，以便在用户重启浏览器时使用，我们规定了状态对象在序列化表示后有640k的大小限制。如果你给 pushState() 方法传了一个序列化后大于 640k 的状态对象，该方法会抛出异常。如果你需要更大的空间，建议使用 sessionStorage 以及 localStorage；</li><li>标题 ：Firefox 目前忽略这个参数，但未来可能会用到。传递一个空字符串在这里是安全的，而在将来这是不安全的。二选一的话，你可以为跳转的 state 传递一个短标题；</li><li>URL ： 该参数定义了新的历史URL记录。注意，调用 pushState() 后浏览器并不会立即加载这个 URL，但可能会在稍后某些情况下加载这个 URL，比如在用户重新打开浏览器时。新URL不必须为绝对路径。如果新URL是相对路径，那么它将被作为相对于当前 URL 处理。新 URL 必须与当前URL同源，否则 pushState() 会抛出一个异常。该参数是可选的，缺省为当前 URL</li></ul><h2 id="preload、prefetch和defer的区别" tabindex="-1"><a class="header-anchor" href="#preload、prefetch和defer的区别"><span>preload、prefetch和defer的区别</span></a></h2><ol><li><p><strong>preload</strong> 是 <code>&lt;link&gt;</code> 标签 rel 属性的属性值，同时需要配合 as 属性使用，as 指定将要预加载的内容的类型，使得浏览器能够更精确地优化资源加载优先级；匹配未来的加载需求，在适当的情况下，重复利用同一资源；为资源应用正确的内容安全策略；为资源设置正确的 Accept 请求头</p><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>preload<span class="token punctuation">&quot;</span></span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://cdn.jsdelivr.net/npm/vue/dist/vue.js<span class="token punctuation">&quot;</span></span> <span class="token attr-name">as</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>script<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></li><li><p><strong>prefetch</strong></p><p>prefetch 和 preload 不同，使用 prefetch 属性指定的资源将在浏览器空闲时间下下载。在资源的请求头如果发现有下面这个属性，就代表它是通过 prefetch 加载的。另外，空闲时间是如何确定、如何获取的，目前还没有相关 API</p></li><li><p><strong>defer</strong></p><p>preload 下载的资源只有在遇到同样的 script 标签时，才会执行对应的脚本，defer 则是异步下载资源，在所有元素解析完成后，触发 DOMContentLoaded 事件前执行</p></li></ol>`,34)]))}const o=s(e,[["render",l],["__file","HTML.html.vue"]]),u=JSON.parse('{"path":"/interview/HTML.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"DOCTYPE(⽂档类型) 的作用","slug":"doctype-文档类型-的作用","link":"#doctype-文档类型-的作用","children":[]},{"level":2,"title":"元素有哪些种类","slug":"元素有哪些种类","link":"#元素有哪些种类","children":[]},{"level":2,"title":"script 标签中 defer 和 async 的区别","slug":"script-标签中-defer-和-async-的区别","link":"#script-标签中-defer-和-async-的区别","children":[]},{"level":2,"title":"href和src区别","slug":"href和src区别","link":"#href和src区别","children":[]},{"level":2,"title":"对viewport的理解","slug":"对viewport的理解","link":"#对viewport的理解","children":[]},{"level":2,"title":"离线储存资源的管理和加载","slug":"离线储存资源的管理和加载","link":"#离线储存资源的管理和加载","children":[]},{"level":2,"title":"HTML5 的新特性","slug":"html5-的新特性","link":"#html5-的新特性","children":[]},{"level":2,"title":"对 HTML 语义化的理解","slug":"对-html-语义化的理解","link":"#对-html-语义化的理解","children":[]},{"level":2,"title":"Canvas 和 SVG 的区别","slug":"canvas-和-svg-的区别","link":"#canvas-和-svg-的区别","children":[]},{"level":2,"title":"说一下 HTML5 drag API","slug":"说一下-html5-drag-api","link":"#说一下-html5-drag-api","children":[]},{"level":2,"title":"对History Api的理解","slug":"对history-api的理解","link":"#对history-api的理解","children":[]},{"level":2,"title":"preload、prefetch和defer的区别","slug":"preload、prefetch和defer的区别","link":"#preload、prefetch和defer的区别","children":[]}],"git":{},"filePathRelative":"interview/HTML.md"}');export{o as comp,u as data};
