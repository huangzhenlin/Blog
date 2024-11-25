## 对react的理解

1. **概念**

   React，用于构建用户界面的 JavaScript 库，只提供了 UI 层面的解决方案。

   - 遵循组件设计模式、声明式编程范式和函数式编程概念，以使前端应用程序更高效。
   - 使用虚拟 DOM 来有效地操作 DOM，
   - 遵循从高阶组件到低阶组件的单向数据流。帮助我们将界面成了各个独立的小块，每一个块就是组件，这些组件之间可以组合、嵌套，构成整体页面。

   react 类组件使用一个名为 render() 的方法或者函数组件return，接收输入的数据并返回需要展示的内容

   ```react
   class HelloMessage extends React.Component {
     render() {
       return <div>Hello {this.props.name}</div>;
     }
   }
   ReactDOM.render(
     <HelloMessage name="Taylor" />,
     document.getElementById("hello-example")
   );
   ```

   上述这种类似 XML 形式就是 JSX，最终会被 babel 编译为合法的 JS 语句调用。被传入的数据可在组件中通过 this.props 在 render() 访问

2. 特性

   - **JSX语法**

   - **单向数据绑定**

   - **虚拟DOM**

   - **声明式编程**

     声明式编程是一种编程范式，它关注的是你要做什么，而不是如何做。它表达逻辑而不显式地定义步骤。这意味着我们需要根据逻辑的计算来声明要显示的组件。如实现一个标记的地图：

     ```jsx
     <Map zoom={4} center={(lat, lng)}>
       <Marker position={(lat, lng)} title={"Hello Marker"} />
     </Map>
     ```

     声明式编程方式使得 React 组件很容易使用，最终的代码简单易于维护

   - **Component**

     在 React 中，一切皆为组件。通常将应用程序的整个逻辑分解为小的单个部分。 我们将每个单独的部分称为组件。组件可以是一个函数或者是一个类，接受数据输入，处理它并返回在 UI 中呈现的 React 元素。一个组件该有的特点如下：

     - 可组合：每个组件易于和其它组件一起使用，或者嵌套在另一个组件内部
     - 可重用：每个组件都是具有独立功能的，它可以被使用在多个 UI 场景
     - 可维护：每个小的组件仅仅包含自身的逻辑，更容易被理解和维护

3. **优势**

   - 高效灵活，
   - 声明式的设计，简单使用，
   - 组件式开发，提高代码复用率，
   - 单向响应的数据流会比双向绑定的更安全，速度更快 



## Real DOM 和 Virtual DOM 的区别

1. **概念**

   Real DOM，真实 DOM，意思为文档对象模型，是一个结构化文本的抽象，在页面渲染出的每一个结点都是一个真实 DOM 结构。

   Virtual Dom，本质上是以 JavaScript 对象形式存在的对 DOM 的描述。创建虚拟 DOM 目的就是为了更好将虚拟的节点渲染到页面视图中，虚拟 DOM 对象的节点与真实 DOM 的属性一一照应。在 React 中，JSX 是其一大特性，可以让你在 JS 中通过使用 XML 的方式去直接声明界面的 DOM 结构

2. **区别**

   两者的区别如下：

   - 虚拟 DOM 不会进行排版与重绘操作，而真实 DOM 会频繁重排与重绘
   - 虚拟 DOM 的总损耗是“虚拟 DOM 增删改+真实 DOM 差异增删改+排版与重绘”，真实 DOM 的总损耗是“真实 DOM 完全增删改+排版与重绘”

   例如：传统的原生 api 或 jQuery 去操作 DOM 时，浏览器会从构建 DOM 树开始从头到尾执行一遍流程。当你在一次操作时，需要更新 10 个 DOM 节点，浏览器没这么智能，收到第一个更新 DOM 请求后，并不知道后续还有 9 次更新操作，因此会马上执行流程，最终执行 10 次流程。通过 VNode，同样更新 10 个 DOM 节点，虚拟 DOM 不会立即操作 DOM，而是将这 10 次更新的 diff 内容保存到本地的一个 js 对象中，最终将这个 js 对象一次性 attach 到 DOM 树上，避免大量的无谓计算

3. **优缺点**

   真实 DOM 的优势：

   - 易用

   真实 DOM 的缺点：

   - 效率低，解析速度慢，内存占用量过高
   - 性能差：频繁操作真实 DOM，易于导致重绘与回流

   使用虚拟 DOM 的优势如下：

   - 简单方便：如果使用手动操作真实 DOM 来完成页面，繁琐又容易出错，在大规模应用下维护起来也很困难
   - 性能方面：使用 Virtual DOM，能够有效避免真实 DOM 数频繁更新，减少多次引起重绘与回流，提高性能
   - 跨平台：React 借助虚拟 DOM，带来了跨平台的能力，一套代码多端运行

   使用虚拟 DOM 的缺点：

   - 在一些性能要求极高的应用中虚拟 DOM 无法进行针对性的极致优化
   - 首次渲染大量 DOM 时，由于多了一层虚拟 DOM 的计算，速度比正常稍慢



## Jsx转换成真实DOM过程

1. **JSX语法**

   react通过将组件编写的JSX映射到屏幕，以及组件中的状态发生了变化之后 React会将这些「变化」更新到屏幕上。JSX通过babel最终转化成React.createElement这种形式。

   ```react
   <div>
     < img src="avatar.png" className="profile" />
     <Hello />
   </div>
   // ====>
   React.createElement(
     "div",
     null,
     React.createElement("img", {
       src: "avatar.png",
       className: "profile"
     }),
     React.createElement(Hello, null)
   );
   ```

   在转化过程中，babel在编译时会判断 JSX 中组件的首字母：

   - 当首字母为小写时，其被认定为原生 DOM 标签，createElement 的第一个变量被编译为字符串
   - 当首字母为大写时，其被认定为自定义组件，createElement 的第一个变量被编译为对象

   最终都会通过RenderDOM.render(...)方法进行挂载，如下：

   ```jsx
   ReactDOM.render(<App />,  document.getElementById("root"));
   ```

2. **转换过程**

   react中，节点大致可以分成四个类别：原生标签节点、文本节点、函数组件、类组件。React.createElement其被调用时会传⼊标签类型type，标签属性props及若干子元素children，作用是生成一个虚拟Dom对象 。

   createElement会根据传入的节点信息进行一个判断：

   - 如果是原生标签节点， type 是字符串，如div、span；
   - 如果是文本节点， type就没有，这里是 TEXT；
   - 如果是函数组件，type 是函数名；
   - 如果是类组件，type 是类名。

   虚拟DOM会通过ReactDOM.render进行渲染成真实DOM。当首次调用时，容器节点里的所有 DOM 元素都会被替换，后续的调用则会使用 React 的 diff算法进行高效的更新。如果提供了可选的回调函数callback，该回调将在组件被渲染或更新之后被执行 

3. **渲染流程**

   - 使用React.createElement或JSX编写React组件，实际上所有的 JSX 代码最后都会转换成React.createElement(...) ，Babel帮助我们完成了这个转换的过程。
   - createElement函数对key和ref等特殊的props进行处理，并获取defaultProps对默认props进行赋值，并且对传入的孩子节点进行处理，最终构造成一个虚拟DOM对象。
   - ReactDOM.render将生成好的虚拟DOM渲染到指定容器上，其中采用了批处理、事务等机制并且对特定浏览器进行了性能优化，最终转换为真实DOM



## React的事件机制

1. **概念**

   React基于浏览器的事件机制自身实现了一套事件机制，包括事件注册、事件的合成、事件冒泡、事件派发等，在React中这套事件机制被称之为合成事件。

   合成事件是 React模拟原生 DOM事件所有能力的一个事件对象，即浏览器原生事件的跨浏览器包装器。根据 W3C规范来定义合成事件，兼容所有浏览器，拥有与浏览器原生事件相同的接口

   ```jsx
   const button = <button onClick={handleClick}>按钮</button>
   ```

   如果想要获得原生DOM事件，可以通过e.nativeEvent属性获取

   ```jsx
   const handleClick = (e) => console.log(e.nativeEvent);;
   const button = <button onClick={handleClick}>按钮</button>
   ```

2. **原理**

   React 基于 Virtual DOM 实现了一个 SyntheticEvent 层（合成事件层），定义的事件处理器会接收到一个合成事件对象的实例，它符合W3C 标准，且与原生的浏览器事件拥有同样的接口，支持冒泡机制，所有的事件都自动绑定在最外层上。在 React 底层，主要对合成事件做了两件事：

   - 事件委派：React 会把所有的事件绑定到结构的最外层，使用统一的事件监听器，这个事件监听器上维持了一个映射来保存所有组件内部事件监听和处理函数。
   - 自动绑定：React 组件中，每个方法的上下文都会指向该组件的实例，即自动绑定 this 为当前组件

3. 和原生事件的不同

   - **事件名称命名方式**

     对于事件名称命名方式，原生事件为全小写，react 事件采用小驼峰

     ```jsx
     // 原生事件绑定方式
     <button onclick="handleClick()">按钮命名</button>
     // React 合成事件绑定方式
     const button = <button onClick={handleClick}>按钮命名</button>
     ```

   - **事件函数处理语法**

     对于事件函数处理语法，原生事件为字符串，react 事件为函数；

     ```jsx
     // 原生事件 事件处理函数写法
     <button onclick="handleClick()">按钮命名</button>
           
     // React 合成事件 事件处理函数写法
     const button = <button onClick={handleClick}>按钮命名</button>
     ```

   - **阻止浏览器的默认行为**

     react 事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用 preventDefault()来阻止默认行为。

     ```jsx
     // 阻止合成事件间的冒泡，用e.stopPropagation()
     // 阻止合成事件与最外层 document 上的事件间的冒泡，用e.nativeEvent.stopImmediatePropagation()；
     // 阻止合成事件与除最外层document上的原生事件上的冒泡，通过判断e.target来避免
     document.body.addEventListener('click', e => {   
         if (e.target && e.target.matches('div.code')) {  
             return;    
         }    
         this.setState({   active: false,    });   }); 
     }
     ```

   - **挂载节点**

     react 事件统一挂载到 root 节点（React 17之前是 document）。

     虽然onclick看似绑定到DOM元素上，但实际并不会把事件代理函数直接绑定到真实的节点上，而是把所有的事件绑定到结构的最外层，使用一个统一的事件去监听。

     这个事件监听器上维持了一个映射来保存所有组件内部的事件监听和处理函数。当组件挂载或卸载时，只是在这个统一的事件监听器上插入或删除一些对象。当事件发生时，首先被这个统一的事件监听器处理，然后在映射里找到真正的事件处理函数并调用。这样做简化了事件处理和回收机制，效率也有很大提升

4. **优点**

   合成事件是 react 模拟原生 DOM 事件所有能力的一个事件对象，其优点如下：

   - 兼容所有浏览器，更好的跨平台
   - 将事件统一存放在一个数组，避免频繁的新增与删除（垃圾回收）。方便 react 统一管理和事务机制。
   - 事件的执行顺序为原生事件先执行，合成事件后执行，合成事件会冒泡绑定到 document 上，所以尽量避免原生事件与合成事件混用，如果原生事件阻止冒泡，可能会导致合成事件不执行，因为需要冒泡到document 上合成事件才会执行



## React事件绑定的方式

1. **render方法中使用bind**

   如果使用一个类组件，在其中给某个组件/元素一个onClick属性，它现在并会自定绑定其this到当前组件，解决这个问题的方法是在事件函数后使用.bind(this)将this绑定到当前组件中

   ```jsx
   class App extends React.Component {
     handleClick() {
       console.log('this > ', this);
     }
     render() {
       return (
         <div onClick={this.handleClick.bind(this)}>test</div>
       )
     }
   }
   ```

   这种方式在组件每次render渲染的时候，都会重新进行bind的操作，影响性能

2. **render方法中使用箭头函数**

   通过ES6的上下文来将this的指向绑定给当前组件，同样再每一次render的时候都会生成新的方法，影响性能

   ```jsx
   class App extends React.Component {
     handleClick() {
       console.log('this > ', this);
     }
     render() {
       return (
         <div onClick={e => this.handleClick(e)}>test</div>
       )
     }
   }
   ```

