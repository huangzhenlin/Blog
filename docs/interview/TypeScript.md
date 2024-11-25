## 为什么推荐使用TypeScript

1. **概念**

   TypeScript是微软公司开发和维护的一种面向对象的编程语言。它是JavaScript的超集，包含其所有元素。其中，强类型和弱类型、静态类型和动态类型是两组不同的概念。类型强弱是针对类型转换是否显示来区分，静态和动态类型是针对类型检查的时机来区分。TS对JS的改进主要是静态类型检查，静态类型更有利于构建大型应用。

2. **特性**
   
   - 类型批注和编译时类型检查：通过类型批注提供在编译时启动类型检查的静态类型，这是可选的，而且可以忽略而使用 JavaScript 常规的动态类型
   
     ```ts
     function Add(left: number, right: number): number {
       return left + right;
     }
     ```
   
   - 类型推断：当类型没有给出时，TypeScript 编译器利用类型推断来推断类型
   
     ```ts
     let str = "string"; // 推断为string类型
     ```
   
   - 接口：简单来说就是用来描述对象的类型 数据的类型有 number、null、string 等数据格式，对象的类型就是用接口来描述的
   
     ```ts
     interface Person {
       name: string;
       age: number;
     }
     
     let tom: Person = {
       name: "Tom",
       age: 25,
     };
     ```
   
   - 类型擦除
   
   - 枚举、元组、Mixin
   
   - 泛型编程
   
   - 名字空间
   
3. **推荐原因**

   - TypeScript简化了JavaScript代码，使其更易于阅读和调试。
   - TypeScript是开源的。
   - TypeScript为JavaScript ide和实践（如静态检查）提供了高效的开发工具。
   - TypeScript使代码更易于阅读和理解。
   - 使用TypeScript，我们可以大大改进普通的JavaScript。
   - TypeScript为我们提供了ES6（ECMAScript 6）的所有优点，以及更高的生产率。
   - TypeScript通过对代码进行类型检查，可以帮助我们避免在编写JavaScript时经常遇到的令人痛苦的错误。
   - 强大的类型系统，包括泛型。
   - TypeScript只不过是带有一些附加功能的JavaScript。
   - TypeScript代码可以按照ES5和ES6标准编译，以支持最新的浏览器。
   - 与ECMAScript对齐以实现兼容性。
   - 以JavaScript开始和结束。
   - 支持静态类型。
   - TypeScript将节省开发人员的时间。
   - TypeScript是ES3、ES5和ES6的超集

4. **和JavaScript的区别**

   - TypeScript 是 JavaScript 的超集，扩展了 JavaScript 的语法
   - TypeScript 可处理已有的 JavaScript 代码，并只对其中的 TypeScript 代码进行编译
   - TypeScript 文件的后缀名 .ts （.ts，.tsx，.dts），JavaScript 文件是 .js
   - 在编写 TypeScript 的文件的时候就会自动编译成 js 文件



## TypeScript的数据类型有哪些

