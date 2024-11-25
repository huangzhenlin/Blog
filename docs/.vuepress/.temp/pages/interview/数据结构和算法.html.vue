<template><div><h2 id="算法衡量指标" tabindex="-1"><a class="header-anchor" href="#算法衡量指标"><span>算法衡量指标</span></a></h2>
<ol>
<li>
<p><strong>时间复杂度</strong></p>
<p>时间复杂度是指执行这个算法所需要的计算工作量，其复杂度反映了程序执行时间「随输入规模增长而增长的量级」，在很大程度上能很好地反映出算法的优劣与否。一个算法花费的时间与算法中语句的「执行次数成正比」，执行次数越多，花费的时间就越多。算法的复杂度通常用大O符号表述，定义为T(n) = O(f(n))，常见的时间复杂度有：O(1)常数型、O(log n)对数型、O(n)线性型、O(nlogn)线性对数型、O(n^2)平方型、O(n^3)立方型、O(n^k)k次方型、O(2^n)指数型</p>
<p>随着问题规模n的不断增大，上述时间复杂度不断增大，算法的执行效率越低，由小到大排序如下：</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line">Ο<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>＜Ο<span class="token punctuation">(</span>log n<span class="token punctuation">)</span>＜Ο<span class="token punctuation">(</span>n<span class="token punctuation">)</span>＜Ο<span class="token punctuation">(</span>nlog n<span class="token punctuation">)</span>＜Ο<span class="token punctuation">(</span>n2<span class="token punctuation">)</span>＜Ο<span class="token punctuation">(</span>n3<span class="token punctuation">)</span>＜…＜Ο<span class="token punctuation">(</span><span class="token number">2</span>^n<span class="token punctuation">)</span>＜Ο<span class="token punctuation">(</span>n<span class="token operator">!</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注意的是，算法复杂度只是描述算法的增长趋势，并不能说一个算法一定比另外一个算法高效，如果常数项过大的时候也会导致算法的执行时间变长</p>
</li>
<li>
<p><strong>空间复杂度</strong></p>
<p>空间复杂度主要指执行算法所需内存的大小，用于对程序运行过程中所需要的临时存储空间的度量。除了需要存储空间、指令、常数、变量和输入数据外，还包括对数据进行操作的工作单元和存储计算所需信息的辅助空间</p>
<p>通常来说，只要算法不涉及到动态分配的空间，以及递归、栈所需的空间，空间复杂度通常为O(1)，一个一维数组a[n]，空间复杂度O(n)，二维数组为O(n^2)</p>
</li>
</ol>
<h2 id="常见数据结构" tabindex="-1"><a class="header-anchor" href="#常见数据结构"><span>常见数据结构</span></a></h2>
<ol>
<li>
<p><strong>数组</strong></p>
<p>数组是最最基本的数据结构，很多语言都内置支持数组。 数组是使用一块连续的内存空间保存数据，保存的数据的个数在分配内存的时候就是确定的。在日常生活中，人们经常使用列表：待办事项列表、购物清单等。而计算机程序也在使用列表，在下面的条件下，选择列表作为数据结构就显得尤为有用： 数据结构较为简单 不需要在一个长序列中查找元素，或者对其进行排序 反之，如果数据结构非常复杂，列表的作用就没有那么大了</p>
</li>
<li>
<p><strong>栈</strong></p>
<p>栈是一种遵循后进先出（LIFO）原则的有序集合 在栈里，新元素都接近栈顶，旧元素都接近栈底。 每次加入新的元素和拿走元素都在顶部操作</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Stack</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">push</span><span class="token punctuation">(</span><span class="token parameter">element</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 添加一个（或几个）新元素到栈顶</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>element<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 移除栈顶的元素，同时返回被移除的元素</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">peek</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 如果栈里没有任何元素就返回true,否则返回false</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 移除栈里的所有元素</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>items <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">size</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 返回栈里的元素个数。这个方法和数组的length属性很类似</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>items<span class="token punctuation">.</span>length</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>队列</strong></p>
<p>是遵循先进先出（FIFO，也称为先来先服务）原则的一组有序的项 队列在尾部添加新元素，并从顶部移除元素 最新添加的元素必须排在队列的末尾，简单实现一个队列的方式，如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>tailIndex <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">enqueue</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>tailIndex<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> item</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">unqueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> item  <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>list<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex<span class="token punctuation">]</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>frontIndex<span class="token operator">++</span>        </span>
<span class="line">        <span class="token keyword">return</span> item</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>无论插入或删除，一旦rear指针增1或front指针增1 时超出了所分配的队列空间，就让它指向这片连续空间的起始位置，这种队列也就是循环队列。下面实现一个循环队列，如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">Queue</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">size</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>size <span class="token operator">=</span> size<span class="token punctuation">;</span> <span class="token comment">// 长度需要限制, 来达到空间的利用, 代表空间的长度</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token comment">// 指向首元素</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>  <span class="token comment">// 指向准备插入元素的位置</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">enQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>_data<span class="token punctuation">[</span><span class="token keyword">this</span><span class="token punctuation">.</span>rear<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> value<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">deQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>font<span class="token operator">++</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">isEmpty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">isFull</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rear <span class="token operator">%</span> <span class="token keyword">this</span><span class="token punctuation">.</span>k <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>font<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>链表</strong></p>
<p>也是一种列表，已经设计了数组，为什么还需要链表呢？ JavaScript中数组的主要问题时，它们被实现成了对象， 与其他语言（比如C++和Java）的数组相对，效率很低。 如果你发现数组在实际使用时很慢，就可以考虑使用链表来代替它。使用条件： 链表几乎可以用在任何可以使用一维数组的情况中。 如果需要随机访问，数组仍然是更好的选择</p>
<p>每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域</p>
<ul>
<li>data 表示节点存放的数据</li>
<li>next 表示下一个节点指向的内存空间</li>
</ul>
<p>相比于线性表顺序结构，操作复杂。由于不必须按顺序存储，链表在插入的时候可以达到O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要O(n)的时间，而线性表和顺序表相应的时间复杂度分别是O(logn)和O(1)</p>
<p>链表的结构也十分多，常见的有四种形式：</p>
<ul>
<li>单链表：除了头节点和尾节点，其他节点只包含一个后继指针</li>
<li>循环链表：跟单链表唯一的区别就在于它的尾结点又指回了链表的头结点，首尾相连，形成了一个环</li>
<li>双向链表：每个结点具有两个方向指针，后继指针(next)指向后面的结点，前驱指针(prev)指向前面的结点，其中节点的前驱指针和尾结点的后继指针均指向空地址NULL</li>
<li>双向循环链表：跟双向链表基本一致，不过头节点前驱指针指向尾迹诶单和尾节点的后继指针指向头节点</li>
</ul>
</li>
<li>
<p><strong>字典</strong></p>
<p>是一种以键-值对存储数据的数据结构，js中的Object类就是以字典的形式设计的。JavaScript可以通过实现字典类，让这种字典类型的对象使用起来更加简单，字典可以实现对象拥有的常见功能，并相应拓展自己想要的功能，而对象在JavaScript编写中随处可见，所以字典的作用也异常明显了</p>
</li>
<li>
<p><strong>哈希表</strong></p>
<p>也称为散列表，特点是在散列表上插入、删除和取用数据都非常快。 为什么要设计这种数据结构呢？ 用数组或链表存储数据，如果想要找到其中一个数据，需要从头进行遍历，因为不知道这个数据存储到了数组的哪个位置。散列表在JavaScript中可以基础数组去进行设计。 数组的长度是预先设定的，所有元素根据和该元素对应的键，保存在数组的特定位置，这里的键和对象的键是类型的概念。 使用散列表存储数组时，通过一个散列函数将键映射为一个数字，这个数字的范围是0到散列表的长度。即使使用一个高效的散列函数，依然存在将两个键映射为同一个值得可能，这种现象叫做碰撞。常见碰撞的处理方法有：开链法和线性探测法， 使用条件： 可以用于数据的插入、删除和取用，不适用于查找数据</p>
</li>
<li>
<p><strong>树</strong></p>
<p>是由 <code v-pre>n ≥ 0</code> 个节点与节点之间的关系组成的有限集合，当 <code v-pre>n = 0</code> 时称为空树，当 <code v-pre>n &gt; 0</code> 时称为非空树。</p>
<p>二叉树满足以下两个条件：</p>
<ul>
<li>本身是有序树</li>
<li>树中包含的各个结点的不能超过 2，即只能是 0、1 或者 2</li>
</ul>
<p>同时，二叉树可以继续进行分类，分成了满二叉树和完成二叉树：</p>
<ul>
<li>满二叉树：如果二叉树中除了叶子结点，每个结点的度都为 2</li>
<li>完全二叉树：如果二叉树中除去最后一层节点为满二叉树，且最后一层的结点依次从左到右分布</li>
</ul>
</li>
<li>
<p><strong>图</strong></p>
<p>图的深度优先搜索、图的广度优先搜索、图的拓扑排序、图的最小生成树、单源最短路径、多源最短路径、 次短路径、差分约束系统、二分图</p>
</li>
<li>
<p><strong>堆</strong></p>
<p>是一种特殊的树形数据结构。堆是一个完全二叉树；堆中每一个节点的值都必须大于等于（或小于等于）其子树中每个节点的值。</p>
</li>
</ol>
<h2 id="排序算法" tabindex="-1"><a class="header-anchor" href="#排序算法"><span>排序算法</span></a></h2>
<ol>
<li>
<p><strong>冒泡排序</strong></p>
<p>一种简单直观的排序算法。它重复地走访过要排序的数列，一次比较两个元素，如果他们的顺序错误就把他们交换过来。思路如下：</p>
<ul>
<li>比较相邻的元素，如果第一个比第二个大，就交换它们两个</li>
<li>对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对，这样在最后的元素应该会是最大的数</li>
<li>针对所有的元素重复以上的步骤，除了最后一个</li>
<li>重复上述步骤，直到没有任何一堆数字需要比较</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">bubbleSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> j <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span> <span class="token operator">-</span> i<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">></span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>      <span class="token comment">// 相邻元素两两对比</span></span>
<span class="line">                <span class="token keyword">var</span> temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>      <span class="token comment">// 元素交换</span></span>
<span class="line">                arr<span class="token punctuation">[</span>j<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">                arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> arr<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>冒泡排的核心部分是双重嵌套循环， 时间复杂度是 O(N 2 )，相比其它排序算法，这是一个相对较高的时间复杂度，一般情况不推荐使用，由于冒泡排序的简洁性，通常被用来对于程序设计入门的学生介绍算法的概念</p>
</li>
<li>
<p><strong>选择排序</strong></p>
<p>是一种简单直观的排序算法，它也是一种交换排序算法。无论什么数据进去都是 O(n²)的时间复杂度。所以用到它的时候，数据规模越小越好。唯一的好处是不占用额外的内存存储空间。思路如下：</p>
<ul>
<li>在未排序序列中找到最小（大）元素，存放到排序序列的起始位置</li>
<li>从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。</li>
<li>重复第二步，直到所有元素均排序完毕</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">selectionSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">var</span> minIndex<span class="token punctuation">,</span> temp<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        minIndex <span class="token operator">=</span> i<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> j <span class="token operator">=</span> i <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span> j <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> j<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>j<span class="token punctuation">]</span> <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>   <span class="token comment">// 寻找最小的数</span></span>
<span class="line">                minIndex <span class="token operator">=</span> j<span class="token punctuation">;</span>            <span class="token comment">// 将最小数的索引保存</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        temp <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        arr<span class="token punctuation">[</span>minIndex<span class="token punctuation">]</span> <span class="token operator">=</span> temp<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> arr<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>和冒泡排序一致，相比其它排序算法，这也是一个相对较高的时间复杂度，一般情况不推荐使用。但是我们还是要掌握冒泡排序的思想及实现，这对于我们的算法思维是有很大帮助的。</p>
</li>
<li>
<p><strong>插入排序</strong></p>
<p>是一种简单直观的排序算法。它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。解决思路如下：</p>
<ul>
<li>把待排序的数组分成已排序和未排序两部分，初始的时候把第一个元素认为是已排好序的</li>
<li>从第二个元素开始，在已排好序的子数组中寻找到该元素合适的位置并插入该位置（如果待插入的元素与有序序列中的某个元素相等，则将待插入元素插入到相等元素的后面。）</li>
<li>重复上述过程直到最后一个元素被插入有序子数组中</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">insertionSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> preIndex<span class="token punctuation">,</span> current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        preIndex <span class="token operator">=</span> i <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">        current <span class="token operator">=</span> arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">while</span><span class="token punctuation">(</span>preIndex <span class="token operator">>=</span> <span class="token number">0</span> <span class="token operator">&amp;&amp;</span> arr<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span> <span class="token operator">></span> current<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            arr<span class="token punctuation">[</span>preIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> arr<span class="token punctuation">[</span>preIndex<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            preIndex<span class="token operator">--</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        arr<span class="token punctuation">[</span>preIndex<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> current<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> arr<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插入排序时间复杂度是 O(n2)，适用于数据量不大，算法稳定性要求高，且数据局部或整体有序的数列排序</p>
</li>
<li>
<p><strong>归并排序</strong></p>
<p>是建立在归并操作上的一种有效的排序算法。该算法是采用分治法的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列，即先使每个子序列有序，再使子序列段间有序。解决思路如下：</p>
<ul>
<li>申请空间，使其大小为两个已经排序序列之和，该空间用来存放合并后的序列</li>
<li>设定两个指针，最初位置分别为两个已经排序序列的起始位置</li>
<li>比较两个指针所指向的元素，选择相对小的元素放入到合并空间，并移动指针到下一位置</li>
<li>重复步骤3直到某一指针到达序列尾</li>
<li>将另一序列剩下的所有元素直接复制到合并序列尾</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>  <span class="token comment">// 采用自上而下的递归方法</span></span>
<span class="line">    <span class="token keyword">const</span> len <span class="token operator">=</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>len <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> arr<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> middle <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span>len <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        left <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> middle<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        right <span class="token operator">=</span> arr<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span>middle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token function">mergeSort</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">mergeSort</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">merge</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>length <span class="token operator">&amp;&amp;</span> right<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>left<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> right<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>left<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line">        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>left<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>right<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line">        result<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>right<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> result<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>快速排序</strong></p>
<p>是对冒泡排序算法的一种改进，基本思想是通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据比另一部分的所有数据要小。再按这种方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，使整个数据变成有序序列。解决思路如下：</p>
<ul>
<li>从数列中挑出一个元素，称为&quot;基准&quot;（pivot）</li>
<li>重新排序数列，所有比基准值小的元素摆放在基准前面，所有比基准值大的元素摆在基准后面（相同的数可以到任何一边）。在这个分区结束之后，该基准就处于数列的中间位置。这个称为分区（partition）操作</li>
<li>递归地（recursively）把小于基准值元素的子数列和大于基准值元素的子数列排序</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">quickSort</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> <span class="token function-variable function">rec</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">arr</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">return</span> arr<span class="token punctuation">;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">const</span> left <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> right <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">const</span> mid <span class="token operator">=</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token comment">// 基准元素</span></span>
<span class="line">    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> arr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">&lt;</span> mid<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        left<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">        right<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token function">rec</span><span class="token punctuation">(</span>left<span class="token punctuation">)</span><span class="token punctuation">,</span> mid<span class="token punctuation">,</span> <span class="token operator">...</span><span class="token function">rec</span><span class="token punctuation">(</span>right<span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">return</span> <span class="token function">res</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>快速排序时间复杂度为O(nlogn)，是目前基于比较的内部排序中被认为最好的方法，当数据过大且数据杂乱无章时，则适合采用快速排序</p>
</li>
</ol>
<h2 id="常见算法" tabindex="-1"><a class="header-anchor" href="#常见算法"><span>常见算法</span></a></h2>
<ol>
<li>
<p><strong>二分查找</strong></p>
<p>在计算机科学中，二分查找算法，也称折半搜索算法，是一种在有序数组中查找某一特定元素的搜索算法。想要应用二分查找法，则这一堆数应有如下特性：</p>
<ul>
<li>存储在数组中</li>
<li>有序排序</li>
</ul>
<p>搜索过程从数组的中间元素开始，如果中间元素正好是要查找的元素，则搜索过程结束。如果某一特定元素大于或者小于中间元素，则在数组大于或小于中间元素的那一半中查找，而且跟开始一样从中间元素开始比较。如果在某一步骤数组为空，则代表找不到。这种搜索算法每一次比较都使搜索范围缩小一半</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">BinarySearch</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span> target</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>arr<span class="token punctuation">.</span>length <span class="token operator">&lt;=</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line">    <span class="token comment">// 低位下标</span></span>
<span class="line">    <span class="token keyword">let</span> lowIndex <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line">    <span class="token comment">// 高位下标</span></span>
<span class="line">    <span class="token keyword">let</span> highIndex <span class="token operator">=</span> arr<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">while</span> <span class="token punctuation">(</span>lowIndex <span class="token operator">&lt;=</span> highIndex<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 中间下标</span></span>
<span class="line">        <span class="token keyword">const</span> midIndex <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>lowIndex <span class="token operator">+</span> highIndex<span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">&lt;</span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            highIndex <span class="token operator">=</span> midIndex <span class="token operator">-</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>target <span class="token operator">></span> arr<span class="token punctuation">[</span>midIndex<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            lowIndex <span class="token operator">=</span> midIndex <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// target === arr[midIndex]</span></span>
<span class="line">            <span class="token keyword">return</span> midIndex</span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>分而治之</strong></p>
<p>是算法设计中的一种方法，就是把一个复杂的问题分成两个或更多的相同或相似的子问题，直到最后子问题可以简单的直接求解，原问题的解即子问题的解的合并。关于分而治之的实现，都会经历三个步骤：</p>
<ul>
<li>分解：将原问题分解为若干个规模较小，相对独立，与原问题形式相同的子问题</li>
<li>解决：若子问题规模较小且易于解决时，则直接解。否则，递归地解决各子问题</li>
<li>合并：将各子问题的解合并为原问题的解</li>
</ul>
<p>实际上，关于分而治之的思想，我们在前面已经使用，例如归并排序的实现，同样经历了实现分而治之的三个步骤：</p>
<ul>
<li>分解：把数组从中间一分为二</li>
<li>解决：递归地对两个子数组进行归并排序</li>
<li>合并：将两个字数组合并称有序数组</li>
</ul>
<p>同样关于快速排序的实现，亦如此：</p>
<ul>
<li>分：选基准，按基准把数组分成两个字数组</li>
<li>解：递归地对两个字数组进行快速排序</li>
<li>合：对两个字数组进行合并</li>
</ul>
<p>同样二分搜索也能使用分而治之的思想去实现，代码如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span><span class="token parameter">arr<span class="token punctuation">,</span>l<span class="token punctuation">,</span>r<span class="token punctuation">,</span>target</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>l<span class="token operator">></span> r<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> mid <span class="token operator">=</span> l <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">floor</span><span class="token punctuation">(</span><span class="token punctuation">(</span>r<span class="token operator">-</span>l<span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">===</span> target<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> mid<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>arr<span class="token punctuation">[</span>mid<span class="token punctuation">]</span> <span class="token operator">&lt;</span> target <span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>mid <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">,</span>r<span class="token punctuation">,</span>target<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">binarySearch</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span>l<span class="token punctuation">,</span>mid <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">,</span>target<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p><strong>动态规划</strong></p>
<p>同样是算法设计中的一种方法，是一种在数学、管理科学、计算机科学、经济学和生物信息学中使用的，通过把原问题分解为相对简单的子问题的方式求解复杂问题的方法。</p>
<p>常常适用于有重叠子问题和最优子结构性质的问题。简单来说，动态规划其实就是，给定一个问题，我们把它拆成一个个子问题，直到子问题可以直接解决。然后呢，把子问题答案保存起来，以减少重复计算。再根据子问题答案反推，得出原问题解的一种方法。一般这些子问题很相似，可以通过函数关系式递推出来，例如斐波那契数列，我们可以得到公式：当 n 大于 2的时候，F(n) = F(n-1) + F(n-2) ，f(10)= f(9)+f(8),f(9) = f(8) + f(7)...是重叠子问题，当n = 1、2的时候，对应的值为2，这时候就通过可以使用一个数组记录每一步计算的结果，以此类推，减少不必要的重复计算</p>
</li>
<li>
<p><strong>贪心算法</strong></p>
<p>又称贪婪算法，是算法设计中的一种思想。其期待每一个阶段都是局部最优的选择，从而达到全局最优，但是结果并不一定是最优的。</p>
<p>举个零钱兑换的例子，如果你有1元、2元、5元的钱币数张，用于兑换一定的金额，但是要求兑换的钱币张数最少。如果现在你要兑换11元，按照贪心算法的思想，先选择面额最大的5元钱币进行兑换，那么就得到11 = 5 + 5 + 1 的选择，这种情况是最优的。但是如果你手上钱币的面额为1、3、4，想要兑换6元，按照贪心算法的思路，我们会 6 = 4 + 1 + 1这样选择，这种情况结果就不是最优的选择。</p>
</li>
<li>
<p><strong>回溯算法</strong></p>
<p>也是算法设计中的一种思想，是一种渐进式寻找并构建问题解决方式的策略。</p>
<p>回溯算法会先从一个可能的工作开始解决问题，如果不行，就回溯并选择另一个动作，知道将问题解决。使用回溯算法的问题，有如下特性：</p>
<ul>
<li>有很多路，例如一个矩阵的方向或者树的路径</li>
<li>在这些的路里面，有死路也有生路，思路即不符合题目要求的路，生路则符合</li>
<li>通常使用递归来模拟所有的路</li>
</ul>
</li>
</ol>
</div></template>


