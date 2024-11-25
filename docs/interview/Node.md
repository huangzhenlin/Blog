## 对Node.js 的理解

1. **特性**

   Node.js 是一个开源与跨平台的 JavaScript 运行时环境。在浏览器外运行 V8 JavaScript 引擎（Google Chrome 的内核），利用事件驱动、非阻塞和异步输入输出模型等技术提高性能。可以理解为 Node.js 就是一个服务器端的、非阻塞式I/O的、事件驱动的JavaScript运行环境。

   - Nodejs采用了非阻塞型I/O机制，在做I/O操作的时候不会造成任何的阻塞，当完成之后，以时间的形式通知执行操作。例如在执行了访问数据库的代码之后，将立即转而执行其后面的代码，把数据库返回结果的处理代码放在回调函数中，从而提高了程序的执行效率
   - 事件驱动就是当进来一个新的请求的时，请求将会被压入一个事件队列中，然后通过一个循环来检测队列中的事件状态变化，如果检测到有状态变化的事件，那么就执行该事件对应的处理代码，一般都是回调函数。比如读取一个文件，文件读取完毕后，就会触发对应的状态，然后通过对应的回调函数来进行处理

2. **优缺点**

   优点：

   - 处理高并发场景性能更佳；
   - 适合I/O密集型应用，值的是应用在运行极限时，CPU占用率仍然比较低，大部分时间是在做 I/O硬盘内存读写操作。因为Nodejs是单线程，

   带来的缺点有：

   - 不适合CPU密集型应用；
   - 只支持单核CPU，不能充分利用CPU；
   - 可靠性低，一旦代码某个环节崩溃，整个系统都崩溃

3. **应用场景**

   善于I/O，不善于计算。因为Nodejs是一个单线程，如果计算（同步）太多，则会阻塞这个线程；

   大量并发的I/O，应用程序内部并不需要进行非常复杂的处理；

   与 websocket 配合，开发长连接的实时交互应用程序。具体场景可以表现为如下：

   - 第一大类：用户表单收集系统、后台管理系统、实时交互系统、考试系统、联网软件、高并发量的web应用程序；
   - 第二大类：基于web、canvas等多人联网游戏；
   - 第三大类：基于web的多人实时聊天客户端、聊天室、图文直播；
   - 第四大类：单页面浏览器应用程序；
   - 第五大类：操作数据库、为前端和移动端提供基于json的API。

   其实，Nodejs能实现几乎一切的应用，只考虑适不适合使用它 



## nodejs全局对象有哪些

1. **概念**

   在浏览器 JavaScript 中，通常window 是全局对象， 而 Nodejs中的全局对象是 global。在NodeJS里，是不可能在最外层定义一个变量，因为所有的用户代码都是当前模块的，只在当前模块里可用，但可以通过exports对象的使用将其传递给模块外部。所以，在NodeJS中，用var声明的变量并不属于全局的变量，只在当前模块生效像上述的global全局对象则在全局作用域中，任何全局变量、函数、对象都是该对象的一个属性值