1. **基本类型**

   - number

     ```ts
     // number数字类型和javascript一样，typescript的数值类型都是浮点数，可支持二进制、八进制、十进制和十六进制
     let num:number = 123;
     // num = '456'; // 错误
     num = 456;  //正确
     //进制表示：
     let decLiteral: number = 6; // 十进制
     let hexLiteral: number = 0xf00d; // 十六进制
     let binaryLiteral: number = 0b1010; // 二进制
     let octalLiteral: number = 0o744; // 八进制
     ```

   - boolean

     ```ts
     let flag:boolean = true;
     // flag = 123; // 错误
     flag = false;  // 正确
     ```

   - string

     ```ts
     // string:字符串类型，和JavaScript一样，可以使用双引号（"）或单引号（'）表示字符串
     let str:string = 'this is ts';
     str = 'test';
     //作为超集，当然也可以使用模版字符串``进行包裹，通过 ${} 嵌入变量
     let name1: string = `Gene`;
     let age: number = 37;
     let sentence: string = `Hello, my name is ${ name1 }
     ```

   - null、undefined：在JavaScript 中 null表示 "什么都没有"，是一个只有一个值的特殊类型，表示一个空对象引用，而undefined表示一个没有设置值的变量

     ```ts
     // 默认情况下null和undefined是所有类型的子类型， 就是说你可以把 null和 undefined赋值给其他类型的变量
     let num:number | undefined; // 数值类型 或者 undefined
     console.log(num); // 正确
     num = 123;
     console.log(num); // 正确
     // 但是ts配置了--strictNullChecks标记，null和undefined只能赋值给void和它们各自
     ```

   - symbol

   - bigint

   - any：可以指定任何类型的值，在编程阶段还不清楚类型的变量指定一个类型，不希望类型检查器对这些值进行检查而是直接让它们通过编译阶段的检查，这时候可以使用any类型。使用any类型允许被赋值为任意类型，甚至可以调用其属性、方法。

     ```ts
     let num2:any = 123;
     num2 = 'str';
     num2 = true;
     // 定义存储各种类型数据的数组时，示例代码如下：
     let arrayList: any[] = [1, false, 'fine'];
     arrayList[1] = 100;
     ```

   - void：用于标识方法返回值的类型，表示该方法没有返回值

     ```ts
     function hello(): void {
         alert("Hello Runoob");
     }
     ```

   - nerver：是其他类型 （包括null和 undefined）的子类型，可以赋值给任何类型，代表从不会出现的值。但是没有类型是 never 的子类型，这意味着声明 never 的变量只能被 never 类型所赋值。never 类型一般用来指定那些总是会抛出异常、无限循环。

     ```ts
     let a:never;
     a = 123; // 错误的写法
      
     a = (() => { // 正确的写法
       throw new Error('错误');
     })()
     ```

2. **引用类型**

   - object：对象类型，非原始类型，常见的形式通过{}进行包裹

     ```ts
     let obj:object;
     obj = {name: 'Wang', age: 25};
     ```

   - array：数组类型，跟javascript一致，通过[]进行包裹

     ```ts
     // 方式一：元素类型后面接上 []
     let arr:string[] = ['12', '23']; 
     // 方式二：使用数组泛型，Array<元素类型>：
     let arr1:Array<number> = [1, 2];
     ```

   - emum：是对JavaScript标准数据类型的一个补充，使用枚举类型可以为一组数值赋予友好的名字

     ```ts
     enum Color {Red, Green, Blue}
     let c: Color = Color.Green;
     console.log(c);//1
     ```

   - tuple：元祖类型，允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。赋值的类型、位置、个数需要和定义（生明）的类型、位置、个数一致

     ```ts
     let tupleArr:[number, string, boolean];
     tupleArr = [12, '34', true]; //ok
     typleArr = [12, '34'] // no ok
     ```



## TypeScript中声明变量的方式

1. 声明类型和值

   ```ts
   // let [identifier] : [type-annotation] = value; 
   let num: number = 100;
   ```

2. 只声明类型

   ```ts
   // let [identifier] : [type-annotation]; 
   let str:string;
   ```

3. 只声明值

   ```ts
   // let [identifier] = value
   let bool = true;
   ```

4. 声明变量无类型和值

   ```ts
   // let [identifier];
   let obj;
   ```



## TypeScript中never和void的区别

1. void 表示没有任何类型（可以被赋值为 null 和 undefined）
2. never 表示一个不包含值的类型，即表示永远不存在的值
3. 拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常



## TS中any和unknown的区别

1. unknown 和 any 的主要区别是 unknown 类型会更加严格：在对 unknown 类型的值执行大多数操作之前，我们必须进行某种形式的检查。而在对 any 类型的值执行操作之前，我们不必进行任何检查。

   ```ts
   let foo: any = 123;
   console.log(foo.msg); // 符合TS的语法
   let a_value1: unknown = foo;   // OK
   let a_value2: any = foo;      // OK
   let a_value3: string = foo;   // OK
   
   let bar: unknown = 222; // OK 
   console.log(bar.msg); // Error
   let k_value1: unknown = bar;   // OK
   let K_value2: any = bar;      // OK
   let K_value3: string = bar;   // Error
   ```

2. 总结： any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查，反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量



## 如何检查TS中的null和undefiend

1. 通过使用一个缓冲检查，我们可以检查空和未定义

   ```ts
   if (x == null) { }
   ```

2. 如果我们使用严格的检查，它将总是对设置为null的值为真，而对未定义的变量不为真

   ```ts
   var a: number;  
   var b: number = null;  
   function check(x, name) {  
       if (x == null) {  
           console.log(name + ' == null');  
       }  
       if (x === null) {  
           console.log(name + ' === null');  
       }  
       if (typeof x === 'undefined') {  
           console.log(name + ' is undefined');  
       }  
   }  
   check(a, 'a');  
   check(b, 'b');
   //"a == null"
   //"a is undefined"
   //"b == null"
   //"b === null"
   ```



## 解释一下TypeScript中的枚举

1. **概念**

   枚举是一个被命名的整型常数的集合，用于声明一组命名的常数,当一个变量有几种可能的取值时,可以将它定义为枚举类型。通俗来说，枚举就是一个对象的所有可能取值的集合。

   ```ts
   enum xxx { ... }
   // 声明d为枚举类型Direction
   let d: Direction;
   ```

2. **分类**

   - 数字枚举：当我们声明一个枚举类型是,虽然没有给它们赋值,但是它们的值其实是默认的数字类型,而且默认从0开始依次累加

     ```ts
     enum Direction {
         Up,   // 值默认为 0
         Down, // 值默认为 1
         Left, // 值默认为 2
         Right // 值默认为 3
     }
     
     console.log(Direction.Up === 0); // true
     console.log(Direction.Down === 1); // true
     console.log(Direction.Left === 2); // true
     console.log(Direction.Right === 3); // true
     // 如果我们将第一个值进行赋值后，后面的值也会根据前一个值进行累加1：
     enum Direction {
         Up = 10,
         Down,
         Left,
         Right
     }
     console.log(Direction.Up, Direction.Down, Direction.Left, Direction.Right); //10 11 12 13
     ```

   - 字符串枚举

     ```ts
     enum Direction {
         Up = 'Up',
         Down = 'Down',
         Left = 'Left',
         Right = 'Right'
     }
     console.log(Direction['Right'], Direction.Up); // Right Up
     ```

   - 异构枚举：即将数字枚举和字符串枚举结合起来混合起来使用

     ```ts
     enum BooleanLikeHeterogeneousEnum {
         No = 0,
         Yes = "YES",
     }
     ```

     

3. **应用**

   就拿回生活的例子，后端返回的字段使用 0 - 6 标记对应的日期，这时候就可以使用枚举可提高代码可读性，如下：

   ```ts
   enum Days {Sun, Mon, Tue, Wed, Thu, Fri, Sat};
   console.log(Days["Sun"] === 0); // true
   console.log(Days["Mon"] === 1); // true
   console.log(Days["Tue"] === 2); // true
   console.log(Days["Sat"] === 6); // true
   ```

   包括后端日常返回0、1 等等状态的时候，我们都可以通过枚举去定义，这样可以提高代码的可读性，便于后续的维护



## 实现一个判断传入参数是否是数组类型

unknown 用于变量类型不确定，但肯定可以确定的情形下，比如下面这个示例中，参数总归会有个值，根据这个值的类型进行不同的处理，这里使用 unknown 替代 any 则会更加类型安全

```ts
function isArray(x: unknown): boolean {
  if (Array.isArray(x)) {
    return true;
  }
  return false;
}
```



## TS中的interface和type的区别

1. 相同点

   - 都可以描述一个对象或者函数

     ```ts
     interface User {
       name: string
       age: number
     }
     
     interface SetUser {
       (name: string, age: number): void;
     }
     
     type User = {
       name: string
       age: number
     };
     
     type SetUser = (name: string, age: number) => void;
     ```

   - 都允许扩展：interface 和 type 都可以拓展，并且两者并不是相互独立的，也就是说 interface 可以 extends type, type 也可以 extends interface 。 虽然效果差不多，但是两者语法不同

     ```ts
     interface IHuman {
       name: string
       age: number
     }
     
     interface IKun extends IHuman { // 接口继承
       slogan: string
     }
     ```

2. 不同点

   - type可以但interface不行

     ```ts
     // type 可以声明基本类型别名，联合类型，元组等类型
     type Name = string
     type StringOrNumber = string | number;  
     type Text = string | { text: string };  
     type NameLookup = Dictionary<string, Person>;  
     type Callback<T> = (data: T) => void;  
     type Pair<T> = [T, T];  
     type Coordinates = Pair<number>;  
     type Tree<T> = T | { left: Tree<T>, right: Tree<T> };
     ```

     ```ts
     // type 语句中还可以使用 typeof 获取实例的类型进行赋值
     let div = document.createElement('div');
     type B = typeof div
     ```

   - interface可以但type不行

     ```ts
     // interface 能够声明合并
     interface User {
       name: string
       age: number
     }
     interface User {
       sex: string
     }
     /*
     User 接口为 {
       name: string
       age: number
       sex: string 
     }
     */
     ```

   - 总结：能用 interface 实现，就用 interface , 如果不能就用 type



## TypeScript中的类型断言是什么

类型断言可以用来手动指定一个值具体的类型，即允许变量从一种类型更改为另一种类型。当你比 TS 更了解某个值的类型，并且需要指定更具体的类型时，我们可以使用类型断言

```ts
// 类型断言 as
const imgEl = document.querySelector('.img') as HTMLImageElement
imgEl.src = 'xxx'
imgEl.alt = 'yyy'
```



## 对 TypeScript 中类的理解

1. **定义**

   类（Class）是面向对象程序设计（OOP，Object-Oriented Programming）实现信息封装的基础。传统的面向对象语言基本都是基于类的，JavaScript 基于原型的方式让开发者多了很多理解成本。在 ES6 之后，JavaScript 拥有了 class 关键字，虽然本质依然是构造函数，但是使用起来已经方便了许多。但是JavaScript 的class依然有一些特性还没有加入，比如修饰符和抽象类。TypeScript 的 class 支持面向对象的所有特性，比如 类、接口等

2. 使用

   - 基本使用

     ```ts
     // 定义类的关键字为 class，后面紧跟类名
     class Car {
         // 字段:是类里面声明的变量。字段表示对象的有关数据。
         engine:string;
         // 构造函数：类实例化时调用，可以为类的对象分配内存
         constructor(engine:string) {
             this.engine = engine
         }
         // 方法：为对象要执行的操作
         disp():void {
             console.log("发动机为 :   "+this.engine)
         }
     }
     ```

   - getter/setter：是特殊类型的方法，可帮助你根据程序的需要委派对私有变量的不同级别的访问

     ```ts
     const fullNameMaxLength = 10
     class Employee {
       private _fullName: string = "";
       // Getters 允许你引用一个值但不能编辑它
       get fullName(): string {
         return this._fullName;
       }
       // Setter 允许你更改变量的值，但不能查看其当前值
       set fullName(newName: string) {
         if (newName && newName.length > fullNameMaxLength) {
           throw new Error("fullName has a max length of " + fullNameMaxLength);
         }
         this._fullName = newName;
       }
     }
     let employee = new Employee();
     employee.fullName = "Bin Coder";
     if (employee.fullName) {
       console.log(employee.fullName);
     }
     ```

   - 继承：类的继承使用过extends的关键字

     ```ts
     class Animal {
         move(distanceInMeters: number = 0) {
             console.log(`Animal moved ${distanceInMeters}m.`);
         }
     }
     class Dog extends Animal {
         bark() {
             console.log('Woof! Woof!');
         }
     }
     const dog = new Dog();
     dog.bark(); // 'Woof! Woof!'
     dog.move(10); // Animal moved 10m
     ```

   - 修饰符

     | 修饰符       | 声明      | 作用                                                         |
     | ------------ | --------- | ------------------------------------------------------------ |
     | 公共修饰符   | public    | 可以自由的访问类程序里定义的成员。包括类的所有成员，其子类以及该类的实例 |
     | 私有修饰符   | private   | 只能够在该类的内部进行访问，实例对象并不能够访问             |
     | 受保护修饰符 | protected | 除了在该类的内部可以访问，还可以在子类中仍然可以访问         |
     | 只读修饰符   | readonly  | 只读属性必须在声明时或构造函数里被初始化                     |
     | 静态属性     | static    | 这些属性存在于类本身上面而不是类的实例上，通过static进行定义，访问这些属性需要通过 类型.静态属性 的这种形式访问 |

     ```ts
     class Person {
       public  age: number
       protected gender: string
       private _phone: number = 123456
       readonly hair: string = 'black'
       static height = '180cm'
     
       constructor(name:string, age:number, gender:string){
         this.name = name
         this.age = age
         this.gender = gender
       }
     }
     const npc = new Person('abc',100,'man')
     ```

   - 抽象类：做为其它派生类的基类使用，它们一般不会直接被实例化，不同于接口，抽象类可以包含成员的实现细节。abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。

     ```ts
     abstract class Animal {
         abstract makeSound(): void;
         move(): void {
             console.log('roaming the earch...');
         }
     }
     // 这种类并不能被实例化，通常需要我们创建子类去继承，如下：
     class Cat extends Animal {
         makeSound() {
             console.log('miao miao')
         }
     }
     const cat = new Cat()
     cat.makeSound() // miao miao
     cat.move() // roaming the earch...
     ```

   - 类类型接口：如果接口用于一个类的话，那么接口会表示“行为的抽象”。对类的约束，让类去实现接口，类可以实现多个接口。接口只能约束类的公有成员（实例属性/方法），无法约束私有成员、构造函数、静态属性/方法

     ```ts
     interface IHuman {
       name: string
       age: number
     }
     interface IKun extends IHuman { // 接口继承
       slogan: string
     }
     class JiNi implements IKun { // 类实现接口
       name: string;
       age: number;
       slogan: string;
     }
     ```

3. 应用

   - 借助类的特性完成日常业务代码

   - 将类（class）也可以作为接口

     ```ts
     export default class Carousel extends React.Component<Props, State> {}
     // props的类型
     export default class Props {
       public children: Array<React.ReactElement<any>> | React.ReactElement<any> | never[] = []
       public speed: number = 500
       public height: number = 160
       public animation: string = 'easeInOutQuad'
       public isAuto: boolean = true
       public autoPlayInterval: number = 4500
       public afterChange: () => {}
       public beforeChange: () => {}
       public selesctedColor: string
       public showDots: boolean = true
     }
     public static defaultProps = new Props()
     ```



## TypeScript中什么是装饰器

1. **概念**

   是一种特殊类型的声明，它能过被附加到类声明，方法，属性或者参数上，可以修改类的行为。通俗的来说就是一个方法，可以注入到类，方法，属性参数上来扩展类，属性，方法，参数的功能。本质就是一个普通的函数，@expression 的形式其实是Object.defineProperty的语法糖，expression求值后必须也是一个函数，它会在运行时被调用，被装饰的声明信息做为参数传入。

2. **分类**

   - 类装饰器

     ```ts
     function addAge(constructor: Function) {
       constructor.prototype.age = 18;
     }
     @addAge
     class Person{
       name: string;
       age!: number;
       constructor() {
         this.name = 'huihui';
       }
     }
     let person = new Person();
     console.log(person.age); // 18
     ```

   - 属性/方法装饰器

     ```ts
     function property(target: any, propertyKey: string) {
       console.log("target", target) // 属性的原型
       console.log("propertyKey", propertyKey) // 属性的名称
     }
     function method(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
       console.log(target); // target：对象的原型
       console.log("prop " + propertyKey); //propertyKey：方法的名称
       console.log("desc " + JSON.stringify(descriptor) + "\n\n"); //descriptor：方法的属性描述符
     };
     class Person{
      @property
      name: string;
      constructor() {
        this.name = 'huihui';
      }
      @method
      say(){
        return 'instance method';
      }
     }
     const xmz = new Person();
     xmz.say = function() { // 修改实例方法say
      return 'edit'
     }
     ```

   - 参数装饰器

     ```ts
     function logParameter(target: Object, propertyName: string, index: number) {
       console.log(target); // 当前对象的原型
       console.log(propertyName); // 参数的名称
       console.log(index); // 参数数组中的位置
     }
     class Employee {
       greet(@logParameter message: string): string {
           return `hello ${message}`;
       }
     }
     const emp = new Employee();
     emp.greet('hello');
     ```

   - 访问器装饰器

     ```ts
     function modification(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
       console.log(target); // 当前对象的原型
       console.log("prop " + propertyKey); // 方法的名称
       console.log("desc " + JSON.stringify(descriptor) + "\n\n"); // 方法的属性描述符
     };
     class Person{
      _name: string;
      constructor() {
        this._name = 'huihui';
      }
      @modification
      get name() {
        return this._name
      }
     }
     ```

3. **装饰器工厂**

   如果想要传递参数，使装饰器变成类似工厂函数，只需要在装饰器函数内部再函数一个函数即可

   ```ts
   function addAge(age: number) {
     return function(constructor: Function) {
       constructor.prototype.age = age
     }
   }
   @addAge(10)
   class Person{
     name: string;
     age!: number;
     constructor() {
       this.name = 'huihui';
     }
   }
   let person = new Person();
   ```

4. **执行顺序**

   当多个装饰器应用于一个声明上，将由上至下依次对装饰器表达式求值，求值的结果会被当作函数，由下至上依次调用

   ```ts
   function f() {
       console.log("f(): evaluated");
       return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
           console.log("f(): called");
       }
   }
   function g() {
       console.log("g(): evaluated");
       return function (target, propertyKey: string, descriptor: PropertyDescriptor) {
           console.log("g(): called");
       }
   }
   class C {
       @f()
       @g()
       method() {}
   }
   // f(): evaluated
   // g(): evaluated
   // g(): called
   // f(): called
   ```

5. **应用场景**

   可以看到，使用装饰器存在两个显著的优点：

   - 代码可读性变强了，装饰器命名相当于一个注释
   - 在不改变原有代码情况下，对原来功能进行扩展

   后面的使用场景中，借助装饰器的特性，除了提高可读性之后，针对已经存在的类，可以通过装饰器的特性，在不改变原有代码情况下，对原来功能进行扩展



## 对 TypeScript 中接口的理解

1. **概念**

   是一系列抽象方法的声明，是一些方法特征的集合，这些方法都应该是抽象的，需要由具体的类去实现，然后第三方就可以通过这组抽象方法调用，让具体的类执行具体的方法。简单来讲，一个接口所描述的是一个对象相关的属性和方法，但并不提供具体创建此对象实例的方法。typescript的核心功能之一就是对类型做检测，虽然这种检测方式是“鸭式辨型法”，而接口的作用就是为为这些类型命名和为你的代码或第三方代码定义一个约定

2. **基本使用**

   ```ts
   interface User {
       name: string，
       age: number，
   	readonly isMale: boolean，
   	say: (words: string) => string
   }
   const getUserName = (user: User) => user.name
   ```

3. **类型推断**

   ```ts
   interface User {
       name: string
       age: number
   }
   const getUserName = (user: User) => user.name
   getUserName({color: 'yellow'} as User)
   ```

4. **索引签名**

   ```ts
   // 给接口添加字符串索引签名
   interface User {
       name: string
       age: number
       [propName: string]: any;
   }
   ```

5. **实现继承**

   ```ts
   interface Father {
       color: String
   }
   interface Mother {
       height: Number
   }
   interface Son extends Father,Mother{
       name: string
       age: Number
   }
   ```

6. **应用场景**

   ```ts
   // 先定义一个接口
   interface IUser {
     name: string;
     age: number;
   }
   const getUserInfo = (user: IUser): string => {
     return `name: ${user.name}, age: ${user.age}`;
   };
   // 正确的调用
   getUserInfo({name: "koala", age: 18});
   ```



## 对 TypeScript 中泛型的理解

1. **概念**

   是提供创建可重用组件的方法的工具。 它能够创建可以使用多种数据类型而不是单一数据类型的组件。 而且，它在不影响性能或生产率的情况下提供了类型安全性。 在泛型中，类型参数写在左括号（<）和右括号（>）之间，这使它成为强类型集合。 它使用一种特殊的类型变量来表示类型

   ```ts
   function identity<T>(arg: T): T {
     return arg;
   }
   let output1 = identity<string>("CoderBin");
   let output2 = identity<number>( 117 );
   console.log(output1);
   console.log(output2);
   ```

2. **泛型函数**

   ```ts
   function returnItem<T>(para: T): T {
       return para
   }
   function swap<T, U>(tuple: [T, U]): [U, T] {
       return [tuple[1], tuple[0]];
   }
   swap([7, 'seven']); // ['seven', 7]
   ```

3. **泛型接口**

   ```ts
   interface ReturnItemFn<T> {
       (para: T): T
   }
   const returnItem: ReturnItemFn<number> = para => para
   ```

4. **泛型类**

   ```ts
   class Stack<T> {
       private arr: T[] = []
       public push(item: T) {
           this.arr.push(item)
       }
       public pop() {
           this.arr.pop()
       }
   }
   type Params = string | number
   class Stack<T extends Params> {
       private arr: T[] = []
       public push(item: T) {
           this.arr.push(item)
       }
       public pop() {
           this.arr.pop()
       }
   }
   ```

5. **索引类型、约束类型**

   索引类型 keyof T 把传入的对象的属性类型取出生成一个联合类型，这里的泛型 U 被约束在这个联合类型中

   ```ts
   function getValue<T extends object, U extends keyof T>(obj: T, key: U) {
     return obj[key] // ok
   }
   ```

6. **多类型约束**

   ```ts
   interface FirstInterface {
     doSomething(): number
   }
   interface SecondInterface {
     doSomethingElse(): string
   }
   interface ChildInterface extends FirstInterface, SecondInterface {}
   class Demo<T extends ChildInterface> {
     private genericProperty: T
     constructor(genericProperty: T) {
       this.genericProperty = genericProperty
     }
     useT() {
       this.genericProperty.doSomething()
       this.genericProperty.doSomethingElse()
     }
   }
   ```

7. **应用场景**

   在编写 typescript 的时候，定义函数，接口或者类的时候，不预先定义好具体的类型，而在使用的时候在指定类型的一种特性的时候，这种情况下就可以使用泛型



## TS中什么是方法重载

方法重载是指在一个类中定义多个同名的方法，但要求每个方法具有不同的参数的类型或参数的个数。 基本上，它在派生类或子类中重新定义了基类方法。

方法覆盖规则：

- 该方法必须与父类中的名称相同。
- 它必须具有与父类相同的参数。
- 必须存在IS-A关系或继承

```ts
function getLength1(a: string | any[]){ //联合类型实现（推荐）
  return a.length
}
function getLength2(a:string):number // 函数重载实现
function getLength2(a: any[]): number
function getLength2(a:any) { 
  return a.length
}
```



## Omit 类型有什么作用

Omit 以一个类型为基础支持剔除某些属性，然后返回一个新类型。 语法：Omit<Type, Keys>。

```ts
interface Todo {
  title: string
  description: string
  completed: boolean
  createdAt: number
}
type TodoPreview = Omit<Todo, "description">
```



## 对 TypeScript 中高级类型的理解

1. **概念**

   除了string、number、boolean 这种基础类型外，在 typescript 类型声明中还存在一些高级的类型应用，这些高级类型，是typescript为了保证语言的灵活性，所使用的一些语言特性。这些特性有助于我们应对复杂多变的开发场景

2. **分类**

   - **交叉类型**

     通过 & 将多个类型合并为一个类型，包含了所需的所有类型的特性，本质上是一种并的操作。适用于对象合并场景，如下将声明一个函数，将两个对象合并成一个对象并返回

     ```ts
     function extend<T , U>(first: T, second: U) : T & U {
         let result: <T & U> = {}
         for (let key in first) {
             result[key] = first[key]
         }
         for (let key in second) {
             if(!result.hasOwnProperty(key)) {
                 result[key] = second[key]
             }
         }
         return result
     }
     ```

   - **联合类型**

     联合类型的语法规则和逻辑 “或” 的符号一致，表示其类型为连接的多个类型中的任意一个，本质上是一个交的关系

     ```ts
     function formatCommandline(command: string[] | string) {
       let line = '';
       if (typeof command === 'string') {
         line = command.trim();
       } else {
         line = command.join(' ').trim();
       }
     }
     ```

   - **类型别名**

     类型别名会给一个类型起个新名字，类型别名有时和接口很像，但是可以作用于原始值、联合类型、元组以及其它任何你需要手写的类型。

     ```ts
     // 可以使用 type SomeName = someValidTypeAnnotation的语法来创建类型别名
     type some = boolean | string
     const b: some = true // ok
     const c: some = 'hello' // ok
     const d: some = 123 // 不能将类型“123”分配给类型“some”
     // 此外类型别名可以是泛型:
     type Container<T> = { value: T };
     // 也可以使用类型别名来在属性里引用自己：
     type Tree<T> = {
         value: T;
         left: Tree<T>;
         right: Tree<T>;
     }
     ```

     可以看到，类型别名和接口使用十分相似，都可以描述一个对象或者函数。两者最大的区别在于，interface只能用于定义对象类型，而 type 的声明方式除了对象之外还可以定义交叉、联合、原始类型等，类型声明的方式适用范围显然更加广泛

   - **类型索引**

     keyof 类似于 Object.keys ，用于获取一个接口中 Key 的联合类型。

     ```ts
     interface Button {
         type: string
         text: string
     }
     type ButtonKeys = keyof Button
     // 等效于
     type ButtonKeys = "type" | "text"
     ```

   - **类型约束**

     通过关键字 extend 进行约束，不同于在 class 后使用 extends 的继承作用，泛型内使用的主要作用是对泛型加以约束

     ```ts
     type BaseType = string | number | boolean
     // 这里表示 copy 的参数,只能是字符串、数字、布尔这几种基础类型
     function copy<T extends BaseType>(arg: T): T {
       return arg
     }
     ```

     类型约束通常和类型索引一起使用，例如我们有一个方法专门用来获取对象的值，但是这个对象并不确定，我们就可以使用 extends 和 keyof 进行约束。

     ```ts
     function getValue<T, K extends keyof T>(obj: T, key: K) {
       return obj[key]
     }
     const obj = { a: 1 }
     const a = getValue(obj, 'a')
     ```

   - **映射类型**

     通过 in 关键字做类型的映射，遍历已有接口的 key 或者是遍历联合类型

     ```ts
     type Readonly<T> = {
         readonly [P in keyof T]: T[P];
     };
     interface Obj {
       a: string
       b: string
     }
     type ReadOnlyObj = Readonly<Obj>
     interface ReadOnlyObj {
         readonly a: string;
         readonly b: string;
     }
     ```

   - **条件类型**

     条件类型的语法规则和三元表达式一致，经常用于一些类型不确定的情况

     ```ts
     T extends U ? X : Y
     ```

3. **总结**

   可以看到，如果只是掌握了 typeScript 的一些基础类型，可能很难游刃有余的去使用 typeScript，需要了解一些typescript的高阶用法。并且typescript在版本的迭代中新增了很多功能，需要不断学习与掌握



## 说说TypeScript命名空间与模块的理解

1. **模块**

   TypeScript 与 ECMAScript 2015 一样，任何包含顶级 import 或者 export 的文件都被当成一个模块。相反地，如果一个文件不带有顶级的import或者export声明，那么它的内容被视为全局可见的

   ```ts
   export const a = 1
   export type Person = {
       name: String
   }
   import { a, Person } from './export';
   ```

2. **命名空间**

   一个最明确的目的就是解决重名问题。命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的。这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中

   ```ts
   namespace SomeNameSpaceName {
      export interface ISomeInterfaceName {      }
      export class SomeClassName {      }
   }
   ```

   命名空间本质上是一个对象，作用是将一系列相关的全局变量组织到一个对象的属性

3. **区别**

   - 命名空间是位于全局命名空间下的一个普通的带有名字的 JavaScript 对象，使用起来十分容易。但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中
   - 像命名空间一样，模块可以包含代码和声明。 不同的是模块可以声明它的依赖
   - 在正常的TS项目开发过程中并不建议用命名空间，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用



## 什么是TypeScript映射文件

TypeScript.map文件是一个源映射文件，其中包含有关我们原始文件的信息。可让工具在发出的JavaScript代码和创建它的TypeScript源文件之间进行映射。许多调试器可以使用这些文件，因此我们可以调试TypeScript文件而不是JavaScript文件



## tsconfig.json有什么作用

tsconfig.json文件是JSON格式的文件。在tsconfig.json文件中，可以指定不同的选项来告诉编译器如何编译当前项目。目录中包含tsconfig.json文件，表明该目录是TypeScript项目的根目录



## TypeScript如何结合React使用

1. **使用前提**

   使用 TypeScript 编写 React 代码，除了需要 TypeScript 这个库之外，还需要安装 @types/react、@types/react-dom 。至于上述使用 @types 的库的原因在于，目前非常多的 JavaScript 库并没有提供自己关于 TypeScript 的声明文件。所以，ts 并不知道这些库的类型以及对应导出的内容，这里 @types 实际就是社区中的 DefinitelyTyped 库，定义了目前市面上绝大多数的 JavaScript 库的声明，所以下载相关的 JavaScript 对应的 @types 声明时，就能够使用使用该库对应的类型定义

2. **编写无状态组件**

   无状态组件主要作用是用于展示 UI，如果使用 js 声明

   ```react
   import * as React from "React";
   export const Logo = (props) => {
     const { logo, className, alt } = props;
     return <img src={logo} className={className} alt={alt} />;
   };
   ```

   但这时候 ts 会出现报错提示，原因在于没有定义 porps 类型，这时候就可以使用 interface 接口去定义 porps 即可，如下：

   ```react
   import * as React from "React";
   interface IProps {
     logo?: string;  
     className?: string;
     alt?: string;
   }
   export const Logo = (props: IProps) => {
     const { logo, className, alt } = props;
     return <img src={logo} className={className} alt={alt} />;
   };
   ```

   但是我们都知道 props 里面存在 children 属性，我们不可能每个 porps 接口里面定义多一个 children，如下：

   ```ts
   interface IProps {
     logo?: string;
     className?: string;
     alt?: string;
     children?: ReactNode;
   }
   ```

   更加规范的写法是使用 React 里面定义好的 FC 属性，里面已经定义好 children 类型：

   - React.FC 显式地定义了返回类型，其他方式是隐式推导的
   - React.FC 对静态属性：displayName、propTypes、defaultProps 提供了类型检查和自动补全
   -  React.FC 为 children 提供了隐式的类型（ReactElement | null）

   ```react
   export const Logo: React.FC<IProps> = (props) => {
     const { logo, className, alt } = props;
     return <img src={logo} className={className} alt={alt} />;
   };
   ```

3. **编写有状态组件**

   有状态组件可以是一个类组件且存在 props 和 state 属性。如果使用 TypeScript 声明则如下所示：

   ```ts
   import * as React from "React";
   interface IProps {
     color: string;
     size?: string;
   }
   interface IState {
     count: number;
   }
   class App extends React.Component<IProps, IState> {
     public state = {
       count: 1,
     };
     public render() {
       return <div>Hello world</div>;
     }
   }
   ```

   上述通过泛型对 props、state 进行类型定义，然后在使用的时候就可以在编译器中获取更好的智能提示。

   关于 Component 泛型类的定义，可以参考下 React 的类型定义文件 node_modules/@types/React/index.d.ts，如下所示：

   ```ts
   class Component<P, S> {
     readonly props: Readonly<{ children?: ReactNode }> & Readonly<P>;
     state: Readonly<S>;
   }
   ```

   从上述可以看到，state 属性也定义了可读类型，目的是为了防止直接调用 this.state 更新状态

4. **编写受控组件**

   受控组件的特性在于元素的内容通过组件的状态 state 进行控制。由于组件内部的事件是合成事件，不等同于原生事件。例如一个 input 组件修改内部的状态，常见的定义的时候如下所示：

   ```ts
   private updateValue(e: React.ChangeEvent<HTMLInputElement>) {
       this.setState({ itemText: e.target.value })
   }
   /**
    * 常用 Event 事件对象类型：
    * ClipboardEvent 剪贴板事件对象
    * DragEvent 拖拽事件对象
    * ChangeEvent Change 事件对象
    * KeyboardEvent 键盘事件对象
    * MouseEvent 鼠标事件对象
    * TouchEvent 触摸事件对象
    * WheelEvent 滚轮事件对象
    * AnimationEvent 动画事件对象
    * TransitionEvent 过渡事件对象
    * /
   //T 接收一个 DOM 元素类型
   ```





## TypeScript如何结合vue使用

1. **使用前提**

   在VUE项目中应用typescript，我们需要引入一个库vue-property-decorator，其是基于vue-class-component库而来，这个库vue官方推出的一个支持使用class方式来开发vue单文件组件的库，主要的功能如下：

   - methods 可以直接声明为类的成员方法、
   - 计算属性可以被声明为类的属性访问器、
   - 初始化的 data 可以被声明为类属性、
   - data、render 以及所有的 Vue 生命周期钩子可以直接作为类的成员方法、
   - 所有其他属性，需要放在装饰器中

2. vue-property-decorator主要提供了多个装饰器和一个函数:

   -  **@Props**

     组件接收属性的装饰器，如下使用：

     ```ts
     import {Component,Vue,Prop} from vue-property-decorator;
     @Component
     export default class YourComponent extends Vue {
         @Prop(String)
         propA:string;
         
         @Prop([String,Number])
         propB:string|number;
         
         @Prop({
          type: String, // type: [String , Number]
          default: 'default value', // 一般为String或Number
           //如果是对象或数组的话。默认值从一个工厂函数中返回
           // defatult: () => {
           //     return ['a','b']
           // }
          required: true,
          validator: (value) => {
             return [
               'InProcess',
               'Settled'
             ].indexOf(value) !== -1
          }
         })
         propC:string;
     }
     ```

   - @PropSync

   - @Model

   - **@Watch**

     实际就是Vue中的监听器，如下：

     ```ts
     import { Vue, Component, Watch } from 'vue-property-decorator'
     @Component
     export default class YourComponent extends Vue {
       @Watch('child')
       onChildChanged(val: string, oldVal: string) {}
     
       @Watch('person', { immediate: true, deep: true })
       onPersonChanged1(val: Person, oldVal: Person) {}
     
       @Watch('person')
       onPersonChanged2(val: Person, oldVal: Person) {}
     }
     ```

   - @Provide

   - @Inject

   - @ProvideReactive

   - @InjectReactive

   - **@Emit**

     代替Vue中的事件的触发$emit，如下：

     ```ts
     import {Vue, Component, Emit} from 'vue-property-decorator';
     @Component({})
     export default class Some extends Vue{
         mounted(){
             this.$on('emit-todo', function(n) {
                 console.log(n)
             })
             this.emitTodo('world');
         }
         @Emit()
         emitTodo(n: string){
             console.log('hello');
         }
     }
     ```

   - @Ref

   - **@Component** (由 vue-class-component 提供)

     注明了此类为一个Vue组件，因此即使没有设置选项也不能省略。如果需要定义比如 name、components、filters、directives以及自定义属性，就可以在Component装饰器中定义，如下：

     ```ts
     import {Component,Vue} from 'vue-property-decorator';
     import {componentA,componentB} from '@/components';
      @Component({
         components:{
             componentA,
             componentB,
         },
         directives: {
             focus: {
                 // 指令的定义
                 inserted: function (el) {
                     el.focus()
                 }
             }
         }
     })
     export default class YourCompoent extends Vue{
         count: number = 123 // 类属性相当于以前的 data
         add(): number { // 类方法就是以前的methods
             this.count + 1
         }
         // 获取计算属性
         get total(): number {
           return this.count + 1
         }
         // 设置计算属性
         set total(param:number): void {
           this.count = param
         }
     }
     ```

     这里取消了组件的data和methods属性，以往data返回对象中的属性、methods中的方法需要直接定义在Class中，当做类的属性和方法

   - Mixins (由 vue-class-component 提供)