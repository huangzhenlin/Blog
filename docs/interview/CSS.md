## display 的 属性值 

1. **block**

   可以设置宽高；设置 margin 和 padding 都有效；可以自动换行；多个块状，默认排列从上到下

2. **inline**

   设置宽高无效；可以设置水平方向的 margin 和 padding 属性，不能设置垂直方向的padding 和 margin；不会自动换行；

3. **line-block**

   将对象设置为 inline 对象，但对象的内容作为block 对象呈现，之后的内联对象会被排列在同一行内。不会自动换行；可以设置宽高；设置 margin 和 padding 都有效；



## link 和@import 的区别

1. **加载内容**

   link 是 XHTML 标签，除了加载 CSS 外，还可以定义 RSS 等其他事务；@import 属于 CSS 范畴，只能加载 CSS。

2. **加载时机**

   link 引用 CSS 时，在页面载入时同时加载；@import 需要页面网页完全载入以后加载。

3. **兼容内容**

   link 是 XHTML 标签，无兼容问题；@import 是在 CSS2.1 提出的，低版本的浏览器不支持。

4. **JavaScript控制**

   link 支持使用 Javascript 控制 DOM 去改变样式；而@import 不支持。



## 常见的 CSS 布局单位

1. **px**

   表示像素，所谓像素就是呈现在我们显示器上的一个个小点，每个像素点都是大小等同的，所以像素为计量单位被分在了绝对长度单位中。有些人会把px认为是相对长度，原因在于在移动端中存在设备像素比，px实际显示的大小是不确定的这里之所以认为px为绝对单位，在于px的大小和元素的其他属性无关。

2. **百分比%**

   当浏览器的宽度或者高度发生变化时，通过百分比单位可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。一般认为子元素的百分比相对于直接父元素。

   - 对于普通定位元素就是我们理解的父元素
   - 对于position: absolute;的元素是相对于已定位的父元素
   - 对于position: fixed;的元素是相对于 ViewPort（可视窗口）

3. **em**

   是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸（1em = 16px）。为了简化 font-size 的换算，我们需要在css中的 body 选择器中声明font-size= 62.5%，这就使 em 值变为 16px*62.5% = 10px。这样 12px = 1.2em, 10px = 1em, 也就是说只需要将你的原来的px 数值除以 10，然后换上 em作为单位就行了
   特点：

   - em 的值并不是固定的
   - em 会继承父级元素的字体大小
   - em 是相对长度单位。相对于当前对象内文本的字体尺寸。如当前对行内文本的字体尺寸未被人为设置，则相对于浏览器的默认字体尺寸
   - 任意浏览器的默认字体高都是 16px

4. **rem**

   相对单位，相对的只是HTML根元素font-size的值。同理，如果想要简化font-size的转化，我们可以在根元素html中加入font-size：62.5%。这样页面中1rem=10px、1.2rem=12px、1.4rem=14px、1.6rem=16px;使得视觉、使用、书写都得到了极大的帮助
   特点：

   - rem单位可谓集相对大小和绝对大小的优点于一身
   - 和em不同的是rem总是相对于根元素，而不像em一样使用级联的方式来计算尺寸

5. **vh、vh**

   是根据窗口的宽度，分成100等份，100vw就表示满宽，50vw就表示一半宽。（vw 始终是针对窗口的宽），同理，vh则为窗口的高度。这里的窗口分成几种情况：

   - 在桌面端，指的是浏览器的可视区域
   - 移动端指的就是布局视口

   像vw、vh，比较容易混淆的一个单位是%，不过百分比宽泛的讲是相对于父元素



## 字符间距

1. **letter-spacing**

   可以用来控制字符之间的间距，这里说的“字符”包括英文字母、汉字以及空格等

2. **word-sapcing**

   仅作用于空格字符。换句话说，word-spacing的作用就是增加空格的间隙宽度

3. **white-spacing**

   声明了如何处理元素内的空白字符，这类空白字符包括Space（空格）键、Enter（回车）键、Tab（制表符）键产生的空白。因此，white-space可以决定图文内容是否在一行显示（回车空格是否生效），是否显示大段连续空白（空格是否生效）等



## 对选择器的理解

1. 种类

   - id选择器（#myid）
   - 类选择器（.myclassname）
   - 标签选择器（div,h1,p）
   -  后代选择器（h1 p）
   - 相邻后代选择器（子）选择器（ul>li）
   - 兄弟选择器（li~a）
   - 相邻兄弟选择器（li+a）
   - 属性选择器（a[rel="external"]）
   - 伪类选择器（a:hover,li:nth-child）
   - 伪元素选择器（::before、::after）
   - 通配符选择器（*）

2. 优先级

   - !important：判断优先级时，首先我们会判断一条属性声明是否有权重，也就是是否在声明后面加上了!important。一条声明如果加上了权重，那么它的优先级就是最高的，前提是它之后不再出现相同权重的声明。如果权重相同，我们则需要去比较匹配规则的特殊性
   - 内联 > ID选择器 > 类选择器 > 标签选择器：一条匹配规则一般由多个选择器组成，一条规则的特殊性由组成它的选择器的特殊性累加而成。选择器的特殊性可以分为四个等级：第一个等级是行内样式，为1000，第二个等级是id选择器，为0100，第三个等级是类选择器、伪类选择器和属性选择器，为0010，第四个等级是元素选择器和伪元素选择器，为0001。规则中每出现一个选择器，就将它的特殊性进行叠加，这个叠加只限于对应的等级的叠加，不会产生进位。选择器特殊性值的比较是从左向右排序的，也就是说以1开头的特殊性值比所有以0开头的特殊性值要大如说特殊性值为1000的的规则优先级就要比特殊性值为0999的规则高 
   - 先后顺序：如果两个规则的特殊性值相等的时候，那么就会根据它们引入的顺序，后出现的规则的优先级最高

3. **解析规则**

   样式系统从关键选择器开始匹配，然后左移查找规则选择器的祖先元素。只要选择器的子树一直在工作，样式系统就会持续左移，直到和规则匹配，或者是因为不匹配而放弃该规则。如果采用从左至右的方式读取CSS规则，那么大多数规则读到最后（最右）才会发现是不匹配的，这样做会费时耗能，最后有很多都是无用的；而如果采取从右向左的方式，那么只要发现最右边选择器不匹配，就可以直接舍弃了，避免了许多无效匹配。



## 对伪类的理解

用于当已有的元素处于某个状态时，为其添加对应的样式，这个状态是根据用户行为而动态变化的，比如说，当用户悬停在指定的元素时，我们可以通过:hover来描述这个元素的状态。

**CSS3之前的伪类**

- :link ：选择未被访问的链接
- :visited：选取已被访问的链接
- :active：选择活动链接
- :hover ：鼠标指针浮动在上面的元素
- :focus ：选择具有焦点的

**CSS3 新增伪类** 

- :first-child：父元素的首个子元素
- :last-child 表示一组兄弟元素中的最后一个元素
- :nth-child(n) 根据元素在一组同级中的位置匹配元素
- :first-of-type 表示一组同级元素中其类型的第一个元素
- :last-of-type 表示一组同级元素中其类型的最后一个元素
- :nth-last-of-type(n) 匹配给定类型的元素，基于它们在一组兄弟元素中的位置，从末尾开始计数
- :only-of-type 表示没有同类型兄弟元素的元素
- :only-child 表示没有任何兄弟的元素
- :root 设置HTML文档
- :empty 指定空的元素
- :enabled 选择可用元素
- :disabled 选择被禁用元素
- :checked 选择选中的元素
- :not(selector) 选择与 `<selector> `不匹配的所有元素