3. **constructor中bind**

   在constructor中预先bind当前组件，可以避免在render操作中重复绑定

   ```jsx
   class App extends React.Component {
     constructor(props) {
       super(props);
       this.handleClick = this.handleClick.bind(this);
     }
     handleClick() {
       console.log('this > ', this);
     }
     render() {
       return (
         <div onClick={this.handleClick}>test</div>
       )
     }
   }
   ```

4. **定义阶段使用箭头函数绑定**

   跟上述方式三一样，能够避免在render操作中重复绑定，实现也非常的简单，如下：

   ```jsx
   class App extends React.Component {
     constructor(props) {
       super(props);
     }
     handleClick = () => {
       console.log('this > ', this);
     }
     render() {
       return (
         <div onClick={this.handleClick}>test</div>
       )
     }
   }
   ```



## React setState 函数

1. **概念**

   一个组件的显示形态可以由数据状态和外部参数所决定，而数据状态就是state。当需要修改里面的值的状态需要通过调用setState来改变，从而达到更新组件内部数据的作用。

   setState第一个参数可以是一个对象，或者是一个函数，而第二个参数是一个回调函数，用于可以实时的获取到更新之后的数据

   ```jsx
   Component.prototype.setState = function(partialState, callback) {
     invariant(
       typeof partialState === 'object' ||
         typeof partialState === 'function' ||
         partialState == null,
       'setState(...): takes an object of state variables to update or a ' +
         'function which returns an object of state variables.',
     );
     this.updater.enqueueSetState(this, partialState, callback, 'setState');
   };
   ```

2. **同步还是异步**

   假如所有 setState 是同步的，意味着每执行一次 setState 时（有可能一个同步代码中，多次 setState），都重新 vnode diff + dom 修改，这对性能来说是极为不好的。如果是异步，则可以把一个同步代码中的多个 setState 合并成一次组件更新。所以默认是异步的，但是在一些情况下是同步的。

   setState 在源码中，通过 isBatchingUpdates 来判断 setState 是先存进 state 队列还是直接更新，如果值为 true 则执行异步操作，为 false 则直接更新。

   - 异步：在 React 可以控制的地方，就为 true，比如在 React 生命周期事件和合成事件中，都会走合并操作，延迟更新的策略。
   - 同步：在 React 无法控制的地方，比如原生事件，具体就是在addEventListener 、setTimeout、setInterval 等事件中，就只能同步更新。

   一般认为，做异步设计是为了性能优化、减少渲染次数：

   - setState设计为异步，可以显著的提升性能。如果每次调用 setState都进行一次更新，那么意味着 render 函数会被频繁调用，界面重新渲染，这样效率是很低的；
   - 最好的办法应该是获取到多个更新，之后进行批量更新；如果同步更新了 state，但是还没有执行 render 函数，那么 state和 props 不能保持同步。state 和 props 不能保持一致性，会在开发中产生很多的问题；

3. **过程**

   - 在代码中调用 setState 函数之后，React 会将传入的参数对象与组件当前的状态合并，然后触发调和过程(Reconciliation)。

   - 经过调和过程，React 会以相对高效的方式根据新的状态构建 React 元素树并且着手重新渲染整个 UI 界面。

   - 在 React 得到元素树之后，React 会自动计算出新的树与老树的节点差异，然后根据差异对界面进行最小化重渲染。

   - 在差异计算算法中，React 能够相对精确地知道哪些位置发生了改变以及应该如何改变，这就保证了按需更新，而不是全部重新渲染。

   - 如果在短时间内频繁 setState。React 会将 state 的改变压入栈中，在合适的时机，批量更新 state 和视图，达到提高性能的效果。



## 对react组件props的理解

1. **和 state的区别**

   相同点：

   - 两者都是 JavaScript 对象
   - 两者都是用于保存信息
   - props 和 state 都能触发渲染更新

   区别：

   - props 是一个从外部传进组件的参数，主要作为就是从父组件向子组件传递数据，它具有可读性和不变性，只能通过外部组件主动传入新的 props 来重新渲染子组件，否则子组件的 props 以及展现形式不会改变
   - state 的主要作用是用于组件保存、控制以及修改自己的状态，它只能在 constructor 中初始化，它算是组件的私有属性，不可通过外部访问和修改，只能通过组件内部的 this.setState 来修改，修改 state属性会导致组件的重新渲染。

2. **为什么是只读的**

   this.props 是组件之间沟通的一个接口，原则上来讲，它只能从父组件流向子组件。React 具有浓重的函数式编程的思想。

   提到函数式编程就要提一个概念：纯函数。它有几个特点：

   - 给定相同的输入，总是返回相同的输出。
   - 过程没有副作用。
   - 不依赖外部状态。

   this.props 就是汲取了纯函数的思想。props 的不可以变性就保证的相同的输入，页面显示的内容是一样的，并且不会产生副作用。

3. 如何检验 props

   - **PropTypes** 

     React 为我们提供了 PropTypes 以供验证使用。当我们向 Props 传入的数据无效（向 Props 传入的数据类型和验证的数据类型不符）就会在控制台发出警告信息。它可以避免随着应用越来越复杂从而出现的问题。并且，它还可以让程序变得更易读。
     ```jsx
     import PropTypes from 'prop-types';
     class Greeting extends React.Component {
      render() {
       return (
        <h1>Hello, {this.props.name}</h1>
       );
      }
     
     Greeting.propTypes = {
      name: PropTypes.string
     };
     ```

   - **TypeScript** 

     当然，如果项目汇中使用了 TypeScript，那么就可以不用 PropTypes来校验，而使用 TypeScript 定义接口来校验 props。

   

   ## React组件中key的作用

   1. **概念**

      key是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识。在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性

      ```jsx
      const List = () => {
        return (
          <ul>
            {data.map((item) => (
              <ListItem name={item.name} key={item.id}></ListItem>
            ))}
          </ul>
        );
      };
      ```

   2. **作用**

      在 React Diff 算法中 React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重渲染此外，React 还需要借助 Key 值来判断元素与本地状态的关联关系。

      ```js
      insertMovie() {
        const newMovies = [000 ,...this.state.numbers];
        this.setState({
          movies: newMovies
        })
      }
      ```

   3. **使用**

      - key 值一定要和具体的元素—一对应；
      - 尽量不要用数组的 index 去作为 key；
      - 不要在 render 的时候用随机数或者其他操作给元素加上不稳定的key，这样造成的性能开销比不加 key 的情况下更糟糕

   

   ## 对React refs 的理解

   1. **概念**

       refs 在计算机中称为弹性文件系统（英语：Resilient File System，简称ReFS）。React 中的 Refs提供了一种方式，允许我们访问 DOM节点或在 render方法中创建的 React元素。本质为ReactDOM.render()返回的组件实例，如果是渲染组件则返回的是组件实例，如果渲染dom则返回的是具体的dom节点

   2. 创建形式

      - **传入字符串**

        只需要在对应元素或组件中ref属性

        使用时通过 this.refs.传入的字符串的格式获取对应的元素 
        ```jsx
        class MyComponent extends React.Component {
          constructor(*props*) {
           *super*(*props*);
           this.myRef = React.createRef();
          }
          render() {
           return <div *ref*="myref" />;
          }
         }
         *//访问当前节点的方式如下：*
         this.refs.myref.innerHTML = "hello";
        ```

      - **传入对象**

        对象是通过 React.createRef() 方式创建出来，使用时获取到创建的对象中存在 current 属性就是对应的元素。*refs通过React.createRef()创建，然后将ref属性添加到React元素中，如下：*

         ```jsx
         class MyComponent extends React.Component {
           constructor(*props*) {
            *super*(*props*);
            this.myRef = React.createRef();
           }
           render() {
            return <div *ref*={this.myRef} />;
           }
          }
          *//当 ref 被传递给 render 中的元素时，对该节点的引用可以在 ref 的 current 属性中访问*
          const node = this.myRef.current;
         ```

      - **传入函数**

        该函数会在 DOM 被挂载时进行回调，这个函数会传入一个 元素对象，可以自己保存，使用时，直接拿到之前保存的元素对象即可。当ref传入为一个函数的时候，在渲染过程中，回调函数参数会传入一个元素对象，然后通过实例将对象进行保存，如下：

        ```jsx
        class MyComponent extends React.Component {
          constructor(*props*) {
           *super*(*props*);
           this.myRef = React.createRef();
          }
          render() {
           return <div *ref*={*element* => this.myref = *element*} />;
          }
        }
         //获取ref对象只需要通过先前存储的对象即可*
        const node = this.myref 
        ```

      - **传入hook**

        hook是通过 useRef() 方式创建，使用时通过生成hook对象的 current 属性就是对应的元素 。通过useRef创建一个ref，整体使用方式与React.createRef一致如下：
        ```jsx
        const node = this.myref 
         function App(*props*) {
          const myref = useRef()
          return (
           <>
                <div ref={myref}></div>
           </>
          )
         }
         //获取ref属性也是通过hook对象的current属性
         const node = myref.current;
        ```


        上述三种情况都是ref属性用于原生HTML元素上，如果ref设置的组件为一个类组件的时候，ref对象接收到的是组件的挂载实例。注意的是，不能在函数组件上使用ref属性，因为他们并没有实例

   3. **应用场景**

      在某些情况下，我们会通过使用refs来更新组件，但这种方式并不推荐，更多情况我们是通过props与state的方式进行去重新渲染子元素。过多使用refs，会使组件的实例或者是DOM结构暴露，违反组件封装的原则。例如，避免在 Dialog 组件里暴露 open() 和 close() 方法，最好传递 isOpen 属性。但下面的场景使用refs非常有用：

      - 对Dom元素的焦点控制、内容选择、控制；
      - 对Dom元素的内容设置及媒体播放；
      - 对Dom元素的操作和对组件实例的操作；
      - 集成第三方 DOM 库

   

   ## 对immutable的理解

   1. **概念**

      Immutable，不可改变的，在计算机中，即指一旦创建，就不能再被更改的数据。对 Immutable对象的任何修改或添加删除操作都会返回一个新的 Immutable对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构）:

      - 用一种数据结构来保存数据
      - 当数据被修改时，会返回一个对象，但是新的对象会尽可能的利用之前的数据结构而不会对内存造成浪费

      也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变，同时为了避免 deepCopy把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享）。如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

   2. **使用**

      使用Immutable对象最主要的库是immutable.js，immutable.js 是一个完全独立的库，无论基于什么框架都可以用它。其出现场景在于弥补 Javascript 没有不可变数据结构的问题，通过 structural sharing来解决的性能问题。内部提供了一套完整的 Persistent Data Structure，还有很多易用的数据类型，如Collection、List、Map、Set、Record、Seq，其中：

      - List: 有序索引集，类似 JavaScript 中的 Array
      - Map: 无序索引集，类似 JavaScript 中的 Object
      - Set: 没有重复值的集合

      主要的方法如下：

      - fromJS()：将一个js数据转换为Immutable类型的数据
      - toJS()：将一个Immutable数据转换为JS类型的数据
      - s()：对两个对象进行比较
      - get(key)：对数据或对象取值
      - getIn([]) ：对嵌套对象或数组取值，传参为数组，表示位置

   3. **应用**

      用 Immutable可以给 React 应用带来性能的优化，主要体现在减少渲染的次数。在做react性能优化的时候，为了避免重复渲染，我们会在shouldComponentUpdate()中做对比，当返回true执行render方法。Immutable通过is方法则可以完成对比，而无需像一样通过深度比较的方式比较。在使用redux过程中也可以结合Immutable，不使用Immutable前修改一个数据需要做一个深拷贝

      ```jsx
      getInitialState() {
        return {
          data: Map({ times: 0 })
        }
      },
        handleAdd() {
          this.setState({ data: this.state.data.update('times', v => v + 1) });
          // 这时的 times 并不会改变
          console.log(this.state.data.get('times'));
        }
      ```

   

  ## react中引入css的方式

   1. **规则**

      组件式开发选择合适的css解决方案尤为重要。通常会遵循以下规则：

      - 可以编写局部css，不会随意污染其他组件内的原生；
      - 可以编写动态的css，可以获取当前组件的一些状态，根据状态的变化生成不同的css样式；
      - 支持所有的css特性：伪类、动画、媒体查询等；
      - 编写起来简洁方便、最好符合一贯的css风格特点。

      在这一方面，vue使用css起来更为简洁：

      - 通过 style 标签编写样式；
      - scoped 属性决定编写的样式是否局部有效；
      - lang 属性设置预处理器；内联样式风格的方式来根据最新状态设置和改变css。

   2. **方式**

      而在react中，引入CSS就不如Vue方便简洁，其引入css的方式有很多种：

      - **在组件内直接使用**。直接在组件中书写css样式，通过style属性直接引入 。可以看到，css属性需要转换成驼峰写法。
        这种方式优点：内联样式, 样式之间不会有冲突；可以动态获取当前state中的状态。

        缺点：写法上都需要使用驼峰标识；某些样式没有提示；大量的样式, 代码混乱；某些样式无法编写(比如伪类/伪元素) 

        ```jsx
        import React, { Component } from "react";
        
        const div1 = {
          width: "300px",
          margin: "30px auto",
          backgroundColor: "#44014C",  //驼峰法
          minHeight: "200px",
          boxSizing: "border-box"
        };
        
        class Test extends Component {
          constructor(props, context) {
            super(props);
          }
         
          render() {
            return (
             <div>
               <div style={div1}>123</div>
               <div style={{backgroundColor:"red"}}>
             </div>
            );
          }
        }
        
        export default Test；
        ```

      - **组件中引入 .css 文件。**将css单独写在一个css文件中，然后在组件中直接引入。这种方式存在不好的地方在于样式是全局生效，样式之间会互相影响

        ```jsx
        import React, { PureComponent } from 'react';
        import Home from './Home';
        import './App.css';
        export default class App extends PureComponent {
          render() {
            return (
              <div className="app">
                <h2 className="title">我是App的标题</h2>
                <p className="desc">我是App中的一段文字描述</p >
                <Home/>
              </div>
            )
          }
        }
        ```

      - **组件中引入 .module.css 文件。**将css文件作为一个模块引入，这个模块中的所有css，只作用于当前组件。不会影响当前组件的后代组件。这种方式是webpack特供的方案，只需要配置webpack配置文件中modules:true即可。

        这种方式能够解决局部作用域问题，但也有一定的缺陷：引用的类名，不能使用连接符(.xxx-xx)，在 JavaScript 中是不识别的；所有的 className 都必须使用 {style.className} 的形式来编写；不方便动态来修改某些样式，依然需要使用内联样式的方式；

        ```jsx
        import React, { PureComponent } from 'react';
        import Home from './Home';
        import './App.module.css';
        export default class App extends PureComponent {
          render() {
            return (
              <div className="app">
                <h2 className="title">我是App的标题</h2>
                <p className="desc">我是App中的一段文字描述</p >
                <Home/>
              </div>
            )
          }
        }
        ```

      - **CSS in JS**。是指一种模式，其中CSS由 JavaScript生成而不是在外部文件中定义。此功能并不是 React 的一部分，而是由第三方库提供，例如：styled-components、emotion、glamorous 。

        看看styled-components的基本使用：本质是通过函数的调用，最终创建出一个组件；这个组件会被自动添加上一个不重复的class；styled-components会给该class添加相关的样式。

        基本使用如下：创建一个style.js文件用于存放样式组件：

        ```jsx
        export const SelfLink = styled.div`
          height: 50px;
          border: 1px solid red;
          color: yellow;
        `;
        
        export const SelfButton = styled.div`
          height: 150px;
          width: 150px;
          color: ${props => props.color};
          background-image: url(${props => props.src});
          background-size: 150px 150px;
        `;
        ```

        引入样式组件也很简单：

        ```jsx
        import React, { Component } from "react";
        
        import { SelfLink, SelfButton } from "./style";
        
        class Test extends Component {
          constructor(props, context) {
            super(props);
          }  
         
          render() {
            return (
             <div>
               <SelfLink title="People's Republic of China">app.js</SelfLink>
               <SelfButton color="palevioletred" style={{ color: "pink" }} src={fist}>
                  SelfButton
                </SelfButton>
             </div>
            );
          }
        }
        export default Test;
        ```

   3. **区别**

      通过上面四种样式的引入，可以看到：

      - 在组件内直接使用css该方式编写方便，容易能够根据状态修改样式属性，但是大量的演示编写容易导致代码混乱
      - 组件中引入 .css 文件符合我们日常的编写习惯，但是作用域是全局的，样式之间会层叠；
      - 引入.module.css 文件能够解决局部作用域问题，但是不方便动态修改样式，需要使用内联的方式进行样式的编写；
      - 通过css in js 这种方法，可以满足大部分场景的应用，可以类似于预处理器一样样式嵌套、定义、修改状态等。

      至于使用react用哪种方案引入css，并没有一个绝对的答案，可以根据各自情况选择合适的方案 