2. **真正的全局对象**

   - buffer：可以处理二进制以及非Unicode编码的数据在Buffer类实例化中存储了原始数据。Buffer类似于一个整数数组，在V8堆原始存储空间给它分配了内存。一旦创建了Buffer实例，则无法改变大小

   - process：是一个全局变量，提供了有关当前 Node.js进程的信息并对其进行控制，作为一个全局变量。我们都知道，进程计算机系统进行资源分配和调度的基本单位，是操作系统结构的基础，是线程的容器。当我们启动一个js文件，实际就是开启了一个服务进程，每个进程都拥有自己的独立空间地址、数据栈，像另一个进程无法访问当前进程的变量、数据结构，只有数据通信后，进程之间才可以数据共享。由于JavaScript是一个单线程语言，所以通过node xxx启动一个文件后，只有一条主线程

     ```js
     process.env // 环境变量，例如通过 `process.env.NODE_ENV 获取不同环境项目配置信息
     process.nextTick // 这个在谈及 EventLoop 时经常为会提到
     process.pid // 获取当前进程id
     process.ppid // 当前进程对应的父进程
     process.cwd() // 获取当前进程工作目录，
     process.platfor // 获取当前进程运行的操作系统平台
     process.uptime() // 当前进程已运行时间，例如：pm2 守护进程的 uptime 值
     process.on(‘uncaughtException’,cb) // 进程事件：捕获异常信息
     process.on(‘exit’,cb） // 进程事件：进程推出监听
     process.stdout  // 标准输出
     process.stdin  // 标准输入 
     process.stderr // 标准错误输出
     process.title  // 指定进程名称，有的时候需要给进程指定一个名称
     ```

   - console：用来打印stdout和stderr。

     ```js
     // 最常用的输入内容的方式
     console.log("hello");
     // 打印函数的调用栈：console.trace
     function test() {
         demo();
     }
     function demo() {
         foo();
     }
     ```

   - 定时器：clearInterval、setInterval 、clearTimeout、setTimeout 设置定时器与清除定时器

     ```js
     setInterval(callback, delay[, ...args])
     setTimeout(callback,delay[,...args])
     ```

   - global：全局命名空间对象，前面讲到的process、console、setTimeout等都有放到global中

     ```js
     console.log(process === global.process) // true
     ```

3. **模块级别的全局对象**

   - __dirname：获取当前文件所在的路径，不包括后面的文件名 

     ```js
     console.log(__dirname);
     // 打印: /Users/mjr
     ```

   - __filename：取当前文件所在的路径和文件名称，包括后面的文件名称 

     ```js
     console.log(__filename);
     // 打印: /Users/mjr/example.js
     ```

   - exports：用于指定一个模块所导出的内容，即可以通过 require() 访问的内容 

     ```js
     exports.name = name;
     exports.age = age;
     exports.sayHello = sayHello;
     ```

   - module：对当前模块的引用，通过module.exports 用于指定一个模块所导出的内容，即可以通过 require() 访问的内容 

   - require：用于引入模块、 JSON、或本地文件。 可以从 node_modules 引入模块。可以使用相对路径引入本地模块或JSON文件，路径会根据__dirname定义的目录名或当前工作目录进行处理 



## 对buffer的理解

1. **概念**

   在Node应用中，需要处理网络协议、操作数据库、处理图片、接收上传文件等，在网络流和文件的操作中，要处理大量二进制数据，而Buffer就是在内存中开辟一片区域（初次初始化为8KB），用来存放二进制数据。

   在上述操作中都会存在数据流动，每个数据流动的过程中，都会有一个最小或最大数据量。如果数据到达的速度比进程消耗的速度快，那么少数早到达的数据会处于等待区等候被处理。反之，如果数据到达的速度比进程消耗的数据慢，那么早先到达的数据需要等待一定量的数据到达之后才能被处理。这里的等待区就指的缓冲区（Buffer），它是计算机中的一个小物理单位，通常位于计算机的 RAM 中。简单来讲，Nodejs不能控制数据传输的速度和到达时间，只能决定何时发送数据，如果还没到发送时间，则将数据放在Buffer中，即在RAM中，直至将它们发送完毕。

   上面讲到了Buffer是用来存储二进制数据，其的形式可以理解成一个数组，数组中的每一项，都可以保存8位二进制：00000000，也就是一个字节

2. **创建**

   ```js
   // Buffer.from()
   const b1 = Buffer.from('10');
   const b2 = Buffer.from('10', 'utf8');
   const b3 = Buffer.from([10]);
   const b4 = Buffer.from(b3);
   console.log(b1, b2, b3, b4); // <Buffer 31 30> <Buffer 31 30> <Buffer 0a> <Buffer 0a>
   
   // Buffer.alloc()
   const bAlloc1 = Buffer.alloc(10); // 创建一个大小为 10 个字节的缓冲区
   const bAlloc2 = Buffer.alloc(10, 1); // 建一个长度为 10 的 Buffer,其中全部填充了值为 `1` 的字节
   console.log(bAlloc1); // <Buffer 00 00 00 00 00 00 00 00 00 00>
   console.log(bAlloc2); // <Buffer 01 01 01 01 01 01 01 01 01 01>
   ```

3. **转换**

   创建buffer后，则能够toString的形式进行交互，默认情况下采取utf8字符编码形式

   ```js
   const buffer = Buffer.from("你好");
   console.log(buffer); // <Buffer e4 bd a0 e5 a5 bd>
   const str = buffer.toString();
   console.log(str); // 你好
   ```

   如果编码与解码不是相同的格式则会出现乱码的情况

   ```js
   const buffer = Buffer.from("你好","utf-8 ");
   console.log(buffer); // <Buffer e4 bd a0 e5 a5 bd>
   const str = buffer.toString("ascii");
   console.log(str); // d= e%=
   ```

   当设定的范围导致字符串被截断的时候，也会存在乱码情况

   ```js
   const buf = Buffer.from('Node.js 技术栈', 'UTF-8');
   console.log(buf)          // <Buffer 4e 6f 64 65 2e 6a 73 20 e6 8a 80 e6 9c af e6 a0 88>
   console.log(buf.length)   // 17
   console.log(buf.toString('UTF-8', 0, 9))  // Node.js �
   console.log(buf.toString('UTF-8', 0, 11)) // Node.js 技
   ```

   支持的字符集

   - ascii：仅支持 7 位 ASCII 数据，如果设置去掉高位的话，这种编码是非常快的
   - utf8：多字节编码的 Unicode 字符，许多网页和其他文档格式都使用 UTF-8
   - utf16le：2 或 4 个字节，小字节序编码的 Unicode 字符，支持代理对（U+10000至 U+10FFFF）
   - ucs2，utf16le 的别名
   - base64：Base64 编码
   - latin：一种把 Buffer 编码成一字节编码的字符串的方式
   - binary：latin1 的别名，
   - hex：将每个字节编码为两个十六进制字符

4. **应用场景**

   - I/O操作：通过流的形式，将一个文件的内容读取到另外一个文件

     ```js
     const fs = require('fs');
     const inputStream = fs.createReadStream('input.txt'); // 创建可读流
     const outputStream = fs.createWriteStream('output.txt'); // 创建可写流
     inputStream.pipe(outputStream); // 管道读写
     ```

   - 加解密:在一些加解密算法中会遇到使用 Buffer，例如 crypto.createCipheriv 的第二个参数 key 为 string 或 Buffer 类型

   - zlib.js 为 Node.js 的核心库之一，其利用了缓冲区（Buffer）的功能来操作二进制数据流，提供了压缩或解压功能



## 对EventEmitter的理解

1. **概念**

   Node采用了事件驱动机制，而EventEmitter就是Node实现事件驱动的基础。在EventEmitter的基础上，Node几乎所有的模块都继承了这个类，这些模块拥有了自己的事件，可以绑定／触发监听器，实现了异步操作。Node.js 里面的许多对象都会分发事件，比如 fs.readStream 对象会在文件被打开的时候触发一个事件。这些产生事件的对象都是 events.EventEmitter 的实例，这些对象有一个 eventEmitter.on() 函数，用于将一个或多个函数绑定到命名事件上 

2. **使用方法**

   Node的events模块只提供了一个EventEmitter类，这个类实现了Node异步事件驱动架构的基本模式——观察者模式。在这种模式中，被观察者(主体)维护着一组其他对象派来(注册)的观察者，有新的对象对主体感兴趣就注册观察者，不感兴趣就取消订阅，主体有更新的话就依次通知观察者们。基本代码如下：

   ```js
   const EventEmitter = require('events')
   class MyEmitter extends EventEmitter {}
   const myEmitter = new MyEmitter()
   function callback() {
       console.log('触发了event事件！')
   }
   myEmitter.on('event', callback)
   myEmitter.emit('event')
   myEmitter.removeListener('event', callback);
   ```

   常见的方法有：

   - emitter.addListener/on(eventName, listener) ：添加类型为 eventName 的监听事件到事件数组尾部
   - emitter.prependListener(eventName, listener)：添加类型为 eventName 的监听事件到事件数组头部
   - emitter.emit(eventName[, ...args])：触发类型为 eventName 的监听事件
   - emitter.removeListener/off(eventName, listener)：移除类型为 eventName 的监听事件
   - emitter.once(eventName, listener)：添加类型为 eventName 的监听事件，以后只能执行一次并删除
   - emitter.removeAllListeners([eventName])： 移除全部类型为 eventName 的监听事件

3. **实现**

   ```js
   class EventEmitter {
       constructor() {
           this.events = {};
       }
       on(type, handler) {
           if (!this.events[type]) {
               this.events[type] = [];
           }
           this.events[type].push(handler);
       }
       addListener(type,handler){
           this.on(type,handler)
       }
       prependListener(type, handler) {
           if (!this.events[type]) {
               this.events[type] = [];
           }
           this.events[type].unshift(handler);
       }
       removeListener(type, handler) {
           if (!this.events[type]) {
               return;
           }
           this.events[type] = this.events[type].filter(item => item !== handler);
       }
       off(type,handler){
           this.removeListener(type,handler)
       }
       emit(type, ...args) {
           this.events[type].forEach((item) => {
               Reflect.apply(item, this, args);
           });
       }
       once(type, handler) {
           this.on(type, this._onceWrap(type, handler, this));
       }
       _onceWrap(type, handler, target) {
           const state = { fired: false, handler, type , target};
           const wrapFn = this._onceWrapper.bind(state);
           state.wrapFn = wrapFn;
           return wrapFn;
       }
       _onceWrapper(...args) {
           if (!this.fired) {
               this.fired = true;
               Reflect.apply(this.handler, this.target, args);
               this.target.off(this.type, this.wrapFn);
           }
       }
   }
   
   const ee = new EventEmitter();
   // 注册所有事件
   ee.once('wakeUp', (name) => { console.log(`${name} 1`); });
   ee.on('eat', (name) => { console.log(`${name} 2`) });
   ee.on('eat', (name) => { console.log(`${name} 3`) });
   const meetingFn = (name) => { console.log(`${name} 4`) };
   ee.on('work', meetingFn);
   ee.on('work', (name) => { console.log(`${name} 5`) });
   ee.emit('wakeUp', 'xx');
   ee.emit('wakeUp', 'xx');         // 第二次没有触发
   ee.emit('eat', 'xx');
   ee.emit('work', 'xx');
   ee.off('work', meetingFn);        // 移除事件
   ee.emit('work', 'xx');           // 再次工作
   ```



## node文件查找有什么策略

1. **模块规范**

   NodeJS对CommonJS进行了支持和实现，让我们在开发node的过程中可以方便的进行模块化开发：

   - 在Node中每一个js文件都是一个单独的模块
   - 模块中包括CommonJS规范的核心变量：exports、module.exports、require
   - 通过上述变量进行模块化开发

   而模块化的核心是导出与导入，在Node中通过exports与module.exports负责对模块中的内容进行导出，通过require函数导入其他模块（自定义模块、系统模块、第三方库模块）中的内容

2. **查找策略**

   require参数较为简单，但是内部的加载却是十分复杂的，其加载优先级也各自不同。

   - 文件模块存在缓存区，寻找模块路径的时候都会优先从缓存中加载已经存在的模块

   - 原生模块：http、fs、path等。过require方法在解析文件名之后，优先检查模块是否在原生模块列表中，如果在则从原生模块中加载

   - 相对路径/绝对路径的文件模块：./mod或../mod。如果require绝对路径的文件，则直接查找对应的路径，速度最快。相对路径的模块则相对于当前调用require的文件去查找。如果按确切的文件名没有找到模块，则 NodeJs 会尝试带上 .js、.json或 .node拓展名再加载

   - 目录作为模块：./dirname。默认情况是根据根目录中package.json文件的main来指定目录模块，

     ```json
     { 
       "name" : "some-library",
       "main" : "main.js" 
     }
     ```

     如果这是在./some-library node_modules目录中，则 require('./some-library') 会试图加载 ./some-library/main.js；如果目录里没有 package.json文件，或者 main入口不存在或无法解析，则会试图加载目录下的 index.js 或 index.node 文件

   - 非原生模块的文件模块：mod。在每个文件中都存在module.paths，表示模块的搜索路径，require就是根据其来寻找文件。

     ```json
     [ 'c:\\nodejs\\node_modules','c:\\node_modules' ]
     ```

     从当前文件目录开始查找node_modules目录；然后依次进入父目录，查找父目录下的node_modules目录，依次迭代，直到根目录下的node_modules目录当都找不到的时候，则会从系统NODE_PATH环境变量查找

3. **优先级**

   通过上面模块的文件查找策略之后，总结下文件查找的优先级：

   - 缓存的模块优先级最高
   - 如果是内置模块，则直接返回，优先级仅次缓存的模块
   - 如果是绝对路径 / 开头，则从根目录找
   - 如果是相对路径 ./开头，则从当前require文件相对位置找
   - 如果文件没有携带后缀，先从js、json、node按顺序查找
   - 如果是目录，则根据 package.json的main属性值决定目录下入口文件，默认情况为 index.js
   - 如果文件为第三方模块，则会引入 node_modules 文件，如果不在当前仓库文件中，则自动从上级递归查找，直到根目录



## 对fs模块的理解

1. 文件知识

   - **权限位mode**

     ![](https://static.vue-js.com/4f4d41a0-c46b-11eb-ab90-d9ae814b240d.png)

   - **标志位flag**

     标识位代表着对文件的操作方式，如可读、可写、即可读又可写等等，如下表所示：

     | 符号 | 含义                                                     |
     | ---- | -------------------------------------------------------- |
     | r    | 读取文件，如果文件不存在则抛出异常。                     |
     | r+   | 读取并写入文件，如果文件不存在则抛出异常。               |
     | rs   | 读取并写入文件，指示操作系统绕开本地文件系统缓存。       |
     | w    | 写入文件，文件不存在会被创建，存在则清空后写入。         |
     | wx   | 写入文件，排它方式打开。                                 |
     | w+   | 读取并写入文件，文件不存在则创建文件，存在则清空后写入。 |
     | wx+  | 和 w+ 类似，排他方式打开。                               |
     | a    | 追加写入，文件不存在则创建文件。                         |
     | ax   | 与 a 类似，排他方式打开。                                |
     | a+   | 读取并追加写入，不存在则创建。                           |
     | ax+  | 与 a+ 类似，排他方式打开。                               |

   - **文件描述符fd**

     操作系统会为每个打开的文件分配一个名为文件描述符的数值标识，文件操作使用这些文件描述符来识别与追踪每个特定的文件。Window系统使用了一个不同但概念类似的机制来追踪资源，为方便用户，NodeJS抽象了不同操作系统间的差异，为所有打开的文件分配了数值的文件描述符。在 NodeJS中，每操作一个文件，文件描述符是递增的，文件描述符一般从 3 开始，因为前面有 0、1、2三个比较特殊的描述符，分别代表 process.stdin（标准输入）、process.stdout（标准输出）和 process.stderr（错误输出）

2. 方法

   - **文件读取**

     fs.readFileSync 同步读取，参数如下：

     - 第一个参数为读取文件的路径或文件描述符
     - 第二个参数为 options，默认值为 null，其中有 encoding（编码，默认为 null）和 flag（标识位，默认为 r），也可直接传入 encoding，结果为返回文件的内容

     ```js
     const fs = require("fs");
     let buf = fs.readFileSync("1.txt");
     let data = fs.readFileSync("1.txt", "utf8");
     console.log(buf); // <Buffer 48 65 6c 6c 6f>
     console.log(data); // Hello
     ```

     fs.readFile：异步读取方法。readFile 与 readFileSync 的前两个参数相同。最后一个参数为回调函数，函数内有两个参数 err（错误）和 data（数据）。该方法没有返回值，回调函数在读取文件成功后执行

     ```js
     const fs = require("fs");
     fs.readFile("1.txt", "utf8", (err, data) => {
        if(!err){
            console.log(data); // Hello
        }
     });
     ```

   - **文件写入**

     writeFileSync：同步写入，有三个参数：

     - 第一个参数为写入文件的路径或文件描述符
     -  第二个参数为写入的数据，类型为 String 或 Buffer
     - 第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 w）和 mode（权限位，默认为 0o666），也可直接传入 encoding

     ```js
     const fs = require("fs");
     fs.writeFileSync("2.txt", "Hello world");
     let data = fs.readFileSync("2.txt", "utf8");
     console.log(data); // Hello world
     ```

     writeFile:：异步写入。 writeFile 与 writeFileSync 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 err（错误），回调函数在文件写入数据成功后执行

     ```js
     const fs = require("fs");
     fs.writeFile("2.txt", "Hello world", err => {
       if (!err) {
         fs.readFile("2.txt", "utf8", (err, data) => {
           console.log(data); // Hello world
         });
       }
     });
     ```

   - **文件追加写入**

     **appendFileSync**参数如下：

     - 第一个参数为写入文件的路径或文件描述符
     - 第二个参数为写入的数据，类型为 String 或 Buffer
     - 第三个参数为 options，默认值为 null，其中有 encoding（编码，默认为 utf8）、 flag（标识位，默认为 a）和 mode（权限位，默认为 0o666），也可直接传入 encoding

     ```js
     const fs = require("fs");
     fs.appendFileSync("3.txt", " world");
     let data = fs.readFileSync("3.txt", "utf8");
     ```

     **appendFile** 异步追加写入方法 appendFile 与 appendFileSync 的前三个参数相同，最后一个参数为回调函数，函数内有一个参数 err（错误），回调函数在文件追加写入数据成功后执行

     ```js
     const fs = require("fs");
     fs.appendFile("3.txt", " world", err => {
       if (!err) {
         fs.readFile("3.txt", "utf8", (err, data) => {
           console.log(data); // Hello world
         });
       }
     });
     ```

   - **文件拷贝**

     copyFileSync 同步拷贝

     ```js
     const fs = require("fs");
     fs.copyFileSync("3.txt", "4.txt");
     let data = fs.readFileSync("4.txt", "utf8");
     console.log(data); // Hello world
     ```

     copyFile 异步拷贝

     ```js
     const fs = require("fs");
     fs.copyFile("3.txt", "4.txt", () => {
         fs.readFile("4.txt", "utf8", (err, data) => {
             console.log(data); // Hello world
         });
     });
     ```

   - **创建目录**

     **mkdirSync：**同步创建，参数为一个目录的路径，没有返回值，在创建目录的过程中，必须保证传入的路径前面的文件目录都存在，否则会抛出异常

     ```js
     // 假设已经有了 a 文件夹和 a 下的 b 文件夹
     fs.mkdirSync("a/b/c")
     ```

     **mkdir**异步创建，第二个参数为回调函数

     ```js
     fs.mkdir("a/b/c", err => {
       if (!err) console.log("创建成功");
     });
     ```



## 对Stream的理解

1. **概念**

   流（Stream），是一个数据传输手段，是端到端信息交换的一种方式，而且是有顺序的,是逐块读取数据、处理内容，用于顺序读取输入或写入输出。Node.js中很多对象都实现了流，总之它是会冒数据（以 Buffer 为单位）。它的独特之处在于，它不像传统的程序那样一次将一个文件读入内存，而是逐块读取数据、处理其内容，而不是将其全部保存在内存中。流可以分成三部分：source、dest、pipe。在source和dest之间有一个连接的管道pipe,它的基本语法是source.pipe(dest)，source和dest就是通过pipe连接，让数据从source流向了dest， 

2. 分类

   在`NodeJS`，几乎所有的地方都使用到了流的概念，分成四个种类：

   - 可写流：可写入数据的流。例如 fs.createWriteStream() 可以使用流将数据写入文件

   - 可读流： 可读取数据的流。例如fs.createReadStream() 可以从文件读取内容

   - 双工流： 既可读又可写的流。例如 net.Socket

     ```js
     //websocket通信，是一个全双工通信，发送方和接受方都是各自独立的方法，发送和接收都没有任何关系
     const { Duplex } = require('stream');
     const myDuplex = new Duplex({
       read(size) {
         // ...
       },
       write(chunk, encoding, callback) {
         // ...
       }
     });
     ```

   - 转换流： 可以在数据写入和读取时修改或转换数据的流。例如，在文件压缩操作中，可以向文件写入压缩数据，并从文件中读取解压数据

     ```js
     // 比如一个 babel，把es6转换为，我们在左边写入 es6，从右边读取 es5
     const { Transform } = require('stream');
     const myTransform = new Transform({
       transform(chunk, encoding, callback) {
         // ...
       }
     });
     ```

   在`NodeJS`中`HTTP`服务器模块中，`request` 是可读流，`response` 是可写流。还有`fs` 模块，能同时处理可读和可写文件流

   可读流和可写流都是单向的，比较容易理解，而另外两个是双向的

3. **应用场景**

   `stream`的应用场景主要就是处理`IO`操作，而`http`请求和文件操作都属于`IO`操作。试想一下，如果一次`IO`操作过大，硬件的开销就过大，而将此次大的`IO`操作进行分段操作，让数据像水管一样流动，直到流动完成。

   常见的场景有：

   - **get请求返回文件给客户端**

     ```js
     // 使用stream流返回文件，res也是一个stream对象，通过pipe管道将文件数据返回
     const server = http.createServer(function (req, res) {
         const method = req.method; // 获取请求方法
         if (method === 'GET') { // get 请求
             const fileName = path.resolve(__dirname, 'data.txt');
             let stream = fs.createReadStream(fileName);
             stream.pipe(res); // 将 res 作为 stream 的 dest
         }
     });
     server.listen(8000);
     ```

   - **文件操作**

     ```js
     // 创建一个可读数据流readStream，一个可写数据流writeStream，通过pipe管道把数据流转过去
     const fs = require('fs')
     const path = require('path')
     // 两个文件名
     const fileName1 = path.resolve(__dirname, 'data.txt')
     const fileName2 = path.resolve(__dirname, 'data-bak.txt')
     // 读取文件的 stream 对象
     const readStream = fs.createReadStream(fileName1)
     // 写入文件的 stream 对象
     const writeStream = fs.createWriteStream(fileName2)
     // 通过 pipe执行拷贝，数据流转
     readStream.pipe(writeStream)
     // 数据读取完成监听，即拷贝完成
     readStream.on('end', function () {
         console.log('拷贝完成')
     })
     ```

   - **一些打包工具的底层操作**

     目前一些比较火的前端打包构建工具，都是通过`node.js`编写的，打包和构建的过程肯定是文件频繁操作的过程，离不来`stream`，如`gulp`

   

   

   

## 对中间件的理解

   1. **概念**
   
      中间件（Middleware）是介于应用系统和系统软件之间的一类软件，它使用系统软件所提供的基础服务（功能），衔接网络上应用系统的各个部分或不同的应用，能够达到资源共享、功能共享的目的。
      在NodeJS中，中间件主要是指封装http请求细节处理的方法。例如在express、koa等web框架中，中间件的本质为一个回调函数，参数包含请求对象、响应对象和执行下一个中间件的函数。在这些中间件函数中，我们可以执行业务逻辑代码，修改请求和响应对象、返回响应数据等操作

   2. **koa中间件**

      koa是基于NodeJS当前比较流行的web框架，本身支持的功能并不多，功能都可以通过中间件拓展实现。通过添加不同的中间件，实现不同的需求，从而构建一个 Koa 应用。Koa 中间件采用的是洋葱圈模型，每次执行下一个中间件传入两个参数：
   
      - ctx ：封装了request 和 response 的变量；
      - next ：进入下一个要执行的中间件的函数

      Koa的中间件就是函数，可以是async 函数，或是普通函数
   
      ```js
      // async 函数
      app.use(async (ctx, next) => {
        const start = Date.now();
        await next();
        const ms = Date.now() - start;
        console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
      });
      
      // 普通函数
      app.use((ctx, next) => {
        const start = Date.now();
        return next().then(() => {
          const ms = Date.now() - start;
          console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
        });
      });
      ```

   3. **koa常用中间件**

      - token校验
      
        ```js
        module.exports = (options) => async (ctx, next) {
          try {
            // 获取 token
            const token = ctx.header.authorization
            if (token) {
              try {
                  // verify 函数验证 token，并获取用户相关信息
                  await verify(token)
              } catch (err) {
                console.log(err)
              }
            }
            // 进入下一个中间件
            await next()
          } catch (err) {
            console.log(err)
          }
        }
        ```

      - 日志模块
      
        ```js
        const fs = require('fs')
        module.exports = (options) => async (ctx, next) => {
          const startTime = Date.now()
          const requestTime = new Date()
          await next()
          const ms = Date.now() - startTime;
          let logout = `${ctx.request.ip} -- ${requestTime} -- ${ctx.method} -- ${ctx.url} -- ${ms}ms`;
          // 输出日志文件
          fs.appendFileSync('./log.txt', logout + '\n')
        }
        ```

      - koa-bodyparser：将 post 请求和表单提交的查询字符串转换成对象，并挂在 ctx.request.body 上，方便在其他中间件或接口处取值
      
        ```js
        // 文件：my-koa-bodyparser.js
        const querystring = require("querystring");
        module.exports = function bodyParser() {
            return async (ctx, next) => {
                await new Promise((resolve, reject) => {
                    let dataArr = [];  // 存储数据的数组
                    ctx.req.on("data", data => dataArr.push(data));    // 接收数据
                    ctx.req.on("end", () => {  // 整合数据并使用 Promise 成功
                        let contentType = ctx.get("Content-Type");  // 获取请求数据的类型 json 或表单
                        let data = Buffer.concat(dataArr).toString();    // 获取数据 Buffer 格式
                        if (contentType === "application/x-www-form-urlencoded") {
                            // 如果是表单提交，则将查询字符串转换成对象赋值给 ctx.request.body
                            ctx.request.body = querystring.parse(data);
                        } else if (contentType === "applaction/json") {
                            // 如果是 json，则将字符串格式的对象转换成对象赋值给 ctx.request.body
                            ctx.request.body = JSON.parse(data);
                        }
                        resolve();   // 执行成功的回调
                    });
                });
                await next();   // 继续向下执行
            };
        };
        ```

      - koa-static：作用是在服务器接到请求时，处理静态文件
      
        ```js
        const fs = require("fs");
        const path = require("path");
        const mime = require("mime");
        const { promisify } = require("util");
        // 将 stat 和 access 转换成 Promise
        const stat = promisify(fs.stat);
        const access = promisify(fs.access)
        module.exports = function (dir) {
            return async (ctx, next) => {
                let realPath = path.join(dir, ctx.path);  //将访问的路由处理成绝对路径，这里要使用 join 因为有可能是/
                try {
                    let statObj = await stat(realPath);  // 获取 stat 对象
                    // 如果是文件，则设置文件类型并直接响应内容，否则当作文件夹寻找 index.html
                    if (statObj.isFile()) {
                        ctx.set("Content-Type", `${mime.getType()};charset=utf8`);
                        ctx.body = fs.createReadStream(realPath);
                    } else {
                        let filename = path.join(realPath, "index.html");
                        await access(filename); // 如果不存在该文件则执行 catch 中的 next 交给其他中间件处理
                        ctx.set("Content-Type", "text/html;charset=utf8");  // 存在设置文件类型并响应内容
                        ctx.body = fs.createReadStream(filename);
                    }
                } catch (e) {
                    await next();
                }
            }
        }
        ```

   4. **作用**

      在实现中间件时候，单个中间件应该足够简单，职责单一，中间件的代码编写应该高效，必要的时候通过缓存重复获取数据。koa本身比较简洁，但是通过中间件的机制能够实现各种所需要的功能，使得web应用具备良好的可拓展性和组合性。通过将公共逻辑的处理编写在中间件中，可以不用在每一个接口回调中做相同的代码编写，减少了冗杂代码，过程就如装饰者模式 

   

## 如何实现文件上传

   1. **概念**

      文件上传在日常开发中应用很广泛，我们发微博、发微信朋友圈都会用到了图片上传功能。因为浏览器限制，浏览器不能直接操作文件系统的，需要通过浏览器所暴露出来的统一接口，由用户主动授权发起来访问文件动作，然后读取文件内容进指定内存里，最后执行提交请求操作，将内存里的文件内容数据上传到服务端，服务端解析前端传来的数据信息后存入文件里

   2. **文件结构**
   
      对于文件上传，我们需要设置请求头为
      ```http
      content-type:multipart/form-data
      //注：multipart互联网上的混合资源，就是资源由多种元素组成，form-data表示可以使用HTML Forms 和 POST 方法上传文件
      ```

      结构如下：
   
      - boundary表示分隔符，如果要上传多个表单项，就要使用boundary分割，每个表单项由———XXX开始，以———XXX结尾。而xxx是即时生成的字符串，用以确保整个分隔符不会在文件或表单项的内容中出现
      - 每个表单项必须包含一个 Content-Disposition 头，其他的头信息则为可选项， 比如 Content-Type。Content-Disposition 包含了 type和 一个名字为name的 parameter，type 是 form-data，name参数的值则为表单控件（也即 field）的名字，如果是文件，那么还有一个 filename参数，值就是文件名
      
      ```http
      POST /t2/upload.do HTTP/1.1
      User-Agent: SOHUWapRebot
      Accept-Language: zh-cn,zh;q=0.5
      Accept-Charset: GBK,utf-8;q=0.7,*;q=0.7
      Connection: keep-alive
      Content-Length: 60408
      Content-Type:multipart/form-data; boundary=ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
      Host: w.sohu.com
      
      --ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
      Content-Disposition: form-data; name="city"
      
      Santa colo
      --ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
      Content-Disposition: form-data;name="desc"
      Content-Type: text/plain; charset=UTF-8
      Content-Transfer-Encoding: 8bit
       
      ...
      --ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC
      Content-Disposition: form-data;name="pic"; filename="photo.jpg"
      Content-Type: application/octet-stream
      Content-Transfer-Encoding: binary
       
      ... binary data of the jpg ...
      --ZnGpDtePMx0KrHh_G0X99Yef9r8JZsRJSXC--
      ```

   3. **前端处理**

      传统前端文件上传的表单结构如下：
   
      ```html
      <form action="http://localhost:8080/api/upload" method="post" enctype="multipart/form-data">
          <input type="file" name="file" id="file" value="" multiple="multiple" />
          <input type="submit" value="提交"/>
      </form>
      ```

      action 就是我们的提交到的接口，enctype="multipart/form-data" 就是指定上传文件格式，input 的 name 属性一定要等于file

   4. 后端文件解析

      - **使用原生nodejs**
      
        ```js
        const qs = require('qs')
        const fs = require('fs')
        const fileServer = http.createServer((req, res) => {
          req.setEncoding('binary')
          let boundary = req.headers['content-type'].split('; ')[1].replace('boundary=','')
          const fileSize = req.headers['content-length']
          let curSize = 0, body = '';
          req.on('data', data => {
            curSize += data.length;
            res.write(`文件上传速度：${curSize/fileSize * 100}%\n`)
            body += data
          })
          req.on('end', () => {
            const payload = qs.parse(body, '\r\n', ':')
            const fileType = payload['Content-Type'].substring(1)
            const fileTypePosition = body.indexOf(fileType) + fileType.length
            let binaryData = body.substring(fileTypePosition)
            binaryData = binaryData.replace(/^\s\s*/,'')
            const findData = binaryData.substring(0, binaryData.indexOf('--'+boundary+'--'))
            fs.writeFile('./boo.png', findData, 'binary', err => {
              res.end('文件上传完成')
            })
          })
        })
        ```

      - **使用express框架以及multer**
      
        ```js
        const multer = require('multer');
        const upload = multer()
        app.post('./avatar', upload.single('avatar'), (req, res, next) => {
          console.log(req.file)
          res.end('上传成功')
        })
        ```

      - **使用koa框架以及koa-body**
      
        ```js
        //  npm install koa-body
        const koaBody = require('koa-body');
        app.use(koaBody({
            multipart: true,
            formidable: {
                maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
            }
        }));
        router.post('/uploadfile', async (ctx, next) => {
          const file = ctx.request.files.file; // 获取上传文件
          const reader = fs.createReadStream(file.path); // 创建可读流
          let filePath = path.join(__dirname, 'public/upload/') + `/${file.name}`;
          const upStream = fs.createWriteStream(filePath);  // 创建可写流
          reader.pipe(upStream);  // 可读流通过管道写入可写流
          return ctx.body = "上传成功！";
        });
        ```

      - **使用koa框架以及koa-multer**
      
        ```js
        // npm install koa-multer
        const storage = multer.diskStorage({
          destination: (req, file, cb) => {
            cb(null, "./upload/")
          },
          filename: (req, file, cb) => {
            cb(null, Date.now() + path.extname(file.originalname))
          }
        })
        const upload = multer({
          storage
        });
        const fileRouter = new Router();
        fileRouter.post("/upload", upload.single('file'), (ctx, next) => {
          console.log(ctx.req.file); // 获取文件
        })
        app.use(fileRouter.routes());
        ```

   

   

## 如何实现分页

1. **概念**

   做数据查询的时候，如果数据量很大，比如几万条数据，放在一个页面显示的话显然不友好，这时候就需要采用分页显示的形式，如每次只显示10条数据。要实现分页功能，实际上就是从结果集中显示1-10条记录作为第1页，显示第10-20条记录作为第2页，以此类推。因此，分页实际上就是从结果集中截取出第M~N条记录 

2. **实现**

   前端实现分页功能，需要后端返回必要的数据，如总的页数，总的数据量，当前页，当前的数据

   ```js
   {
    "totalCount": 1836,   // 总的条数
    "totalPages": 92,  // 总页数
    "currentPage": 1   // 当前页数
    "data": [     // 当前页的数据
      {...}
   ]
   ```

   后端的处理逻辑为：

   - 获取用户参数页码数page和每页显示的数目 pageSize ，其中page 是必须传递的参数，pageSize为可选参数，默认为10
   - 编写 SQL 语句，利用 limit 和 OFFSET 关键字进行分页查询。LIMIT 总是设定为 pageSize，OFFSET 计算公式为 pageSize * (pageIndex - 1)。
   - 查询数据库，返回总数据量、总页数、当前页、当前页数据给前端

   代码如下所示：

   ```js
   router.all('/api', function (req, res, next) {
     var param = '';
     // 获取参数
     if (req.method == "POST") {
       param = req.body;
     } else {
       param = req.query || req.params;
     }
     if (param.page == '' || param.page == null || param.page == undefined) {
       res.end(JSON.stringify({ msg: '请传入参数page', status: '102' }));
       return;
     }
     const pageSize = param.pageSize || 10;
     const start = (param.page - 1) * pageSize;
     const sql = `SELECT * FROM record limit ${pageSize} OFFSET ${start};`
     pool.getConnection(function (err, connection) {
       if (err) throw err;
       connection.query(sql, function (err, results) {
         connection.release();
         if (err) {
           throw err
         } else {
           // 计算总页数
           var allCount = results[0][0]['COUNT(*)'];
           var allPage = parseInt(allCount) / 20;
           var pageStr = allPage.toString();
           // 不能被整除
           if (pageStr.indexOf('.') > 0) {
             allPage = parseInt(pageStr.split('.')[0]) + 1;
           }
           var list = results[1];
           res.end(JSON.stringify({ msg: '操作成功', status: '200', totalPages: allPage, currentPage: param.page, totalCount: allCount, data: list }));
         }
       })
     })
   });
   ```





## jwt鉴权机制

1. **概念**

   JWT（JSON Web Token），本质就是一个字符串书写规范，作用是用来在用户和服务器之间传递安全可靠的信息。

   在目前前后端分离的开发过程中，使用token鉴权机制用于身份验证是最常见的方案，流程如下：

   - 服务器当验证用户账号和密码正确的时候，给用户颁发一个令牌，这个令牌作为后续用户访问一些接口的凭证；
   - 后续访问会根据这个令牌判断用户时候有权限进行访问。

   Token，分成了三部分：

   - 头部（Header）

     ```js
     // 主要声明使用的算法，字段名为alg，同时还有一个typ的字段，默认JWT即可
     {  "alg": "HS256",  "typ": "JWT" } 
     // 因为JWT是字符串,对以上内容进行Base64编码
     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9'
     ```

   - 载荷（Payload）

     ```js
     // 存放实际的内容，也就是Token的数据声明，例如用户的id和name
     // 默认情况下也会携带令牌的签发时间iat，通过还可以设置过期时间
     {
       "sub": "1234567890",
       "name": "John Doe",
       "iat": 1516239022
     }
     // 进行Base64编码后
     'eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ'
     ```

   - 签名（Signature）

     ```js
     // 对头部和载荷内容进行签名,一般情况，设置一个secretKey
     Signature = HMACSHA256(base64Url(header)+.+base64Url(payload),secretKey)
     // 一旦前面两部分数据被篡改，只要服务器加密用的密钥没有泄露，得到的签名肯定和之前的签名不一致
     ```

   并以`.`进行拼接。其中头部和载荷都是以JSON格式存放数据，只是进行了编码

2. 实现

   - **登录成功的时候，颁发token**

     借助第三方库jsonwebtoken，通过jsonwebtoken 的 sign 方法生成一个 token：

     - 第一个参数指的是 Payload
     - 第二个是秘钥，服务端特有
     - 第三个参数是 option，可以定义 token 过期时间

     ```js
     class UserController {
       // 用户登录
       static async login(ctx) {
         const data = ctx.request.body;
         if (!data.name || !data.password) {
           return ctx.body = {
             code: "000002", 
             message: "参数不合法"
           }
         }
         const result = userList.find(item => item.name === data.name && item.password === crypto.createHash('md5').update(data.password).digest('hex'))
         if (result) {
           // 生成token
           const token = jwt.sign(  
             {
               name: result.name
             },
             "test_token", // secret
             { expiresIn: 60 * 60 } // 过期时间：60 * 60 s
           );
           return ctx.body = {
             code: "0",
             message: "登录成功",
             data: {
               token
             }
           };
         } else {
           return ctx.body = {
             code: "000002",
             message: "用户名或密码错误"
           };
         }
       }
     }
     
     module.exports = UserController;
     ```

   - **前端缓存token，并在发送请求时携带**

     在前端接收到token后，一般情况会通过localStorage进行缓存，然后将token放到HTTP请求头Authorization 中，关于Authorization 的设置，前面要加上 Bearer ，注意后面带有空格

     ```js
     axios.interceptors.request.use(config => {
       const token = localStorage.getItem('token');
       config.headers.common['Authorization'] = 'Bearer ' + token; // 留意这里的 Authorization
       return config;
     })
     ```

   - **访问某些资源或者接口时，验证token**

     使用 koa-jwt 中间件进行验证，方式比较简单

     ```js
     // 注意：放在路由前面
     app.use(koajwt({
       secret: 'test_token'
     }).unless({ // 配置白名单
       path: [/\/api\/register/, /\/api\/login/]
     }))
     ```

     - secret 必须和 sign 时候保持一致
     - 可以通过 unless 配置接口白名单，也就是哪些 URL 可以不用经过校验，像登陆/注册都可以不用校验
     - 校验的中间件需要放在需要校验的路由前面，无法对前面的 URL 进行校验

     获取token用户的信息方法如下：

     ```js
     router.get('/api/userInfo',async (ctx,next) =>{
         const authorization =  ctx.header.authorization // 获取jwt
         const token = authorization.replace('Beraer ','')
         const result = jwt.verify(token,'test_token')
         ctx.body = result
     ```

     注意：上述的HMA256加密算法为单秘钥的形式，一旦泄露后果非常的危险。在分布式系统中，每个子系统都要获取到秘钥，那么这个子系统根据该秘钥可以发布和验证令牌，但有些服务器只需要验证令牌。这时候可以采用非对称加密，利用私钥发布令牌，公钥验证令牌，加密算法可以选择RS256

3. **优缺点**

   优点：

   - json具有通用性，所以可以跨语言
   - 组成简单，字节占用小，便于传输
   - 服务端无需保存会话信息，很容易进行水平扩展
   - 一处生成，多处使用，可以在分布式系统中，解决单点登录问题
   - 可防护CSRF攻击

   缺点：

   - payload部分仅仅是进行简单编码，所以只能用于存储逻辑必需的非敏感信息
   - 需要保护好加密密钥，一旦泄露后果不堪设想
   - 为避免token被劫持，最好使用https协议

   

   

## 如何实现性能监控

1. 衡量指标

   - **GPU**

     主要分成了两部分：

     - CPU负载：在某个时间段内，占用以及等待CPU的进程总数；
     - CPU使用率：CPU时间占用状况，等于 1 - 空闲CPU时间(idle time) / CPU总时间。

     这两个指标都是用来评估系统当前CPU的繁忙程度的量化指标。Node应用一般不会消耗很多的CPU，如果CPU占用率高，则表明应用存在很多同步操作，导致异步任务回调被阻塞

   - **内存**

     是一个非常容易量化的指标。 内存占用率是评判一个系统的内存瓶颈的常见指标。 对于Node来说，内部内存堆栈的使用状态也是一个可以量化的指标。

     ```js
     // /app/lib/memory.js
     const os = require('os');
     // 获取当前Node内存堆栈情况
     const { 
         rss,  // rss：表示node进程占用的内存总量；
         heapUsed,  // heapUsed：实际堆内存的使用量；
         heapTotal  // heapTotal：表示堆内存的总量；
     } = process.memoryUsage();
     const sysFree = os.freemem(); // 获取系统空闲内存
     const sysTotal = os.totalmem(); // 获取系统总内存
     
     module.exports = {
       memory: () => {
         return {
           sys: 1 - sysFree / sysTotal,  // 系统内存占用率
           heap: heapUsed / headTotal,   // Node堆内存占用率
           node: rss / sysTotal,         // Node占用系统内存的比例
         }
       }
     }
     ```

     在Node中，一个进程的最大内存容量为1.5GB。因此我们需要减少内存泄露

   - **I/O**

     硬盘的`IO` 开销是非常昂贵的，硬盘 IO 花费的 CPU 时钟周期是内存的 164000 倍。内存 `IO`比磁盘`IO` 快非常多，所以使用内存缓存数据是有效的优化方法。常用的工具如 `redis`、`memcached`等。并不是所有数据都需要缓存，访问频率高，生成代价比较高的才考虑是否缓存，也就是说影响你性能瓶颈的考虑去缓存，并且而且缓存还有缓存雪崩、缓存穿透等问题要解决

   - **网络**

2. **实现监控功能**

   关于性能方面的监控，一般情况都需要借助工具来实现。这里采用Easy-Monitor 2.0，其是轻量级的 Node.js 项目内核性能监控 + 分析工具，在默认模式下，只需要在项目入口文件 require 一次，无需改动任何业务代码即可开启内核级别的性能监控分析。使用方法如下：

   ```js
   // 在你的项目入口文件中按照如下方式引入，当然请传入你的项目名称：
   const easyMonitor = require('easy-monitor');
   easyMonitor('你的项目名称');
   ```

   打开你的浏览器，访问 http://localhost:12333 ，即可看到进程界面。关于定制化开发、通用配置项以及如何动态更新配置项详见官方文档。

3. **优化方式**

   - 使用最新版本Node.js。每个版本的性能提升主要来自于两个方面：V8 的版本更新；Node.js 内部代码的更新优化。

   - 正确使用流 Stream。在Node中，很多对象都实现了流，对于一个大文件可以通过流的形式发送，不需要将其完全读入内存

     ```js
     const http = require('http');
     const fs = require('fs');
     // bad
     http.createServer(function (req, res) {
         fs.readFile(__dirname + '/data.txt', function (err, data) {
             res.end(data);
         });
     });
     // good
     http.createServer(function (req, res) {
         const stream = fs.createReadStream(__dirname + '/data.txt');
         stream.pipe(res);
     });
     ```

   - 代码层面优化。合并查询，将多次查询合并一次，减少数据库的查询次数

     ```js
     // bad
     for user_id in userIds 
        let account = user_account.findOne(user_id)
     // good
     const user_account_map = {}  // 注意这个对象将会消耗大量内存。
     user_account.find(user_id in user_ids).forEach(account){
       user_account_map[account.user_id] = account
     }
     for user_id in userIds 
       var account = user_account_map[user_id]
     ```

   - 内存管理优化。在 V8 中，主要将内存分为新生代和老生代两代：新生代是对象的存活时间较短，新生对象或只经过一次垃圾回收的对象；老生代是对象存活时间较长。经历过一次或多次垃圾回收的对象。若新生代内存空间不够，直接分配到老生代。通过减少内存占用，可以提高服务器的性能。如果有内存泄露，也会导致大量的对象存储到老生代中，服务器性能会大大降低，如下面情况：

     ```js
     const buffer = fs.readFileSync(__dirname + '/source/index.htm');
     app.use(
       mount('/', async (ctx) => {
         ctx.status = 200;
         ctx.type = 'html';
         ctx.body = buffer;
         leak.push(fs.readFileSync(__dirname + '/source/index.htm'));
       })
     );
     const leak = [];
     ```

     leak的内存非常大，造成内存泄露，应当避免这样的操作，通过减少内存使用，是提高服务性能的手段之一。节省内存最好的方式是使用池，其将频用、可复用对象存储起来，减少创建和销毁操作。例如有个图片请求接口，每次请求，都需要用到类。若每次都需要重新new这些类，并不是很合适，在大量请求时，频繁创建和销毁这些类，造成内存抖动。使用对象池的机制，对这种频繁需要创建和销毁的对象保存在一个对象池中。每次用到该对象时，就取对象池空闲的对象，并对它进行初始化操作，从而提高框架的性能。



## 对线程和进程的理解

1. **进程**

   操作系统中最核心的概念就是进程，进程是对正在运行中的程序的一个抽象，是系统进行资源分配和调度的基本单位。操作系统的其他所有内容都是围绕着进程展开的，负责执行这些任务的是CPU。进程是一种抽象的概念，从来没有统一的标准定义看，一般由程序、数据集合和进程控制块三部分组成：

   - 程序用于描述进程要完成的功能，是控制进程执行的指令集；
   - 数据集合是程序在执行时所需要的数据和工作区；
   - 程序控制块，包含进程的描述信息和控制信息，是进程存在的唯一标志

2. **线程**

   是操作系统能够进行运算调度的最小单位，其是进程中的一个执行任务（控制单元），负责当前进程中程序的执行。一个进程至少有一个线程，一个进程可以运行多个线程，这些线程共享同一块内存，线程之间可以共享对象、资源，如果有冲突或需要协同，还可以随时沟通以解决冲突或保持同步

3. **区别**

   - 进程是操作系统资源分配的基本单位，而线程是任务调度和执行的基本单位。
   - 在开销方面：每个进程都有独立的代码和数据空间（程序上下文），程序之间的切换会有较大的开销；线程可以看做轻量级的进程，同一类线程共享代码和数据空间，每个线程都有自己独立的运行栈和程序计数器（PC），线程之间切换的开销小。
   - 所处环境：在操作系统中能同时运行多个进程（程序）；而在同一个进程（程序）中有多个线程同时执行（通过CPU调度，在每个时间片中只有一个线程执行）。
   - 内存分配方面：系统在运行的时候会为每个进程分配不同的内存空间；而对线程而言，除了CPU外，系统不会为线程分配内存（线程所使用的资源来自其所属进程的资源），线程组之间只能共享资源。
   - 包含关系：没有线程的进程可以看做是单线程的，如果一个进程内有多个线程，则执行过程不是一条线的，而是多条线（线程）共同完成的；线程是进程的一部分，所以线程也被称为轻权进程或者轻量级进程



## 进程通信的方式

1. **管道通信**

   管道是一种半双工的通信方式，数据只能单向流动。管道通信分为：

   - 命名管道。命名管道则可以在任何关系的进程之间通讯。 命名管道虽然可以在任意关系之间通信， 但是它会长期存在于系统之中，因此使用不当会容易对系统造成负担。
   - 匿名管道。匿名只能在具有亲缘关系的进程间使用。进程的亲缘关系通常是指父子进程关系。
   
   父进程创建管道，得到两个⽂件描述符指向管道的两端 父进程 fork 出子进程，⼦进程也有两个⽂件描述符指向同⼀管道。 ⽗进程可以往管道⾥写,⼦进程可以从管道⾥读,管道是⽤环形队列实现的,数据从写端流⼊从读端流出,这样就实现了进程间通信

2. **信号及信号量通信**

   信号 ( sinal ) 是一种比较复杂的通信方式，用于通知接收进程某个事件已经发生。信号量( semophore ) 是一个计数器，可以用来控制多个进程对共享资源的访问。 它常作为一种锁机制，防止某进程正在访问共享资源时，其他进程也访问该资源。因此，主要作为进程间以及同一进程内不同线程之间的同步手段。同样的，信号量是有限的，不能无限使用

3. **消息队列**

   是由消息的链表，存放在内核中并由消息队列标识符标识。 消息队列克服了信号传递信息少、管道只能承载无格式字节流以及缓冲区大小受限等缺点

4. **共享内存**

   就是映射一段能被其他进程所访问的内存，这段共享内存由一个进程创建，但多个进程都可以访问。 共享内存是最快的 IPC 方式，它是针对其他进程间通信方式运行效率低而专门设计的。它往往与其他通信机制，如信号量配合使用来实现进程间的同步和通信。

5. **socket**

   套接口也是一种进程间通信机制，与其他通信机制不同的是，它可用于不同机器间的进程通信