## 对伪元素的理解

用于创建一些不在文档树中的元素，并为其添加样式；它们允许我们为元素的某些部分设置样式，比如说，我们可以通过::before来在一个元素前增加一些文本，并为这些文本添加样式，虽然用户可以看到这些文本，但是这些文本实际上不在文档树中。
主要有：

- :first-letter ：用于选取指定选择器的首字母
- :first-line ：选取指定选择器的首行
- :before : 选择器在被选元素的内容前面插入内容
- :after : 选择器在被选元素的内容后面插入内容
- :selection： 匹配被用户选中的部分



## 对替换元素的理解

1. **概念**

   通过修改某个属性值呈现的内容就可以被替换的元素就称为“替换元素”。因此，`<img>`、`<object>`、`<video>`、`<iframe>`或者表元素`<textarea>`和`<input>`和`<select>`都是典型的替换元素。

2. **特征**

   - 内容的外观不受页面上的CSS的影响。用专业的话讲就是在样式表现在CSS作用域之外。如何更改替换元素本身的外观需要类似appearance属性，或者浏览器自身暴露的一些样式接口；
   - 有自己的尺寸，在Web中，很多替换元素在没有明确尺寸设定的情况下，其默认的尺寸（不包括边框）是300像素×150像素，如`<video>`、`<iframe>`或者`<canvas>`等，也有少部分替换元素为0像素，如`<img>`图片，而表单元素的替换元素的尺寸则和浏览器有关，没有明显的规律；
   - 在很多CSS属性上有自己的一套表现规则。比较具有代表性的就是vertical-align属性，对于替换元素和非替换元素，vertical-align属性值的解释是不一样的。比方说vertical-align的默认值的baseline，很简单的属性值，基线之意，被定义为字符x的下边缘，而替换元素的基线却被硬生生定义成了元素的下边缘；所有有的替换元素都是内联水平元素，也就是替换元素和替换元素、替换元素和文字都是可以在一行显示的。但是，替换元素默认的display值却是不一样的，有的是inline，有的是inline-block

3. **计算规则**

   关于固有尺寸、html尺寸、css尺寸的概念如下：

   - 固有尺寸指的是替换内容原本的尺寸，例如，图片、视频作为一个独立文件存在的时候，都是有着自己的宽度和高度的；
   - HTML尺寸只能通过HTML原生属性改变，这些HTML原生属性包括`<img>`的width和height属性、`<input>`的size属性、`<textarea>`的cols和rows属性等；
   - CSS尺寸特指可以通过CSS的width和height或者max-width/min-width和max-height/min-height设置的尺寸，对应盒尺寸中的content box。

   内联替换元素和块级替换元素使用下面这个计算规则：

   - CSS尺寸 > HTML尺寸> 固有此尺寸
   - 如果“固有尺寸”含有固有的宽高比例，同时仅设置了宽度或仅设置了高度，则元素依然按照固有的宽高比例显示，
   - 如果上面的条件都不符合，则最终宽度表现为300像素，高度为150像素，

4. **与content的关系**

   content属性生成的对象称为“匿名替换元素”。使用content生成的文本是无法选中、无法复制的，好像设置了user select:none声明一般，但是普通元素的文本却可以被轻松选中。同时，content生成的文本无法被屏幕阅读设备读取，也无法被搜索引擎抓取，因此，千万不要自以为是地把重要的文本信息使用content属性生成，因为这对可访问性和SEO都很不友好。content生成的内容不能左右:empty伪类。content动态生成值无法获取。



## 对属性继承的理解

1. 可继承的属性

   - 字体系列

     ```css
     font:组合字体
     font-family:规定元素的字体系列
     font-weight:设置字体的粗细
     font-size:设置字体的尺寸
     font-style:定义字体的风格
     font-variant:偏大或偏小的字体
     ```

   - 文本系列

     ```css
     text-indent：文本缩进
     text-align：文本水平对刘
     line-height：行高
     word-spacing：增加或减少单词间的空白
     letter-spacing：增加或减少字符间的空白
     text-transform：控制文本大小写
     direction：规定文本的书写方向
     color：文本颜色
     ```

   - 元素可见性

     ```css
     visibility
     ```

   - 表格布局

     ```css
     caption-side：定位表格标题位置
     border-collapse：合并表格边框
     border-spacing：设置相邻单元格的边框间的距离
     empty-cells：单元格的边框的出现与消失
     table-layout：表格的宽度由什么决定
     ```

   - 列表系列

     ```css
     list-style-type：文字前面的小点点样式
     list-style-position：小点点位置
     list-style：以上的属性可通过这属性集合
     ```

   - 光标系列

     ```css
     cursor：箭头可以变成需要的形状
     ```

   - 引用

     ```css
     quotes：设置嵌套引用的引号类型
     ```

2. 不可继承的属性

   - display
   - 文本属性：vertical-align、text-decoration
   - 盒子模型属性：宽度、高度、内外边距、边框等
   - 背景属性：背景图片、颜色、位置等
   - 定位属性：浮动、清除浮动、定位position等
   - 生成内容的属性：content、counter-reset、counter-increment
   - 轮廓样式属性：outline-style、outline-width、outline-color、outline
   - 页面样式属性：size、page-break-before、page-break-after
   - 特殊：a 标签的字体颜色不能被继承；h1-h6标签字体的大下也是不能被继承的



## 对盒子模型的理解

1. **概念**

   分为内容（content）、填充（padding）、边界（margin）、边框（border）四个部分

2. **分类**

   - W3C标准盒模型（content-box）：属性width，height只包含内容content，不包含border和padding
   - 怪异盒模型（border-box）：属性width，height包含content、border和padding，指的是content+padding+border

3. **box-sizing**

   一般来说，我们可以通过修改元素的box-sizing属性来改变元素的盒模型：

   - content-box 默认值，元素的 width/height 不包含padding，border，与标准盒子模型表现一致；
   - border-box 元素的 width/height 包含 padding，border，与怪异盒子模型表现一致



## 对 BFC 的理解，如何创建 BFC

1. **概念**

   - Box 是 CSS 布局的对象和基本单位，⼀个⻚⾯是由很多个 Box组成的，这个 Box 就是我们所说的盒模型。
   - Formatting context：块级上下⽂格式化，它是⻚⾯中的⼀块渲染区域，并且有⼀套渲染规则，它决定了其⼦元素将如何定位，以及和其他元素的关系和相互作⽤。
   - 块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素与其他元素的交互限定区域。通俗来讲：BFC 是一个独立的布局环境，可以理解为一个容器，在这个容器中按照一定规则进行物品摆放，并且不会影响其它环境中的物品。如果一个元素符合触发 BFC 的条件，则 BFC 中的元素布局不受外部影响

2. **特点**

   - 独立区域：BFC 是独立的容器，容器内部元素不会影响外部元素。
   - border：每个元素的左 margin 值和容器的左 border 相接触。
   - 排列：垂直方向上，自上而下排列，和文档流的排列方式一致。
   - margin重叠：在 BFC 中上下相邻的两个容器的 margin 会重叠。
   - 计算高度：计算 BFC 的高度时，需要计算浮动子元素的高度。
   - 区域重合：BFC 区域不会与浮动的容器发生重叠。

3. **创建**

   - 根元素：body；
   - 元素设置浮动：float 除 none 以外的值；
   - 元素设置绝对定位：position (absolute、fixed)
   - display 值为：inline-block、table-cell、table-caption、flex等；
   - overflow 值为：hidden、auto、scroll；