## React diff 算法

1. **概念**

   实际上，diff 算法探讨的就是虚拟 DOM 树发生变化后，生成 DOM 树更新补丁的方式。它通过对比新旧两株虚拟 DOM 树的变更差异，将更新补丁作用于真实 DOM，以最小成本完成视图更新。具体的流程如下：

   - 真实的 DOM 首先会映射为虚拟 DOM；
   - 当虚拟 DOM 发生变化后，就会根据差距计算生成 patch，这个 patch是一个结构化的数据，内容包含了增加、更新、移除等；
   - 根据 patch 去更新真实的 DOM，反馈到用户的界面上

   ```jsx
   import React from 'react'
   export default class ExampleComponent extends React.Component {
    render() {
     if(this.props.isVisible) {
       return <div className="visible">visbile</div>;
     }
      return <div className="hidden">hidden</div>;
    }
   }
   ```

   这里，首先假定 ExampleComponent 可见，然后再改变它的状态，让它不可见 。映射为真实的 DOM 操作是这样的，React 会创建一个div 节点

   ```jsx
   <div class="visible">visbile</div>
   ```

   当把 visbile 的值变为 false 时，就会替换 class 属性为 hidden，并重写内部的 innerText 为 hidden。这样一个生成补丁、更新差异的过程统称为 diff 算法。

2. **策略**

   diff 算法可以总结为三个策略，分别从树、组件及元素三个层面进行复杂度的优化：

   - 策略一：忽略节点跨层级操作场景，提升比对效率。（基于树进行对比）这一策略需要进行树比对，即对树进行分层比较。树比对的处理手法是非常“暴力”的，即两棵树只对同一层次的节点进行比较，如果发现节点已经不存在了，则该节点及其子节点会被完全删除掉，不会用于进一步的比较，这就提升了比对效率。
   - 策略二：如果组件的 class 一致，则默认为相似的树结构，否则默认为不同的树结构。（基于组件进行对比）在组件比对的过程中：如果组件是同一类型则进行树比对；如果不是则直接放入补丁中。只要父组件类型不同，就会被重新渲染。这也就是为什么shouldComponentUpdate、PureComponent 及 React.memo 可以提高性能的原因。
   - 策略三：同一层级的子节点，可以通过标记 key 的方式进行列表对比。（基于节点进行对比）元素比对主要发生在同层级中，通过标记节点操作生成补丁。节点操作包含了插入、移动、删除等。其中节点重新排序同时涉及插入、移动、删除三个操作，所以效率消耗最大，此时策略三起到了至关重要的作用。通过标记 key 的方式，React 可以直接移动 DOM 节点，降低内耗。

3. **算法内容**

   经典的 React diff 算法内容

   - diff 算法是指生成更新补丁的方式，主要应用于虚拟 DOM 树变化后，更新真实 DOM。所以 diff 算法一定存在这样一个过程：触发更新 → 生成补丁 → 应用补丁。
   - React 的 diff 算法，触发更新的时机主要在 state 变化与 hooks调用之后。此时触发虚拟 DOM 树变更遍历，采用了深度优先遍历算法。但传统的遍历方式，效率较低。为了优化效率，使用了分治的方式。将单一节点比对转化为了 3 种类型节点的比对，分别是树、组件及元素，以此提升效率。
   - 树比对：由于网页视图中较少有跨层级节点移动，两株虚拟 DOM 树只对同一层次的节点进行比较。
   - 组件比对：如果组件是同一类型，则进行树比对，如果不是，则直接放入到补丁中。
   - 元素比对：主要发生在同层级中，通过标记节点操作生成补丁，节点操作对应真实的 DOM 剪裁操作

   自 React 16 起，引入了 Fiber架构。为了使整个更新过程可随时暂停恢复，节点与树分别采用了FiberNode 与 FiberTree 进行重构。fiberNode 使用了双链表的结构，可以直接找到兄弟节点与子节点。整个更新过程由 current 与 workInProgress 两株树双缓冲完成。workInProgress 更新完成后，再通过修改 current 相关指针指向新节点。

4. **vue的diff算法**

   Vue 的整体 diff 策略与 React 对齐，虽然缺乏时间切片能力，但这并不意味着 Vue 的性能更差，因为在 Vue 3 初期引入过，后期因为收益不高移除掉了。除了高帧率动画，在 Vue 中其他的场景几乎都可以使用防抖和节流去提高响应性能。



## React构建组件的方式

1. **组件**

   就是把图形、非图形的各种逻辑均抽象为一个统一的概念（组件）来实现开发的模式。在React中，一个类、一个函数都可以视为一个组件。组件所存在的优势：

   - 降低整个系统的耦合度，在保持接口不变的情况下，我们可以替换不同的组件快速完成需求，例如输入框，可以替换为日历、时间、范围等组件作具体的实现；
   - 调试方便，由于整个系统是通过组件组合起来的，在出现问题的时候，可以或者根据报错的组件快速定位问题，之所以能够快用排除法直接移除组件，速定位，是因为每个组件之间低耦合，职责单一，所以逻辑会比分析整个系统要简单；
   - 提高可维护性，由于每个组件的职责单一，并且组件在系统中是被复用的，所以对代码进行优化可获得系统的整体升级

2. 创建方法

   - **函数式创建**

     函数式创建：在React Hooks出来之前，函数式组件可以视为无状态组件，只负责根据传入的props来展示视图，不涉及对state状态的操作，大多数组件可以写为无状态组件，通过简单组合构建其他组件
     ```jsx
     function HelloComponent(props, /* context */) {
      return <div>Hello {props.name}</div>
     }
     ```

   - **React.createClass**

     是react刚开始推荐的创建组件的方式，目前这种创建方式已经不怎么用了
     ```jsx
     var InputControlES5 = React.createClass({
       propTypes: {//定义传入props中的属性各种类型
         initialValue: React.PropTypes.string
       },
       defaultProps: { //组件默认的props对象
         initialValue: ''
       },
       // 设置 initial state
       getInitialState: function() {//组件相关的状态对象
         return {
           text: this.props.initialValue || 'placeholder'
         };
       },
       handleChange: function(event) {
         this.setState({ //this represents react component instance
           text: event.target.value
         });
       },
       render: function() {
         return (
           <div>
             Type something:
             <input onChange={this.handleChange} value={this.state.text} />
           </div>
         );
       }
     });
     ```

   - **继承 React.Component 创建**

     同样在react hooks出来之前，有状态的组件只能通过继承React.Component这种形式进行创建。有状态的组件也就是组件内部存在维护的数据，在类创建的方式中通过this.state进行访问。当调用this.setState修改组件的状态时，组价会再次会调用render()方法进行重新渲染 

     ```jsx
     class InputControlES6 extends React.Component {
         constructor(props) {
             super(props);
             // 设置 initial state
             this.state = {
                 text: props.initialValue || 'placeholder'
             };
             // ES6 类中函数必须手动绑定
             this.handleChange = this.handleChange.bind(this);
         }
         handleChange(event) {
             this.setState({
                 text: event.target.value
             });
         }
         render() {
             return (
                 <div>
                     Type something:
                     <input onChange={this.handleChange}
                    value={this.state.text} />
                 </div>
             );
         }
     }
     InputControlES6.propTypes = {
         initialValue: React.PropTypes.string
     };
     InputControlES6.defaultProps = {
         initialValue: ''
     };
     ```

3. reateClass 和 extends的区别

   - **语法区别**

     createClass 本质上是一个工厂函数，extends 的方式更加接近最新的 ES6 规范的 class 写法。两种方式在语法上的差别主要体现在方法的定义和静态属性的声明上。createClass 方式的方法定义使用逗号，隔开，因为 creatClass 本质上是一个函数，传递给它的是一个 Object；而 class 的方式定义方法时务必谨记不要使用逗号隔开，这是 ES6 class的语法规范。

   - **获取属性**

     React.createClass：通过 proTypes 对象和 getDefaultProps()方法来设置和获取 
     props.React.Component：通过设置两个属性 propTypes 和 defaultProps

   - **状态的区别**

     React.createClass：通过 getInitialState()方法返回一个包含初始值的对象。
     React.Component：通过 constructor 设置初始状态

   - **this 区别**

     React.createClass：会正确绑定 this，
     React.Component：由于使用了 ES6，这里会有些微不同，属性并不会自动绑定到 React 类的实例上

   - **Mixins**

     React.createClass：使用 React.createClass 的话，可以在创建组件时添加一个叫做 mixins 的属性，并将可供混合的类的集合以数组的形式赋给 mixins。
     如果使用 ES6 的方式来创建组件，那么 React mixins 的特性将不能被使用了

4. **如何选择**

   由于React.createClass创建的方式过于冗杂，并不建议使用。而像函数式创建和类组件创建的区别主要在于需要创建的组件是否需要为有状态组件：

   - 对于一些无状态的组件创建，建议使用函数式创建的方式
   - 由于react hooks的出现，函数式组件创建的组件通过使用hooks方法也能使之成为有状态组件，再加上目前推崇函数式编程，所以这里建议都使用函数式的方式来创建组件

   在考虑组件的选择原则上，能用无状态组件则用无状态组件



## Component,Element,Instance的区别

1. **Element**

   一个元素 element 是一个普通对象(plain object)，描述了对于一个 DOM 节点或者其他组件 component，你想让它在屏幕上呈现成 什么样子。元素 element 可以在它的属性 props 中包含其他元素(译注:用于形成元素树)。创建一个 React 元素 element 成本很低。元素 element 创建之后是不可变的

2. **Component**

   一个组件 component 可以通过多种方式声明。可以是带有一个render()方法的类，简单点也可以定义为一个函数。这两种情况下，它都把属性 props 作为输入，把返回的一棵元素树作为输出。

3. **Instance**

   一个实例 instance 是你在所写的组件类 component class 中使用关键字 this 所指向的东西(译注:组件实例)。它用来存储本地状态和响应生命周期事件很有用。函数式组件(Functional component)根本没有实例 instance。类组件(Class component)有实例 instance，但是永远也不需要直接创建一个组件的实例，因为 React 帮我们做了这些。



## 对受控组件和非受控组件的理解

1. **受控组件**

   受控组件，简单来讲，就是受我们控制的组件，组件的状态全程响应外部数据。受控组件我们一般需要初始状态和一个状态更新事件函数。

   ```jsx
   class TestComponent extends React.Component {
     constructor (props) {
       super(props);
       this.state = { username: 'lindaidai' };
     }
     render () {
       return <input name="username" value={this.state.username} />
     }
   }
   ```

2. **非受控组件**

   非受控组件，简单来讲，就是不受我们控制的组件，一般情况是在初始化的时候接受外部数据，然后自己在内部存储其自身状态

   ```jsx
   import React, { Component } from 'react';
   
   export class UnControll extends Component {
     constructor (props) {
       super(props);
       this.inputRef = React.createRef();
     }
     handleSubmit = (e) => {
       console.log('我们可以获得input内的值为', this.inputRef.current.value);
       e.preventDefault();
     }
     render () {
       return (
         <form onSubmit={e => this.handleSubmit(e)}>
           <input defaultValue="lindaidai" ref={this.inputRef} />
           <input type="submit" value="提交" />
         </form>
       )
     }
   }
   ```

3. **应用**

   大部分时候推荐使用受控组件来实现表单，因为在受控组件中，表单数据由React组件负责处理。如果选择非受控组件的话，控制能力较弱，表单数据就由DOM本身处理，但更加方便快捷，代码量少。



## react生命周期

1. 创建阶段

   - **constructor**

     实例过程中自动调用的方法，在方法内部通过super关键字获取来自父组件的props。在该方法中，通常的操作为初始化state状态或者在this上挂载方法

   - **getDerivedStateFromProps**

     该方法是新增的生命周期方法，是一个静态的方法，因此不能访问到组件的实例。执行时机在组件创建和更新阶段，不论是props变化还是state变化，也会调用。在每次render方法前调用，第一个参数为即将更新的props，第二个参数为上一个状态的state，可以比较props 和 state来加一些限制条件，防止无用的state更新。该方法需要返回一个新的对象作为新的state或者返回null表示state状态不需要更新。

     ```jsx
     static getDerivedStateFromProps(nextProps, preState) {
       const {match: {params: {instrumentId}}} = nextProps;
       // 此处当传入的instrumentId发生变化的时候，更新state
       if (instrumentId !== preState.instrumentId) {
         //若需要在数据变化后进行其他操作，需要在return前操作！
         return {
           instrumentId: instrumentId,
         };
       }
       return null;  // 不变化，则对于state不进行任何操作
     }
     ```

   - **render**

     类组件必须实现的方法，用于渲染DOM结构，可以访问组件state与prop属性

     注意： 不要在 render 里面 setState, 否则会触发死循环导致内存崩溃

   - **componentDidMount**

     组件挂载到真实DOM节点后执行，其在render方法之后执行。此方法多用于执行一些数据获取，事件监听等操作。

2. 更新阶段

   - **getDerivedStateFromProps**

   - **shouldComponentUpdate**

     用于告知组件本身基于当前的props和state是否需要重新渲染组件，默认情况返回true。执行时机：到新的props或者state时都会调用，通过返回true或者false告知组件更新与否

     一般情况，不建议在该周期方法中进行深层比较，会影响效率。同时也不能调用setState，否则会导致无限循环调用更新。

   - **render**

   - **getSnapshotBeforeUpdate**

     该周期函数在render后执行，执行之时DOM元素还没有被更新。该方法返回的一个Snapshot值，作为componentDidUpdate第三个参数传入。此方法的目的在于获取组件更新前的一些信息，比如组件的滚动位置之类的，在组件更新后可以根据这些信息恢复一些UI视觉上的状态。getSnapshotBeforeUpdate() 方法需要与 componentDidUpdate() 方法一起使用，否则会出现错误

     ```jsx
     getSnapshotBeforeUpdate(prevProps, prevState) {
         console.log('#enter getSnapshotBeforeUpdate');
         return 'foo';
     }
     componentDidUpdate(prevProps, prevState, snapshot) {
         console.log('#enter componentDidUpdate snapshot = ', snapshot);
     ```

   - **componentDidUpdate**

     执行时机：组件更新结束后触发

     ```jsx
     componentDidUpdate(prevProps, prevState, snapshot)
     ```

     在该方法中，可以根据前后的props和state的变化做相应的操作，如获取数据，修改DOM样式等

3. 卸载阶段

   - **componentWillUnmount**

     此方法用于组件卸载前，清理一些注册是监听事件，或者取消订阅的网络请求等。一旦一个组件实例被卸载，其不会被再次挂载，而只可能是被重新创建。

4. 废弃的生命周期

   - **componentWillMount**

     首先这个函数的功能完全可以使用 componentDidMount 和constructor 来代替，异步获取的数据的情况上面已经说明了，而如果抛去异步获取数据，其余的即是初始化而已，这些功能都可以在constructor 中执行，除此之外，如果在 willMount 中订阅事件，但在服务端这并不会执行 willUnMount 事件，也就是说服务端会导致内存泄漏所以 componentWilIMount 完全可以不使用，但使用者有时候难免因为各 种各样的情况在 componentWilMount中做一些操作，那么 React 为了约束开发者，干脆就抛掉了这个 API

   - **componentWillReceiveProps**

     在老版本的 React 中，如果组件自身的某个 state 跟其 props 密切相关的话，一直都没有一种很优雅的处理方式去更新 state，而是需要在 componentWilReceiveProps 中判断前后两个 props 是否相同，如果不同再将新的 props 更新到相应的 state 上去。这样做一来会破坏 state 数据的单一数据源，导致组件状态变得不可预测，另一方面也会增加组件的重绘次数。类似的业务需求也有很多，如一个可以横向滑动的列表，当前高亮的 Tab 显然隶属于列表自身的时，根据传入的某个值，直接定位到某个 Tab。为了解决这些问题，React引入了第一个新的生命周期：getDerivedStateFromProps。

   - **componentWillUpdate**

     与 componentWillReceiveProps 类似，许多开发者也会在componentWillUpdate 中根据 props 的变化去触发一些回调 。 但不论是 componentWilReceiveProps 还 是 componentWilUpdate，都有可能在一次更新中被调用多次，也就是说写在这里的回调函数也有可能会被调用多次，这显然是不可取的。与 componentDidMount 类似， componentDidUpdate 也不存在这样的问题，一次更新中componentDidUpdate 只会被调用一次，所以将原先写在componentWillUpdate 中 的 回 调 迁 移 至 componentDidUpdate就可以解决这个问题。
     另外一种情况则是需要获取 DOM 元素状态，但是由于在 fber 中，render 可打断，可能在 wilMount 中获取到的元素状态很可能与实际需要的不同，这个通常可以使用第二个新增的生命函数的解决getSnapshotBeforeUpdate(prevProps, prevState)



## 对React中类组件和函数组件的理解

1. **类组件**

    顾名思义，也就是通过使用ES6类的编写形式去编写组件，该类必须继承React.Component。如果想要访问父组件传递过来的参数，可通过this.props的方式去访问。在组件中必须实现render方法，在return中返回React对象，如下：

   ```jsx
   class Welcome extends React.Component {
     constructor(props) {
       super(props)
     }
     render() {
       return <h1>Hello, {this.props.name}</h1>
     }
   }
   ```

2. **函数组件**

   顾名思义，就是通过函数编写的形式去实现一个React组件，是React中定义组件最简单的方式

   ```jsx
   function Welcome(props) {
     return <h1>Hello, {props.name}</h1>;
   }
   ```