4. **作用**

   - 解决 margin 的重叠问题：由于 BFC 是一个独立的区域，内部的元素和外部的元素互不影响，将两个元素变为两个 BFC，就解决了 margin重叠的问题。

   - 解决高度塌陷问题：在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为 0。解决（清除浮动的方法）只需要把父元素变成一个 BFC。常用的办法是给父元素设置 overflow:hidden（或者auto）；容器设置样display:table；容器设置样式float:left

   - 创建自适应两栏布局：可以用来创建自适应两栏布局，左边的宽度固定，右边的宽度自适应。左侧设置 float:left，右侧设置 overflow: hidden。这样右边就触发了 BFC，BFC 的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠，实现了自适应两栏布局

     ```html
     <style>
             main {
                 width: 400px;
                 height: 300px;
             }
             div {
                 height: 300px;
             }
             div:first-child {
                 width: 100px;
                 float: left;
                 background-color: rgb(99, 99, 31);
             }
             div:last-child {
                 overflow: hidden;
                 background-color: blue;
             }
         </style>
     </head>
     <body>
         <main>
             <div></div>
             <div></div>
         </main>
     </body>
     ```



## 清除浮动的方法

1. **问题**

   在对子元素设置浮动后，父元素会发生高度塌陷，也就是父元素的高度变为 0

2. **解决**：

   - 只需要把父元素变成一个 BFC。常用的办法是给父元素设置 overflow:hidden（或者auto）；容器设置样display:table；容器设置样式float:left
   - 给设置浮动的父元素设置具体的高度height
   - 增加一个HTML空标签（块元素），并设置`clear:both`；新增一个有伪元素设置了clear:both的类添加在父元素上
   - 设置zoom：1或者scale缩放



## 元素的层叠顺序

1. **正z-index**

   z-index 属性值为正的定位元素。

2. **z-index：0/auto**

   层叠级数为 0 的定位元素。
   注意：当定位元素 z-index:auto，生成盒在当前层叠上下文中的层级为 0，不会建立新的层叠上下文，除非是根元素

3. **行内盒**

   文档流内行内级非定位后代元素。

4. **浮动盒**

   非定位浮动元素。

5. **块级盒**

   文档流内非行内级非定位后代元素。

6. **负z-index**

   当前层叠上下文中，z-index 属性值为负的元素。

7. **背景和边框**

   建立当前层叠上下文元素的背景和边框。



## CSS3 中有哪些新特性

1. **选择器**

   新增各种 CSS 选择器 （: not(.input)：所选 class 不是“input”的节点）

2. **新样式**

   - 边框：border-radius（圆角）、box-shadow（阴影）、border-image（使用图片来绘制边框）

     ```css
     border-radius:8px
     ```

   - 背景：background-clip（用于确定背景画区）、border-origin（用来设置背景图片的对其原点）、background-size（常用来调整背景图片的大小）、background-break（用来控制背景怎样在不同的盒子中显示）

     ```css
     background-clip: no-clip| padding-box| border-box |content-box;
     background-origin: padding-box | border-box | content-box;; 
     background-size: contain | cover| 100px 100px | 50% 100%;
     background-break: continuous | bounding-box | each-box;
     ```

   - 文字：word-wrap、text-overflow（设置或检索当当前行超过指定容器的边界时如何显示）、text-shadow（可向文本应用阴影）、text-decoration（支持对文字的更深层次的渲染）

     ```css
     word-wrap: normal | break-word
     text-overflow: clip | ellipsis
     ```

   - 颜色：新的颜色表示方式rgba与hsla、颜色渐变（是指在两个颜色之间平稳的过渡,包括线性渐变和径向渐变）

     ```css
     color: rbga(255,255,255,0.8) | hsla(120,100%,50%,0.3)
     background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
     background-image: linear-gradient(0deg, red, green);
     ```

3. **过渡**

   transition属性可以被指定为一个或多个CSS属性的过渡效果，多个属性之间用逗号进行分隔，必须规定两项内容：过度效果和持续时间。语法如下：

   ```css
   transition： CSS属性，花费时间，效果曲线(默认ease)，延迟时间(默认0)
   /* === */
   transition-property: width; 
   transition-duration: 1s;
   transition-timing-function: linear;
   transition-delay: 2s;
   ```

4. **transform**

   transform属性允许你旋转，缩放，倾斜或平移给定元素。

   ```css
   transform-origin：转换元素的位置（围绕那个点进行转换），默认值为(x,y,z):(50%,50%,0)
   transform: translate(120px, 50%)：位移
   transform: scale(2, 0.5)：缩放
   transform: rotate(0.5turn)：旋转
   transform: skew(30deg, 20deg)：倾斜
   ```

5. **动画**

   动画这个平常用的也很多，主要是做一个预设的动画。和一些页面交互的动画效果，结果和过渡应该一样，让页面不会那么生硬

   animation也有很多的属性：

   ```css
   animation-name：动画名称
   animation-duration：动画持续时间
   animation-timing-function：动画时间函数
   animation-delay：动画延迟时间
   animation-iteration-count：动画执行次数，可以设置为一个整数，也可以设置为infinite，意思是无限循环
   animation-direction：动画执行方向
   animation-paly-state：动画播放状态
   animation-fill-mode：动画填充模式
   ```

6. **布局**

   - 多列布局multi-column layout

     ```css
     .container {
       column-count: 3;
       column-gap: 20px;
       column-rule: 4px dotted rgb(79, 185, 227);
     }
     ```

   - flex：伸缩布局盒模型(弹性盒) flexbox

   - grid：Grid栅格布局

7. **媒体查询**

   CSS3 多媒体查询@media



## 对flex布局的理解

1. **概念**

   flex布局是CSS3新增的一种布局方式，我们可以通过将一个元素的display属性值设置为flex从而使它成为一个flex容器container，它的所有子元素都会成为它的项目item

2. **属性**

   一个容器默认有两条轴，一个是水平的主轴，一个是与主轴垂直的交叉轴。主要的属性有：

   - **flex-direction**：来指定主轴的方向
   - **flex-wrap**：来规定当一行排列不下时的换行方式
   - **flex-flow：**是flex-direction属性和flex-wrap属性的简写形式，默认值为row nowrap
   - **justify-content**：来指定元素在主轴上的排列方式，
   - **align-items**：来指定元素在交叉轴上的排列方式
   - **align-content：**定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用

   对于容器中的项目，

   - **order**：来指定项目的排列顺序，
   - **flex-grow**：来指定当排列空间有剩余的时候，项目的放大比例。默认为0。
   - **flex-shrink**：来指定当排列空间不足时，项目的缩小比例。默认为1。
   - **flex-basis：**设置的是元素在主轴上的初始尺寸。默认值为auto。
   - flex：是flex-grow，flex-shrink和flex-basis的简写，默认值为0 1 auto。快捷值：auto (1 1 auto) 、none (0 0 auto)、1（1,1,0%）。
   - **align-self：**允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

3. **应用场景**

   - 实现元素水平垂直方向的居中
   - 两栏三栏自适应布局
   - 在移动端、小程序这边的开发，都建议使用flex进行布局



## 对grid网格布局的理解

1. **概念**

   Grid 布局即网格布局，是一个二维的布局方式，由纵横相交的两组网格线形成的框架性布局结构，能够同时处理行与列。擅长将一个页面划分为几个主要区域，以及定义这些区域的大小、位置、层次等关系。这与之前讲到的flex一维布局不相同。设置display:grid/inline-grid的元素就是网格布局容器，这样就能触发浏览器渲染引擎的网格布局算法

   ```html
   <div class="container">
       <div class="item item-1">
           <p class="sub-item"></p >
    	</div>
       <div class="item item-2"></div>
       <div class="item item-3"></div>
   </div> 
   ```

   上述代码实例中，.container元素就是网格布局容器，.item元素就是网格的项目，由于网格元素只能是容器的顶层子元素，所以p元素并不是网格元素

2. **属性**

   - 在元素上设置display：grid 或 display：inline-grid 来创建一个网格容器
   - grid-template-columns 属性设置列宽，grid-template-rows 属性设置行高
   - grid-row-gap 属性、grid-column-gap 属性分别设置行间距和列间距。grid-gap 属性是两者的简写形式
   - **grid-template-areas ：**用于定义区域，一个区域由一个或者多个单元格组成
   - **grid-auto-flow：**划分网格以后，容器的子元素会按照顺序，自动放置在每一个网格
   - **justify-items 属性， align-items 属性， place-items 属性：**justify-items 属性设置单元格内容的水平位置（左中右），align-items 属性设置单元格的垂直位置
   - **justify-content 属性， align-content 属性， place-content 属性：**justify-content属性是整个内容区域在容器里面的水平位置（左中右），align-content属性是整个内容区域的垂直位置（上中下）
   - **grid-auto-columns 属性和 grid-auto-rows 属性：**专门用于指定隐式网格的宽高
   - **rid-column-start 属性、grid-column-end 属性、grid-row-start 属性以及grid-row-end 属性：**指定网格项目所在的四个边框，分别定位在哪根网格线，从而指定项目的位置
   - **grid-area 属性：**指定项目放在哪一个区域
   - **justify-self 属性、align-self 属性以及 place-self 属性：**justify-self属性设置单元格内容的水平位置（左中右），跟justify-items属性的用法完全一致，但只作用于单个项目。
     align-self属性设置单元格内容的垂直位置（上中下），跟align-items属性的用法完全一致，也是只作用于单个项目

3. **应用场景**

   Grid是一个强大的布局，如一些常见的 CSS 布局，如居中，两列布局，三列布局等等是很容易实现的。

   关于兼容性问题，结果如下：总体兼容性还不错，但在 IE 10 以下不支持。目前，Grid布局在手机端支持还不算太友好。



## 对 CSSSprites 的理解

1. **概念**

   CSSSprites（精灵图），将一个页面涉及到的所有图片都包含到一张大图中去，然后利用 CSS 的 background-image，background-repeat，background-position 属性的组合进行背景定位。

2. **优点**

   - 减少http请求。利用 CSS Sprites 能很好地减少网页的 http 请求，从而大大提高了页面的性能，这是 CSS Sprites 最大的优点；
   - 减少字节。CSS Sprites 能减少图片的字节，把 3 张图片合并成 1 张图片的字节总是小于这 3 张图片的字节总和。

3. **缺点**

   - 背景断裂问题。在图片合并时，要把多张图片有序的、合理的合并成一张图片，还要留好足够的空间，防止板块内出现不必要的背景。在宽屏及高分辨率下的自适应页面，如果背景不够宽，很容易出现背景断裂；
   - 开发复杂。CSSSprites 在开发的时候相对来说有点麻烦，需要借助 photoshop或其他工具来对每个背景单元测量其准确的位置。
   - 维护麻烦。CSS Sprites 在维护的时候比较麻烦，页面背景有少许改动时，就要改这张合并的图片，无需改的地方尽量不要动，这样避免改动更多的 CSS，如果在原来的地方放不下，又只能（最好）往下加图片，这样图片的字节就增加了，还要改动 CSS。



## 元素水平垂直居中的实现

1. **定位+margin负值**

   利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 margin 负值来调整元素的中心点到页面的中心。该方法适用于盒子宽高已知的情况

   ```css
   .parent{
       position:relative;
   }
   .child{
       position:absolute;
       top:50%;
       left:50%;
       margin-top:-50px;  /*自身height的一半 */
       margin-left:-50px; /*自身width的一半 */
   }
   ```

2. **定位+margin：auto**

   利用绝对定位，设置四个方向的值都为 0，并将 margin 设置为 auto，由于宽高固定，因此对应方向实现平分，可以实现水平和垂直方向上的居中。该方法适用于盒子有宽高的情况：

   ```css
   .parent{
       position:relative;
   }
   .child{
       position:absolute;
       top:0;
       bottom:0;
       left:0;
       right:0;
       margin:auto;
   }
   ```

3. **定位+transform**

   利用绝对定位，先将元素的左上角通过 top:50%和 left:50%定位到页面的中心，然后再通过 translate 来调整元素的中心点到页面的中心。该方法需要考虑浏览器兼容问题

   ```css
   .parent{
       position: relative;
   }
   .child{
       position:absolute;
       left:50%;
       top:50%;
       transform: translate(-50%,-50%);
   }
   ```