3. 区别

   - **编写形式**

     两者最明显的区别在于编写形式的不同，同一种功能的实现可以分别对应类组件和函数组件的编写形式

     ```jsx
     function Welcome(props) {
       return <h1>Hello, {props.name}</h1>;
     }
     
     class Welcome extends React.Component {
       constructor(props) {
         super(props)
       }
       render() {
         return <h1>Hello, {this.props.name}</h1>
       }
     }
     ```

   - **状态管理**

     在hooks出来之前，函数组件就是无状态组件，不能保管组件的状态，不像类组件中调用setState。如果想要管理state状态，可以使用useState，如下：

     ```jsx
     const FunctionalComponent = () => {
         const [count, setCount] = React.useState(0);
     
         return (
             <div>
                 <p>count: {count}</p >
                 <button onClick={() => setCount(count + 1)}>Click</button>
             </div>
         );
     };
     ```

     在使用hooks情况下，一般如果函数组件调用state，则需要创建一个类组件或者state提升到你的父组件中，然后通过props对象传递到子组件

   - **生命周期**

     在函数组件中，并不存在生命周期，这是因为这些生命周期钩子都来自于继承的React.Component。所以，如果用到生命周期，就只能使用类组件。但是函数组件使用useEffect也能够完成替代生命周期的作用，这里给出一个简单的例子：

     ```jsx
     const FunctionalComponent = () => {
         useEffect(() => {
             console.log("Hello");
         }, []);
         return <h1>Hello, World</h1>;
     };
     ```

     上述简单的例子对应类组件中的componentDidMount生命周期。如果在useEffect回调函数中return一个函数，则return函数会在组件卸载的时候执行，正如componentWillUnmount

   - **调用方式**

     如果是一个函数组件，调用则是执行函数即可：

     ```jsx
     // 你的代码 
     function SayHi() { 
         return <p>Hello, React</p > 
     } 
     // React内部 
     const result = SayHi(props) // » <p>Hello, React</p >
     ```

     如果是一个类组件，则需要将组件进行实例化，然后调用实例对象的render方法：

     ```jsx
     // 你的代码 
     class SayHi extends React.Component { 
         render() { 
             return <p>Hello, React</p > 
         } 
     } 
     // React内部 
     const instance = new SayHi(props) // » SayHi {} 
     const result = instance.render() // » <p>Hello, React</p >
     ```

   - **获取渲染的值**

     ```jsx
     function ProfilePage(props) {
       const showMessage = () => {
         alert('Followed ' + props.user);
       }
     
       const handleClick = () => {
         setTimeout(showMessage, 3000);
       }
     
       return (
         <button onClick={handleClick}>Follow</button>
       )
     }
     
     class ProfilePage extends React.Component {
       showMessage() {
         alert('Followed ' + this.props.user);
       }
     
       handleClick() {
         setTimeout(this.showMessage.bind(this), 3000);
       }
     
       render() {
         return <button onClick={this.handleClick.bind(this)}>Follow</button>
       }
     }
     ```

     两者看起来实现功能是一致的，但是在类组件中，输出this.props.user，Props在 React中是不可变的所以它永远不会改变，但是 this 总是可变的，以便您可以在 render 和生命周期函数中读取新版本。因此，如果我们的组件在请求运行时更新。this.props 将会改变。showMessage方法从“最新”的 props 中读取 user。而函数组件，本身就不存在this，props并不发生改变，因此同样是点击，alert的内容仍旧是之前的内容



## 组件通信的方式有哪些

1. **父组件向子组件通信**

   由于React的数据流动为单向的，父组件向子组件传递是最常见的方式，父组件在调用子组件的时候，只需要在子组件标签内传递参数，子组件通过props属性就能接收父组件传递过来的参数

   ```jsx
   function EmailInput(props) {
     return (
       <label>
         Email: <input value={props.email} />
       </label>
     );
   }
   const element = <EmailInput email="123124132@163.com" />;
   ```

2. **子组件向父组件通信**

   props+回调的⽅式，⽗组件向⼦组件传递props 进⾏通讯，此 props 为作⽤域为⽗组件⾃身的函 数，⼦组件调⽤该函数，将⼦组件想要传递的信息，作为参数，传递到⽗组件的作⽤域中

   ```jsx
   class Parents extends Component {
     constructor() {
       super();
       this.state = {
         price: 0
       };
     }
   
     getItemPrice(e) {
       this.setState({
         price: e
       });
     }
   
     render() {
       return (
         <div>
           <div>price: {this.state.price}</div>
           {/* 向子组件中传入一个函数  */}
           <Child getPrice={this.getItemPrice.bind(this)} />
         </div>
       );
     }
   }
   
   class Child extends Component {
     clickGoods(e) {
       // 在此函数中传入值
       this.props.getPrice(e);
     }
     render() {
       return (
         <div>
           <button onClick={this.clickGoods.bind(this, 100)}>goods1</button>
           <button onClick={this.clickGoods.bind(this, 1000)}>goods2</button>
         </div>
       );
     }
   }
   ```

3. **兄弟组件通信**

   找到这两个兄弟节点共同的⽗节点,结合上⾯两种⽅式由⽗节点转发信息进⾏通信

   ```jsx
   class Parent extends React.Component {
     constructor(props) {
       super(props)
       this.state = {count: 0}
     }
     setCount = () => {
       this.setState({count: this.state.count + 1})
     }
     render() {
       return (
         <div>
           <SiblingA
             count={this.state.count}
           />
           <SiblingB
             onClick={this.setCount}
           />
         </div>
       );
     }
   }
   ```

4. **跨层级通信**

   Context 设计⽬的是为了共享那些对于⼀个组件树⽽⾔是“全局”的数据，例如当前认证的⽤户、主题或⾸选语⾔，对于跨越多层的全局数据通过 Context 通信再适合不过

   通过使用React.createContext创建一个context：

   ```jsx
   const PriceContext = React.createContext('price')
   ```

   context创建成功后，其下存在Provider组件用于创建数据源，Consumer组件用于接收数据。

   Provider组件通过value属性用于给后代组件传递数据：

   ```jsx
   <PriceContext.Provider value={100}></PriceContext.Provider>
   ```

   如果想要获取Provider传递的数据，可以通过Consumer组件或者或者使用contextType属性接收，对应分别如下：

   ```jsx
   class MyClass extends React.Component {
     static contextType = PriceContext;
     render() {
       let price = this.context;
       /* 基于这个值进行渲染工作 */
     }
   }
   
   // Consumer组件：
   <PriceContext.Consumer>
       {
           （{price}） => {
   			return （<div>price：{price}</div>）
   		}
       }
   </PriceContext.Consumer>
   ```

5. **非关系组件通信**

   - 发布者发布事件：订阅者监听事件并做出反应,我们可以通过引⼊event 模块进⾏通信
   - 全局状态管理工具：借助 Redux 或者 Mobx 等全局状态管理⼯具进⾏通信,这种⼯具会维护⼀个全局状态中⼼Store,并根据不同的事件产⽣新的状态



## React如何提高组件的渲染效率

1. **渲染时机**

   render函数里面可以编写JSX，转化成createElement这种形式，用于生成虚拟DOM，最终转化成真实DOM。

   在React 中，类组件只要执行了 setState 方法，就一定会触发 render 函数执行。函数组件使用useState更改状态不一定导致重新render。组件的props 改变了，不一定触发 render 函数的执行，但是如果 props 的值来自于父组件或者祖先组件的 state，在这种情况下，父组件或者祖先组件的 state 发生了改变，就会导致子组件的重新渲染。

   所以，一旦执行了setState就会执行render方法，useState 会判断当前值有无发生改变确定是否执行render方法，一旦父组件发生渲染，子组件也会渲染

2. 如何提高

   - **shouldComponentUpdate**

     通过shouldComponentUpdate生命周期函数来比对 state和 props，确定是否要重新渲染。默认情况下返回true表示重新渲染，如果不希望组件重新渲染，返回 false 即可

   - **PureComponent**

     跟shouldComponentUpdate原理基本一致，通过对 props 和 state的浅比较结果来实现 shouldComponentUpdate。当对象包含复杂的数据结构时，对象深层的数据已改变却没有触发 render
     注意：在react中，是不建议使用深层次结构的数据

   - **React.memo**

     react.memo用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 PureComponent 十分类似。但不同的是， React.memo 只能用于函数组件。

     ```jsx
     import { memo } from 'react';
     function Button(props) {
       // Component code
     }
     ```

     如果需要深层次比较，这时候可以给memo第二个参数传递比较函数：

     ```jsx
     function arePropsEqual(prevProps, nextProps) {
       // your code
       return prevProps === nextProps;
     }
     export default memo(Button, arePropsEqual);
     ```

3. **总结**

   在实际开发过程中，前端性能问题是一个必须考虑的问题，随着业务的复杂，遇到性能问题的概率也在增高。除此之外，建议将页面进行更小的颗粒化，如果一个过大，当状态发生修改的时候，就会导致整个大组件的渲染，而对组件进行拆分后，粒度变小了，也能够减少子组件不必要的渲染



## react组件间过渡动画如何实现

1. react-transition-group

   - **CSSTransition**

     前端开发中，结合 CSS 来完成过渡动画效果。其实现动画的原理在于：

     - 当CSSTransition的in属性置为true时，CSSTransition首先会给其子组件加上xxx-enter、xxx-enter-active的class执行动画。
     - 当in属性置为false时，CSSTransition会给子组件加上xxx-exit和xxx-exit-active的class，然后开始执行动画
     - 当动画执行结束后，会移除两个class，并且添加-enter-done的class

     所以可以利用这一点，通过css的transition属性，让元素在两个状态之间平滑过渡，从而得到相应的动画效果

   - **SwitchTransition**

     两个组件显示和隐藏切换时，使用该组件。SwitchTransition中主要有一个属性mode，对应两个值：

     - in-out：表示新组件先进入，旧组件再移除；
     - out-in：表示就组件先移除，新组建再进入

     SwitchTransition组件里面要有CSSTransition，不能直接包裹你想要切换的组件。里面的CSSTransition组件不再像以前那样接受in属性来判断元素是何种状态，取而代之的是key属性。

   - **TransitionGroup**

     将多个动画组件包裹在其中，一般用于列表中元素的动画。当有一组动画的时候，就可将这些CSSTransition放入到一个TransitionGroup中来完成动画。同样CSSTransition里面没有in属性，用到了key属性。TransitionGroup在感知children发生变化的时候，先保存移除的节点，当动画结束后才真正移除。其处理方式如下：

     - 插入的节点，先渲染dom，然后再做动画
     - 删除的节点，先做动画，然后再删除dom

2. **react-motion**

3. **Animated**

4. **原生的CSS**



## react16后新版本的特性

1. **time Slicing**

   （解决 CPU 速度问题）使得在执行任务的期间可以随时暂停，跑去干别的事情，这个特性使得 react 能在性能极其差的机器跑时，仍然保持有良好的性能

2. **Suspense**

   （解决网络 IO 问题）和 lazy 配合，实现异步加载组件。

   能暂停当前组件的渲染， 当完成某件事以后再继续渲染，解决从 react出生到现在都存在的「异步副作用」的问题，而且解决得非的优雅，使用的是 T 异步但是同步的写法，这是最好的解决异步问题的方式。

   提供了一个内置函数 componentDidCatch，当有错误发生时，可以友好地展示 fallback 组件; 可以捕捉到它的子元素（包括嵌套子元素）抛出的异常; 可以复用错误组件

3. **hooks**

   是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性



## 对React Hooks的理解

1. 作用

   - **在组件之间复用状态逻辑很难**

     React 没有提供将可复用性行为“附加”到组件的途径（例如，把组件连接到 store）解决此类问题可以使用 render props 和 高阶组件。但是这类方案需要重新组织组件结构，这可能会很麻烦，并且会使代码难以理解。由 providers，consumers，高阶组件，render props等其他抽象层组成的组件会形成“嵌套地狱”。尽管可以在 DevTools过滤掉它们，但这说明了一个更深层次的问题：React 需要为共享状态逻辑提供更好的原生途径。


     可以使用 Hook 从组件中提取状态逻辑，使得这些逻辑可以单独测试并复用。Hook 使我们在无需修改组件结构的情况下复用状态逻辑。这使得在组件间或社区内共享 Hook 变得更便捷

   - **复杂组件变得难以理解**

     在组件中，每个生命周期常常包含一些不相关的逻辑。例如，组件常常在 componentDidMount 和 componentDidUpdate 中获取数据。但是，同一个 componentDidMount 中可能也包含很多其它的逻辑，如设置事件监听，而之后需在 componentWillUnmount 中清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法中组合在一起。如此很容易产生 bug，并且导致逻辑不一致。
     在多数情况下，不可能将组件拆分为更小的粒度，因为状态逻辑无处不在。这也给测试带来了一定挑战。同时，这也是很多人将 React 与状态管理库结合使用的原因之一。但是，这往往会引入了很多抽象概念，需要你在不同的文件之间来回切换，使得复用变得更加困难。为了解决这个问题，Hook 将组件中相互关联的部分拆分成更小的函数（比如设置订阅或请求数据），而并非强制按照生命周期划分。你还可以使用 reducer 来管理组件的内部状态，使其更加可预测。

   - **难以理解的 class**

     除了代码复用和代码管理会遇到困难外，class 是学习 React 的一大屏障。我们必须去理解 JavaScript 中 this 的工作方式，这与其他语言存在巨大差异。还不能忘记绑定事件处理器。没有稳定的语法提案，这些代码非常冗余。大家可以很好地理解 props，state 和自顶向下的数据流，但对 class 却一筹莫展。即便在有经验的 React开发者之间，对于函数组件与 class 组件的差异也存在分歧，甚至还要区分两种组件的使用场景。
     为了解决这些问题，Hook 使你在非 class 的情况下可以使用更多的React 特性。从概念上讲，React 组件一直更像是函数。而 Hook 则拥抱了函数，同时也没有牺牲 React 的精神原则。Hook 提供了问题的解决方案，无需学习复杂的函数式或响应式编程技术

2. **使用限制**

   - 不要在循环、条件或嵌套函数中调用 Hook。因为 Hooks的设计是基于数组实现。在调用时按顺序加入数组中，如果使用循环、条件或嵌套函数很有可能导致数组取值错位，执行错误的 Hook。当然，实质上 React 的源码里不是数组，是链表。这些限制会在编码上造成一定程度的心智负担，新手可能会写错，为了避免这样的情况，可以引入 ESLint 的 Hooks 检查插件进行预防。
   - 在 React 的函数组件中调用 Hook。

3. 常用hooks

   - **useState**

     使用非常简单，我们从 React 中拿到 useState 后，只需要在使用的地方直接调用 useState 函数就可以， useState 会返回一个数组，第一个值是我们的 state， 第二个值是一个函数，用来修改该 state 的。

     叫 count 和 setCount的原因：这里使用了 es6 的解构赋值，所以你可以给它起任何名字：如updateCount, doCount、any thing，当然，为了编码规范，所以建议统一使用一种命名规范，尤其是第二个值

     ```jsx
     import React, { useState } from 'react';
     function Example() {
       // 声明一个叫 "count" 的 state 变量
       const [count, setCount] = useState(0);
     
       return (
         <div>
           <p>You clicked {count} times</p >
           <button onClick={() => setCount(count + 1)}>
             Click me
           </button>
         </div>
       );
     }
     ```

   - **useEffect**

     可以让你在函数组件中执行副作用操作，这里提到副作用，什么是副作用呢，就是除了状态相关的逻辑，比如网络请求，监听事件，查找 dom

     ```jsx
     function App () {
       const [ count, setCount ] = useState(0)
       useEffect(() => {
         document.title = count
       })
        useEffect(() => {
           // 相当于 componentDidMount
           console.log('add resize event')
           window.addEventListener('resize', onChange, false)
      
           return () => {
             // 相当于 componentWillUnmount
             window.removeEventListener('resize', onChange, false)
           }
         }, [])
      
         useEffect(() => {
           // 相当于 componentDidUpdate
           document.title = count
         })
      
       return (
         <div>
           页面名称: { count } 
           <button onClick={() => { setCount(count + 1 )}}>点我</button>
         </div>
         )
     }
     ```

   - **useContext**

     接受上下文对象（从 React.createContext 返回的值）并返回当前上下文值

     ```jsx
     // 创建一个 context* 
     const Context = createContext(0)
     
     // 组件一, Consumer 写法*
     class Item1 extends Component {
      render() {
       return (<Context.Consumer> {(*count*) => (
        { *count* }
       )} </Context.Consumer>)
      }
     } 
     
     // 组件二, contextType 写法* 
     class Item2 extends Component { 
      static contextType = Context 
      render () { 
       const count = this.context 
       return ({ count })
      } } 
     
     // 组件三 useContext 写法* 
     function Item3 () { 
      const count = useContext(Context); 
      return ({ count })
     }
     
     function App() {
      const [count, setCount] = useState(0) 
      return (
       <div>
       点击次数: { count } 
       <button *onClick* = {() => { setCount(count + 1)}}> 点我</button >
       <Context.Provider *value*={count}>
        <Item1></Item1>
        <Item2></Item2>
        <Item3></Item3>
       </Context.Provider>
      </div >
     )}
     ```

   - **useMemo**

     memo 就是函数组件的 PureComponent，用来做性能优化的手段，useMemo 也是，useMemo 在我的印象中和 Vue 的 computed 计算属性类似，都是根据依赖的值计算出结果，当依赖的值未发生改变的时候，不触发状态改变

     ```jsx
     function App () {
      const [ count, setCount ] = useState(0)
      const add = useMemo(() => {
       return count + 1
      }, [count])
      return (
       <div>
        点击次数: { count }
        <br/>
        次数加一: { add }
        <button onClick={() => { setCount(count + 1)}}>点我</button>
       </div>
       )
     }
     ```

   - **useCallback**

      是 useMemo 的语法糖，能用 useCallback 实现的，都可以使用 useMemo, 在 react 中我们经常面临一个子组件渲染优化的问题， 尤其是在向子组件传递函数props时，每次 render 都会创建新函数，导致子组件不必要的渲染，浪费性能，这个时候，就是 useCallback 的用武之地了，useCallback 可以保证，无论 render 多少次，我们的函数都是同一个函数，减小不断创建的开销
     ```jsx
     const onClick = useMemo(() => {
      return () => {
       console.log('button click')
      }
     }, [])
     
     const onClick = useCallback(() => {
      console.log('button click')
     }, [])
     ```

   - **useRef**

     获取子组件的实例(只有类组件可用) 在函数组件中的一个全局变量，不会因为重复 render 重复申明， 类似于类组件的this.xxx

     ```jsx
     // 使用 ref 子组件必须是类组件
     class Children extends PureComponent {
      render () {
       const { count } = this.props
       return (
           <div>{ count }</div>
       )
      }
     }
     
     function App () {
      const [ count, setCount ] = useState(0)
      const childrenRef = useRef(null)
      // const 
      const onClick = useMemo(() => {
       return () => {
        console.log('button click')
        console.log(childrenRef.current)
        setCount((count) => count + 1)
       }
      }, [])
     
      return (
         <div>
        点击次数: { count }
        <Children ref={childrenRef} count={count}></Children>
        <button onClick={onClick}>点我</button>
       </div>
       )
     }
     
     //使用useRef来保存state的值
     function App () {
      const [ count, setCount ] = useState(0)
      const timer = useRef(null)
      let timer2 
      useEffect(() => {
       let id = setInterval(() => {
        setCount(count => count + 1)
       }, 500)
       timer.current = id
       timer2 = id
       return () => {
        clearInterval(timer.current)
       }
      }, [])
      const onClickRef = useCallback(() => {
       clearInterval(timer.current)
      }, [])
      const onClick = useCallback(() => {
       clearInterval(timer2)
      }, [])
      return (
         <div>
        点击次数: { count }
        <button onClick={onClick}>普通</button>
        <button onClick={onClickRef}>useRef</button>
       </div>
       )
     }
     ```

   - **useReducer**

     类似 redux 中的功能，相较于 useState，它更适合一些逻辑较复杂且包含多个子值，或者下一个 state 依赖于之前的 state 等等的特定场景 
     ```jsx
     function reducer(state, action) {
       switch (action.type) {
         case 'increment':
           return { count: state.count + 1 };
         case 'decrement':
           return { count: state.count - 1 };
         default:
           throw new Error();
       }
     }
     
     function App() {
       const [state, dispatch] = useReducer(reducer, {
         count: 0
       });
       return (
         <>
           点击次数: {state.count}
           <button onClick={() => dispatch({ type: 'increment' })}>+</button>
           <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
         </>
       );
     }
     ```

   - **useImperativeMethods**

     自定义使用 ref 时公开给父组件的实例值

   - **useMutationEffect**

     更新兄弟组件之前，它在 React 执行其 DOM 改变的同一阶段同步触发

   - **useLayoutEffect**

     DOM 改变后同步触发。使用它来从 DOM 读取布局并同步重新渲染

     

## React 解决代码复用的主要方式

1. **React 高阶组件**

   官方解释∶高阶组件（HOC）是 React 中用于复用组件逻辑的一种高级技巧。HOC自身不是 React API 的一部分，它是一种基于 React 的组合特性而形成的设计模式。简言之，HOC 是一种组件的设计模式，HOC 接受一个组件和额外的参数（如果需要），返回一个新的组件。HOC 是纯函数，没有副作用。

   HOC 优点∶ 逻辑服用、不影响被包裹组件的内部逻辑。

   HOC 缺点∶ hoc 传递给被包裹组件的 props 容易和被包裹后的组件重名，进而被覆盖。

   ```jsx
   // hoc的定义
   function withSubscription(WrappedComponent,selectData){
     return class extends React.component{
       constructor(props){
         super(props);
         this.state = {
           data:selectData(DataSource,props)
         }
       }
       //一些通用的逻辑处理
       render(){
         //...并使用新数据渲染被包装的组件
         return <WrappedComponent data={this.state.data} {...this.props}/>
       }
     }
   }
   //使用
   const BlogPostWithSubscription = withSubscription(BlogPost,(DataSource,props)=>DataSource.getBlogPost(props.id));
   ```

2. **Render props**

   官方解释∶"render prop"是指一种在 React 组件之间使用一个值为函数的prop 共享代码的简单技术。具有 render prop 的组件接受一个返回 React 元素的函数，将 render的渲染逻辑注入到组件内部。在这里，"render"的命名可以是任何其他有效的标识符。 

   由此可以看到，render props 的优缺点也很明显∶

   优点：数据共享、代码复用，将组件内的 state 作为 props 传递给调用者，将渲染逻辑交给调用者。

   缺点：无法在 return 语句外访问数据、嵌套写法不够优雅

   ```jsx
   //DataProvider组件内部的渲染逻辑如下
   class DataProvider extends React.Components{
     state = {
       name:'Tom'
     }
     render(){
       return (
        <div>
   		<p>共享数据组件自己内部的渲染逻辑</p>{this.props.render(this.state)}                        
   	</div>)
     }
   }
   //调用方式
   <DataProvider render={data=>(<h1>Hello {data.name}</h1>)}/>
   ```

3. **hooks** 

   官方解释∶Hook 是 React 16.8 的新增特性。它可以让你在不编写 class 的情况下使用 state 以及其他的 React 特性。通过自定义 hook，可以复用代码逻辑

   以上可以看出，hook 解决了 hoc 的 prop 覆盖的问题，同时使用的方式解决了 render props 的嵌套地狱的问题。hook 的优点如下∶

   - 使用直观；
   - 解决 hoc 的 prop 重名问题；
   - 解决 render props 因共享数据 而出现嵌套地狱的问题；
   - 能在 return 之外使用数据的问题。

   需要注意的是：hook 只能在组件顶层使用，不可在分支语句中使用。

   ```jsx
   // 自定义一个获取订阅数据的hook
   function useSubscription() {
    const data = DataSource.getComments();
    return [data];
   }
   // 
   function CommentList(props) {
    const {data} = props;
    const [subData] = useSubscription();
     ...
   }
   // 使用
   <CommentList data='hello' />
   ```



## React性能优化

1. **避免不必要的render**

   避免不必要的render，主要手段是通过shouldComponentUpdate、PureComponent、React.memo

   -  shouldComponentUpdate：通过shouldComponentUpdate生命周期函数来比对 state和 props，确定是否要重新渲。默认情况下返回true表示重新渲染，如果不希望组件重新渲染，返回 false 即可
   - PureComponent:跟shouldComponentUpdate原理基本一致，通过对 props 和 state的浅比较结果来实现
   - React.memo：用来缓存组件的渲染，避免不必要的更新，其实也是一个高阶组件，与 PureComponent 十分类似。但不同的是， React.memo 只能用于函数组件

   注意：在react中，是不建议使用深层次结构的数据,当对象包含复杂的数据结构时，对象深层的数据已改变却没有触发 render

   ```jsx
   import { memo } from 'react';
   function Button(props) {
    // Component code
   }
   export default memo(Button);
   //如果需要深层次比较，这时候可以给memo第二个参数传递比较函数
   function arePropsEqual(prevProps, nextProps) {
    // your code
    return prevProps === nextProps;
   }
   export default memo(Button, arePropsEqual);
   ```