4. **table布局**

   设置父元素为display:table-cell，子元素设置 display: inline-block。利用vertical和text-align可以让所有的行内块级元素水平垂直居中`

   ```css
   .father {
       display: table-cell;
       width: 200px;
       height: 200px;
       background: skyblue;
       vertical-align: middle;
       text-align: center;
   }
   .son {
       display: inline-block;
       width: 100px;
       height: 100px;
       background: red;
   }
   ```

5. **flex布局**

   使用flex布局，通过 align-items:center 和justify-content:center设置容器的垂直和水平方向上为居中对齐，然后它的子元素也可以实现垂直和水平的居中。该方法要考虑兼容的问题，该方法在移动端用的较多

   ```css
   .parent{
       display:flex;
       justify-content: center;
       align-items: center;
   }
   ```

6. **grid布局**

   ```css
   .father {
       display: grid;
       align-items:center;
       justify-content: center;
       width: 200px;
       height: 200px;
       background: skyblue;
   }
   ```



## 如何隐藏页面元素

1. **display:none**

   使用 display:none;隐藏元素，渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件

   ```css
   .hide {
       display:none;
   }
   ```

2. **visibility:hidden**

   使用 visibility:hidden;隐藏元素。元素在页面中仍占据空间，但是不会响应绑定的监听事件

   ```css
   .hidden{
       visibility:hidden
   }
   ```

3. **clip/clip-path**

   通过 clip/clip-path 元素裁剪的方法来实现元素的隐藏，这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件

   ```css
   .hide {
     clip-path: polygon(0px 0px,0px 0px,0px 0px,0px 0px);
   }
   ```

4. **transform:scale(0,0)**

   来将元素缩放为 0，以此来实现元素的隐藏。这种方法下，元素仍在页面中占据位置，但是不会响应绑定的监听事件

5. **opacity:0**

   使用 opacity:0;将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件

   ```css
   .transparent {
       opacity:0;
   }
   ```

6. **定位在外面**

   通过使用绝对定位将元素移除可视区域内，以此来实现元素的隐藏

   ```css
   .hide {
      position: absolute;
      top: -9999px;
      left: -9999px;
   }
   ```

7. **width: 0; height: 0**

   使元素不占用屏幕上的任何空间，导致不显示。如果元素内有子元素或内容，还应该设置其overflow:hidden来隐藏其子元素

   ```css
   .hiddenBox {
       margin:0;     
       border:0;
       padding:0;
       height:0;
       width:0;
       overflow:hidden;
   }
   ```

8. **z-index负值**

   通过 z-index 负值，来使其他元素遮盖住该元素，以此来实现隐藏



## css布局方案实现

1. **多列等高如何实现**

   - margin+padding：利用padding-bottom|margin-bottom正负值相抵，不会影响页面布局的特点。设置父容器设置超出隐藏（overflow:hidden），这样父容器的高度就还是它里面的列没有设定padding-bottom时的高度，当它里面的任一列高度增加了，则父容器的高度被撑到里面最高那列的高度，其他比这列矮的列会用它们的padding-bottom补偿这部分高度差

     ```css
     .box {
       overflow: hidden;
     }
     .box > div{
       /**
       * padding-bottom 设置比较大的正值。
       * margin-bottom 设置绝对值大的负值。
       **/
       padding-bottom: 10000px;
       margin-bottom: -10000px;
       float:left;
       width:30%;
     }
     .left {
       background-color: greenyellow;
     }
     .center {
       background-color: gray;
     }
     .right {
       background-color: yellowgreen;
     }
     ```

   - table-cell：利用table-cell所有单元格高度都相等的特性，来实现多列等高
     ```css
     .left {
      display: table-cell;
      width:30%;
      background-color: greenyellow;
     }
     .center {
      display: table-cell;
      width:30%;
      background-color: gray;
     }
     .right {
      display: table-cell;
      width:30%;
      background-color: yellowgreen;
     }
     ```

   - flex：利用flex布局中项目align-items属性默认为stretch，如果项目未设置高度或设为auto，将占满整个容器的高度的特性，来实现多列等高

     ```css
     .box {
       display: flex;
     }
     .left {
       width: 300px;
       background-color: grey;
     }
     .center {
       flex: 1;   /* =flex: 1 1 0%*/
       background: red;
     }
     .right {
       width: 500px;
       background: yellow;
     }
     ```

   - float：浮动，并设置每一列的宽度。设置父元素为行内块级元素，之后再利用线性渐变的图片来设置父元素的背景凸显等高的效果。

     ```css
     .box {
       display: inline-block;
       background: linear-gradient(
         to right, 
         red, 
         red 20%,
         blue 20%,
         blue 40%,
         yellow 40%,
         yellow 60%,
         orange 60%,
         orange 80%,
         grey 80%,
         grey);
     } 
     .col {
       float: left; 
       width: 16%;
       padding: 2%;
     }
     ```

2. **上下固定中间自适应布局**

   - 利用绝对定位实现

     ```css
     body {
       padding: 0;
       margin: 0;
     }
     .header {
       position: absolute;
       top: 0;
       width: 100%;
       height: 100px;
       background: red;
     }
     .container {
       position: absolute;
       top: 100px;
       bottom: 100px;
       width: 100%;
       background: green;
     }
     .footer {
       position: absolute;
       bottom: 0;
       height: 100px;
       width: 100%;
       background: red;
     }
     ```

   - 利用flex实现

     ```css
     body {
       height: 100%;
     }
     body {
       display: flex;
       padding: 0;
       margin: 0;
       flex-direction: column;
     }
     .header {
       height: 100px;
       background: red;
     }
     .container {
       flex: 1;
       background: green;
     }
     .footer {
       height: 100px;
       background: red;
     }
     ```

   - 利用calc计算

     ```css
     body {
         padding: 0;
         margin: 0;
         height: 1207px;
     }
     .header {
         width: 100%;
         height: 100px;
         background: red;
     }
     .container {
         width: 100%;
         height: calc(100% - 200px);
         background: green;
     }
     .footer {
         height: 100px;
         width: 100%;
         background: red;
     }
     ```

3. **两栏布局：左固定右自适应**

   - 浮动：利用浮动，将左边元素宽度设置为200px，并且设置向左浮动。将右边元素的margin-left设置为200px，宽度设置为auto（默认为auto，撑满整个父元素（或者右边创建一个BFC，设置overflow：hidden即可）

     ```css
     .outer {
       height: 100px;
     }
     .left {
       float: left;
       height: 100px;
       width: 200px;
       background: tomato;
     }
     .right {
       margin-left: 200px;
       width: auto;
       height: 100px;
       background: gold;
     }
     ```

   - flex：利用flex布局，将左边元素的放大和缩小比例设置为0，基础大小设置为200px

     ```css
     .outer {
       display: flex;
       height: 100px;
     }
      
     .left {
       width:200px;
       background: tomato;
     }
      
     .right {
       flex: 1;
       background: gold;
     }
     ```

   - 绝对定位：利用绝对定位布局的方式，将父级元素设置相对定位。左边元素设置为absolute定位，并且宽度设置为200px。将右边元素的margin-left的值设置为200px。

     ```css
     .outer {
       position: relative;
       height: 100px;
     }
     .left {
       position: absolute;
       width: 200px;
       height: 100px;
       background: tomato;
     }
     .right {
       margin-left: 200px;
       height: 100px;
       background: gold;
     }
      
     /* 或者 利用绝对定位的方式，将父级元素设置为相对定位。左边元素宽度设置为200px，右边元素设置为绝对定位，左边定位为200px，其余方向定位为0。*/
     .outer {
       position: relative;
       height: 100px;
     }
     .left {
       width: 200px;
       height: 100px;
       background: tomato;
     }
     .right {
       position: absolute;
       top: 0;
       right: 0;
       bottom: 0;
       left: 200px;
       background: gold;
     }
     ```

4. **三栏布局：左右固定，中间自适应**

   - 绝地定位：利用绝对定位的方式，左右两栏设置为绝对定位，中间设置对应方向大小的margin的值。

     ```css
     .outer {
         position: relative;
         height: 100px;
       }
       .left {
         position: absolute;
         width: 100px;
         height: 100px;
         background: tomato;
       }
       .right {
         position: absolute;
         top: 0;
         right: 0;
         width: 200px;
         height: 100px;
         background: gold;
       }
       .center {
         margin-left: 100px;
         margin-right: 200px;
         height: 100px;
         background: lightgreen;
       }
     ```

   - flex：利用flex布局的方式，左右两栏的放大和缩小比例都设置为0，基础大小设置为固定的大小，中间一栏设置为auto

     ```css
      .outer {
         display: flex;
         height: 100px;
       }
       .left {
         width: 100px;
         background: tomato;
       }
       .right {
        width: 200px;
         background: gold;
       }
       .center {
         flex: auto;
         background: lightgreen;
       }
     ```

   - 浮动：利用浮动的方式，左右两栏设置固定大小，并设置对应方向的浮动。中间一栏设置左右两个方向的margin值，注意这种方式，中间一栏必须放到最后。

     ```css
     .outer {
         height: 100px;
       }
       .left {
         float: left;
         width: 100px;
         height: 100px;
         background: tomato;
       }
       .right {
         float: right;
         width: 200px;
         height: 100px;
         background: gold;
       }
       .center {
         height: 100px;
         margin-left: 100px;
         margin-right: 200px;
         background: lightgreen;
       }
     ```

   - 圣杯布局：利用浮动和负边距来实现。父级元素设置左右的 padding，三列均设置向左浮动，中间一列放在最前面，宽度设置为父级元素的宽度，因此后面两列都被挤到了下一行，通过设置 margin 负值将其移动到上一行，再利用相对定位，定位到两边。（浮动框的上边缘会去贴当前行盒的上边缘或是之前浮动框的下边缘，左浮动框的左边缘会去贴包含框的左边缘，或者他之前的左浮动框的右边缘。如果当前行剩余的空间容不下一个浮动框，他就会换行）

     ```css
      .outer {
         height: 100px;
         padding-left: 100px;
         padding-right: 200px;
       }
       .left {
         position: relative;
         left: -100px;
         float: left;
         margin-left: -100%;
         width: 100px;
         height: 100px;
         background: tomato;
       }
       .right {
         position: relative;
         left: 200px;
         float: right;
         margin-left: -200px;
         width: 200px;
         height: 100px;
         background: gold;
       }
       .center {
         float: left;
         width: 100%;
         height: 100px;
         background: lightgreen;
       }
     ```

   - 双飞翼布局：相对于圣杯布局来说，左右位置的保留是通过中间列的 margin 值来实现的，而不是通过父元素的 padding 来实现的。本质上来说，也是通过浮动和外边距负值来实现的

     ```css
      .outer {
         height: 100px;
       }
        
       .left {
         float: left;
         margin-left: -100%;
         width: 100px;
         height: 100px;
         background: tomato;
       }
       .right {
         float: left;
         margin-left: -200px;
         width: 200px;
         height: 100px;
         background: gold;
       }
        
       .wrapper {
         float: left;
         width: 100%;
         height: 100px;
         background: lightgreen;
       }
       .center {
         margin-left: 100px;
         margin-right: 200px;
         height: 100px;
       }
     ```

5. **瀑布流布局**

   ```html
   <style>
       body {
           margin: 0;
       }
       .waterfall-container {
           column-count: 2;   /*分几列*/
           width: 100%;
           column-gap: 10px;  /* 列间距 */
       }
       .waterfall-item {
           break-inside: avoid;
           width: 100%;
           height: 100px;
           margin-bottom: 10px;
           background: #ddd;
           column-gap: 0;
           text-align: center;
           color: #fff;
           font-size: 40px;
       }
   </style>
   <body>
       <div class="waterfall-container">
           <div class="waterfall-item" style="height: 100px">1</div>
           <div class="waterfall-item" style="height: 300px">2</div>
           <div class="waterfall-item" style="height: 400px">3</div>
           <div class="waterfall-item" style="height: 100px">4</div>
           <div class="waterfall-item" style="height: 300px">5</div>
           <div class="waterfall-item" style="height: 600px">6</div>
           <div class="waterfall-item" style="height: 400px">7</div>
           <div class="waterfall-item" style="height: 300px">8</div>
           <div class="waterfall-item" style="height: 700px">9</div>
           <div class="waterfall-item" style="height: 100px">10</div>
       </div>
   </body>
   ```





## 省略号实现

1. **单行文本溢出**

   ```css
   p {
     overflow: hidden;
     white-space: nowrap;
     text-overflow: ellipsis;
   }
   ```

2. 多行文本溢出

   - **基于高度截断**

     ```css
     p {
       position: relative;
       line-height: 1.5em;
       /*高度为需要显示的行数*行高，比如这里我们显示两行，则为3*/
       height: 3em;
       overflow: hidden;
     }
     p:after {
       content: '...';
       position: absolute;
       bottom: 0;
       right: 0;
       background-color: #fff;
     }
     ```

   - **基于行数截断**

     ```css
     p {
         width: 400px;
         border-radius: 1px solid red;
         -webkit-line-clamp: 2;
         display: -webkit-box;
         -webkit-box-orient: vertical;
         overflow: hidden;
         text-overflow: ellipsis;
     	word-break: break-all;
     }
     ```



## 如何解决边框1px显示粗的问题

1. **原因**

   在一些 Retina 屏幕 的机型上，移动端页面的 1px会变得很粗，呈现出不止 1px 的效果

   原因在于：CSS 中的 1px并不能和移动设备上的 1px 划等号。它们之间的比例关系有一个专门的属性来描述
   ```js
   console.log(window.devicePixelRatio) // 设备的物理像素/CSS像素
   ```

   如果为2，意味着1px CSS 像素，在这个设备上实际会用 2 个物理像素单元来进行渲染，所以实际看到的一定会比 1px 粗一些

2. 解决方案

   - **直接写0.5px**

     直接把 1px 改成 1/devicePixelRatio 后的值，这是目前为止最简单的一种方法。这种方法的缺陷在于兼容性不行，IOS 系统需要 8 及以上的版本，安卓系统则直接不兼容

     ```css
     #container[data-device="2"]{
         border:0.5px solid #333
     }
     ```

   - **使用伪类 + transform实现**

     在目标元素的后面追加一个 ::after 伪元素，让这个元素布局为 absolute 之后、整个伸展开铺在目标元素上，然后把它的宽和高都设置为目标元素的两倍，border 值设为 1px。接着借助 CSS 动画特效中的放缩能力，把整个伪元素缩小为原来的50%。此时，伪元素的宽高刚好可以和原有的目标元素对齐，而 border也缩小为了 1px 的二分之一，间接地实现了 0.5px 的效果

     ```css
     #container[data-device="2"]{
         position:relative;
     }
     #container[data-device="2"]::after{
         position:absolute;
         top:0;
         left:0;
         width:200%;
         height:200%;
         content:"";
         transform: scale(0.5);
         transform-origin: left top;
         box-sizing:border-box;
         border: 1px solid #333;
     }
     ```

   - **使用border-image实现**

     ```css
     .border-1px{
     	 border-bottom: 1px solid #000; 
     }
      @media only screen and (-webkit-min-device-pixel-ratio:2){ 		
     	.border_1px{ 
     		border-bottom: none;
     		 border-width: 0 0 1px 0; 
     		border-image: url(../img/1pxline.png) 0 0 2 0 stretch;  
     	} 
     }
     ```

   - **通过 viewport + rem 实现**

     ```js
     const scale = 1 / window.devicePixelRatio; 
     const viewport = document.querySelector('meta[name="viewport"]'); 
     if (!viewport) {  
     	viewport = document.createElement('meta');  
     	viewport.setAttribute('name', 'viewport'); 
     	window.document.head.appendChild(viewport); 
     }  
     viewport.setAttribute('content', 
     	'width=device-width,
     	user-scalable=no,
     	initial-scale=' + scale + ',
     	maximum-scale=' + scale + ',
     	minimum-scale=' + scale
     );  
     // 设置根字体大小
     var docEl = document.documentElement; 
     var fontsize = 10 * (docEl.clientWidth / 320) + 'px'; docEl.style.fontSize = fontsize;  
     // 在CSS中用rem单位就行了
     ```

   - **box-shadow模拟边框实现**

     ```css
     // 下边框
     box-shadow: 0 1px #E9E9E9;
     // 全边框
     box-shadow: 0 -1px #D9D9D9, 1px 0 #D9D9D9, 0 1px #D9D9D9, -1px 0 #D9D9D9
     
     ```



## 去除inline-block元素间间距

1. **原因**

   浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个`<li>`放在一行，这导致`<li>`换行后产生换行字符，它变成一个空格，占用了一个字符的宽度

2. 解决方案

   - **子元素设置浮动**

     为`<li>`设置float:left，但有些容器是不能设置浮动，如左右切换的焦点图等；

   - **子元素排列在一起**

     将所有`<li>`写在同一行但代码不美观；

   - **父元素font-size:0**

     将`<ul>`内的字符尺寸直接设为0，即font-size:0，但`<ul>`中的其他字符尺寸也被设为0，需要额外重新设定其他；

   - **父元素letter-spacing:-8px**

     消除`<ul>`的字符间隔letter-spacing:-8px，但这也设置了`<li>`内的字符间隔，因此需要将`<li>`内的字符间隔设为默认letter-spacing:normal



## 支持小于12px 的文字的方式

1. **系统最小字号**

   浏览器默认设定页面的最小字号，用户可以前往 chrome://settings/fonts 根据需求更改。

   而我们在实际项目中，不能奢求用户更改浏览器设置。

2. **zoom**

   ```html
   <style type="text/css">
       .span1{
           font-size: 12px;
           display: inline-block;
           zoom: 0.8;
       }
       .span2{
           display: inline-block;
           font-size: 12px;
       }
   </style>
   <body>
       <span class="span1">测试10px</span>
       <span class="span2">测试12px</span>
   </body>
   ```

3. **-webkit-transform:scale()**

   ```html
   <style type="text/css">
       .span1{
           font-size: 12px;
           display: inline-block;
           -webkit-transform:scale(0.8);
       }
       .span2{
           display: inline-block;
           font-size: 12px;
       }
   </style>
   <body>
       <span class="span1">测试10px</span>
       <span class="span2">测试12px</span>
   </body>
   ```

4. **-webkit-text-size-adjust:none**

   该属性用来设定文字大小是否根据设备(浏览器)来自动调整显示大小。属性值：

   - percentage：字体显示的大小；
   - auto：默认，字体大小会根据设备/浏览器来自动调整；
   - none:字体大小不会自动调整

   ```css
   html { -webkit-text-size-adjust: none; }
   ```

   这样设置之后会有一个问题，就是当你放大网页时，一般情况下字体也会随着变大，而设置了以上代码后，字体只会显示你当前设置的字体大小，不会随着网页放大而变大了，所以，我们不建议全局应用该属性，而是单独对某一属性使用



## css画图

1. 纯css画三角形

   ```css
   #demo {
     width: 0;
     height: 0;
     border-width: 20px;
     border-style: solid;
     border-color: transparent transparent red transparent;
   }
   ```

2. 画一条0.5px的线

   - transform:scale()

     ```css
     .half-piexel-line {
                 height: 1px;
                 background-color: black;
                 transform: scale(0.5);
       }
     ```

   - 伪元素叠加法

     ```css
     .half-piexel-line::before, .half-piexel-line::after {
                 content: '';
                 display: block;
                 height: 1px;
                 background-color: black;
                 width: 100%;
             }
     .half-piexel-line::after {
                 margin-top: .5px
     }
     ```

   - box-shadow

     ```css
     .half-piexel-line {
                 height: 1px;
                box-shadow: 0 0 0 0.5px block
       }
     ```

   - border-image

     ```css
     .half-piexel-line {
                 height: 1px;
                 background-image: linear-gradient(to right, black 50%, transparent 50%);
                 transform: scale(0.5);
       }
     ```



## 响应式布局

1. **概念**

   响应式网站设计（Responsive Web design）是一种网络页面设计布局，页面的设计与开发应当根据用户行为以及设备环境(系统平台、屏幕尺寸、屏幕定向等)进行相应的响应和调整。响应式网站常见特点：

   - 同时适配PC + 平板 + 手机等
   - 标签导航在接近手持终端设备时改变为经典的抽屉式导航
   - 网站的布局会根据视口来调整模块的大小和位置

2. **viewport**

   响应式设计的基本原理是通过媒体查询检测不同的设备屏幕尺寸做处理，为了处理移动端，页面头部必须有meta声明viewport

   ```html
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no”>
   ```

   属性对应如下：

   - width=device-width: 是自适应手机屏幕的尺寸宽度
   - maximum-scale:是缩放比例的最大值
   - inital-scale:是缩放的初始化
   - user-scalable:是用户的可以缩放的操作

3. 实现

   - **媒体查询**：CSS3中的增加了更多的媒体查询，就像if条件表达式一样，我们可以设置不同类型的媒体条件，并根据对应的条件，给相应符合条件的媒体调用相对应的样式表。通过媒体查询，可以通过给不同分辨率的设备编写不同的样式来实现响应式的布局，比如我们为不同分辨率的屏幕，设置不同的背景图片。比如给小屏幕手机设置@2x图，为大屏幕手机设置@3x图，通过媒体查询就能很方便的实现

     ```css
     @media screen (min-width: 375px) and (max-width: 600px) {
       body {
         font-size: 18px;
       }
     ```

   - **百分比**：通过百分比单位 " % " 来实现响应式的效果。比如当浏览器的宽度或者高度发生变化时，通过百分比单位，可以使得浏览器中的组件的宽和高随着浏览器的变化而变化，从而实现响应式的效果。height、width属性的百分比依托于父标签的宽高，但是其他盒子属性则不完全依赖父元素：

     - 子元素的top/left和bottom/right如果设置百分比，则相对于直接非static定位(默认定位)的父元素的高度/宽度
     - 子元素的padding如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的width，而与父元素的height无关。
     - 子元素的margin如果设置成百分比，不论是垂直方向还是水平方向，都相对于直接父元素的width
     - border-radius不一样，如果设置border-radius为百分比，则是相对于自身的宽度

     可以看到每个属性都使用百分比，会照成布局的复杂度，所以不建议使用百分比来实现响应式

   - **vw/wh**：vw表示相对于视图窗口的宽度，vh表示相对于视图窗口高度。 任意层级元素，在使用vw单位的情况下，1vw都等于视图宽度的百分之一

   - **rem**：是相对于根元素html的font-size属性，默认情况下浏览器字体大小为16px，此时1rem = 16px。可以利用前面提到的媒体查询，针对不同设备分辨率改变font-size的值



## 实现组件在各个屏幕自适应

1. **流式布局**

   宽度适用百分比，高度使用 px 来固定。在大屏幕的手机下显示效果会变成有些页面元素宽度被拉的很长，但是高度还是和原来一样，实际显示非常的不协调，往往只有几个尺寸的手机下看到的效果是令人满意的 

2. **固定宽度做法**

   把页面设置成 320 的宽度，超出部分留白。在大屏幕手机下两边是留白的，还有一个就是大屏幕手机下看起来页面会特别小，操作的按钮也很小，手机淘宝首页起初是这么做的。

3. **响应式做法**

   分别为不同的屏幕分辨率定义布局，同时，在每个布局中，应用流式布局的理念，即页面元素宽度随着窗口调整而自动适配。媒体查询是有限的，也就是可以枚举出来的，只能适应主流的宽高；要匹配足够多的屏幕大小，工作量不小，设计也需要多个版本 

4. **设置 viewport 进行缩放**

   以 320 宽度为基准，进行缩放，最大缩放为 320*1.3 = 416。使用过程中反应缩放会导致有些页面元素会糊的情况 

5. **rem**

    是通过根元素进行适配的，网页中的根元素指的是 html 我们通过设置 html 的字体大小就可以控制 rem 的大小。根元素的大小为 1rem 



## css 作用域隔离（模块化）方法

1. **命名空间**

   给样式类名添加前缀或命名空间，以确保每个组件的样式类名不 会冲突。例如，在⼀个项⽬中，可以为每个组件的样式类名都添加⼀个唯⼀的前缀，例 如 .componentA-button 和 .componentB-button ，这样可以避免命名冲突

2. **module**

   CSS模块提供了在组件级别上限定样式作⽤域的能⼒，从⽽避免了全局样式的冲突 和覆盖。每个组件的样式定义在组件内部，使⽤唯⼀的类名，确保样式的隔离性和唯⼀性。例如 vue 的 scoped

3. **css-in-js**

   CSS-in-JS是⼀种将CSS样式直接写⼊JavaScript代码中的⽅法，通过将 样式与组件绑定，可以避免全局样式的冲突问题。⼀些常⻅的CSS-in-JS解决⽅案包括St

4. **Shadow DOM**

   其实就是 web components，作用域隔离 

   ```js
   const shadowRoot = this.attachShadow({ mode: 'open' });
   shadowRoot.innerHTML = `
    <style>
      /* 组件内部样式 */
    </style>
    <div class="content">...</div>
   `;
   ```

5. **使⽤CSS预处理器**

   CSS预处理器（如Sass、Less）可以提供变量、嵌套规则和模块化等功能，可以更⽅便地管理样式并避免命名冲突。例如，可以使⽤变量来定义颜⾊和尺⼨，使⽤嵌套规则来组 织样式，并将样式拆分成多个模块

6. **使⽤BEM命名规范**

   BEM（块、元素、修饰符）是⼀种常⽤的命名规范，可以将样式类名分成块 （block）、元素（element）和修饰符（modifier）三个部分，以确保样式的唯⼀性和可读性。例如， .button 表⽰⼀个块， .button__icon 表⽰⼀个元素， .button--disabled 表 ⽰⼀个修饰符

## 对 CSS 工程化的理解

1. **解决哪些问题**

   - 宏观设计：CSS 代码如何组织、如何拆分、模块结构怎样设计？
   - 编码优化：怎样写出更好的 CSS？
   - 构建：如何处理我的 CSS，才能让它的打包结果最优？
   - 可维护性：代码写完了，如何最小化它后续的变更成本？如何确保任何一个同事都能轻松接手？

2. **预处理器less、sass**

   为什么要用预处理器？它的出现是为了解决什么问题？预处理器，其实就是 CSS 世界的“轮子”。预处理器支持我们写一种类似 CSS、但实际并不是 CSS 的语言，然后把它编译成 CSS 代码。那为什么写 CSS 代码写得好好的，偏偏要转去写“类 CSS”呢？这就和本来用 JS 也可以实现所有功能，但最后却写 React 的 jsx 或者 Vue 的模板语法一样——为了爽！要想知道有了预处理器有多爽，首先要知道的是传统 CSS 有多不爽。随着前端业务复杂度的提高，前端工程中对 CSS 提出了以下的诉求：

   - 宏观设计上：我们希望能优化 CSS 文件的目录结构，对现有的 CSS文件实现复用；
   - 编码优化上：我们希望能写出结构清晰、简明易懂的 CSS，需要它具有一目了然的嵌套层级关系，而不是无差别的一铺到底写法；我们希望它具有变量特征、计算能力、循环能力等等更强的可编程性，这样我们可以少写一些无用的代码；
   - 可维护性上：更强的可编程性意味着更优质的代码结构，实现复用意味着更简单的目录结构和更强的拓展能力，这两点如果能做到，自然会带来更强的可维护性。

   这三点是传统 CSS 所做不到的，也正是预处理器所解决掉的问题。预处理器普遍会具备这样的特性：

   - 嵌套代码的能力，通过嵌套来反映不同 css 属性之间的层级关系 ；
   - 支持定义 css 变量；
   - 提供计算函数；
   - 允许对代码片段进行 extend 和 mixin；
   - 支持循环语句的使用；
   - 支持将 CSS 文件模块化，实现复用。

3. **重要的工程化插件postcss**

   PostCss 是如何工作的？我们在什么场景下会使用PostCss？ PostCss 仍然是一个对 CSS 进行解析和处理的工具，它会对 CSS 做这样的事情：它和预处理器的不同就在于，预处理器处理的是 类 CSS，而 PostCss处理的就是 CSS 本身。Babel 可以将高版本的 JS 代码转换为低版本的 JS 代码。PostCss 做的是类似的事情：它可以编译尚未被浏览器广泛支持的先进的 CSS 语法，还可以自动为一些需要额外兼容的语法增加前缀。更强的是，由于 PostCss 有着强大的插件机制，支持各种各样的扩展，极大地强化了 CSS 的能力。PostCss 在业务中的使用场景非常多：

   - 提高 CSS 代码的可读性：PostCss 其实可以做类似预处理器能做的工作；
   - 当 我 们 的 CSS 代 码 需 要 适 配 低 版 本 浏 览 器 时 ， PostCss 的Autoprefixer 插件可以帮助我们自动增加浏览器前缀；
   - 允许我们编写面向未来的 CSS：PostCss 能够帮助我们编译 CSS next 代码

4. **webpack loader**

   Webpack 能处理 CSS吗？如何实现？

   Webpack 在裸奔的状态下，是不能处理 CSS 的，Webpack 本身是一个面向 JavaScript 且只能处理 JavaScript 代码的模块化打包工具；Webpack 在 loader 的辅助下，是可以处理 CSS 的。
   如何用 Webpack 实现对 CSS 的处理：Webpack 中操作 CSS 需要使用的两个关键的 loader：css-loader和 style-loader。
   注意，答出“用什么”有时候可能还不够，面试官会怀疑你是不是在背答案，所以你还需要了解每个 loader 都做了什么事情：

   - css-loader：导入 CSS 模块，对 CSS 代码进行编译处理；
   - style-loader：创建 style 标签，把 CSS 内容写入标签。

   在实际使用中，css-loader 的执行顺序一定要安排在 style-loader的前面。因为只有完成了编译过程，才可以对 css 代码进行插入；若提前插入了未编译的代码，那么 webpack 是无法理解这坨东西的，它会无情报错。



## CSS 优化和提高性能的方法有哪些

1. 加载性能
   - **css压缩**：将写好的 css 进行打包压缩，可以减小文件体积。
   - **css单一样式**：当需要下边距和左边距的时候，很多时候会选择 使 用 margin:top 0 bottom 0 ； 但margin-bottom:bottom;margin-left:left;执行效率会更高。
   - **使用link，非@import**：减少使用@import，建议使用 link，因为后者在页面加载时一起加载，前者是等待页面加载完成之后再进行加载。
2. 选择器性能
   - **关键选择器**：选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）。CSS 选择符是从右到左进行匹配的。当使用后代选择器的时候，浏览器会遍历所有子元素来确定是否是指定的元素等等；如果规则拥有 ID 选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）。
   - **少使用通配符**：避免使用通配规则，如*{}计算次数惊人，只对需要用到的元素进行选择。
   - **少使用标签和后代选择器**：尽量少的去对标签进行选择，而是用 class。尽量少的去使用后代选择器，降低选择器的权重值。后代选择器的开销是最高的，尽量将选择器的深度降到最低，最高不要超过三层，更多的使用类来关联每一个标签元素。
   - **使用继承，避免重复**：了解哪些属性是可以通过继承而来的，然后避免对这些属性重复指定规则。
3. 渲染性能
   - **减少页面重排、重绘**
   - **慎重使用高性能属性**：浮动、定位。正确使用 display 的属性，由于 display 的作用，某些样式组合会无效，徒增样式体积的同时也影响解析性能。
   - **属性值书写优化**：属性值为浮动小数 0.**，可以省略小数点之前的 0；属性值为0不加单位；去除空规则：｛｝。空规则的产生原因一般来说是为了预留样式。去除这些空规则无疑能减少 css 文档体积。
   - **浏览器前缀**：带浏览器前缀的在前。标准属性在后。
   - **雪碧图**：同一页面相近部分的小图标，方便使用，减少页面的请求次数，但是同时图片本身会变大，使用时，优劣考虑清楚，再使用。
   - **web字体**：不滥用 web 字体。对于中文网站来说 WebFonts 可能很陌生，国外却很流行。web fonts 通常体积庞大，而且一些浏览器在下载 web fonts 时会阻塞页面渲染损伤性能。
4. 可维护性
   - **样式抽离使用class**：将具有相同属性的样式抽离出来，整合并通过 class 在页面中进行使用，提高 css 的可维护性。
   - **样式和内容分离**：将 css 代码定义到外部 css 中。