2. **使用React Fragments 避免额外标记**

   用户创建新组件时，每个组件应具有单个父标签。父级不能有两个标签，所以顶部要有一个公共标签，所以我们经常在组件顶部添加额外标签div。这个额外标签除了充当父标签之外，并没有其他作用，这时候则可以使用fragement。其不会向组件引入任何额外标记，但它可以作为父级标签的作用

   ```jsx
   export default class NestedRoutingComponent extends React.Component {
     render() {
       return (
         <>
           <h1>This is the Header Component</h1>
           <h2>Welcome To Demo Page</h2>
         </>
       )
     }
   }
   ```

3. **使用 Immutable**

   使用 Immutable可以给 React 应用带来性能的优化，主要体现在减少渲染的次数。在做react性能优化的时候，为了避免重复渲染，我们会在shouldComponentUpdate()中做对比，当返回true执行render方法。Immutable通过is方法则可以完成对比，而无需像一样通过深度比较的方式比较 

   ```jsx
   import { is } from 'immutable';
   shouldComponentUpdate: (nextProps, nextState) => {
     return !(this.props === nextProps || is(this.props, nextProps)) ||
            !(this.state === nextState || is(this.state, nextState));
   }
   ```

4. **懒加载组件**

   从工程方面考虑，webpack存在代码拆分能力，可以为应用创建多个包，并在运行时动态加载，减少初始包的大小。而在react中使用到了Suspense和 lazy组件实现代码拆分功能 

   ```jsx
   const johanComponent = React.lazy(() => import(/* webpackChunkName: "johanComponent" */ './myAwesome.component'));
    
   export const johanAsyncComponent = props => (
     <React.Suspense fallback={<Spinner />}>
       <johanComponent {...props} />
     </React.Suspense>
   );
   ```

5. **事件绑定方式**

   从性能方面考虑，在render方法中使用bind和render方法中使用箭头函数这两种形式在每次组件render的时候都会生成新的方法实例，性能欠缺。而constructor中bind事件与定义阶段使用箭头函数绑定这两种形式只会生成一个方法实例，性能方面会有所改善

   如果我们使用内联函数，则每次调用render函数时都会创建一个新的函数实例，如下：

   ```jsx
   import React from "react";
   export default class InlineFunctionComponent extends React.Component {
    render() {
     return (
      <div>
       	<h1>Welcome Guest</h1>
       	<input type="button" onClick={(e) => { this.setState({inputValue: e.target.value}) }} value="Click" />
      </div>
     )
    }
   }
   
   //我们应该在组件内部创建一个函数，并将事件绑定到该函数本身。这样每次调用 render 时就不会创建单独的函数实例，如下：
   import React from "react";
   export default class InlineFunctionComponent extends React.Component {
    setNewStateData = (event) => {
     this.setState({
      inputValue: e.target.value
     })
    }
    render() {
     return (
      <div>
       	<h1>Welcome Guest</h1>
       	<input type="button" onClick={this.setNewStateData} value="Click For Inline Function" />
      </div>
     )
    }
   }
   ```

6. **服务端渲染**

   采用服务端渲染端方式，可以使用户更快的看到渲染完成的页面。服务端渲染，需要起一个node服务，可以使用express、koa等，调用react的renderToString方法，将根组件渲染成字符串，再输出到响应中 

   ```jsx
   import { renderToString } from "react-dom/server";
   import MyPage from "./MyPage";
   app.get("/", (req, res) => {
    res.write("<!DOCTYPE html><html><head><title>My Page</title></head><body>");
    res.write("<div id='content'>");  
    res.write(renderToString(<MyPage/>));
    res.write("</div></body></html>");
    res.end();
   });
   //客户端使用render方法来生成HTML
   import ReactDOM from 'react-dom';
   import MyPage from "./MyPage";
   ReactDOM.render(<MyPage />, document.getElementById('app'));
   ```

7. **其他**

   除此之外，还存在的优化手段有组件拆分、合理使用hooks等性能优化手段。

   react常见的性能优化可以分成三个层面：代码层面、工程层面、框架机制层面



## 页面重新加载时怎样保留数据

1. **Redux**

   将页面的数据存储在 redux 中，在重新加载页面时，获取 Redux 中的数据；

2. **data.js**

   使用 webpack 构建的项目，可以建一个文件，data.js，将数据保存 data.js 中，跳转页面后获取；

3. **sessionStorge**

   在进入选择地址页面之前，componentWillUnMount的时候，将数据存储到 sessionStorage 中，每次进入页面判断sessionStorage 中有没有存储的那个值，有，则读取渲染数据；没有，则说明数据是初始化的状态。返回或进入除了选择地址以外的页面，清掉存储的 sessionStorage，保证下次进入是初始化的数据

4. **history API**

   History API 的 pushState 函数可以给历史记录关联一个任意的可序列化 state，所以可以在路由 push 的时候将当前页面的一些信息存到 state 中，下次返回到这个页面的时候就能从state 里面取出离开前的数据重新渲染。react-router 直接可以支持。这个方法适合一些需要临时存储的场景



## 对 Redux 的理解

1. **概念**

   React 是视图层框架。Redux 是一个用来管理数据状态和 UI 状态的JavaScript 应用工具。随着 JavaScript 单页应用（SPA）开发日趋复杂， JavaScript 需要管理比任何时候都要多的 state（状态），Redux 就是降低管理难度的。（Redux 支持 React、Angular、jQuery甚至纯 JavaScript）。

   在 React 中，UI 以组件的形式来搭建，组件之间可以嵌套组合。但React 中组件间通信的数据流是单向的，顶层组件可以通过 props属性向下层组件传递数据，而下层组件不能向上层组件传递数据，兄弟组件之间同样不能。这样简单的单向数据流支撑起了 React 中的数据可控性。当项目越来越大的时候，管理数据的事件或回调函数将越来越多，也将越来越不好管理。管理不断变化的 state 非常困难。如果一个model 的变化会引起另一个 model 变化，那么当 view 变化时，就可能引起对应 model 以及另一个 model 的变化，依次地，可能会引起另一个 view 的变化。直至你搞不清楚到底发生了什么。state 在什么时候，由于什么原因，如何变化已然不受控制。 当系统变得错综复杂的时候，想重现问题或者添加新功能就会变得举步维艰。如果这还不够糟糕，考虑一些来自前端开发领域的新需求，如更新调优、服务端渲染、路由跳转前请求数据等。state 的管理在大项目中相当复杂。

2. **原理**

   Redux 提供了一个叫 store 的统一仓储库，组件通过 dispatch 将state 直接传入 store，不用通过其他的组件。并且组件通过subscribe 从 store 获取到 state 的改变。使用了 Redux，所有的组件都可以从 store 中获取到所需的 state，他们也能从 store 获取到 state 的改变。这比组件之间互相传递数据清晰明朗的多。

   主要解决的问题：单纯的 Redux 只是一个状态机，是没有 UI 呈现的，react- redux 作用是将 Redux的状态机和 React的UI呈现绑定在一起，当你dispatch action 改变 state 的时候，会自动更新页面。

   和变量挂载在window中相比，两者都是存储数据以供后期使用。但是 Redux 状态更改可回溯——Time travel，数据多了的时候可以很清晰的知道改动在哪里发生，完整的提供了一套状态管理模式

3. **使用**

   - createStore可以帮助创建 store
   - store.dispatch 帮助派发 action , action 会传递给 store
   - store.getState 这个方法可以帮助获取 store 里边所有的数据内容
   - store.subscrible 方法订阅 store 的改变，只要 store 发生改变，这个函数接收的这个回调函数就会被执行

   ```jsx
   const redux = require('redux');
   const initialState = {
    counter: 0
   }
   // 创建reducer
   const reducer = (state = initialState, action) => {
    switch (action.type) {
     case "INCREMENT":
      return {...state, counter: state.counter + 1};
     case "DECREMENT":
      return {...state, counter: state.counter - 1};
     case "ADD_NUMBER":
      return {...state, counter: state.counter + action.number}
     default: 
      return state;
    }
   }
   // 根据reducer创建store
   const store = redux.createStore(reducer);
   store.subscribe(() => {
    console.log(store.getState());
   })
   // 修改store中的state
   store.dispatch({
    type: "INCREMENT"
   })
   // console.log(store.getState());
   store.dispatch({
    type: "DECREMENT"
   })
   // console.log(store.getState());
   store.dispatch({
    type: "ADD_NUMBER",
    number: 5
   })
   // console.log(store.getState())
   ```



## 在项目中使用如何使用Redux

1. **项目结构**

   - 按角色组织（MVC）： reducers、actions、components、containers

     ```js
     reducers/
       todoReducer.js
       filterReducer.js
     actions/
       todoAction.js
       filterActions.js
     components/
       todoList.js
       todoItem.js
       filter.js
     containers/
       todoListContainer.js
       todoItemContainer.js
       filterContainer.js
     ```

   - 按功能组织：也就是把完成同一应用功能的代码放在一个目录下，一个应用功能包含多个角色的代码。Redux中，不同的角色就是reducer、actions和视图，而应用功能对应的就是用户界面的交互模块

     ```jsx
     todoList/
       actions.js
       actionTypes.js
       index.js
       reducer.js
       views/
         components.js
         containers.js
     filter/
       actions.js
       actionTypes.js
       index.js
       reducer.js
       views/
         components.js
         container.js
     ```

     ```jsx
     /* 每个功能模块对应一个目录，每个目录下包含同样的角色文件：
     actionTypes.js 定义action类型
     actions.js 定义action构造函数
     reducer.js 定义这个功能模块如果响应actions.js定义的动作
     views 包含功能模块中所有的React组件，包括展示组件和容器组件
     index.js 把所有的角色导入，统一导出
     */
     // 其中index模块用于导出对外的接口：
     import * as actions from './actions.js';
     import reducer from './reducer.js';
     import view from './views/container.js';
     
     export { actions, reducer, view };
     // 导入方法如下：
     import { actions, reducer, view as TodoList } from './xxxx'
     ```

2. **方案**

   - **Provider**

     在redux中存在一个store用于存储state，如果将这个store存放在顶层元素中，其他组件都被包裹在顶层元素之上

     那么所有的组件都能够受到redux的控制，都能够获取到redux中的数据

     ```jsx
     <Provider store = {store}>
         <App />
     <Provider>
     ```

   - **connection**

     ```jsx
     // 1、connect方法将store上的getState和 dispatch包装成组件的props
     import { connect } from "react-redux";
     connect(mapStateToProps, mapDispatchToProps)(MyComponent)
     // mapStateToProps：把redux中的数据映射到react中的props中去
     const mapStateToProps = (state) => {
         return {
             // prop : state.xxx  | 意思是将state中的某个数据映射到props中
             foo: state.bar
         }
     }
     //组件内部就能够通过props获取到store中的数据，
     class Foo extends Component {
         constructor(props){
             super(props);
         }
         render(){
             return(
              // 这样子渲染的其实就是state.bar的数据了
                 <div>this.props.foo</div>
             )
         }
     }
     Foo = connect()(Foo)
     export default Foo
     // 3、mapDispatchToProps：将redux中的dispatch映射到组件内部的props中
     const mapDispatchToProps = (dispatch) => { // 默认传递参数就是dispatch
       return {
         onClick: () => {
           dispatch({
             type: 'increatment'
           });
         }
       };
     }
     class Foo extends Component {
         constructor(props){
             super(props);
         }
         render(){
             return(
              
                  <button onClick = {this.props.onClick}>点击increase</button>
             )
         }
     }
     Foo = connect()(Foo);
     export default Foo;
     ```



## Redux 中间件

1. **概念**

   Redux整个工作流程，当action发出之后，reducer立即算出state，整个过程是一个同步的操作。那么如果需要支持异步操作，或者支持错误处理、日志监控，这个过程就可以用上中间件Redux中，中间件就是放在就是在dispatch过程，在分发action进行拦截处理
   原本 view -→> action -> reducer ->store 的数据流加上中间件后变成了 view -> action -> middleware-> reducer -> store ，

2. **原理**

   redux 中间件本质就是一个函数柯里化。redux applyMiddleware Api源码中每个 middleware 接受 2 个参数，Store 的 getState 函数和dispatch 函数，分别获得 store 和 action，最终返回一个函数。该函数会被传入 next 的下一个 middleware 的 dispatch 方法，并返回一个接收 action 的新函数，这个函数可以直接调用 next（action），或者在其他需要的时刻调用，甚至根本不去调用它。调用链中最后一个 middleware 会接受真实的 store 的 dispatch 方法作为 next 参数，并借此结束调用链。所以，middleware 的函数签名是（{ getState，dispatch })=> next => action

   ```jsx
   export default function applyMiddleware(...middlewares){
     return createStore=>(...args)=>{
       //利用传入的createStore和reducer和创建一个store
       const store=createStore(...args)
       let dispatch=()=>{
         throw new Error()
       }
       const middlewareAPI = {
         getState:store.getState,
         dispatch:(...args)=>dispatch(...args)
       }
       //让每个middleware带着middlewareAPI这个参数分别执行一遍
       const chain = middlewares.map(middleware=>middleware(middlewareAPI))
       //接着compose将chain中的所有匿名函数，组装成一个新的函数，即新的dispatch
       dispatch = compose(...chain)(store.dispatch)
       return {
         ...store,
         dispatch
       }
     }
   }
   ```

3. **使用**

   中间件都需要通过applyMiddlewares进行注册，作用是将所有的中间件组成一个数组，依次执行，然后作为第二个参数传入到createStore中

   ```jsx
   const store = createStore(
     reducer,
     applyMiddleware(thunk, logger)
   );
   ```

4. **redux-thunk：用于异步操作**

   redux-thunk是官网推荐的异步处理中间件。默认情况下的dispatch(action)，action需要是一个JavaScript的对象。redux-thunk中间件会判断你当前传进来的数据类型，如果是一个函数，将会给函数传入参数值（dispatch，getState）

   - dispatch函数用于我们之后再次派发action
   - getState函数考虑到我们之后的一些操作需要依赖原来的状态，用于让我们可以获取之前的一些状态

   所以dispatch可以写成下述函数的形式：

   ```jsx
   const getHomeMultidataAction = () => {
     return (dispatch) => {
       axios.get("http://xxx.xx.xx.xx/test").then(res => {
         const data = res.data.data;
         dispatch(changeBannersAction(data.banner.list));
         dispatch(changeRecommendsAction(data.recommend.list));
       })
     }
   }
   ```

5. **redux-logger：用于日志记录**

   如果想要实现一个日志功能，则可以使用现成的redux-logger

   ```jsx
   import { applyMiddleware, createStore } from 'redux';
   import createLogger from 'redux-logger';
   const logger = createLogger();
   
   const store = createStore(
     reducer,
     applyMiddleware(logger)
   );
   ```



## Redux 和 Vuex 的异同

1. 共同思想
   - 单—的数据源
   - 变化可以预测
   - 本质上∶ redux 与 vuex 都是对 mvvm 思想的服务，将数据从视图中抽离的一种方案。
2. 区别
   - Vuex 改进了 Redux 中的 Action 和 Reducer 函数，以 mutations 变化函数取代 Reducer，无需 switch，只需在对应的 mutation 函数里改变 state 值即可
   - Vuex 由于 Vue 自动重新渲染的特性，无需订阅重新渲染函数，只要生成新的 State 即可
   - Vuex 数据流的顺序是∶View 调用 store.commit 提交对应的请求到Store 中对应的 mutation 函数->store 改变（vue 检测到数据变化自 动渲染）通俗点理解就是，vuex 弱化 dispatch，通过 commit 进行 store 状态的一次更变；取消了 action 概念，不必传入特定的 action进行指定变更；弱化 reducer，基于 commit 参数直接对数据进行转变，使得框架更加简易;



## 对React-Router 的理解

1. **原理**

   客户端路由实现的思想：

   - 基于 hash 的路由：通过监听 hashchange 事件，感知 hash 的变化改变 hash 可以直接通过 location.hash=xxx
   - 基于 H5 history 路由：改变 url 可以通过 history.pushState 和 resplaceState 等，会将 URL 压入堆栈，同时能够应用 history.go() 等 API监听 url 的变化可以通过自定义事件触发实现

   react-router 实现的思想：基于 history 库来实现上述不同的客户端路由实现思想，并且能够保存历史记录等，磨平浏览器差异，上层无感知通过维护的列表，在每次 URL 发生变化的回收，通过配置的 路由路径，匹配到对应的 Component，并且 render

2. 常用组件

   - **BrowserRouter、HashRouter**

     Router中包含了对路径改变的监听，并且会将相应的路径传递给子组件。BrowserRouter是history模式，HashRouter模式。使用两者作为最顶层组件包裹其他组件

     ```jsx
     import { BrowserRouter as Router } from "react-router-dom";
     export default function App() {
       return (
         <Router>
           <main>
             <nav>
               <ul>
                 <li><a href=" ">Home</a></li>
                 <li><a href="/about">About</a></li>
                 <li><a href="/contact">Contact</a></li>
               </ul>
             </nav>
           </main>
         </Router>
       );
     ```

   - **Route**

     Route用于路径的匹配，然后进行组件的渲染，对应的属性如下：

     - path 属性：用于设置匹配到的路径
     - component 属性：设置匹配到路径后，渲染的组件
     - render 属性：设置匹配到路径后，渲染的内容
     - exact 属性：开启精准匹配，只有精准匹配到完全一致的路径，才会渲染对应的组件

     ```jsx
     import { BrowserRouter as Router, Route } from "react-router-dom";
     
     export default function App() {
       return (
         <Router>
           <main>
             <nav>
               <ul>
                 <li>< a href="/">Home</a></li>
                 <li>< a href="/about">About</a></li>
                 <li>< a href="/contact">Contact</a></li>
               </ul>
             </nav>
             <Route path="/" render={() => <h1>Welcome!</h1>} />
           </main>
         </Router>
       );
     }
     ```

   - **Link、NavLink**

     通常路径的跳转是使用Link组件，最终会被渲染成a元素，其中属性to代替a标题的href属性。NavLink是在Link基础之上增加了一些样式属性，例如组件被选中时，发生样式变化，则可以设置NavLink的一下属性：

     - activeStyle：活跃时（匹配时）的样式
     - activeClassName：活跃时添加的class

     如下：

     ```jsx
     <NavLink to="/" exact activeStyle={{color: "red"}}>首页</NavLink>
     <NavLink to="/about" activeStyle={{color: "red"}}>关于</NavLink>
     <NavLink to="/profile" activeStyle={{color: "red"}}>我的</NavLink>
     ```

     通过Route作为顶层组件包裹其他组件后,页面组件就可以接收到一些路由相关的东西，比如props.history

     ```jsx
     const Contact = ({ history }) => (
       <Fragment>
         <h1>Contact</h1>
         <button onClick={() => history.push("/")}>Go to home</button>
         <FakeText />
       </Fragment>
     );
     ```

     props中接收到的history对象具有一些方便的方法，如goBack，goForward,push

   - **switch**

     swich组件的作用适用于当匹配到第一个组件的时候，后面的组件就不应该继续匹配

     ```jsx
     <Switch>
       <Route exact path="/" component={Home} />
       <Route path="/about" component={About} />
       <Route path="/profile" component={Profile} />
       <Route path="/:userid" component={User} />
       <Route component={NoMatch} />
     </Switch>
     ```

   - **redirect**

     用于路由的重定向，当这个组件出现时，就会执行跳转到对应的to路径中，如下例子：

     ```jsx
     const About = ({
       match: {
         params: { name },
       },
     }) => (
       // props.match.params.name
       <Fragment>
         {name !== "tom" ? <Redirect to="/" /> : null}
         <h1>About {name}</h1>
         <FakeText />
       </Fragment>
     )
     ```

3. hooks

   - **useHistory**

     可以让组件内部直接访问history，无须通过props获取

     ```jsx
     import { useHistory } from "react-router-dom";
     
     const Contact = () => {
       const history = useHistory();
       return (
         <Fragment>
           <h1>Contact</h1>
           <button onClick={() => history.push("/")}>Go to home</button>
         </Fragment>
       );
     };
     ```

   - **useParams**

     ```jsx
     const About = () => {
       const { name } = useParams();
       return (
         // props.match.params.name
         <Fragment>
           {name !== "John Doe" ? <Redirect to="/" /> : null}
           <h1>About {name}</h1>
           <Route component={Contact} />
         </Fragment>
       );
     };
     
     ```

   - **useLocation**

     会返回当前 URL的 location对象

     ```jsx
     import { useLocation } from "react-router-dom";
     
     const Contact = () => {
       const { pathname } = useLocation();
     
       return (
         <Fragment>
           <h1>Contact</h1>
           <p>Current URL: {pathname}</p >
         </Fragment>
       );
     };
     ```

4. 参数传递

   - **动态路由的方式**

     动态路由的概念指的是路由中的路径并不会固定。例如将path在Route匹配时写成/detail/:id，那么 /detail/abc、/detail/123都可以匹配到该Route

     ```jsx
     <NavLink to="/detail/abc123">详情</NavLink>
     
     <Switch>
         ... 其他Route
         <Route path="/detail/:id" component={Detail}/>
         <Route component={NoMatch} />
     </Switch>
     ```

     获取参数方式如下：

     ```js
     console.log(props.match.params.xxx)
     ```

   - **search传递参数**

     在跳转的路径中添加了一些query参数；

     ```jsx
     <NavLink to="/detail2?name=why&age=18">详情2</NavLink>
     
     <Switch>
       <Route path="/detail2" component={Detail2}/>
     </Switch>
     ```

     获取形式如下：

     ```jsx
     console.log(props.location.search)
     ```

   - **to传入对象**

     传递方式如下：

     ```jsx
     <NavLink to={{
         pathname: "/detail2", 
         query: {name: "kobe", age: 30},
         state: {height: 1.98, address: "洛杉矶"},
         search: "?apikey=123"
       }}>
       详情2
     </NavLink>
     ```

     获取参数的形式如下：

     ```jsx
     console.log(props.location)
     ```

5. **和标签的区别**

   从最终渲染的 DOM 来看，这两者都是链接，都是标签，区别是：`<Link>`是 react-router 里实现路由跳转的链接，一般配合`<Route>`使用，react-router 接管了其默认的链接跳转行为，区别于传统的页面跳转，`<Link> `的“跳转”行为只会触发相匹配的`<Route>`对应的页面内容更新，而不会刷新整个页面。`<Link>`做了 3 件事情：

   - 有 onclick 那就执行 onclick
   - click 的时候阻止 a 标签默认事件
   - 根据跳转 href(即是 to)，用 history (web 前端路由两种方式之一，history & hash)跳转，此时只是链接变了，并没有刷新页面而`<a>`标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面(非锚点情况)。

   标签就是普通的超链接了，用于从当前页面跳转到 href 指向的另一个页面(非锚点情况)。

   ```jsx
   let domArr = document.getElementsByTagName('a')
   [...domArr].forEach(item=>{
     item.addEventListener('click',function(){
       location.href = this.href
     })
   })
   ```



## React服务端渲染

1. **概念**

   SSR，意为服务端渲染，指由服务侧完成页面的 HTML 结构拼接的页面处理技术，发送到浏览器，然后为其绑定状态与事件，成为完全可交互页面的过程。其解决的问题主要有两个：

   - SEO，由于搜索引擎爬虫抓取工具可以直接查看完全渲染的页面
   - 加速首屏加载，解决首屏白屏问题

2. **原理**

   node server 接收客户端请求，得到当前的请求url 路径，然后在已有的路由表内查找到对应的组件，拿到需要请求的数据，将数据作为 props、context或者store 形式传入组件。
   然后基于 react 内置的服务端渲染方法 renderToString()把组件渲染为 html字符串在把最终的 html进行输出前需要将数据注入到浏览器端。

   浏览器开始进行渲染和节点对比，然后执行完成组件内事件绑定和一些交互，浏览器重用了服务端输出的 html 节点，整个流程结束

3. **实现**

   - 手动搭建一个 SSR 框架
   - 使用成熟的SSR 框架，如 Next.JS
