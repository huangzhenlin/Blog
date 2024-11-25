## JavaScript数据类型

1. 基本类型

   - **Number**

     ```js
     let intNum = 55 // 10进制的55
     let num1 = 070 // 8进制的56
     let hexNum1 = 0xA //16进制的10
     
     let floatNum1 = 1.1;
     let floatNum2 = 0.1;
     let floatNum3 = .1; // 有效，但不推荐
     let floatNum = 3.125e7; // 等于 31250000
     
     console.log(0/0); // NaN
     console.log(-0/+0); // NaN
     ```

   - **String**

     字符串可以使用双引号（"）、单引号（'）或反引号（`）标示

     ```js
     let firstName = "John";
     let lastName = 'Jacob';
     let lastName = `Jingleheimerschmidt`
     // 字符串是不可变的，意思是一旦创建，它们的值就不能变了
     let lang = "Java";
     lang = lang + "Script";  // 先销毁再创建
     ```

   - **Boolean**

     Boolean（布尔值）类型有两个字面值： true 和false

     ```js
     // 通过Boolean可以将其他类型的数据转化成布尔值
     数据类型      转换为 true 的值      	转换为 false 的值
      String       非空字符串          	"" 
      Number 	非零数值（包括无穷值）	0 、 NaN 
      Object 	 任意对象 				 null
     Undefined 	N/A （不存在） 			undefined
     ```

   - **Undefined**

     Undefined 类型只有一个值，就是特殊值 undefined。
     当使用 var或 let声明了变量但没有初始化时，就相当于给变量赋予了 undefined值

     ```js
     let message;
     console.log(message == undefined); // true
     
     let message; // 这个变量被声明了，只是值为 undefined
     console.log(message); // "undefined"
     console.log(age); // 没有声明过这个变量，报错
     ```

   - **null**

     Null类型同样只有一个值，即特殊值 null。

     逻辑上讲， null 值表示一个空对象指针，这也是给typeof传一个 null 会返回 "object" 的原因。

     只要变量要保存对象，而当时又没有那个对象可保存，就可用 null来填充该变量

     ```js
     let car = null;
     console.log(typeof car); // "object"
     undefined 值是由 null值派生而来
     console.log(null == undefined); // true
     ```

   - **Symbol**

     Symbol （符号）是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险

     ```js
     let genericSymbol = Symbol();
     let otherGenericSymbol = Symbol();
     console.log(genericSymbol == otherGenericSymbol); // false
     
     let fooSymbol = Symbol('foo');
     let otherFooSymbol = Symbol('foo');
     console.log(fooSymbol == otherFooSymbol); // false
     ```

   - **BigInt**

     BigInt 是一种数字类型的数据，它可以表示任意精度格式的整数，使用 BigInt 可以安全地存储和操作大整数，即使这个数已经超出了Number 能够表示的安全整数范围。

     提出的原因：JavaScript 中 Number.MAX_SAFE_INTEGER 表示最⼤安全数字，计算结果是 9007199254740991，即在这个数范围内不会出现精度丢失（⼩数除外）。但是⼀旦超过这个范围，js 就会出现计算不准确的情况，这在⼤数计算的时候不得不依靠⼀些第三⽅库进⾏解决，因此官⽅提出了 BigInt 来解决此问题

     ```js
     const a = 2172141653n;
     const b = 15346349309n;
     // BigInt 可以保持精度
     a * b // 33334444555566667777n
     // 普通整数无法保持精度
     Number(a) * Number(b) // 33334444555566670000
     ```

2. 引用类型

   - **Object**

     ```js
     // 创建object常用方式为对象字面量表示法，属性名可以是字符串或数值
     let person = {
         name: "Nicholas",
         "age": 29,
         5: true
     };
     ```

   - **Array**

     JavaScript数组是一组有序的数据，但跟其他语言不同的是，数组中每个槽位可以存储任意类型的数据。并且，数组也是动态大小的，会随着数据添加而自动增长

     ```js
     let colors = ["red", 2, {age: 20 }]
     colors.push(2)
     ```

   - **Function**

     函数实际上是对象，每个函数都是 Function类型的实例，而 Function也有属性和方法，跟其他引用类型一样

     ```js
     function sum (num1, num2) {
         return num1 + num2;
     }
     let sum = function(num1, num2) {
         return num1 + num2;
     };
     let sum = (num1, num2) => {
         return num1 + num2;
     };
     ```

   - **Date、RegExp、Map、Set等等**

3. **存储区别**

   声明变量时不同的内存地址分配：

   - 简单类型的值存放在栈中，在栈中存放的是对应的值
   - 引用类型对应的值存储在堆中，在栈中存放的是指向堆内存的地址

   不同的类型数据导致赋值变量时的不同：

   - 简单类型赋值，是生成相同的值，两个对象对应不同的地址
   - 复杂类型赋值，是将保存对象的内存地址赋值给另一个变量。也就是两个变量指向堆内存中同一个对象



## 数据类型的检测方式

1. **typeof**

   其中数组、对象、null 都会被判断为 object，其他判断都正确

   ```js
   console.log(typeof 2)              //number
   console.log(typeof true)           //boolean
   console.log(typeof 'str')          //string
   console.log(typeof [])             //object
   console.log(typeof function(){})   //function
   console.log(typeof {})             //object
   console.log(typeof undefined)      //undefined
   console.log(typeof null)           //object
   ```

2. **instanceof**

   可以正确判断对象的类型，其内部运行机制是判断在其原型链中能否找到该类型的原型

   ```js
   console.log(2 instanceof Number)               //false
   console.log(true instanceof Boolean)           //false
   console.log('str' instanceof String)           //false
   console.log([] instanceof Array)               //true
   console.log(function(){} instanceof Function)  //true
   console.log({} instanceof Object)              //true
   ```

   可以看到，instanceof 只能正确判断引用数据类型，而不能判断基本数据类型。instanceof 运算符可以用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。

   原理：instanceof 运算符用于判断构造函数的 prototype 属性是否出现在对象的原型链中的任何位置。

3. **constructor**

   constructor 有两个作用，一是判断数据的类型，二是对象实例通过constrcutor 对象访问它的构造函数。需要注意，如果创建一个对象来改变它的原型，constructor 就不能用来判断数据类型了

   ```js
   console.log((2).constructor === Number);               //true
   console.log((true).constructor === Boolean);           //true
   console.log(('str').constructor === String);           //true
   console.log(([]).constructor === Array);               //true
   console.log((function(){}).constructor === Function);  //true
   console.log(({}).constructor === Object);     //true
   ```

4. **Object.prototype.toString.call()**

   ```js
   var a= Object.prototype.toString;
   console.log(a.call(2)); // [object Number]
   console.log(a.call(true)); //[object Boolean]
   console.log(a.call('str')); // [object String]
   console.log(a.call([])); // [object Array]
   console.log(a.call(function(){})); // [object Function]
   console.log(a.call({})); // [object Object]
   console.log(a.call(undefined)); // [object Undefined]
   console.log(a.call(null)); // [object Null]
   ```

   同样是检测对象 obj 调用 toString 方法，obj.toString()的结果和Object.prototype.toString.call(obj)的结果不一样的原因： 因为 toString 是 Object 的原型方法，而 Array、function 等类型作为 Object 的实例，都重写了 toString 方法。不同的对象类型调用 toString 方法时，根据原型链的知识，调用的是对应的重写之后的 toString 方法（function 类型返回内容为函数体的字符串，Array类型返回元素组成的字符串…），而不会去调用 Object 上原型toString 方法（返回对象的具体类型），所以采用 obj.toString()不能得到其对象类型，只能将 obj 转换为字符串类型；因此，在想要得到对象的具体类型时，应该调用 Object 原型上的 toString 方法



## null 和 undefined 区别

1. **定义**

   首先 Undefined 和 Null 都是基本数据类型，这两个基本数据类型分别都只有一个值，就是 undefined 和 null。undefined 代表的含义是未定义，null 代表的含义是空对象。一般变量声明了但还没有定义的时候会返回 undefined，null 主要用于赋值给一些可能会返回对象的变量，作为初始化。

2. **保留字**

   undefined 在 JavaScript 中不是一个保留字，这意味着可以使用undefined 来作为一个变量名

   注意：但是这样的做法是非常危险的，它会影响对 undefined 值的判断。我们可以通过一些方法获得安全的undefined 值，比如说 void 0（表达式 void ___ 没有返回值，因此返回结果是 undefined。void 并不改变表达式的结果，只是让表达式不返回值。因此可以用 void 0 来获得 undefined）

3. **typeof**

   当对这两种类型使用 typeof 进行判断时，Null 类型化会返回 “object”，这是一个历史遗留的问题。

4. **==、===**

   当使用双等号对两种类型的值进行比较时会返回 true，使用三个等号时会返回 false



## 数字精度丢失问题

1. **问题和原因**

   计算机存储双精度浮点数需要先把十进制数转换为二进制的科学记数法的形式，然后计算机以自己的规则{符号位+(指数位+指数偏移量的二进制)+小数部分}存储二进制的科学记数法；因为js存储时有位数限制（64位），并且某些十进制的浮点数在转换为二进制数时会出现无限循环，会造成二进制的舍入操作(0舍1入)，当再转换为十进制时就造成了计算误差； 

   ```js
   0.1 + 0.2 === 0.3 // false
   // 在javascript语言中，0.1 和 0.2 都转化成二进制后再进行运算
   // 0.1 和 0.2 都转化成二进制后再进行运算
   0.00011001100110011001100110011001100110011001100110011010 +
   0.0011001100110011001100110011001100110011001100110011010 =
   0.0100110011001100110011001100110011001100110011001100111
   // 转成十进制正好是 0.30000000000000004
   ```

   为什么x=0.1得到0.1。主要是存储二进制时小数点的偏移量最大为52位，最多可以表达的位数是2^53=9007199254740992，对应科学计数尾数是 9.007199254740992，这也是 JS 最多能表示的精度它的长度是 16，所以可以使用 toPrecision(16) 来做精度运算，超过的精度会自动做凑整处理

   ```js
   .10000000000000000555.toPrecision(16)
   // 返回 0.1000000000000000，去掉末尾的零后正好为 0.1
   //但看到的 0.1 实际上并不是 0.1。不信你可用更高的精度试试
   0.1.toPrecision(21) = 0.100000000000000005551
   ```

2. 解决办法

   - 精确加法

     ```js
     function add(num1, num2) {
       const num1Digits = (num1.toString().split('.')[1] || '').length;
       const num2Digits = (num2.toString().split('.')[1] || '').length;
       const baseNum = Math.pow(10, Math.max(num1Digits, num2Digits));
       return (num1 * baseNum + num2 * baseNum) / baseNum;
     }
     ```

   - 使用第三方库，如Math.js、BigDecimal.js



## JavaScript 中的类型转换机制

1. **显示转换**

   - **Number()**

     将任意类型的值转化为数值。Number转换的时候是很严格的，只要有一个字符无法转成数值，整个字符串就会被转为NaN

     ```js
     Number(324) // 324
     // 字符串：如果可以被解析为数值，则转换为相应的数值
     Number('324') // 324
     // 字符串：如果不可以被解析为数值，返回 NaN
     Number('324abc') // NaN
     // 空字符串转为0
     Number('') // 0
     // 布尔值：true 转成 1，false 转成 0
     Number(true) // 1
     Number(false) // 0
     // undefined：转成 NaN
     Number(undefined) // NaN
     // null：转成0
     Number(null) // 0
     // 对象：通常转换成NaN(除了只包含单个数值的数组)
     Number({a: 1}) // NaN
     Number([1, 2, 3]) // NaN
     Number([5]) // 5
     ```

   - **parseInt()**

     parseInt相比Number，就没那么严格了，parseInt函数逐个解析字符，遇到不能转换的字符就停下来

     ```js
     parseInt('32a3') //32
     ```

   - **String()**

     可以将任意类型的值转化成字符串

     ```js
     // 数值：转为相应的字符串
     String(1) // "1"
     //字符串：转换后还是原来的值
     String("a") // "a"
     //布尔值：true转为字符串"true"，false转为字符串"false"
     String(true) // "true"
     //undefined：转为字符串"undefined"
     String(undefined) // "undefined"
     ```

   - **Boolean()**

     可以将任意类型的值转为布尔值

     ```js
     Boolean(undefined) // false
     Boolean(null) // false
     Boolean(0) // false
     Boolean(NaN) // false
     Boolean('') // false
     Boolean({}) // true
     Boolean([]) // true
     Boolean(new Boolean(false)) // true
     ```

2. **隐式转换**

   出现的场景：

   - 比较运算（==、!=、>、<）、if、while需要布尔值地方
   - 算术运算（+、-、*、/、%）

   除了上面的场景，还要求运算符两边的操作数不是同一类型。

   转换规则如下：

   - 自动转换为布尔值。在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用Boolean函数，除了`undefined、null、false、+0、-0、NaN、""`几种会被转化成false，其他都换被转化成true

   - 自动转换成字符串。遇到预期为字符串的地方，就会将非字符串的值自动转为字符串。具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串。常发生在+运算中，一旦存在字符串，则会进行字符串拼接操作

     ```js
     '5' + 1 // '51'
     '5' + true // "5true"
     '5' + false // "5false"
     '5' + {} // "5[object Object]"
     '5' + [] // "5"
     '5' + function (){} // "5function (){}"
     '5' + undefined // "5undefined"
     '5' + null // "5null"
     ```

   - 自动转换成数值。除了+有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。null转为数值时，值为0 。undefined转为数值时，值为NaN

     ```js
     '5' - '2' // 3
     '5' * '2' // 10
     true - 1  // 0
     false - 1 // -1
     '1' - 1   // 0
     '5' * []    // 0
     false / '5' // 0
     'abc' - 1   // NaN
     null + 1 // 1
     undefined + 1 // NaN
     ```



## Object.is() 、“===”、“==” 的区别

1. 使用双等号（==）进行相等判断时，如果两边的类型不一致，则会进行强制类型转化后再进行比较。遵循以下规则：
   - 两个都为简单类型，字符串和布尔值都会转换成数值，再比较
   - 简单类型与引用类型比较，对象转化成其原始类型的值，再比较
   - 两个都为引用类型，则比较它们是否指向同一个对象
   - null 和 undefined 相等
   - 存在 NaN 则返回 false
2. 使用三等号（===）进行相等判断时，如果两边的类型不一致时，不会做强制类型准换，直接返回 false。
   - 类型相同，值也需相同才会返回true
   - undefined 和 null 与自身严格相等
3. 使用 Object.is 来进行相等判断时，一般情况下和三等号的判断相同，它处理了一些特殊的情况，比如 :
   - -0 和 +0 不再相等，
   - 两个 NaN是相等的



## 如何判断一个对象是空对象

1. **JSON.stringify**

   ```js
   if(JSON.stringify(obj)=='{}'){
       console.log("空对象");
   }
   ```

2. **Object.keys()**

   ```js
   if(Object.keys(obj).length<0){
       console.log("空对象");
   }
   ```



## 对象创建的方式

1. **字面量的方式**

   一般使用字面量的形式直接创建对象：
   ```js
   const obj1 = {}
   consst obj2 = new Object()
   ```

   但是这种创建方式对于创建大量相似对象的时候，会产生大量的重复代码。但 js 和一般的面向对象的语言不同，在 ES6 之前它没有类的概念。但是可以使用函数来进行模拟，从而产生出可复用的对象创建方式

2. **工厂模式**

   主要工作原理是用函数来封装创建对象的细节，从而通过调用函数来达到复用的目的。但是它有一个很大的问题就是创建出来的对象无法和某个类型联系起来，它只是简单的封装了复用代码，而没有建立起对象和类型间的关系

   ```js
   function createPerson(name, job) { 
    var o = new Object();
    o.name = name;
    o.job = job;
    o.sayName = function() { 
     console.log(this.name); 
    } 
    return o 
   } 
   var person1 = createPerson('Mike', 'student') 
   var person2 = createPerson('X', 'engineer') 
   ```

3. **构造函数模式**

   js 中每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那么就可以把它称为构造函数。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的

   ```js
   function Person(name, job) { 
    this.name = name;
    this.job = job;
    this.sayName = function() { 
     console.log(this.name);
    } 
   } 
   var person1 = new Person('Mike', 'student') 
   var person2 = new Person('X', 'engineer')
   ```

4. **原型模式**

   因为每一个函数都有一个 prototype属性，这个属性是一个对象，它包含了通过构造函数创建的所有实例都能共享的属性和方法。因此可以使用原型对象来添加公用属性和方法，从而实现代码的复用。这种方式相对于构造函数模式来说，解决了函数对象的复用问题。但是这种模式也存在一些问题，一个是没有办法通过传入参数来初始化值，另一个是如果存在一个引用类型如Array 这样的值，那么所有的实例将共享一个对象，一个实例对引用类型值的改变会影响所有的实例

   ```js
   function Person() {} 
   Person.prototype.name = 'Mike' 
   Person.prototype.job = 'student' 
   Person.prototype.sayName = function() { 
    console.log(this.name) 
   } 
   var person1 = new Person() 
   var person2 = new Person()
   ```

5. **组合使用构造函数和原型模式**

   这是创建自定义类型的最常见方式。因为构造函数模式和原型模式分开使用都存在一些问题，因此可以组合使用这两种模式，通过构造函数来初始化对象的属性，通过原型对象来实现函数方法的复用。这种方法很好的解决了两种模式单独使用时的缺点，但是有一点不足的就是，因为使用了两种不同的模式，所以对于代码的封装性不够好

   ```js
   function Person(name) { 
    this.name = name; 
    this.friends = ['Jack', 'Merry']; 
   } 
   Person.prototype.sayName = function() { 
    console.log(this.name); 
   } 
   var person1 = new Person(); 
   var person2 = new Person(); 
   person1.friends.push('Van'); 
   console.log(person1.friends) //["Jack", "Merry", "Van"] 
   console.log(person2.friends) // ["Jack", "Merry"] 
   console.log(person1.friends === person2.friends) //false 
   ```

6. **动态原型模式**

   这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装

   ```js
   function Person(name, job) { 
    // 属性 
    this.name = name;
    this.job = job;
    // 方法 
    if(typeof this.sayName !== 'function') { 
     Person.prototype.sayName = function() { 
       console.log(this.name) 
     } 
    } 
   } 
   var person1 = new Person('Mike', 'Student') 
   person1.sayName()
   ```

7. **寄生构造函数模式**

   这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别

   ```js
   function Person(name, job) { 
     var o = new Object();
    	o.name = name;
    	o.job = job;
    	o.sayName = function() { 
     		console.log(this.name) 
    	} 
    	return o 
   } 
   var person1 = new Person('Mike', 'student') 
   person1.sayName() 
   ```

8. **es6的class**

   ```js
   class Person{
     constructor(name,job){
       this.name = name
       this.job = job
     }
     sayName(){
       console.log(this.name)
     }
   }
   var person1 = new Person('Mike', 'student') 
   person1.sayName(); // mike
   ```



## JavaScript 中的包装类型

1. **机制**

   在 JavaScript 中，基本类型是没有属性和方法的，但是为了便于操作基本类型的值，在调用基本类型的属性或方法时 JavaScript 会在后台隐式地将基本类型的值转换为对象，如：
   ```js
   const a = "abc";
   a.length; //3
   a.toUpperCase(); //"ABC"
   // 在访问 'abc'.length 时，JavaScript将 'abc' 在后台转换成String('abc')，然后再访问其 length 属性。
   ```

2. 转换

   ```js
   // JavaScript 也可以使用 Object 函数显式地将基本类型转换为包装类型：
   var a = "abc";
   Object(a) // String {"abc"}
   // 也可以使用 valueOf 方法将包装类型倒转成基本类型
   var a = "abc";
   var b = Object(a);
   var c = b.valueOf(); //"abc"
   ```



## 字符串常用的方法

1. 操作方法

   - 增：+、${}拼接、concat

     ```js
     let stringValue = "hello ";
     let result = stringValue.concat("world");
     console.log(result); // "hello world"
     console.log(stringValue); // "hello"
     ```

   - 删：slice()、substr()、substring()

     ```js
     let stringValue = "hello world";
     console.log(stringValue.slice(3)); // "lo world"
     console.log(stringValue.slice(3, 7)); // "lo w"
     
     console.log(stringValue.substr(3)); // "lo world"
     console.log(stringValue.substr(3, 7)); // "lo worl"
     
     console.log(stringValue.substring(3)); // "lo world"
     console.log(stringValue.substring(3,7)); // "lo w"
     ```

   - 改：trim()、trimLeft()、trimRight()、repeat()、padStart()、padEnd()、toLowerCase()、 toUpperCase()

     ```js
     let stringValue = " hello world ";
     let trimmedStringValue = stringValue.trim();
     console.log(stringValue); // " hello world "
     console.log(trimmedStringValue); // "hello world"
     
     let stringValue = "na ";
     let copyResult = stringValue.repeat(2) // na na
     
     let stringValue = "foo";
     console.log(stringValue.padStart(6)); // " foo"
     console.log(stringValue.padStart(9, ".")); // "......foo"
     
     let stringValue = "hello world";
     console.log(stringValue.toUpperCase()); // "HELLO WORLD"
     console.log(stringValue.toLowerCase()); // "hello world"
     ```

   - 查：chatAt()、indexOf()、startWith()、includes()

     ```js
     // 返回给定索引位置的字符，由传给方法的整数参数指定
     let message = "abcde";
     console.log(message.charAt(2)); // "c"
     // 从字符串开头去搜索传入的字符串，并返回位置（如果没找到，则返回 -1 ）
     let stringValue = "hello world";
     console.log(stringValue.indexOf("o")); // 4
     // 从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值
     let message = "foobarbaz";
     console.log(message.startsWith("foo")); // true
     console.log(message.startsWith("bar")); // false
     // 从字符串中搜索传入的字符串，并返回一个表示是否包含的布尔值
     let message = "foobarbaz";
     console.log(message.includes("bar")); // true
     console.log(message.includes("qux")); // false
     ```

2. 转换方法

   - split

     ```js
     // 把字符串按照指定的分割符，拆分成数组中的每一项
     let str = "12+23+34"
     let arr = str.split("+") // [12,23,34]
     ```

3. 模版匹配方法

   - match()

     ```js
     // 接收一个参数，可以是一个正则表达式字符串，也可以是一个RegExp对象，返回数组
     let text = "cat, bat, sat, fat";
     let pattern = /.at/;
     let matches = text.match(pattern);
     console.log(matches[0]); // "cat"
     ```

   - search()

     ```js
     // 接收一个参数，可以是一个正则表达式字符串，也可以是一个RegExp对象，找到则返回匹配索引，否则返回 -1
     let text = "cat, bat, sat, fat";
     let pos = text.search(/at/);
     console.log(pos); // 1
     ```

   - replace()

     ```js
     // 接收两个参数，第一个参数为匹配的内容，第二个参数为替换的元素（可用函数）
     let text = "cat, bat, sat, fat";
     let result = text.replace("at", "ond");
     console.log(result); // "cond, bat, sat, fat"
     ```



## 数组常用的方法

1. 操作方法

   - 增：push()、unshift()、splice()、concat()

     ```js
     // push()方法接收任意数量的参数，并将它们添加到数组末尾，返回数组的最新长度
     let colors = []; // 创建一个数组
     let count = colors.push("red", "green"); // 推入两项
     console.log(count) // 2
     // unshift()在数组开头添加任意多个值，然后返回新的数组长度
     let colors = new Array(); // 创建一个数组
     let count = colors.unshift("red", "green"); // 从数组开头推入两项
     alert(count); // 2
     // splice()传入三个参数，分别是开始位置、0（要删除的元素数量）、插入的元素，返回空数组
     let colors = ["red", "green", "blue"];
     let removed = colors.splice(1, 0, "yellow", "orange")
     console.log(colors) // red,yellow,orange,green,blue
     console.log(removed) // []
     // concat()首先会创建一个当前数组的副本，然后再把它的参数添加到副本末尾，最后返回这个新构建的数组，不会影响原始数组
     let colors = ["red", "green", "blue"];
     let colors2 = colors.concat("yellow", ["black", "brown"]);
     console.log(colors); // ["red", "green","blue"]
     console.log(colors2); // ["red", "green", "blue", "yellow", "black", "brown
     ```

   - 删：pop()、shift()、splice()、slice()

     ```js
     // pop() 方法用于删除数组的最后一项，同时减少数组的length 值，返回被删除的项
     let colors = ["red", "green"]
     let item = colors.pop(); // 取得最后一项
     console.log(item) // green
     console.log(colors.length) // 1
     // shift()方法用于删除数组的第一项，同时减少数组的length 值，返回被删除的项
     let colors = ["red", "green"]
     let item = colors.shift(); // 取得第一项
     console.log(item) // red
     console.log(colors.length) // 1
     // splice()传入两个参数，分别是开始位置，删除元素的数量，返回包含删除元素的数组
     let colors = ["red", "green", "blue"];
     let removed = colors.splice(0,1); // 删除第一项
     console.log(colors); // green,blue
     console.log(removed); // red，只有一个元素的数组
     // slice() 用于创建一个包含原有数组中一个或多个元素的新数组，不会影响原始数组
     let colors = ["red", "green", "blue", "yellow", "purple"];
     let colors2 = colors.slice(1);
     let colors3 = colors.slice(1, 4);
     console.log(colors)   // red,green,blue,yellow,purple
     concole.log(colors2); // green,blue,yellow,purple
     concole.log(colors3); // green,blue,yellow
     ```

   - 改：splice()

     ```js
     // splice()传入三个参数，分别是开始位置，要删除元素的数量，要插入的任意多个元素，返回删除元素的数组，对原数组产生影响
     let colors = ["red", "green", "blue"];
     let removed = colors.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
     console.log(colors); // red,red,purple,blue
     console.log(removed); // green，只有一个元素的数组
     ```

   - 查：indexOf()、includes()、find()

     ```js
     // indexOf()返回要查找的元素在数组中的位置，如果没找到则返回 -1
     let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     numbers.indexOf(4) // 3
     // includes() 返回要查找的元素在数组中的位置，找到返回true，否则false
     let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     numbers.includes(4) // true 
     // ind() 返回第一个匹配的元素
     const people = [
         {
             name: "Matt",
             age: 27
         },
         {
             name: "Nicholas",
             age: 29
         }
     ];
     people.find((element, index, array) => element.age < 28) // {name: "Matt", age: 27}
     ```

2. 排序方法

   - reverse()

     ```js
     // 将数组元素方向反转
     let values = [1, 2, 3, 4, 5];
     values.reverse();
     alert(values); // 5,4,3,2,1
     ```

   - sort()

     ```js
     // 接受一个比较函数，用于判断哪个值应该排在前面
     function compare(value1, value2) {
         if (value1 < value2) {
             return -1;
         } else if (value1 > value2) {
             return 1;
         } else {
             return 0;
         }
     }
     let values = [0, 1, 5, 10, 15];
     values.sort(compare);
     alert(values); // 0,1,5,10,15
     ```

3. 转换方法

   - join()

     ```js
     // 接收一个参数，即字符串分隔符，返回包含所有项的字符串
     let colors = ["red", "green", "blue"];
     alert(colors.join(",")); // red,green,blue
     alert(colors.join("||")); // red||green||blue
     ```

4. 迭代方法

   - some()

     ```js
     // 对数组每一项都运行传入的测试函数，如果至少有1个元素返回 true ，则这个方法返回 true
     let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     let someResult = numbers.some((item, index, array) => item > 2);
     console.log(someResult) // true
     ```

   - every()

     ```js
     // 对数组每一项都运行传入的测试函数，如果所有元素都返回 true ，则这个方法返回 true
     let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     let everyResult = numbers.every((item, index, array) => item > 2);
     console.log(everyResult) // false
     ```

   - forEach()

     ```js
     // 对数组每一项都运行传入的函数，没有返回值
     let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     numbers.forEach((item, index, array) => {
         // 执行某些操作
     });
     ```

   - filter()

     ```js
     // 对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回
     let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     let filterResult = numbers.filter((item, index, array) => item > 2);
     console.log(filterResult); // 3,4,5,4,3
     ```

   - map()

     ```js
     // 对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组
     let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
     let mapResult = numbers.map((item, index, array) => item * 2);
     console.log(mapResult) // 2,4,6,8,10,8,6,4,
     ```



## 对原型、原型链的理解

1. **原型**

   - 在 JavaScript 中是使用构造函数来新建一个对象的，每一个构造函数的内部都有一个 prototype 属性，它的属性值是一个对象，这个对象包含了可以由该构造函数的所有实例共享的属性和方法。
   - 当使用构造函数新建一个对象后，在这个对象的内部将包含一个指针，这个指针指向构造函数的 prototype 属性对应的值，在 ES5 中这个指针被称为对象的原型。
   - 一般来说不应该能够获取到这个值的，但是现在浏览器中都实现了 **proto** 属性来访问这个属性，但是最好不要使用这个属性，因为它不是规范中规定的。ES5 中新增了一个Object.getPrototypeOf() 方法，可以通过这个方法来获取对象的原型。

2. **原型链**

   - 当访问一个对象的属性时，如果这个对象内部不存在这个属性，那么它就会去它的原型对象里找这个属性，这个原型对象又会有自己的原型，于是就这样一直找下去，也就是原型链的概念。

   - 原型链终点 Object.prototype.__**proto__**，而 Object.prototype.__**proto__**=== null // true，所以，原型链 的终点是 null。

     ```js
     person1.__proto__ === Person.prototype
     Person.__proto__ === Function.prototype
     Person.prototype.__proto__ === Object.prototype
     Object.prototype.__proto__ === null
     
     Object.__proto__ === Function.prototype
     ```



## 对 this 对象的理解

1. **概念**

   this 是执行上下文中的一个属性，它指向最后一次调用这个方法的对象。在实际开发中，this 的指向可以通过四种调用模式来判断。

2. 分类

   - **函数调用模式（默认绑定）**

     ```js
     // 当一个函数不是一个对象的属性时，直接作为函数来调用时，this 指向全局对象。
     var name = 'Jenny';
     function person() {
         return this.name;
     }
     console.log(person());  //Jenny
     ```

   - **方法调用模式（隐式绑定）**

     ```js
     // 如果一个函数作为一个对象的方法来调用时，this 指向这个对象。
     function test() {
       console.log(this.x);
     }
     var obj = {};
     obj.x = 1;
     obj.m = test;
     obj.m(); // 1
     ```

   - **构造器调用模式（new 绑定）**

     ```js
     // 如果一个函数用 new 调用时，函数执行前会新创建一个对象，this 指向这个新创建的对象。
     function test() {
     　this.x = 1;
     }
     var obj = new test();
     obj.x // 1
     ```

   - **apply、call、bind（显示绑定）**

     ```js
     // 这三个方法都可以显示的指定调用函数的 this 指向。
     var x = 0;
     function test() {
     　console.log(this.x);
     }
     var obj = {};
     obj.x = 1;
     obj.m = test;
     obj.m.apply(obj) // 1
     ```

3. **优先级：new绑定优先级 > 显示绑定优先级 > 隐式绑定优先级 > 默认绑定优先级**

   - 显式绑定>隐式绑定  

     ```js
     function foo() {
         console.log( this.a );
     }
     var obj1 = {
         a: 2,
         foo: foo
     };
     var obj2 = {
         a: 3,
         foo: foo
     };
     obj1.foo(); // 2
     obj2.foo(); // 3
     obj1.foo.call( obj2 ); // 3
     obj2.foo.call( obj1 ); // 2
     ```

   - new绑定>隐式绑定

     ```js
     function foo(something) {
         this.a = something;
     }
     var obj1 = {
         foo: foo
     };
     var obj2 = {};
     obj1.foo( 2 );
     console.log( obj1.a ); // 2
     obj1.foo.call( obj2, 3 );
     console.log( obj2.a ); // 3
     var bar = new obj1.foo( 4 );
     console.log( obj1.a ); // 2
     console.log( bar.a ); // 4
     ```

   - new绑定优先级>显式绑定

     ```js
     function foo(something) {
         this.a = something;
     }
     var obj1 = {};
     var bar = foo.bind( obj1 );
     bar( 2 );
     console.log( obj1.a ); // 2
     var baz = new bar( 3 );
     console.log( obj1.a ); // 2
     console.log( baz.a ); // 3
     ```

4. **箭头函数的this指向**

   箭头函数不同于传统 JavaScript 中的函数，箭头函数并没有属于⾃⼰的 this，它所谓的 this 是捕获其所在上下⽂的 this 值，作为⾃⼰的 this 值，并且由于没有属于⾃⼰的 this，所以是不会被 new调⽤的，这个所谓的 this 也不会被改变

   ```js
   const obj = {
     sayThis: () => {
       console.log(this);
     }
   };
   obj.sayThis(); // window 因为 JavaScript 没有块作用域，所以在定义 sayThis 的时候，里面的 this 就绑到 window 上去了
   const globalSay = obj.sayThis;
   globalSay(); // window 浏览器中的 global 对象
   ```



## 对象继承的方式有哪些

1. **原型链**

   这种实现方式存在的缺点是，在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱。还有就是在创建子类型的时候不能向超类型传递参数

   ```js
   function Parent1() {
     this.name = 'parent1';
     this.play = [1, 2, 3]
    }
   function Child1() {
     this.type = 'child2';
   }
   Child1.prototype = new Parent1();
   console.log(new Child1());
   
   let s1 = new Child1();
   let s2 = new Child2();
   s1.play.push(4);
   console.log(s1.play, s2.play); //s1：[1,2,3,4]，s2：[1,2,3,4]
   ```

2. **构造函数**

   这种方式是通过在子类型的函数中调用超类型的构造函数来实现的，这一种方法解决了不能向超类型传递参数的缺点，但是它存在的一个问题就是无法实现函数方法的复用，并且超类型原型定义的方法子类型也没有办法访问到

   ```js
   function Parent2(){
     this.name = 'parent2';
    }
    Parent2.prototype.getName = function () {
     return this.name;
    }
    function Child2(){
     Parent2.call(this);
     this.type = 'child2'
    }
    let child = new Child2();
    console.log(child); *// 没问题*
    console.log(child.getName()); *// 会报错*
   ```

3. **组合继承**

   组合继承是将原型链和借用构造函数组合起来使用的一种方式。通过借用构造函数的方式来实现类型的属性的继承，通过将子类型的原型设置为超类型的实例来实现方法的继承。这种方式解决了上面的两种模式单独使用时的问题，但是由于我们是以超类型的实例来作为子类型的原型，所以调用了两次超类的构造函数，造成了子类型的原型中多了很多不必要的属性

   ```js
   function Parent3 () {
       this.name = 'parent3';
       this.play = [1, 2, 3];
     }
   
     Parent3.prototype.getName = function () {
       return this.name;
     }
     function Child3() {
       // 第二次调用 Parent3()
       Parent3.call(this);
       this.type = 'child3';
     }
   
     // 第一次调用 Parent3()
     Child3.prototype = new Parent3();
     // 手动挂上构造器，指向自己的构造函数
     Child3.prototype.constructor = Child3;
     var s3 = new Child3();
     var s4 = new Child3();
     s3.play.push(4);
     console.log(s3.play, s4.play);  // 不互相影响
     console.log(s3.getName()); // 正常输出'parent3'
     console.log(s4.getName()); // 正常输出'parent3'
   ```

4. **原型式继承**

   原型式继承的主要思路就是基于已有的对象来创建新的对象，实现的原理是，向函数中传入一个对象，然后返回一个以这个对象为原型的对象。这种继承的思路主要不是为了实现创造一种新的类型，只是对某个对象实现一种简单继承，ES5中定义的 Object.create() 方法就是原型式继承的实现。缺点与原型链方式相同

   ```js
   let parent4 = {
       name: "parent4",
       friends: ["p1", "p2", "p3"],
       getName: function() {
         return this.name;
       }
     };
   
     let person4 = Object.create(parent4);
     person4.name = "tom";
     person4.friends.push("jerry");
   
     let person5 = Object.create(parent4);
     person5.friends.push("lucy");
   
     console.log(person4.name); // tom
     console.log(person4.name === person4.getName()); // true
     console.log(person5.name); // parent4
     console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
     console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
   ```

5. **寄生式继承**

   寄生式继承的思路是创建一个用于封装继承过程的函数，通过传入一个对象，然后复制一个对象的副本，然后对象进行扩展，最后返回这个对象。这个扩展的过程就可以理解是一种继承。这种继承的优点就是对一个简单对象实现继承，如果这个对象不是自定义类型时。缺点是没有办法实现函数的复用

   ```js
   let parent5 = {
     name: "parent5",
     friends: ["p1", "p2", "p3"],
     getName: function() {
      return this.name;
     }
    };
   
    function clone(original) {
     let clone = Object.create(original);
     clone.getFriends = function() {
      return this.friends;
     };
     return clone;
    }
   
    let person5 = clone(parent5);
   
    console.log(person5.getName());
    console.log(person5.getFriends());
   ```

6. **寄生组合式继承**

   组合继承的缺点就是使用超类型的实例做为子类型的原型，导致添加了不必要的原型属性。寄生式组合继承的方式是使用超类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性

   ```js
   function clone (parent, child) {
       // 这里改用 Object.create 就可以减少组合继承中多进行一次构造的过程
       child.prototype = Object.create(parent.prototype);
       child.prototype.constructor = child;
     }
   
     function Parent6() {
       this.name = 'parent6';
       this.play = [1, 2, 3];
     }
      Parent6.prototype.getName = function () {
       return this.name;
     }
     function Child6() {
       Parent6.call(this);
       this.friends = 'child5';
     }
   
     clone(Parent6, Child6);
   
     Child6.prototype.getFriends = function () {
       return this.friends;
     }
   
     let person6 = new Child6();
     console.log(person6);
     console.log(person6.getName());
     console.log(person6.getFriends());
   ```

7. **es6的extend**

   ```js
   class Person {
     constructor(name) {
       this.name = name
     }
     // 原型方法
     // 即 Person.prototype.getName = function() { }
     // 下面可以简写为 getName() {...}
     getName = function () {
       console.log('Person:', this.name)
     }
   }
   class Gamer extends Person {
     constructor(name, age) {
       // 子类中存在构造函数，则需要在使用“this”之前首先调用 super()。
       super(name)
       this.age = age
     }
   }
   const asuna = new Gamer('Asuna', 20)
   asuna.getName() // 成功访问到父类的方法
   ```



## 对闭包的理解

1. **作用域**

   是当前的执行上下文，值和表达式在其中“可见”或可被访问。可以分为

   - 全局作用域：最外层函数和最外层函数外面定义的变量拥有全局作用域,所有未定义直接赋值的变量自动声明为全局作用域,所有 window 对象的属性拥有全局作用域,全局作用域有很大的弊端，过多的全局作用域变量会污染全局命名空间，容易引起命名冲突
   - 模块作用域：和函数作用域类似，在自定义模块中定义的变量、方法等成员，只能在当前模块内被访问，外部文件是访问不到的，这种模块级别的访问限制，叫做模块作用域
   - 函数作用域：函数作用域声明在函数内部的变零，一般只有固定的代码片段可以访问到，作用域是分层的，内层作用域可以访问外层作用域，反之不行
   - 块级作用域：使用 ES6 中新增的 let 和 const 指令可以声明块级作用域，块级作用域可以在函数中创建也可以在一个代码块中的创建（由{ }包裹的代码片段）。let 和 const 声明的变量不会有变量提升，也不可以重复声明。在循环中比较适合绑定块级作用域，这样就可以把声明的计数器变量限制在循环内部。

2. **作用域链**

   - 本质：作用域链的本质上是一个指向变量对象的指针列表。变量对象是一个包含了执行环境中所有变量和函数的对象。作用域链的前端始终都是当前执行上下文的变量对象。全局执行上下文的变量对象（也就是全局对象）始终是作用域链的最后一个对象。
   - 定义：在当前作用域中查找所需变量，但是该作用域没有这个变量，那这个变量就是自由变量。如果在自己作用域找不到该变量就去父级作用域查找，依次向上级作用域查找，直到访问到 window 对象就被终止，这一层层的关系就是作用域链。
   - 作用：作用域链的作用是保证对执行环境有权访问的所有变量和函数的有序访问，通过作用域链，可以访问到外层环境的变量和函数。

3. **闭包概念**

   一个普通的函数，如果它可以访问外层作用域的自由变量，那么这个函数就是一个闭包；

   - 从广义的角度来说，JavaScript中的函数都是闭包；
   - 从狭义的角度来说，JavaScript中的一个函数，如果访问了外层作用域的变量，那么它就是一个闭包

   闭包主要有两个作用：

   - 创建私有变量
   - 延长变量的生命周期

4. **闭包使用场景**

   - 柯里化函数：柯里化的目的在于避免频繁调用具有相同参数函数的同时，又能够轻松的重用

     ```js
     // 假设我们有一个求长方形面积的函数
     function getArea(width, height) {
         return width * height
     }
     // 如果我们碰到的长方形的宽老是10
     const area1 = getArea(10, 20)
     const area2 = getArea(10, 30)
     const area3 = getArea(10, 40)
     
     // 我们可以使用闭包柯里化这个计算面积的函数
     function getArea(width) {
         return height => {
             return width * height
         }
     }
     const getTenWidthArea = getArea(10)
     // 之后碰到宽度为10的长方形就可以这样计算面积
     const area1 = getTenWidthArea(20)
     // 而且如果遇到宽度偶尔变化也可以轻松复用
     const getTwentyWidthArea = getArea(20)
     ```

   - 使用闭包模拟私有方法。在JavaScript中，没有支持声明私有变量，但我们可以使用闭包来模拟私有方法

     ```js
     var Counter = (function() {
       var privateCounter = 0;
       function changeBy(val) {
         privateCounter += val;
       }
       return {
         increment: function() {
           changeBy(1);
         },
         decrement: function() {
           changeBy(-1);
         },
         value: function() {
           return privateCounter;
         }
       }
     })();
     
     var Counter1 = makeCounter();
     var Counter2 = makeCounter();
     console.log(Counter1.value()); /* logs 0 */
     Counter1.increment();
     Counter1.increment();
     console.log(Counter1.value()); /* logs 2 */
     Counter1.decrement();
     console.log(Counter1.value()); /* logs 1 */
     console.log(Counter2.value()); /* logs 0 */
     ```

   - 其他。例如防抖、节流、库的封装、计数器、延迟调用、回调等闭包的应用，其核心思想还是创建私有变量和延长变量的生命周期

   - 注意事项：如果不是某些特定任务需要使用闭包，在其它函数中创建函数是不明智的，因为闭包在处理速度和内存消耗方面对脚本性能具有负面影响。例如，在创建新的对象或者类时，方法通常应该关联于对象的原型，而不是定义到对象的构造器中。原因在于每个对象的创建，方法都会被重新赋值

     ```js
      function MyObject(name, message) {
         this.name = name.toString();
         this.message = message.toString();
         this.getName = function() {
           return this.name;
         };
       
         this.getMessage = function() {
           return this.message;
         };
       }
     
     // 上面的代码中，我们并没有利用到闭包的好处，因此可以避免使用闭包。修改成如下：
     function MyObject(name, message) {
       this.name = name.toString();
       this.message = message.toString();
     }
     MyObject.prototype.getName = function() {
       return this.name;
     };
     MyObject.prototype.getMessage = function() {
       return this.message;
     };
     ```

5. **影响**

   对于那些不再使用的对象，但是对于GC来说，它不知道要进行释放的对应的内存会依然保留着



## 对new操作符的理解

1. **概念**

   在JavaScript中，new操作符用于创建一个给定构造函数的实例对象。

   - new 通过构造函数 Person 创建出来的实例可以访问到构造函数中的属性
   - new 通过构造函数 Person 创建出来的实例可以访问到构造函数原型链中的属性（即实例与构造函数通过原型链连接了起来）

2. **流程**

   ```js
   function mynew(Func, ...args) {
       // 1.创建一个新对象
       const obj = {}
       // 2.将对象与构建函数通过原型链连接起来(新对象原型指向构造函数原型对象)
       obj.__proto__ = Func.prototype
       // 3.将构建函数的this指向新对象
       let result = Func.apply(obj, args)
       // 4.根据返回值判断(如果是原始值则被忽略，如果是返回对象，需要正常处理)
       return result instanceof Object ? result : obj
   }
   ```

3. **new箭头函数**

   箭头函数是ES6中的提出来的，它没有prototype，也没有自己的this指向，更不可以使用 arguments 参数，所以不能 New 一个箭头函数。第二、三步，箭头函数都是没有办法执行的。



## bind、call、apply 区别

1. **使用**

   - apply：接受两个参数，第一个参数是this的指向，第二个参数是函数接受的参数，以数组的形式传入。改变this指向后原函数会立即执行，且此方法只是临时改变this指向一次

     ```js
     function fn(...args){
         console.log(this,args);
     }
     let obj = {
         myname:"张三"
     }
     fn.apply(obj,[1,2]); // this会变成传入的obj，传入的参数必须是一个数组；
     fn(1,2) // this指向window
     // 当第一个参数为null、undefined的时候，默认指向window(在浏览器中)
     fn.apply(null,[1,2]); // this指向window
     fn.apply(undefined,[1,2]); // this指向window
     ```

   - call：第一个参数也是this的指向，后面传入的是一个参数列表。跟apply一样，改变this指向后原函数会立即执行，且此方法只是临时改变this指向一次

     ```js
     function fn(...args){
         console.log(this,args);
     }
     let obj = {
         myname:"张三"
     }
     
     fn.call(obj,1,2); // this会变成传入的obj，传入的参数必须是一个数组；
     fn(1,2) // this指向window
     // 同样的，当第一个参数为null、undefined的时候，默认指向window(在浏览器中)
     fn.call(null,[1,2]); // this指向window
     fn.call(undefined,[1,2]); // this指向window
     ```

   - bind：和call很相似，第一参数也是this的指向，后面传入的也是一个参数列表(但是这个参数列表可以分多次传入)。改变this指向后不会立即执行，而是返回一个永久改变this指向的函数

     ```js
     function fn(...args){
         console.log(this,args);
     }
     let obj = {
         myname:"张三"
     }
     
     const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
     bindFn(1,2) // this指向obj
     fn(1,2) // this指向window
     ```

2. **区别**

   - 三者都可以改变函数的this对象指向
   - 三者第一个参数都是this要指向的对象，如果如果没有这个参数或参数为undefined或null，则默认指向全局window
   - 三者都可以传参，但是apply是数组，而call是参数列表，且apply和call是一次性传入参数，而bind可以分为多次传入
   - bind是返回绑定this之后的函数，apply、call 则是立即执行

3. **实现**

   ```js
   Function.prototype.myCall = function(context) {
     // 判断调用对象
     if (typeof this !== "function") {
       console.error("type error");
     }
     // 获取参数
     let args = [...arguments].slice(1),
         result = null;
     // 判断 context 是否传入，如果未传入则设置为 window
     context = context || window;
     // 将调用函数设为对象的方法
     context.fn = this;
     // 调用函数
     result = context.fn(...args);
     // 将属性删除
     delete context.fn;
     return result;
   };
   ```

   ```js
   Function.prototype.myApply = function(context) {
     // 判断调用对象是否为函数
     if (typeof this !== "function") {
       throw new TypeError("Error");
     }
     let result = null;
     // 判断 context 是否存在，如果未传入则为 window
     context = context || window;
     // 将函数设为对象的方法
     context.fn = this;
     // 调用方法
     if (arguments[1]) {
       result = context.fn(...arguments[1]);
     } else {
       result = context.fn();
     }
     // 将属性删除
     delete context.fn;
     return result;
   };
   ```

   ```js
   Function.prototype.myBind = function(context) {
     // 判断调用对象是否为函数
     if (typeof this !== "function") {
       throw new TypeError("Error");
     }
     // 获取参数
     var args = [...arguments].slice(1),
         fn = this;
     return function Fn() {
       // 根据调用方式，传入不同绑定值
       return fn.apply(
         this instanceof Fn ? this : context,
         args.concat(...arguments)
       );
     };
   };
   ```



## 对浅拷贝和深拷贝的理解

1. **浅拷贝**

   指的是创建新的数据，这个数据有着原始数据属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值。如果属性是引用类型，拷贝的就是内存地址，即浅拷贝是拷贝一层，深层次的引用类型则共享内存地址。常见的浅拷贝有：

   - Object.assign

     ```js
     var obj = {
         age: 18,
         nature: ['smart', 'good'],
         names: {
             name1: 'fx',
             name2: 'xka'
         },
         love: function () {
             console.log('fx is a great girl')
         }
     }
     var newObj = Object.assign({}, fxObj);
     ```

   - Array.prototype.slice()

     ```js
     const fxArr = ["One", "Two", "Three"]
     const fxArrs = fxArr.slice(0)
     fxArrs[1] = "love";
     console.log(fxArr) // ["One", "Two", "Three"]
     console.log(fxArrs) // ["One", "love", "Three"]
     ```

   - Array.prototype.concat()

     ```js
     const fxArr = ["One", "Two", "Three"]
     const fxArrs = fxArr.concat()
     fxArrs[1] = "love";
     console.log(fxArr) // ["One", "Two", "Three"]
     console.log(fxArrs) // ["One", "love", "Three"]
     ```

   - 使用拓展运算符实现的复制

     ```js
     const fxArr = ["One", "Two", "Three"]
     const fxArrs = [...fxArr]
     fxArrs[1] = "love";
     console.log(fxArr) // ["One", "Two", "Three"]
     console.log(fxArrs) // ["One", "love", "Three"]
     ```

   - 手写实现

     ```js
     function shallowClone(obj) {
         const newObj = {};
         for(let prop in obj) {
             if(obj.hasOwnProperty(prop)){
                 newObj[prop] = obj[prop];
             }
         }
         return newObj;
     }
     ```

2. **深拷贝**

   深拷贝开辟一个新的栈，两个对象属完成相同，但是对应两个不同的地址，修改一个对象的属性，不会改变另一个对象的属性。常见的深拷贝有：

   - _.cloneDeep()

     ```js
     const _ = require('lodash');
     const obj1 = {
         a: 1,
         b: { f: { g: 1 } },
         c: [1, 2, 3]
     };
     const obj2 = _.cloneDeep(obj1);
     console.log(obj1.b.f === obj2.b.f);// false
     ```

   - jQuery.extend()

     ```js
     const $ = require('jquery');
     const obj1 = {
         a: 1,
         b: { f: { g: 1 } },
         c: [1, 2, 3]
     };
     const obj2 = $.extend(true, {}, obj1);
     console.log(obj1.b.f === obj2.b.f); // false
     ```

   - JSON.stringify()

     ```js
     // 但是这种方式存在弊端，会忽略undefined、symbol和函数
     const obj = {
         name: 'A',
         name1: undefined,
         name3: function() {},
         name4:  Symbol('A')
     }
     const obj2 = JSON.parse(JSON.stringify(obj));
     console.log(obj2); // {name: "A"}
     ```

   - 手写循环递归

     ```js
     function deepClone(obj, hash = new WeakMap()) {
       if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
       if (obj instanceof Date) return new Date(obj);
       if (obj instanceof RegExp) return new RegExp(obj);
       // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
       if (typeof obj !== "object") return obj;
       // 是对象的话就要进行深拷贝
       if (hash.get(obj)) return hash.get(obj);
       let cloneObj = new obj.constructor();
       // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
       hash.set(obj, cloneObj);
       for (let key in obj) {
         if (obj.hasOwnProperty(key)) {
           // 实现一个递归拷贝
           cloneObj[key] = deepClone(obj[key], hash);
         }
       }
       return cloneObj;
     }
     ```

3. **区别**

   前提为拷贝类型为引用类型的情况下：

   - 浅拷贝是拷贝一层，属性为对象时，浅拷贝是复制，两个对象指向同一个地址
   - 深拷贝是递归拷贝深层次，属性为对象时，深拷贝是新开栈，两个对象指向不同的地址



## 对节流和防抖的理解

1. **防抖**

   函数防抖是指在事件被触发 n 秒后再执行回调，如果在这 n 秒内事件又被触发，则重新计时。这可以使用在一些点击请求的事件上，避免因为用户的多次点击向后端发送多次请求。

   应用场景：

   - 按钮提交场景：防⽌多次提交按钮，只执⾏最后提交的⼀次
   - 服务端验证场景：表单验证需要服务端配合，只执⾏⼀段连续的输⼊事件的最后⼀次，还有搜索联想词功能类似⽣存环境请⽤lodash.debounce

   实现如下：

   ```js
   // 简单版本
   function debounce(func, wait) {
       let timeout;
   
       return function () {
           let context = this; // 保存this指向
           let args = arguments; // 拿到event对象
   
           clearTimeout(timeout)
           timeout = setTimeout(function(){
               func.apply(context, args)
           }, wait);
       }
   }
   // +立即执行
   function debounce(func, wait, immediate) {
       let timeout;
       return function () {
           let context = this;
           let args = arguments;
           if (timeout) clearTimeout(timeout); // timeout 不为null
           if (immediate) {
               let callNow = !timeout; // 第一次会立即执行，以后只有事件执行后才会再次触发
               timeout = setTimeout(function () {
                   timeout = null;
               }, wait)
               if (callNow) {
                   func.apply(context, args)
               }
           }else {
               timeout = setTimeout(function () {
                   func.apply(context, args)
               }, wait);
           }
       }
   }
   ```

2. **节流**

   函数节流是指规定一个单位时间，在这个单位时间内，只能有一次触发事件的回调函数执行，如果在同一个单位时间内某事件被触发多次，只有一次能生效。节流可以使用在 scroll 函数的事件监听上，通过事件节流来降低事件调用的频率。

   应用场景：

   - 拖拽场景：固定时间内只执⾏⼀次，防⽌超⾼频次触发位置变动
   - 缩放场景：监控浏览器 resize
   - 动画场景：避免短时间内多次触发动画引起性能问题

   实现如下：

   ```js
   // 时间戳写法
   function throttled1(fn, delay = 500) {
       let oldtime = Date.now()
       return function (...args) {
           let newtime = Date.now()
           if (newtime - oldtime >= delay) {
               fn.apply(null, args)
               oldtime = Date.now()
           }
       }
   }
   // 定时器写法
   function throttled2(fn, delay = 500) {
       let timer = null
       return function (...args) {
           if (!timer) {
               timer = setTimeout(() => {
                   fn.apply(this, args)
                   timer = null
               }, delay);
           }
       }
   }
   // 结合
   function throttled(fn, delay) {
       let timer = null
       let starttime = Date.now()
       return function () {
           let curTime = Date.now() // 当前时间
           let remaining = delay - (curTime - starttime)  // 从上一次到现在，还剩下多少多余时间
           let context = this
           let args = arguments
           clearTimeout(timer)
           if (remaining <= 0) {
               fn.apply(context, args)
               starttime = Date.now()
           } else {
               timer = setTimeout(fn, remaining);
           }
       }
   }
   ```

3. **区别**

   相同点：

   - 都可以通过使用 setTimeout 实现
   - 目的都是，降低回调执行频率。节省计算资源

   不同点：

   - 函数防抖，在一段连续操作结束后，处理回调，利用clearTimeout和 setTimeout实现。函数节流，在一段连续操作中，每一段时间只执行一次，频率较高的事件中使用来提高性能
   - 函数防抖关注一定时间连续触发的事件，只在最后执行一次，而函数节流一段时间内只执行一次。例如，都设置时间频率为500ms，在2秒时间内，频繁触发函数，节流，每隔 500ms 就执行一次。防抖，则不管调动多少次方法，在2s后，只会执行一次



## 对函数式编程的理解

1. **概念**

   函数式编程是一种"编程范式"（programming paradigm），一种编写程序的方法论。

   主要的编程范式有三种：命令式编程，声明式编程和函数式编程。相比命令式编程，函数式编程更加强调程序执行的结果而非执行的过程，倡导利用若干简单的执行单元让计算结果不断渐进，逐层推导复杂的运算，而非设计一个复杂的执行过程。举个例子，将数组每个元素进行平方操作，命令式编程与函数式编程如下：

   ```js
   // 命令式编程
   var array = [0, 1, 2, 3]
   for(let i = 0; i < array.length; i++) {
       array[i] = Math.pow(array[i], 2)
   }
   // 函数式方式
   [0, 1, 2, 3].map(num => Math.pow(num, 2))
   ```

   简单来讲，就是要把过程逻辑写成函数，定义好输入参数，只关心它的输出结果。即是一种描述集合和集合之间的转换关系，输入通过函数都会返回有且只有一个输出值。函数实际上是一个关系，或者说是一种映射，而这种映射关系是可以组合的，一旦我们知道一个函数的输出类型可以匹配另一个函数的输入，那他们就可以进行组合

2. **纯函数**

   函数式编程旨在尽可能的提高代码的无状态性和不变性。要做到这一点，就要学会使用无副作用的函数，也就是纯函数。纯函数是对给定的输入返还相同输出的函数，并且要求你所有的数据都是不可变的，即纯函数=无状态+数据不可变。

   ```js
   let double = value=>value*2;
   ```

   特征如下：

   - 函数内部传入指定的值，就会返回确定唯一的值
   - 不会造成超出作用域的变化，例如修改全局变量或引用传递的参数

   优势：

   - 使用纯函数，我们可以产生可测试的代码

     ```js
     	test('double(2) 等于 4', () => {
       		expect(double(2)).toBe(4);
     	})
     ```

   - 不依赖外部环境计算，不会产生副作用，提高函数的复用性
   - 可读性更强 ，函数不管是否是纯函数 都会有一个语义化的名称，更便于阅读
   - 可以组装成复杂任务的可能性。符合模块化概念及单一职责原则

3. **高阶函数**

   高级函数，就是以函数作为输入或者输出的函数被称为高阶函数。通过高阶函数抽象过程，注重结果，如下面例子：

   ```js
   const forEach = function(arr,fn){
       for(let i=0;i<arr.length;i++){
           fn(arr[i]);
       }
   }
   let arr = [1,2,3];
   forEach(arr,(item)=>{
       console.log(item);
   })
   ```

   高阶函数存在缓存的特性，主要是利用闭包作用

   ```js
   const once = (fn)=>{
       let done = false;
       return function(){
           if(!done){
               fn.apply(this,fn);
           }else{
               console.log("该函数已经执行");
           }
           done = true;
       }
   }
   ```

4. **柯里化**

   柯里化是把一个多参数函数转化成一个嵌套的一元函数的过程

   ```js
   // 多参数柯里化；
   const curry = function(fn){
       return function curriedFn(...args){
           if(args.length<fn.length){
               return function(){
                   return curriedFn(...args.concat([...arguments]));
               }
           }
           return fn(...args);
       }
   }
   const fn = (x,y,z,a)=>x+y+z+a;
   const myfn = curry(fn);
   console.log(myfn(1)(2)(3)(1));
   ```

   柯里化的意义在于：

   - 让纯函数更纯，每次接受一个参数，松散解耦
   - 惰性执行

5. **组合和管道**

   组合函数，目的是将多个函数组合成一个函数

   ```js
   function afn(a){
       return a*2;
   }
   function bfn(b){
       return b*3;
   }
   const compose = (a,b)=>c=>a(b(c));
   let myfn =  compose(afn,bfn);
   console.log( myfn(2));
   ```

   组合函数与管道函数的意义在于：可以把很多小函数组合起来完成更复杂的逻辑

   ```js
   const compose = (...fns)=>val=>fns.reverse().reduce((acc,fn)=>fn(acc),val);
   //compose执行是从右到左的。而管道函数，执行顺序是从左到右执行的const pipe = (...fns)=>val=>fns.reduce((acc,fn)=>fn(acc),val);
   ```

6. **优缺点**

   优点：

   - 更好的管理状态：因为它的宗旨是无状态，或者说更少的状态，能最大化的减少这些未知、优化代码、减少出错情况
   - 更简单的复用：固定输入->固定输出，没有其他外部变量影响，并且无副作用。这样代码复用时，完全不需要考虑它的内部实现和外部影响
   - 更优雅的组合：往大的说，网页是由各个组件组成的。往小的说，一个函数也可能是由多个小函数组成的。更强的复用性，带来更强大的组合性
   - 隐性好处。减少代码量，提高维护性

   缺点：

   - 性能：函数式编程相对于指令式编程，性能绝对是一个短板，因为它往往会对一个方法进行过度包装，从而产生上下文切换的性能开销
   - 资源占用：在 JS 中为了实现对象状态的不可变，往往会创建新的对象，因此，它对垃圾回收所产生的压力远远超过其他编程方式
   - 递归陷阱：在函数式编程中，为了实现迭代，通常会采用递归操作



## 对尾调用的理解

1. **概念**

   在一个函数中输出一个函数，则这个函数可以被成为高阶函数。尾调用和它类似，如果一个函数返回的是另一个函数的调用结果，那么就被称为尾调用

   ```js
   function add(x, y) {
     return x + y;
   }
   function sum() {
     return add(1, 2);
   }
   ```

2. **尾递归**

   如果一个函数返回的是自己的调用结果就被称为尾递归。也就是说尾递归一定是尾调用，但尾调用不一定是尾递归。

   ```js
   function sum(n, result = 1) {
       if (n <= 1) return result;
     return sum(n - 1, result + n);
   }
   sum(10000); //  Maximum call stack size exceeded
   ```

3. **尾调用优化**

   对符合要求的尾调用函数，只在执行栈中保存最内层函数的执行上下文的一种实现。Javascript原来是不支持尾递归调用优化的，ES6中才开始规定程序引擎应在严格模式下使用尾调用优化。而且ECMAScript 6限定了尾位置不含闭包的尾调用才能进行优化。

   ```
   'use strict';
   function sum(n, result = 1) {
       if (n <= 1) return result;
     return sum(n - 1, result + n);
   }
   sum(10000);
   ```

4. **解决堆栈溢出报错**

   递归次数太多，导致 stack overflow。

   - for循环。根本原因是执行上下文太多导致的爆栈，那么不调用函数自然可以解决这个问题：

     ```js
     'use strict';
     function sum(n) {
         let res = 0;
         for (var i = 0; i < n; i++) {
             res += i;
         }
         return res;
     }
     const result = sum(3);
     console.log(result);
     ```

   - 某些情况下确实无法使用for循环，还是要调用函数，此时可以利用弹跳床函数，所谓弹跳床函数，相当于函数的一个中转站

     ```js
     function sum(n, result = 1) {
       if (n <= 1) return result;
         return sum.bind(null, n - 1, result + n);
     }
     ```

5. **默认关闭**

   既然尾调用优化如此高效，为何都默认关闭了这个特性呢？答案分为两方面：

   - **隐式优化问题**。由于引擎消除尾递归是隐式的，函数是否符合尾调用而被消除了尾递归很难被程序员自己辨别；
   - **调用栈丢失问题**。尾调用优化要求除掉尾调用执行时的调用堆栈，这将导致执行流中的堆栈信息丢失。

   Chrome下使用尾递归写法的方法依旧出现调用栈溢出的原因在于：

   - 直接原因： 各大浏览器（除了safari）根本就没部署尾调用优化；
   - 根本原因： 尾调用优化依旧有隐式优化和调用栈丢失的问题；

   既然尾调用优化是默认关闭的，是不是说尾调用没什么用了呢？其实不然，尾调用是函数式编程一个重要的概念，合理的应用尾调用可以大大提高我们代码的可读性和可维护性，相比带来的一点性能损失，写更优雅更易读的代码更为的重要



## 对伪数组的理解

1. **概念**

   就是拥有数组的可以存储多个值的特性并拥有长度length属性 但是不拥有普通数组的内置方法 例如push pop slice等方法 

2. **哪些**

   -  DOM元素结构 jq获取的元素 
   - arguments

3. **转为普通数组**

   - Array.prototype.slice.call(arr)
   - Array.from(arr)
   - 扩展符



## ES6 模块与 CommonJS 模块的异同

1. **语法**

   **CommonJS 的模块导出和导入方式：**

   - 模块通过module.exports对象导出，其他模块可以通过require()函数来导入所需的模块 
   - 模块作用域：CommonJS 采用全局模块作用域，意味着所有模块中的变量和函数都是全局的，可能导致命名冲突
   - CommonJS 不支持循环依赖，即模块 A 依赖模块 B，而模块 B 又依赖模块 A。这在一些情况下可能会导致问题。

   **ES6 Module 的导出和导入方式：**

   - 模块通过export导出，其他模块可以通过import函数来导入所需的模块 
   - 支持默认导出export default和默认导入
   - 避免命名冲突：每个模块都有自己的独立命名空间，避免了全局命名空间中的命名冲突问题。

2. **加载时机**
   CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

   - 因为 CommonJS 加载的是一个对象（即module.exports属性），该对象只有在脚本运行完才会生成。
   - 而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

3. **值的引用**

   CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。

   - CommonJS 模块输出的是值的拷贝，也就是说，一旦输出一个值，模块内部的变化就影响不到这个值
   - ES6 模块的运行机制与 CommonJS 不一样。JS 引擎对脚本静态分析的时候，遇到模块加载命令import，就会生成一个只读引用**。**等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。

4. **同步还是异步**

   - CommonJS规范加载模块是同步的，也就是说，只有加载完成，才能执行后面的操作。由于Node.js主要用于服务器编程，模块文件一般都已经存在于本地硬盘，所以加载起来比较快，不用考虑非同步加载的方式，所以CommonJS规范比较适用
   - 但是，如果是浏览器环境，要从服务器端加载模块，这时就必须采用异步模式。浏览器加载 ES6 模块是异步加载，不会造成堵塞浏览器，即等到整个页面渲染完，再执行模块脚本



## let 、const 和 var的区别

1. **变量提升**

   var声明的变量存在变量提升，即变量可以在声明之前调用，值为undefined

   let和const不存在变量提升，即它们所声明的变量一定要在声明后使用，否则报错

   ```js
   // var
   console.log(a)  // undefined
   var a = 10
   // let 
   console.log(b)  // Cannot access 'b' before initialization
   let b = 10
   // const
   console.log(c)  // Cannot access 'c' before initialization
   const c = 10
   ```

2. **暂时性死区**

   var不存在暂时性死区

   let和const存在暂时性死区，只有等到声明变量的那一行代码出现，才可以获取和使用该变量

   ```js
   // var
   console.log(a)  // undefined
   var a = 10
   // let
   console.log(b)  // Cannot access 'b' before initialization
   let b = 10
   // const
   console.log(c)  // Cannot access 'c' before initialization
   const c = 10
   ```

3. **块级作用域**

   var不存在块级作用域
   let和const存在块级作用域

   ```js
   // var
   {
       var a = 20
   }
   console.log(a)  // 20
   
   // let
   {
       let b = 20
   }
   console.log(b)  // Uncaught ReferenceError: b is not defined
   
   // const
   {
       const c = 20
   }
   console.log(c)  // Uncaught ReferenceError: c is not defined
   ```

4. **重复声明**

   var允许重复声明变量
   let和const在同一作用域不允许重复声明变量

   ```js
   // var
   var a = 10
   var a = 20 // 20
   // let
   let b = 10
   let b = 20 // Identifier 'b' has already been declared
   // const
   const c = 10
   const c = 20 // Identifier 'c' has already been declared
   ```

5. **修改声明的变量**

   var和let可以
   const声明一个只读的常量。一旦声明，常量的值就不能改变

   ```js
   // var
   var a = 10
   a = 20
   console.log(a)  // 20
   //let
   let b = 10
   b = 20
   console.log(b)  // 20
   // const
   const c = 10
   c = 20
   console.log(c) // Uncaught TypeError: Assignment to constant variable
   ```

6. **使用**

   能用const的情况尽量使用const，其他情况下大多数使用let，避免使用var。

   

## const 对象的属性可以修改吗

1. **对于基本类型**

   const 保证的并不是变量的值不能改动，而是变量指向的那个内存地址不能改动。对于基本类型的数据（数值、字符串、布尔值），其值就保存在变量指向的那个内存地址，因此等同于常量。

2. **对于引用类型**

   但对于引用类型的数据（主要是对象和数组）来说，变量指向数据的内存地址，保存的只是一个指针，const 只能保证这个指针是固定不变的，至于它指向的数据结构是不是可变的，就完全不能控制了。

   

## 扩展运算符的作用及使用场景

1. **对象扩展运算符**

   - 浅拷贝

     ```js
     // 用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
     let bar = {a:1,b:2};
     let baz = {...bar}; //{a:1,b:2}
     // 上述方法实际上等价于
     let bar = {a:1,b:2};
     let baz = Object.assign({},bar); //{a:1,b:2}
     ```

   - 修改对象的部分属性

     ```js
     // 如果用户自定义的属性，放在扩展运算符后面，则扩展运算符内部的同名属性会被覆盖掉
     let bar = {a:1,b:2};
     let baz = {...bar,...{a:2,b:4}}; //{a:2,b:4}
     ```

2. **数组扩展运算符**

   - 将数组转换为参数序列

     ```js
     function add(x,y){
         return x + y;
     }
     const numbers = [1,2];
     add(...numbers); //3
     ```

   - 复制数组

     ```js
     const arr1 = [1,2];
     const arr2 = [...arr1];
     // 要记住：扩展运算符(…)用于取出参数对象中的所有可遍历属性，拷贝到当前对象之中
     // 这里参数对象是个数组，数组里面的所有对象都是基础数据类型，将所有基础数据类型重新拷贝到新的数组中
     ```

   - 合并数组

     ```js
     const arr1 = ['two','three'];
     const arr2 = ['one',...arr1,'four','five']; //one,two,three,four,five
     ```

   - 生成数组

     ```js
     // 扩展运算符与解构赋值结合起来，用于生成数组
     const [first,...rest] = [1,2,3,4,5];
     first //1
     rest // [2,3,4,5]
     ```

   - 其他数据结构转为数组

     ```js
     // 将字符串转为真正的数组
     [...'hello'] //['h','e','l','l','o']
     // 任何 Iterator 接口的对象，都可以用扩展运算符转为真正的数组
     // 比较常见的应用是可以将某些数据结构转为数组
     function foo(){ 
         const args = [...arguments]; //arguments对象
     }
     // 用于替换 es5 中的 Array.prototype.slice.call(arguments)写法
     ```



## 对for-of 的理解

1. **原理**

   通过方法调用(遍历器方法)来实现集合的遍历。数组、Maps、Sets 以及其他对象之间有个共同点：有迭代器方法。迭代器(iterator)有一个 next 方法，for 循环会不断调用这个 iterator.next 方法来获取下一个值,直到返回值中的 done 属性为 true 的时候结束循环 

2. **遍历器**

   它是一种接口， 为各种不同的数据结构提供统一的访问机制。 任何数据结构只要部署 Iterator 接口， 就可以完成遍历操作（ 即依次处理该数据结构的所有成员），遍历过程是这样的 ：

   - 创建一个指针对象， 指向当前数据结构的起始位置。 也就是说， 遍历器对象本质上， 就是一个指针对象。
   -  第一次调用指针对象的 next 方法， 可以将指针指向数据结构的第一个成员。 
   -  第二次调用指针对象的 next 方法， 指针就指向数据结构的第二个成员。 
   - 不断调用指针对象的 next 方法， 直到它指向数据结构的结束位置。 每一次调用 next 方法， 都会返回数据结构的当前成员的信息。 具体来说， 就是返回一个包含 value 和 done 两个属性的对象。 其中， value 属性是当前成员的值， done 属性是一个布尔值， 表示遍历是否结束



## for...in 和 for...of 的区别

for…of 是 ES6 新增的遍历方式，允许遍历一个含有 iterator 接口的数据结构（数组、对象等）并且返回各项的值，和 ES3 中的 for…in 的区别如下：

- for…of 遍历获取的是对象的键值，for…in 获取的是对象的键名；
- for… in 会遍历对象的整个原型链，性能非常差不推荐使用，而for … of 只遍历当前对象不会遍历原型链；
- 对于数组的遍历，for…in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)，for…of 只返回数组的下标对应的属性值；

总结：

- for...in 循环主要是为了遍历对象而生，不适用于遍历数组；
- for...of 循环可以用来遍历数组、类数组对象，字符串、Set、Map 以及 Generator 对象

```js
Object.prototype.objCustom = function() {}; 
Array.prototype.arrCustom = function() {};

let iterable = [3, 5, 7];
iterable.foo = 'hello';

for (let i in iterable) {
 console.log(i); // 0, 1, 2, "foo", "arrCustom", "objCustom"
}

for (let i in iterable) {
 if (iterable.hasOwnProperty(i)) {
  console.log(i); // 0, 1, 2, "foo"
 }
}

for (let i of iterable) {
 console.log(i); // logs 3, 5, 7
}
```



## 属性的遍历

1. **for…in**

   循环遍历对象：自身的和继承的可枚举属性，不含 Symbol 属性

2. **Object.keys(obj)**

   返回一个数组，包括：对象自身的（不含继承的）所有可枚举属性，（不含 Symbol 属性）的键名

3. **Object.getOwnPropertyNames(obj)**

   返回一个数组，包含：对象自身的所有属性（不含 Symbol 属性，但是包括不可枚举属性）的键名

4. **Object.getOwnPropertySymbols(obj)**

   返回一个数组，包含：对象自身的所有 Symbol 属性的键名

5. **Reflect.ownKeys(obj)**

   返回一个数组，包含：对象自身的（不含继承的）所有键名，不管键名是 Symbol 或字符串，也不管是否可枚举



## Map、Set、Object 和 Array的区别

1. **Set**

   是一种叫做集合（是由一堆无序的、相关联的，且不重复的内存结构【数学中称为元素】组成的组合）的数据结构。类似于数组，但是成员的值都是唯一的(Set 可以自动去重)，没有重复的值，我们一般称为集合。

   常用的方法：

   - 增删改查：add()、delete()、has()、clear()

     ```js
     // add() 添加某个值，返回 Set 结构本身,当添加实例中已经存在的元素，set不会进行处理添加
     s.add(1).add(2).add(2); // 2只被添加了一次
     // delete() 删除某个值，返回一个布尔值，表示删除是否成功
     s.delete(1)
     // has() 返回一个布尔值，判断该值是否为Set的成员
     s.has(2)
     // clear() 清除所有成员，没有返回值
     s.clear()
     ```

   - 遍历：keys()、values()、entries()、forEach()

     ```js
     // keys方法返回的都是遍历器对象
     let set = new Set(['red', 'green', 'blue']);
     for (let item of set.keys()) {
       console.log(item); // red green blue
     }
     // values方法返回的都是遍历器对象
     let set = new Set(['red', 'green', 'blue']);
     for (let item of set.values()) {
       console.log(item);  // red green blue
     }
     // entries方法返回的都是遍历器对象
     let set = new Set(['red', 'green', 'blue']);
     for (let item of set.entries()) {
       console.log(item); // ["red", "red"]  ["green", "green"] ["blue", "blue"]
     }
     // forEach()用于对每个成员执行某种操作，没有返回值，键值、键名都相等，第二个参数，用于绑定处理函数的this
     let set = new Set([1, 4, 9]);
     set.forEach((value, key) => console.log(key + ' : ' + value))
     // 1 : 1  4 : 4  9 : 9
     ```

   用法：

   - 数组或字符串去重

     ```js
     // 数组
     let arr = [3, 5, 2, 2, 5, 5];
     let unique = [...new Set(arr)]; // [3, 5, 2]
     // 字符串
     let str = "352255";
     let unique = [...new Set(str)].join(""); // "352"
     ```

   - 实现并集、交集、和差集

     ```js
     let a = new Set([1, 2, 3]);
     let b = new Set([4, 3, 2]);
     // 并集
     let union = new Set([...a, ...b]);  // Set {1, 2, 3, 4}
     // 交集
     let intersect = new Set([...a].filter(x => b.has(x))); // set {2, 3}
     // （a 相对于 b 的）差集
     let difference = new Set([...a].filter(x => !b.has(x))); // Set {1}
     ```

2. **WeakSet**

   创建：

   ```js
   const ws = new WeakSet();
   WeakSet可以接受一个具有 Iterable接口的对象作为参数
   const a = [[1, 2], [3, 4]];
   const ws = new WeakSet(a);
   // WeakSet {[1, 2], [3, 4]}
   ```

   在API中WeakSet与Set有两个区别：

   - 没有遍历操作的API
   - 没有size属性

   WeakSet成员只能是引用类型，而不能是其他类型的值。WeakSet里面的引用只要在外部消失，它在 WeakSet里面的引用就会自动消失

   ```js
   let ws=new WeakSet();
   // 成员不是引用类型
   let weakSet=new WeakSet([2,3]);
   console.log(weakSet) // 报错
   // 成员为引用类型
   let obj1={name:1}
   let obj2={name:1}
   let ws=new WeakSet([obj1,obj2]); 
   console.log(ws) //WeakSet {{…}, {…}}
   ```

3. **Map**

   是一种叫做字典（是一些元素的集合。每个元素有一个称作key 的域，不同元素的key 各不相同）的数据结构。

   和object的区别：

   - Object 是无序结构，key 为两种类型：字符串类型或 symbol 类型。Chrome Opera 中使用 for-in 语句遍历 Object 属性时会遵循一个规律：它们会先提取所有 key 的 parseFloat 值为非负整数的属性，然后根据数字顺序对属性排序首先遍历出来，然后按照对象定义的顺序遍历余下的所有属性。其它浏览器则完全按照对象定义的顺序遍历属性
   - Map类型是键值对的有序列表，而键和值都可以是任意类型 。Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。

   常用的方法：

   - 增删改查：size 属性、set()、get()、has()、delete()、clear()

     ```js
     // size属性返回 Map 结构的成员总数。
     const map = new Map();
     map.set('foo', true);
     map.set('bar', false);
     map.size // 2
     // 设置键名key对应的键值为value，然后返回整个Map结构,可采用链式写法;如果key已经有值，则键值会被更新，否则就新生成该键
     const m = new Map();
     m.set('edition', 6)        // 键是字符串
     m.set(262, 'standard')     // 键是数值
     m.set(undefined, 'nah')    // 键是 undefined
     m.set(1, 'a').set(2, 'b').set(3, 'c') // 链式操作
     // get方法读取key对应的键值，如果找不到key，返回undefined
     const m = new Map();
     const hello = function() {console.log('hello');};
     m.set(hello, 'Hello ES6!') // 键是函数
     m.get(hello)  // Hello ES6!
     // has方法返回一个布尔值，表示某个键是否在当前 Map 对象之中
     const m = new Map();
     m.set('edition', 6);
     m.set(262, 'standard');
     m.set(undefined, 'nah');
     m.has('edition')     // true
     m.has('years')       // false
     m.has(262)           // true
     m.has(undefined)     // true
     // delete方法删除某个键，返回true。如果删除失败，返回false
     const m = new Map();
     m.set(undefined, 'nah');
     m.has(undefined)     // true
     m.delete(undefined)
     m.has(undefined)       // false
     // clear方法清除所有成员，没有返回值
     let map = new Map();
     map.set('foo', true);
     map.set('bar', false);
     map.size // 2
     map.clear()
     map.size // 0
     ```

   - 遍历：keys()、values()、entries()、forEach()

     ```js
     const map = new Map([
       ['F', 'no'],
       ['T',  'yes'],
     ]);
     for (let key of map.keys()) {
       console.log(key); // "F" "T"
     }
     for (let value of map.values()) {
       console.log(value);  // "no"  "yes"
     }
     
     for (let item of map.entries()) {
       console.log(item[0], item[1]); // 
     }
     // 或者
     for (let [key, value] of map.entries()) {
       console.log(key, value); 
     }
     // 等同于使用map.entries()
     for (let [key, value] of map) {
       console.log(key, value); // "F" "no"  "T" "yes"
     }
     map.forEach(function(value, key, map) {
       console.log("Key: %s, Value: %s", key, value);
     });
     ```

4. **WeakMap**

   与Map结构类似，也是用于生成键值对的集合。

   ```js
   let ws=new WeakSet();
   
   const wm1 = new WeakMap();
   const key = {foo: 1};
   wm1.set(key, 2);
   wm1.get(key) // 2
   
   // WeakMap 也可以接受一个数组，
   // 作为构造函数的参数
   const k1 = [1, 2, 3];
   const k2 = [4, 5, 6];
   const wm2 = new WeakMap([[k1, 'foo'], [k2, 'bar']]);
   wm2.get(k2) // "bar"
   ```

   与Map的区别：在API中WeakMap与Map有两个区别：

   - 没有遍历操作的API
   - 没有clear清空方法

   WeakMap只接受对象作为键名（null除外），不接受其他类型的值作为键名。WeakMap的键名所指向的对象，一旦不再需要，里面的键名对象和所对应的键值对会自动消失，不用手动删除引用

   ```js
   const map = new WeakMap();
   map.set(1, 2)
   // TypeError: 1 is not an object!
   map.set(Symbol(), 2)
   // TypeError: Invalid value used as weak map key
   map.set(null, 2)
   // TypeError: Invalid value used as weak map key
   ```

   注意：WeakMap 弱引用的只是键名，而不是键值。键值依然是正常引用。下面代码中，键值obj会在WeakMap产生新的引用，当你修改obj不会影响到内部

   ```js
   const wm = new WeakMap();
   let key = {};
   let obj = {foo: 1};
   wm.set(key, obj);
   obj = null;
   wm.get(key)
   // Object {foo: 1}
   ```

   键只能使用对象的原因，是为了保证只有通过键对象的引用来取得值

   ```js
   const m = new WeakMap()
   m.set({}, 100) // 由于 {} 没有在其他地方引用，所以在垃圾回收时，这个值也会被回收。
   const a = {}
   m.set(a, 100) // 如果使用这种方式，则不会被回收。因为 {} 有 a 变量在引用它。
   a = null // 将 a 置为空后，m 里的值 100 在垃圾回收时将会被回收
   // 如果允许原始值，那就没办法区分初始化时使用的字符串字面量和初始化之后使用的一个相等的字符串了
   const a = {} // 在创建对象时，分配了一块内存，并把这块内存的地址传给 a 
   m.set(a, 100) // 执行 set 操作时，实际上是将 a 指向的内存地址和 100 关联起来
   const a = 'abc' // 由于基本数据类型在传递时，传递的是值，而不是引用。
   m.set(a, 100) // 所以执行 set 操作时，实际上是将新的 'abc' 和 100 关联起来，而不是原来 a 变量指向的那个。
   // 那这样就会有问题，m 里存储的永远是没有被引用的键，随时都会被回收。
   ```

   在网页的 DOM 元素上添加数据，就可以使用WeakMap结构，当该 DOM 元素被清除，其所对应的WeakMap记录就会自动被移除

   ```js
   const wm = new WeakMap();
   const element = document.getElementById('example');
   wm.set(element, 'some information');
   wm.get(element) // "some information"
   ```



## 异步编程的实现方式

1. **回调函数**

   使用回调函数的方式有一个缺点是，多个回调函数嵌套的时候会造成回调函数地狱，上下两层的回调函数间的代码耦合度太高，不利于代码的可维护

   ```js
   fs.readFile('/etc/fstab', function (err, data) {
     if (err) throw err;
     console.log(data);
     fs.readFile('/etc/shells', function (err, data) {
       if (err) throw err;
       console.log(data);
     });
   });
   ```

2. **事件监听**

   任务的执行不取决于代码的顺序，而取决于某个事件是否发生。
   这种方法的优点是比较容易理解，可以绑定多个事件，每个事件可以指定多个回调函数，而且可以"去耦合"（Decoupling），有利于实现模块化。缺点是整个程序都要变成事件驱动型，运行流程会变得很不清晰

3. **发布订阅**

   假定，存在一个"信号中心"，某个任务执行完成，就向信号中心"发布"（publish）一个信号，其他任务可以向信号中心"订阅"（subscribe）这个信号，从而知道什么时候自己可以开始执行。这就叫做"发布/订阅模式"（publish-subscribe pattern），又称"观察者模式"（observer pattern）。
   这种方法的性质与"事件监听"类似，但是明显优于后者。因为我们可以通过查看"消息中心"，了解存在多少信号、每个信号有多少订阅者，从而监控程序的运行

4. **promise**

   使用 Promise 的方式可以将嵌套的回调函数作为链式调用。但是使用这种方法，有时会造成多个 then 的链式调用，可能会造成代码的语义不够明确

   ```js
   const fs = require('fs');
   
   const readFile = function (fileName) {
     return new Promise(function (resolve, reject) {
       fs.readFile(fileName, function(error, data) {
         if (error) return reject(error);
         resolve(data);
       });
     });
   };
   readFile('/etc/fstab').then(data =>{
       console.log(data)
       return readFile('/etc/shells')
   }).then(data => {
       console.log(data)
   })
   ```

5. **Generator函数**

   它可以在函数的执行过程中，将函数的执行权转移出去，在函数外部还可以将执行权转移回来。当遇到异步函数执行的时候，将函数执行权转移出去，当异步函数执行完毕时再将执行权给转移回来。因此在 generator 内部对于异步操作的方式，可以以同步的顺序来书写。使用这种方式需要考虑的问题是何时将函数的控制权转移回来，因此需要有一个自动执行 generator 的机制，比如说 co 模块等方式来实现 generator 的自动执行

   ```js
   var fetch = require('node-fetch');
   function* gen(){
     var url = 'https://api.github.com/users/github';
     var result = yield fetch(url);
     console.log(result.bio);
   }
   var g = gen();
   var result = g.next();
   result.value.then(function(data){
     return data.json();
   }).then(function(data){
     g.next(data);
   });
   ```

6. **async函数**

   是 generator 和 promise 实现的一个自动执行的语法糖，它内部自带执行器，当函数内部执行到一个await 语句的时候，如果语句返回一个 promise 对象，那么函数将会等待 promise 对象的状态变为 resolve 后再继续向下执行。因此可以将异步逻辑，转化为同步的顺序来书写，并且这个函数可以自动执行。

   ```js
   const asyncReadFile = async function () {
     const f1 = await readFile('/etc/fstab');
     const f2 = await readFile('/etc/shells');
     console.log(f1.toString());
     console.log(f2.toString());
   };
   ```



## 对Proxy 的理解

1. **概念**

   用于定义基本操作的自定义行为。**本质是**修改的是程序默认形为，就形同于在编程语言层面上做修改，属于元编程。元编程（Metaprogramming，又译超编程，是指某类计算机程序的编写，这类计算机程序编写或者操纵其它程序（或者自身）作为它们的数据，或者在运行时完成部分本应在编译时完成的工。元编程优点：与手工编写全部代码相比，程序员可以获得更高的工作效率，或者给与程序更大的灵活度去处理新的情形而无需重新编译。Proxy 亦是如此，用于创建一个对象的代理，从而实现基本操作的拦截和自定义（如属性查找、赋值、枚举、函数调用等）

2. **用法**

   ```js
   var proxy = new Proxy(target, handler)
   Proxy.revocable(target, handler); // 取消代理
   ```

   target表示所要拦截的目标对象（任何类型的对象，包括原生数组，函数，甚至另一个代理）

   handler通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为。关于handler拦截属性，有如下：

   ```js
   get(target,propKey,receiver)：拦截对象属性的读取
   set(target,propKey,value,receiver)：拦截对象属性的设置
   has(target,propKey)：拦截propKey in proxy的操作，返回一个布尔值
   deleteProperty(target,propKey)：拦截delete proxy[propKey]的操作，返回一个布尔值
   ownKeys(target)：拦截Object.keys(proxy)、for...in等循环，返回一个数组
   getOwnPropertyDescriptor(target, propKey)：拦截Object.getOwnPropertyDescriptor(proxy, propKey)，返回属性的描述对象
   defineProperty(target, propKey, propDesc)：拦截Object.defineProperty(proxy, propKey, propDesc），返回一个布尔值
   preventExtensions(target)：拦截Object.preventExtensions(proxy)，返回一个布尔值
   getPrototypeOf(target)：拦截Object.getPrototypeOf(proxy)，返回一个对象
   isExtensible(target)：拦截Object.isExtensible(proxy)，返回一个布尔值
   setPrototypeOf(target, proto)：拦截Object.setPrototypeOf(proxy, proto)，返回一个布尔值
   apply(target, object, args)：拦截 Proxy 实例作为函数调用的操作
   construct(target, args)：拦截 Proxy 实例作为构造函数调用的操作
   ```

   若需要在Proxy内部调用对象的默认行为，建议使用Reflect，其是ES6中操作对象而提供的新 API

   基本特点：

   - 只要Proxy对象具有的代理方法，Reflect对象全部具有，以静态方法的形式存在
   - 修改某些Object方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回false）
   - 让Object操作都变成函数行为

   例子如下：

   ```js
   // get接受三个参数，依次为目标对象、属性名和 proxy 实例本身，最后一个参数可选
   var person = {
     name: "张三"
   };
   var proxy = new Proxy(person, {
     get: function(target, propKey) {
       return Reflect.get(target,propKey)
     }
   });
   proxy.name // "张三"
   
   // set方法用来拦截某个属性的赋值操作，可以接受四个参数，依次为目标对象、属性名、属性值和 Proxy 实例本身
   let validator = {
     set: function(obj, prop, value) {
       if (prop === 'age') {
         if (!Number.isInteger(value)) {
           throw new TypeError('The age is not an integer');
         }
         if (value > 200) {
           throw new RangeError('The age seems invalid');
         }
       }
   
       // 对于满足条件的 age 属性以及其他属性，直接保存
       obj[prop] = value;
     }
   };
   
   let person = new Proxy({}, validator);
   person.age = 100;
   person.age // 100
   person.age = 'young' // 报错
   person.age = 300 // 报错
   
   // deleteProperty方法用于拦截delete操作，如果这个方法抛出错误或者返回false，当前属性就无法被delete命令删除
   var handler = {
     deleteProperty (target, key) {
       invariant(key, 'delete');
       Reflect.deleteProperty(target,key)
       return true;
     }
   };
   function invariant (key, action) {
     if (key[0] === '_') {
       throw new Error(`无法删除私有属性`);
     }
   }
   var target = { _prop: 'foo' };
   var proxy = new Proxy(target, handler);
   delete proxy._prop // Error: 无法删除私有属性
   ```

3. 使用场景

   -  保障数据类型的准确性

     ```js
     let numericDataStore = {count: 0, amount: 1234, total: 14 };
     numericDataStore = new Proxy(numericDataStore, {
         set(target, key, value, proxy) {
             if (typeof value !== 'number') {
                 throw Error("属性只能是number类型");
             }
             return Reflect.set(target, key, value, proxy);
         }
     });
     numericDataStore.count = "foo"
     // Error: 属性只能是number类型
     numericDataStore.count = 333
     // 赋值成功
     ```

   - 拦截和监视外部对对象的访问

     ```js
     let api = {
         _apiKey: '123abc456def',
         getUsers: function(){ },
         getUser: function(userId){ },
         setUser: function(userId, config){ }
     };
     const RESTRICTED = ['_apiKey'];
     api = new Proxy(api, {
         get(target, key, proxy) {
             if(RESTRICTED.indexOf(key) > -1) {
                 throw Error(`${key} 不可访问.`);
             } 
     		return Reflect.get(target, key, proxy);
         },
         set(target, key, value, proxy) {
             if(RESTRICTED.indexOf(key) > -1) {
                 throw Error(`${key} 不可修改`);
             } 
     		return Reflect.get(target, key, value, proxy);
         }
     });
     console.log(api._apiKey)
     api._apiKey = '987654321'
     // 上述都抛出错误
     ```

   - 实现观察者模式

     ```js
     const queuedObservers = new Set();
     const observe = fn => queuedObservers.add(fn);
     const observable = obj => new Proxy(obj, {set});
     function set(target, key, value, receiver) {
       const result = Reflect.set(target, key, value, receiver);
       queuedObservers.forEach(observer => observer());
       return result;
     }
     ```

   - vue3响应式

     ```js
     // 在Vue3.0中通过Proxy来替换原本的Object.defineProperty来实现数据响应式。下面来通过 Proxy 来实现一个数据响应式：
     let onWatch = (obj,setBind,getLogger)=>{
         let handler = {
             get(target,property,receiver){
                 getLogger(target,property)
                 return Reflect.get(target,property,receiver);
             },
             set(target,property,value,receiver){
                 setBind(value,propery)
                 return Reflect.set(target,property,value); 
             }
         }
         return new Proxy(obj.handler);
     }
     let obj = {a:1};
     let p =onWatch(obj,(v,property)=>{
         console.log(`监听到属性${property}改变为${v}`);
     },(target,property)=>{
         console.log(`${property}=${target[property]}`);
     });
     p.a = 2 //监听到属性a改变为2--'a' = 2
     ```

     在上述代码中，通过自定义 set 和 get 函数的方式，在原本的逻辑中插入了我们的函数逻辑，实现了在对对象任何属性进行读写时发出通知。当然这是简单版的响应式实现，如果需要实现一个 Vue 中的响应式，需要在 get 中收集依赖，在 set 派发更新。之所以 Vue3.0 要使用Proxy 替换原本的 API 原因在于 Proxy 无需一层层递归为每个属性添加代理，一次即可完成以上操作，性能上更好，并且原本的实现有一些数据更新不能监听到，但是 Proxy 可以完美监听到任何方式的数据改变，唯一缺陷就是浏览器的兼容性不好。



## 对 Promise 的理解

1. **概念**

   Promise 是异步编程的一种解决方案，它是一个对象，可以获取异步操作的消息，他的出现大大改善了异步编程的困境，避免了地狱回调，它比传统的解决方案回调函数和事件更合理和更强大。

   ```js
   doSomething(function(result) {
     doSomethingElse(result, function(newResult) {
       doThirdThing(newResult, function(finalResult) {
         console.log('得到最终结果: ' + finalResult);
       }, failureCallback);
     }, failureCallback);
   }, failureCallback);
   ```

   Promise 的实例有三个状态：

   - Pending（进行中）
   - Resolved（已完成）
   - Rejected（已拒绝）

   特点是：

   - 对象的状态不受外界影响，只有异步操作的结果，可以决定当前是哪一种状态
   - 一旦状态改变（从pending变为fulfilled和从pending变为rejected），就不会再变，任何时候都可以得到这个结果

2. **用法**

   Promise对象是一个构造函数，用来生成Promise实例

   ```js
   const promise = new Promise(function(resolve, reject) {});
   ```

   Promise构造函数接受一个函数作为参数，该函数的两个参数分别是resolve和reject

   - resolve函数的作用是，将Promise对象的状态从“未完成”变为“成功”
   - reject函数的作用是，将Promise对象的状态从“未完成”变为“失败”

   Promise实例方法有以下这些：

   - then：是实例状态发生改变时的回调函数，第一个参数是resolved状态的回调函数，第二个参数是rejected状态的回调函数。then方法返回的是一个新的Promise实例，也就是promise能链式书写的原因

     ```js
     getJSON("/posts.json").then(function(json) {
       return json.post;
     }).then(function(post) {
       // ...
     });
     ```

   - catch：是.then(null, rejection)或.then(undefined, rejection)的别名，用于指定发生错误时的回调函数

     ```js
     etJSON('/posts.json').then(function(posts) {
       // ...
     }).catch(function(error) {
       // 处理 getJSON 和 前一个回调函数运行时发生的错误
       console.log('发生错误！', error);
     });
     // Promise对象的错误具有“冒泡”性质，会一直向后传递，直到被捕获为止
     const someAsyncThing = function() {
       return new Promise(function(resolve, reject) {
         // 下面一行会报错，因为x没有声明
         resolve(x + 2);
       });
     };
     ```

   - finally：用于指定不管 Promise 对象最后状态如何，都会执行的操作

     ```js
     promise
     .then(result => {···})
     .catch(error => {···})
     .finally(() => {···});
     ```

   构造函数方法（静态方法）如下：

   - Promise.all()：用于将多个 Promise实例，包装成一个新的 Promise实例。接受一个数组（迭代对象）作为参数，数组成员都应为Promise实例。

     ```js
     const p = Promise.all([p1, p2, p3]);
     ```

     实例p的状态由p1、p2、p3决定，分为两种：

     - 只有p1、p2、p3的状态都变成fulfilled，p的状态才会变成fulfilled，此时p1、p2、p3的返回值组成一个数组，传递给p的回调函数
     - 只要p1、p2、p3之中有一个被rejected，p的状态就变成rejected，此时第一个被reject的实例的返回值，会传递给p的回调函数

   - Promise.race()：同样是将多个 Promise 实例，包装成一个新的 Promise 实例。

     ```js
     const p = Promise.race([p1, p2, p3]);
     ```

     只要p1、p2、p3之中有一个实例率先改变状态，p的状态就跟着改。率先改变的 Promise 实例的返回值则传递给p的回调函数

   - Promise.any。该方法接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例返回。只要参数实例有一个变成fulfilled状态，包装实例就会变成fulfilled状态；如果所有参数实例都变成rejected状态，包装实例就会变成rejected状态。

     ```js
     const promises = [
       fetch('/endpoint-a').then(() => 'a'),
       fetch('/endpoint-b').then(() => 'b'),
       fetch('/endpoint-c').then(() => 'c'),
     ];
     
     try {
       const first = await Promise.any(promises);
       console.log(first);
     } catch (error) {
       console.log(error);
     }
     ```

   - Promise.allSettled。接受一组 Promise 实例作为参数，包装成一个新的 Promise 实例。只有等到所有这些参数实例都返回结果，不管是fulfilled还是rejected，包装实例才会结束。

     ```js
     const promises = [
       fetch('/api-1'),
       fetch('/api-2'),
       fetch('/api-3'),
     ];
     await Promise.allSettled(promises);
     removeLoadingIndicator();
     ```

   - Promise.resolve。参数可以分成四种情况，分别如下：

     - 参数是一个 Promise 实例，promise.resolve将不做任何修改、原封不动地返回这个实例
     - 参数是一个thenable对象，promise.resolve会将这个对象转为 Promise对象，然后就立即执行thenable对象的then()方法
     - 参数不是具有then()方法的对象，或根本就不是对象，Promise.resolve()会返回一个新的 Promise 对象，状态为resolved
     - 没有参数时，直接返回一个resolved状态的 Promise 对

     ```js
     Promise.resolve('foo')
     // 等价于
     new Promise(resolve => resolve('foo'))
     ```

   - Promise.reject()。返回一个新的 Promise 实例，该实例的状态为rejected。Promise.reject()方法的参数，会原封不动地变成后续方法的参数

     ```js
     const p = Promise.reject('出错了');
     // 等同于
     const p = new Promise((resolve, reject) => reject('出错了')) 
     p.then(null, function (s) {
       console.log(s)
     });                             
     // 出错了
     ```

3. 缺点

   - 无法取消 Promise，一旦新建它就会立即执行，无法中途取消。
   - 如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。
   - 当处于 pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。

4. 使用场景

   - 加载图片

     ```js
     const preloadImage = function (path) {
       return new Promise(function (resolve, reject) {
         const image = new Image();
         image.onload  = resolve;
         image.onerror = reject;
         image.src = path;
       });
     };
     ```

   - 各司其职

     ```js
     getInfo().then(res=>{
         let { bannerList } = res
         //渲染轮播图
         console.log(bannerList)
         return res
     }).then(res=>{
         
         let { storeList } = res
         //渲染店铺列表
         console.log(storeList)
         return res
     }).then(res=>{
         let { categoryList } = res
         console.log(categoryList)
         //渲染分类列表
         return res
     })
     ```

   - 加载loading

     ```js
     function initLoad(){
         // loading.show() //加载loading
         Promise.all([getBannerList(),getStoreList(),getCategoryList()]).then(res=>{
             console.log(res)
             loading.hide() //关闭loading
         }).catch(err=>{
             console.log(err)
             loading.hide()//关闭loading
         })
     }
     //数据初始化    
     initLoad()
     ```

   - 设置图片请求超时

     ```js
     //请求某个图片资源
     function requestImg(){
         var p = new Promise(function(resolve, reject){
             var img = new Image();
             img.onload = function(){
                resolve(img);
             }
             //img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg"; 正确的
             img.src = "https://b-gold-cdn.xitu.io/v3/static/img/logo.a7995ad.svg1";
         });
         return p;
     }
     //延时函数，用于给请求计时
     function timeout(){
         var p = new Promise(function(resolve, reject){
             setTimeout(function(){
                 reject('图片请求超时');
             }, 5000);
         });
         return p;
     }
     Promise
     .race([requestImg(), timeout()])
     .then(function(results){
         console.log(results);
     })
     .catch(function(reason){
         console.log(reason);
     });
     ```



## 对 async/await 的理解

1. **概念**

   是 Generator 的语法糖，它能实现的效果都能用then 链来实现，它是为优化 then 链而开发出来的。从字面上来看，async 是“异步”的简写，await 则为等待，所以很好理解 async 用于申明一个 function 是异步的，而 await 用于等待一个异步方法执行完成。当然语法上强制规定 await 只能出现在 asnyc 函数中。

2. **用法**

   async 函数返回的是一个 Promise 对象。async 函数（包含函数语句、函数表达式、Lambda 表达式）会返回一个 Promise 对象，

   - 如果在函数中 return 一个直接量，async 会把这个直接量通过Promise.resolve() 封装成 Promise 对象。
   - 在最外层不能用await 获取其返回值的情况下，当然应该用原来的方式：then() 链来处理这个 Promise 对象
   - 如果 async 函数没有返回值，会返回Promise.resolve(undefined)

   所以在没有 await 的情况下执行 async 函数，它会立即执行，返回一个 Promise 对象，并且，绝不会阻塞后面的语句。这和普通返回 Promise 对象的函数并无二致

3. 优势

   - **优化then**。单一的 Promise 链并不能发现 async/await 的优势，但是，如果需要处理由多个 Promise 组成的 then 链的时候，优势就能体现出来了（很有意思，Promise 通过 then 链来解决多层回调的问题，现在又用 async/await 来进一步优化它）。代码读起来更加同步，Promise 虽然摆脱了回调地狱，但是 then 的链式调⽤也会带来额外的阅读负担。Promise 传递中间值⾮常麻烦，⽽async/await⼏乎是同步的写法，⾮常优雅。
   - **错误处理友好**。async/await 可以⽤成熟的 try/catch，Promise 的错误捕获⾮常冗余
   - **调试友好。**Promise 的调试很差，由于没有代码块，你不能在⼀个返回表达式的箭头函数中设置断点，如果你在⼀个.then 代码块中使⽤调试器的步进(step-over)功能，调试器并不会进⼊后续的.then 代码块，因为调试器只能跟踪同步代码的每⼀步



## 对ES6中 Decorator 的理解

1. **概念**

   Decorator，即装饰器，从名字上很容易让我们联想到装饰者模式。简单来讲，装饰者模式就是一种在不改变原类和使用继承的情况下，动态地扩展对象功能的设计理论。ES6中Decorator功能亦如此，其本质也不是什么高大上的结构，就是一个普通的函数，用于扩展类属性和类方法

   ```js
   function strong(target){
       target.AK = true
   }
   @strong
   class soldier{
   }
   soldier.AK // true
   ```

2. **用法**

   - 类的装饰。当对类本身进行装饰的时候，能够接受一个参数，即类本身

     ```js
     function testable(isTestable) {
       return function(target) {
         target.isTestable = isTestable;
       }
     }
     @testable(true)
     class MyTestableClass {}
     MyTestableClass.isTestable // true
     @testable(false)
     class MyClass {}
     MyClass.isTestable // false
     ```

   - 类属性的装饰。能够接受三个参数：类的原型对象；需要装饰的属性名；装饰属性名的描述对象

     ```js
     function readonly(target, name, descriptor){
       descriptor.writable = false; // 将可写属性设为false
       return descriptor;
     }
     class Person {
       @readonly
       name() { return `${this.first} ${this.last}` }
     }
     // readonly(Person.prototype, 'name', descriptor);
     ```

   - 修饰函数：装饰器不能用于修饰函数，因为函数存在变量声明情况

   - 执行顺序：如果一个方法有多个装饰器，就像洋葱一样，先从外到内进入，再由内到外执行

     ```js
     function dec(id){
         console.log('evaluated', id);
         return (target, property, descriptor) =>console.log('executed', id);
     }
     class Example {
         @dec(1)
         @dec(2)
         method(){}
     }
     // evaluated 1 evaluated 2 executed 2 executed 1
     ```

3. **使用场景**

   - **react-redux**

     ```js
     @connect(mapStateToProps, mapDispatchToProps)
     export default class MyReactComponent extends React.Component {}
     ```

   - **minxins**

     ```js
     function mixins(...list) {
       return function (target) {
         Object.assign(target.prototype, ...list);
       };
     }
     // 使用
     const Foo = {
       foo() { console.log('foo') }
     };
     @mixins(Foo)
     class MyClass {}
     let obj = new MyClass();
     obj.foo() // "foo"
     ```

   - **core-decorators.js**

     ```js
     import { autobind, readonly  } from 'core-decorators';
     class Person {
       @autobind // autobind装饰器使得方法中的this对象，绑定原始对象
       getPerson() {
         return this;
       }
         
       @readonly
       entree = 'steak';
         
       @deprecate('功能废除了')
       facepalmHard() {}
     }
     let person = new Person();
     let getPerson = person.getPerson;
     getPerson() === person;  // true
     person.entree = 'salmon' // Cannot assign to read only property 'entree' of [object Object]
     person.facepalmHard(); // DEPRECATION Person#facepalmHard: 功能废除了
     ```



## 什么是 DOM

1. **概念**

   DOM 指的是文档对象模型，它指的是把文档当做一个对象，这个对象主要定义了处理网页内容的方法和接口。

2. **创建节点**

   - createElement

     ```js
     // 创建新元素，接受一个参数，即要创建元素的标签名
     const divEl = document.createElement("div");
     ```

   - createTextNode

     ```js
     // 创建一个文本节点
     const textEl = document.createTextNode("content");
     ```

   - createDocumentFragment

     ```js
     // 用来创建一个文档碎片，它表示一种轻量级的文档，主要是用来存储临时节点，然后把文档碎片的内容一次性添加到DOM中。
     // 当请求把一个DocumentFragment 节点插入文档树时，插入的不是 DocumentFragment自身，而是它的所有子孙节点
     const fragment = document.createDocumentFragment();
     ```

   - createAttribute

     ```js
     // 创建属性节点，可以是自定义属性
     const dataAttribute = document.createAttribute('custom');
     consle.log(dataAttribute);
     ```

3. **查询节点**

   - querySelector

     ```js
     // 传入任何有效的css 选择器，即可选中单个 DOM元素（首个）
     document.querySelector('.element')
     document.querySelector('#element')
     document.querySelector('div')
     document.querySelector('[name="username"]')
     document.querySelector('div + p > span')
     ```

   - querySelectorAll

     ```js
     // 返回一个包含节点子树内所有与之相匹配的Element节点列表，如果没有相匹配的，则返回一个空节点列表
     const notLive = document.querySelectorAll("p");
     ```

   - 其他

     ```js
     document.getElementById('id属性值'); //返回拥有指定id的对象的引用
     document.getElementsByClassName('class属性值'); //返回拥有指定class的对象集合
     document.getElementsByTagName('标签名'); // 返回拥有指定标签名的对象集合
     document.getElementsByName('name属性值'); // 返回拥有指定名称的对象结合
     document.documentElement;  // 获取页面中的HTML标签
     document.body; // 获取页面中的BODY标签
     ```

4. **更新节点**

   - innerHTML

     ```js
     // 不但可以修改一个DOM节点的文本内容，还可以直接通过HTML片段修改DOM节点内部的子树
     // 获取<p id="p">...</p >
     var p = document.getElementById('p');
     // 设置文本为abc:
     p.innerHTML = 'ABC'; // <p id="p">ABC</p >
     // 设置HTML:
     p.innerHTML = 'ABC <span style="color:red">RED</span> XYZ';
     // <p>...</p >的内部结构已修改
     ```

   - innerText、textContent

     ```js
     // 自动对字符串进行HTML编码，保证无法设置任何HTML标签。
     // 两者的区别在于读取属性时，innerText不返回隐藏元素的文本，而textContent返回所有文本
     // 获取<p id="p-id">...</p >
     var p = document.getElementById('p-id');
     // 设置文本:
     p.innerText = '<script>alert("Hi")</script>';
     // HTML被自动编码，无法设置一个<script>节点:
     // <p id="p-id">&lt;script&gt;alert("Hi")&lt;/script&gt;</p >
     ```

   - style

     ```js
     // DOM节点的style属性对应所有的CSS，可以直接获取或设置。遇到-需要转化为驼峰命名
     // 获取<p id="p-id">...</p >
     const p = document.getElementById('p-id');
     // 设置CSS:
     p.style.color = '#ff0000';
     p.style.fontSize = '20px'; // 驼峰命名
     p.style.paddingTop = '2em';
     ```

5. **添加节点**

   - innerHTML：如果这个DOM节点是空的，例如，`<div></div>`，那么，直接使用innerHTML = '<span>child</span>'就可以修改DOM节点的内容，相当于添加了新的DOM节点。如果这个DOM节点不是空的，那就不能这么做，因为innerHTML会直接替换掉原来的所有子节点

   - appendChild

     ```js
     // 把一个子节点添加到父节点的最后一个子节点
     const list = document.getElementById('list'),
     const haskell = document.createElement('p');
     haskell.id = 'haskell';
     haskell.innerText = 'Haskell';
     list.appendChild(haskell);
     ```

   - insertBefore

     ```js
     // 把子节点插入到指定的位置，使用方法如下：
     parentElement.insertBefore(newElement, referenceElement) // 子节点会插入到referenceElement之前
     ```

   - setAttribute

     ```js
     // 在指定元素中添加一个属性节点，如果元素中已有该属性改变属性值
     const div = document.getElementById('id')
     div.setAttribute('class', 'white');//第一个参数属性名，第二个参数属性值。
     ```

6. **删除节点**

   - removeChild：删除一个节点，首先要获得该节点本身以及它的父节点，然后，调用父节点的removeChild把自己删掉

     ```js
     // 拿到待删除节点:
     const self = document.getElementById('to-be-removed');
     // 拿到父节点:
     const parent = self.parentElement;
     // 删除:
     const removed = parent.removeChild(self);
     removed === self; // true
     // 删除后的节点虽然不在文档树中了，但其实它还在内存中，可以随时再次被添加到别的位置
     ```

     



## 什么是BOM

1. **概念**

   BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。

2. **核心对象**

   BOM 的核心是window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location 对象、navigator 对象、screen对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM的 window 对象的子对象。

3. **窗口控制方法**

   - 移动。

     - moveBy(x,y)：从当前位置水平移动窗体x个像素，垂直移动窗体y个像素，x为负数，将向左移动窗体，y为负数，将向上移动窗体
     - moveTo(x,y)：移动窗体左上角到相对于屏幕左上角的(x,y)点
     - resizeBy(w,h)：相对窗体当前的大小，宽度调整w个像素，高度调整h个像素。如果参数为负值，将缩小窗体，反之扩大窗体
     - resizeTo(w,h)：把窗体宽度调整为w个像素，高度调整为h个像素
     - scrollTo(x,y)：如果有滚动条，将横向滚动条移动到相对于窗体宽度为x个像素的位置，将纵向滚动条移动到相对于窗体高度为y个像素的位置
     - scrollBy(x,y)： 如果有滚动条，将横向滚动条向左移动x个像素，将纵向滚动条向下移动y个像素

   - 打开。window.open() 既可以导航到一个特定的url，也可以打开一个新的浏览器窗口。如果 window.open() 传递了第二个参数，且该参数是已有窗口或者框架的名称，那么就会在目标窗口加载第一个参数指定的URL

     ```js
     window.open('htttp://www.vue3js.cn','topFrame')
     ==> < a href=" " target="topFrame"></ a>
     ```

     window.open() 会返回新窗口的引用，也就是新窗口的 window 对象

     ```js
     const myWin = window.open('http://www.vue3js.cn','myWin')
     ```

   - 关闭。window.close() 仅用于通过 window.open() 打开的窗口。新创建的 window 对象有一个 opener 属性，该属性指向打开他的原始窗口对象。

4. **location**

   ```js
   http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q=javascript#contents
   ```

   除了 hash之外，只要修改location的一个属性，就会导致页面重新加载新URL。

   location.reload()，此方法可以重新刷新当前页面。这个方法会根据最有效的方式刷新页面，如果页面自上一次请求以来没有改变过，页面就会从浏览器缓存中重新加载如果要强制从服务器中重新加载，传递一个参数true即可。

5. **navigator**

   主要用来获取浏览器的属性，区分浏览器类型。属性较多，且兼容性比较复杂

6. **screen**

   保存的纯粹是客户端能力信息，也就是浏览器窗口外面的客户端显示器的信息，比如像素宽度和像素高度

7. **history**

   主要用来操作浏览器URL的历史记录，可以通过参数向前，向后，或者向指定URL跳转。常用的属性如下：

   - history.go()：接收一个整数数字或者字符串参数：向最近的一个记录中包含指定字符串的页面跳转，当参数为整数数字的时候，正数表示向前跳转指定的页面，负数为向后跳转指定的页面
   - history.forward()：向前跳转一个页面
   - history.back()：向后跳转一个页面
   - history.length：获取历史记录数



## 对 AJAX 的理解

1. **概念**

   AJAX 是 Asynchronous JavaScript and XML 的缩写，指的是通过JavaScript 的 异步通信，从服务器获取 XML 文档从中提取数据，再更新当前网页的对应部分，而不用刷新整个网页。

2. **步骤**

   - 创建 Ajax的核心对象 XMLHttpRequest对象

     ```js
     const request = new XMLHttpRequest()
     ```

   - 与服务器建立连接通过 XMLHttpRequest 对象的 open() 方法与服务端建立连接

     ```js
     request.open('POST','http://xxxx')
     ```

   - 给服务端发送数据构建请求所需的数据内容，并通过XMLHttpRequest 对象的 send() 方法发送给服务器端

     ```js
     request.send()
     ```

   - 通过 XMLHttpRequest 对象提供的 onreadystatechange 事件监听服务器端你的通信状态

     ```js
     request.onreadystatechange = function(e){
         if(request.readyState === 4){ // 整个请求过程完毕
             if(request.status >= 200 && request.status <= 300){
                 console.log(request.responseText) 
             }else if(request.status >=400){
                 console.log("错误信息：" + request.status)
             }
         }
     }
     ```

   - 接受并处理服务端向客户端响应的数据结果

   - 将处理结果更新到 HTML页面中

3. **实现**

   ```js
   function ajax(options) {
       //创建XMLHttpRequest对象
       const xhr = new XMLHttpRequest()
       //初始化参数的内容
       options = options || {}
       options.type = (options.type || 'GET').toUpperCase()
       options.dataType = options.dataType || 'json'
       const params = options.data
       //发送请求
       if (options.type === 'GET') {
           xhr.open('GET', options.url + '?' + params, true)
           xhr.send(null)
       } else if (options.type === 'POST') {
           xhr.open('POST', options.url, true)
           xhr.send(params)
       }
       //接收请求
       xhr.onreadystatechange = function () {
           if (xhr.readyState === 4) {
               let status = xhr.status
               if (status >= 200 && status < 300) {
                   options.success && options.success(xhr.responseText, xhr.responseXML)
               } else {
                   options.fail && options.fail(status)
               }
           }
       }
   }
   ```

   ```js
   function getJSON(url){
       //创建一个promise对象
       let promise = new Promise(function(resolve,reject){
           let xhr = new XMLHttpRequest();
           //新建一个http请求
           xhr.open("GET",url,true);
           //设置状态的监听函数
           xhr.onreadystatechange = function(){
               if(this.readyState !== 4) return;
               //当请求成功时
               if(this.status === 200){
                   resolve(this.response);
               }else{
                   reject(new Error(this.statusText));
               }
           }
           //设置请求失败时的监听函数
           xhr.onerror = function(){
               reject(new Error(this.statusText));
           }
           //设置请求头信息
           xhr.responseType = "json";
           xhr.setRequestHeader("Accept","application/json");
           //发送Http请求
           xhr.send(null);
       });
       return promise;
   }
   ```



## ajax、axios、fetch 的区别

1. **ajax**

   是指一种创建交互式网页应用的网页开发技术。它是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。通过在后台与服务器进行少量数据交换，Ajax 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。传统的网页（不使用 Ajax）如果需要更新内容，必须重载整个网页页面。

   其缺点如下：

   - 本身是针对 MVC 编程，不符合前端 MVVM 的浪潮
   - 基于原生 XHR 开发，XHR 本身的架构不清晰
   - 不符合关注分离（Separation of Concerns）的原则
   - 配置和调用方式非常混乱，而且基于事件的异步模型不友好

2. **fetch**

   号称是 AJAX 的替代品，是在 ES6 出现的，使用了 ES6 中的promise 对象。Fetch 是基于 promise 设计的。Fetch 的代码结构比起 ajax 简单多。fetch 不是 ajax 的进一步封装，而是原生 js，没有使用 XMLHttpRequest 对象。

   fetch 的优点：

   - 语法简洁，更加语义化
   - 基于标准 Promise 实现，支持 async/await
   - 更加底层，提供的 API 丰富（request, response）
   - 脱离了 XHR，是 ES 规范里新的实现方式

   fetch 的缺点：

   - fetch 只对网络请求报错，对 400，500 都当做成功的请求，服务器返回 400，500 错误码时并不会 reject，只有网络错误这些导致请求不能完成时，fetch 才会被 reject。
   - fetch 默认不会带 cookie ， 需要添加配置项 ： fetch(url,{credentials: 'include'})
   - fetch 不支持 abort ， 不支持超时控制 ， 使用 setTimeout 及Promise.reject 的实现的超时控制并不能阻止请求过程继续在后台运行，造成了流量的浪费
   - fetch 没有办法原生监测请求的进度，而 XHR 可以

3. **axios**

   是一种基于 Promise 封装的 HTTP 客户端，其特点如下：

   - 浏览器端发起 XMLHttpRequests 请求
   - node 端发起 http 请求
   - 支持 Promise API
   - 监听请求和返回
   - 对请求和返回进行转化
   - 取消请求
   - 自动转换 json 数据
   - 客户端支持抵御 XSRF 攻击



## 对浏览器事件的理解

1. **事件**

   javascript中的事件，可以理解就是在HTML文档或者浏览器中发生的一种交互操作，使得网页具备互动性， 常见的有加载事件、鼠标事件、自定义事件等。

   事件被封装成一个 event 对象，包含了该事件发生时的所有相关信息（ event 的属性）以及可以对事件进行的操作（ event 的方法）。

2. **事件流**

   由于DOM是一个树结构，如果在父子节点绑定事件时候，当触发子节点的时候，就存在一个顺序问题，这就涉及到了事件流的概念。事件流都会经历三个阶段：

   - 事件捕获阶段(capture phase)
   - 处于目标阶段(target phase)
   - 事件冒泡阶段(bubbling phase)

   事件冒泡是一种从下往上的传播方式，由最具体的元素（触发节点）然后逐渐向上传播到最不具体的那个节点，也就是DOM中最高层的父节点。事件捕获与事件冒泡相反，事件最开始由不太具体的节点最早接受事件, 而最具体的节点（触发节点）最后接受事件

3. **事件模型**

   - **原始事件模型（DOM0级）**：这种模型不会传播，所以没有事件流的概念，但是现在有的浏览器支持以冒泡的方式实现。所有浏览器都兼容这种方式。事件绑定监听函数比较简单, 有两种方式：

     ```js
     // HTML代码中直接绑定
     <input type="button" onclick="fun()">
     // 通过JS代码绑定
     var btn = document.getElementById('.btn');
     btn.onclick = fun;
     // 删除 DOM0 级事件处理程序只要将对应事件属性置为null即可
     btn.onclick = null;
     ```

     特性：绑定速度快，DOM0级事件具有很好的跨浏览器优势，会以最快的速度绑定，但由于绑定速度太快，可能页面还未完全加载出来，以至于事件可能无法正常运行；只支持冒泡；不支持捕获同一个类型的事件只能绑定一次

   - **标准事件模型（DOM2级）**。在该事件模型中，一次事件共有三个过程：

     - 事件捕获阶段：事件从document一直向下传播到目标元素, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行
     - 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数
     - 事件冒泡阶段：事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

     事件绑定监听函数的方式如下：

     ```js
     addEventListener(eventType, handler, useCapture)
     ```

     事件移除监听函数的方式如下:

     ```js
     removeEventListener(eventType, handler, useCapture)
     ```

     参数如下：

     - eventType指定事件类型(不要加on)
     - handler是事件处理函数
     - useCapture是一个boolean用于指定是否在捕获阶段进行处理，一般设置为false与IE浏览器保持一致

     特性：

     - 可以在一个DOM元素上绑定多个事件处理器，各自并不会冲突
     - 执行时机：当第三个参数(useCapture)设置为true就在捕获过程中执行，反之在冒泡过程中执行处理函数

   - **IE事件模型（基本不用）**。共有两个过程：

     - 事件处理阶段：事件到达目标元素, 触发目标元素的监听函数。
     - 事件冒泡阶段：事件从目标元素冒泡到document, 依次检查经过的节点是否绑定了事件监听函数，如果有则执行

     事件绑定监听函数的方式如下：

     ```js
     attachEvent(eventType, handler)
     ```

     事件移除监听函数的方式如下:

     ```js
     detachEvent(eventType, handler)
     ```

4. **事件委托**

   事件代理，俗地来讲，就是把一个元素响应事件（click、keydown......）的函数委托到另一个元素。

   事件流的都会经过三个阶段： 捕获阶段 -> 目标阶段 -> 冒泡阶段，而事件委托就是在冒泡阶段完成。

   事件委托，会把一个或者一组元素的事件委托到它的父层或者更外层元素上，真正绑定事件的是外层元素，而不是目标元素。当事件响应到目标元素上时，会通过事件冒泡机制从而触发它的外层元素的绑定事件上，然后在外层元素上去执行函数。

   场景：适合事件委托的事件有：click，mousedown，mouseup，keydown，keyup，keypress

   ```js
   let ul = document.querySelector('ul');
   ul.onclick = function (event) {
     event = event || window.event;
     let target = event.target;
     if(target.nodeName === 'LI'){
    	console.log(target) // 委托的处理
     }
   }
   ```

   优点是：

   - 减少整个页面所需的内存，提升整体性能；
   - 动态绑定，减少重复工作

   缺点是：

   - focus、blur这些事件没有事件冒泡机制，所以无法进行委托绑定事件；
   - mousemove、mouseout这样的事件，虽然有事件冒泡，但是只能不断通过位置去计算定位，对性能消耗高，因此也是不适合于事件委托的

5. **自定义事件**

   - new Event

     ```js
     const div = document.createElement('div') 
     // 不创建元素，直接用 window 对象也可以
     const event = new Event('build')
     div.addEventListener('build', function(e) {
         console.log(111)
     })
     div.dispatchEvent(event)
     ```

   - initEvent

     ```js
     const event = {}
     function registerEvent(name) {
         const event = document.createEvent('Event')
         event.initEvent(name, true, true)
      // 事件名称，是否允许冒泡，该事件的默认动作是否可以被取消
         events[name] = event
     }
     function triggerEvent(name) {
         window.dispatchEvent(events[name])
     }
     registerEvent('resize') // 注册 resize 事件
     triggerEvent('resize') // 触发 resize 事件
     ```



## onload和DOMContentLoaded的区别

1. **onload**

   window.onload是页面全部资源加载完才执行，包括图片、视频等，

2. **DOMContentLoaded**

   而DOMContentLoaded是在DOM渲染完即可执行，此时图片和视频可能还没加载完



## JavaScript 脚本延迟加载的方式

1. **defer**

   - 给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，
   - 然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。
   - 多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样

2. **async**

   - 给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，
   - 但是当脚本加载完成后立即执行脚本，这个时候如果文档没有解析完成的话同样会阻塞。
   - 多个 async属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。

3. **动态创建dom**

   - 动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，
   - 当文档加载完成后再动态的创建 script 标签来引入js 脚本

4. **定时器**

   设置一个定时器来延迟加载 js 脚本文件

5. **让JS最后加载**

   将 js 脚本放在文档的底部，来使 js 脚本尽可能的在最后来加载执行



## escape、encodeURI、encodeURIComponent 的区别

1. **encodeURI**

    是对整个 URI 进行转义，将 URI 中的非法字符转换为合法字符，所以对于一些在 URI 中有特殊意义的字符不会进行转义。

2. **escape** 

   和 encodeURI 的作用相同，不过它们对于 unicode 编码为0xff 之外字符的时候会有区别，escape 是直接在字符的 unicode编码前加上 %u，而 encodeURI 首先会将字符转换为 UTF-8 的格式，再在每个字节前加上 %

3. **encodeURIComponent**

   是对 URI 的组成部分进行转义，所以一些特殊字符也会得到转义。



## 如何判断一个元素是否在可视区域中

1. **用途**

   可视区域即我们浏览网页的设备肉眼可见的区域。在日常开发中，我们经常需要判断目标元素是否在视窗之内或者和视窗的距离小于一个值（例如 100 px），从而实现一些常用的功能，例如：

   - 图片的懒加载
   - 列表的无限滚动
   - 计算广告元素的曝光情况
   - 可点击链接的预加载

2. 实现方式

   - **offsetTop、scrollTop**

     offsetTop，元素的上外边框至包含元素的上内边框之间的像素距离

     scrollTop表示一个元素从其上方边界到其可见内容顶部的距离

     ```js
     function isInViewPortOfOne (el) {
         // viewPortHeight 兼容所有浏览器写法
         const viewPortHeight = window.innerHeight ||document.documentElement.clientHeight || document.body.clientHeight 
         const offsetTop = el.offsetTop
         const scrollTop = document.documentElement.scrollTop
         const top = offsetTop - scrollTop
         return top <= viewPortHeight
     }
     ```

   - **getBoundingClientRect**

     返回值是一个 DOMRect对象，拥有left, top, right, bottom, x, y, width, 和 height属性。如果一个元素在视窗之内的话，那么它一定满足下面四个条件：top 大于等于 0；left 大于等于 0；bottom 小于等于视窗高度；right 小于等于视窗宽度

   - **Intersection Observer**

     即重叠观察者，从这个命名就可以看出它用于判断两个元素是否重叠，因为不用进行事件的监听，性能方面相比getBoundingClientRect会好很多。使用步骤主要分为两步：创建观察者和传入被观察者

     ```js
     const options = {
       // 表示重叠面积占被观察者的比例，从 0 - 1 取值，
       // 1 表示完全被包含
       threshold: 1.0, 
       root:document.querySelector('#scrollArea') // 必须是目标元素的父级元素
     };
     const callback = function(entries, observer) { 
         entries.forEach(entry => {
             entry.time;               // 触发的时间
             entry.rootBounds;         // 根元素的位置矩形，这种情况下为视窗位置
             entry.boundingClientRect; // 被观察者的位置举行
             entry.intersectionRect;   // 重叠区域的位置矩形
             entry.intersectionRatio;  // 重叠区域占被观察者面积的比例（被观察者不是矩形时也按照矩形计算）
             entry.target;             // 被观察者
         });
     };
     const observer = new IntersectionObserver(callback, options);
     const target = document.querySelector('.target');
     observer.observe(target);
     ```

     ```js
     // 一个元素是否在可视区域
     const observer = new IntersectionObserver(getYellow, { threshold: 1.0 });
     function getYellow(entries, observer) {
         entries.forEach(entry => {
             $(entry.target).css("background-color", "yellow");
         });
     }
     $targets.each((index, element) => {
         observer.observe(element);
     });
     ```



## 正则表达式

1. **创建**

   ```js
   const reg1 = new RegExp(/^a/gi)
   const reg2 = /^a/gi
   // 参数有3个值：/^a$/g：全局匹配；/^aB$/i：忽略大小写；/^aBc$/gi：全局+忽略大小写
   /* 语法：
   	  /^a / 以a开头
         /s$/ 以s结尾
         /abc/ abc必须连着才能匹配
         /^abc$/只能是abc才能匹配
      以下的规则都需要写在//中才生效：
         [a-z] a-z中任意一个有就匹配 
         [A-Z]A-Z中任意一个有就匹配
         [a-zA-Z]大小写的字母中任意一个有就匹配
         [0-9] 0-9任意一个有就匹配
         \d 等同[0-9]
         \D 匹配任意一个非数字
         \s 匹配任意一个空白字符，包括空格，换行等
         \S匹配任意一个非空白字符
         \w 等价于[0-9a-zA-Z_]
         \W 等价于[^0-9a-zA-Z_]
         * 匹配前面元字符>=0
         + 匹配前面元字符>=1
         ? 匹配前面元字符一次或0次
         a|b 匹配a或者b
         () 优先级
         {n} 精确匹配n次
         {n,m} 匹配n-m次
         [^xyz] 不匹配集合中的任意一个
      需要转义的特殊字符：* . ? + $ ^ { } [ ] | \ /
   */
   ```

2. **模式**

   - 贪婪模式：在匹配过程中，尝试可能的顺序是从多往少的方向去尝试

     ```js
     const reg = /ab{1,3}c/ 
     // 首先会尝试bbb，然后再看整个正则是否能匹配。不能匹配时，吐出一个b，即在bb的基础上，再继续尝试，以此重复
     // 如果多个贪婪量词挨着，则深度优先搜索
     const string = "12345";
     const regx = /(\d{1,3})(\d{1,3})/;
     console.log( string.match(reg) );
     // => ["12345", "123", "45", index: 0, input: "12345"]
     //其中，前面的\d{1,3}匹配的是"123"，后面的\d{1,3}匹配的是"45"
     ```

   - 懒惰模式：惰性量词就是在贪婪量词后面加个问号，表示尽可能少的匹配

     ```js
     var string = "12345";
     var regex = /(\d{1,3}?)(\d{1,3})/;
     console.log( string.match(regex) );
     // => ["1234", "1", "234", index: 0, input: "12345"]
     //分组:分组主要是用过()进行实现
     let str = "John Smith";
     // 交换名字和姓氏
     console.log(str.replace(/(john) (smith)/i, '$2, $1')) // Smith, John
     ```

3. **匹配方法**

   - str.match(regexp)

     ```js
     // 在字符串 str 中找到匹配 regexp 的字符
     let str = "I love JavaScript";
     let result = str.match(/Java(Script)/);
     console.log( result[0] );     // JavaScript（完全匹配）
     console.log( result[1] );     // Script（第一个分组）
     console.log( result.length ); // 2
     // 其他信息：
     console.log( result.index );  // 7（匹配位置）
     console.log( result.input );  // I love JavaScript（源字符串）
     
     // 如果 regexp 带有 g 标记，则它将所有匹配项的数组作为字符串返回，而不包含分组和其他详细信息
     let str = "I love JavaScript";
     let result = str.match(/Java(Script)/g);
     console.log( result[0] ); // JavaScript
     console.log( result.length ); // 1
     
     // 如果没有匹配项，则无论是否带有标记 g ，都将返回 null
     let str = "I love JavaScript";
     let result = str.match(/HTML/);
     console.log(result); // null
     ```

   - str.matchAll(regexp)

     ```js
     // 返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器
     const regexp = /t(e)(st(\d?))/g;
     const str = 'test1test2';
     const array = [...str.matchAll(regexp)];
     console.log(array[0]);
     // expected output: Array ["test1", "e", "st1", "1"]
     console.log(array[1]);
     // expected output: Array ["test2", "e", "st2", "2"]
     ```

   - str.search(regexp)

     ```js
     // 返回第一个匹配项的位置，如果未找到，则返回 -1。这里需要注意的是，search 仅查找第一个匹配项
     let str = "A drop of ink may make a million think";
     console.log( str.search( /ink/i ) ); // 10（第一个匹配位置）
     ```

   - str.replace(regexp)

     ```js
     // 替换与正则表达式匹配的子串，并返回替换后的字符串。在不设置全局匹配g的时候，只替换第一个匹配成功的字符串片段
     const reg1=/javascript/i;
     const reg2=/javascript/ig;
     console.log('hello Javascript Javascript Javascript'.replace(reg1,'js'));
     //hello js Javascript Javascript
     console.log('hello Javascript Javascript Javascript'.replace(reg2,'js'));
     //hello js js js
     ```

   - str.split(regexp)

     ```js
     // 使用正则表达式（或子字符串）作为分隔符来分割字符串
     console.log('12, 34, 56'.split(/,\s*/)) // 数组 ['12', '34', '56']
     ```

   - regexp.exec(str)

     ```js
     // 返回字符串 str 中的 regexp 匹配项，与以前的方法不同，它是在正则表达式而不是字符串上调用的
     // 如果没有 g，那么 regexp.exec(str) 返回的第一个匹配与 str.match(regexp) 完全相同
     // 如果有标记 g，调用 regexp.exec(str) 会返回第一个匹配项，并将紧随其后的位置保存在属性regexp.lastIndex 中。 
     // 下一次同样的调用会从位置 regexp.lastIndex 开始搜索，返回下一个匹配项，并将其后的位置保存在 regexp.lastIndex 中
     let str = 'More about JavaScript at https://javascript.info';
     let regexp = /javascript/ig;
     let result;
     while (result = regexp.exec(str)) {
       console.log( `Found ${result[0]} at position ${result.index}` );
       // Found JavaScript at position 11
       // Found javascript at position 33
     }
     ```

   - regexp.test(str)

     ```js
     // 查找匹配项，然后返回 true/false 表示是否存在
     let str = "I love JavaScript";
     // 这两个测试相同
     console.log( /love/i.test(str) ); // true
     ```

4. **常用**

   ```js
   //匹配16进制颜色值
   var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
   //匹配日期
   var regex = /^[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
   //匹配qq号
   var regex = /^[1-9][0-9]{4,10}$/g;
   //手机号码正则
   var regex = /^1[34578]\d{9}$/g;
   // 将url参数解析为对象
   const protocol = '(?<protocol>https?:)';
   const host = '(?<host>(?<hostname>[^/#?:]+)(?::(?<port>\\d+))?)';
   const path = '(?<pathname>(?:\\/[^/#?]+)*\\/?)';
   const search = '(?<search>(?:\\?[^#]*)?)';
   const hash = '(?<hash>(?:#.*)?)';
   const reg = new RegExp(`^${protocol}\/\/${host}${path}${search}${hash}$`);
   function execURL(url){
       const result = reg.exec(url);
       if(result){
           result.groups.port = result.groups.port || '';
           return result.groups;
       }
       return {
           protocol:'',host:'',hostname:'',port:'',
           pathname:'',search:'',hash:'',
       };
   }
   console.log(execURL('https://localhost:8080/?a=b#xxxx'));
   protocol: "https:"
   host: "localhost:8080"
   hostname: "localhost"
   port: "8080"
   pathname: "/"
   search: "?a=b"
   hash: "#xxxx"
   // 再将上面的search和hash进行解析
   function execUrlParams(str){
       str = str.replace(/^[#?&]/,'');
       const result = {};
       if(!str){ //如果正则可能配到空字符串，极有可能造成死循环，判断很重要
           return result; 
       }
       const reg = /(?:^|&)([^&=]*)=?([^&]*?)(?=&|$)/y
       let exec = reg.exec(str);
       while(exec){
           result[exec[1]] = exec[2];
           exec = reg.exec(str);
       }
       return result;
   }
   console.log(execUrlParams('#'));// {}
   console.log(execUrlParams('##'));//{'#':''}
   console.log(execUrlParams('?q=3606&src=srp')); //{q: "3606", src: "srp"}
   console.log(execUrlParams('test=a=b=c&&==&a='));//{test: "a=b=c", "": "=", a: ""}
   ```



## 对 JSON 的理解

1. **概念**

   JSON 是一种基于文本的轻量级的数据交换格式。它可以被任何的编程语言读取和作为数据格式来传递。

   作用：在项目开发中，使用 JSON 作为前后端数据交换的方式。在前端通过将一个符合 JSON 格式的数据结构序列化为JSON 字符串，然后将它传递到后端，后端通过 JSON 格式的字符串解析后生成对应的数据结构，以此来实现前后端数据的一个传递。

2. **和对象的区别**

   因为 JSON 的语法是基于 js 的，因此很容易将 JSON 和 js 中的对象弄混，但是应该注意的是 JSON 和 js 中的对象不是一回事，JSON中对象格式更加严格，比如说：

   - 在 JSON 中属性值不能为undefined、symbol和函数
   - 不能出现 NaN 这样的属性值等

   因此大多数的 js 对象是不符合 JSON 对象的格式的。

3. **转换处理**

   - JSON.stringify()：通过传入一个符合 JSON 格式的数据结构，将其转换为一个 JSON 字符串。如果传入的数据结构不符合 JSON 格式，那么在序列化的时候会对这些值进行对应的特殊处理，使其符合规范。在前端向后端发送数据时，可以调用这个函数将数据对象转化为 JSON 格式的字符串
   - JSON.parse()：这个函数用来将 JSON 格式的字符串转换为一个 js 数据结构，如果传入的字符串不是标准的 JSON 格式的字符串的话，将会抛出错误。当从后端接收到 JSON 格式的字符串时，可以通过这个方法来将其解析为一个 js 数据结构，以此来进行数据的访问。



## 哪些情况会导致内存泄漏

1. **意外的全局变量**

   由于使用未声明的变量，而意外的创建了一个全局变量，而使这个变量一直留在内存中无法被回收。

   ```js
   function foo(arg) {
       bar = "this is a hidden global variable";
   }
   function foo() {
       this.variable = "potential accidental global";
   }
   // foo 调用自己，this 指向了全局对象（window）
   foo();
   ```

2. **被遗忘的计时器或回调函数**

   设置了 setInterval 定时器，而忘记取消它，如果循环函数有对外部变量的引用的话，那么这个变量会被 一直留在内存中，而无法被回收。

   ```js
   var someResource = getData();
   setInterval(function() {
       var node = document.getElementById('Node');
       if(node) {
           // 处理 node 和 someResource
           node.innerHTML = JSON.stringify(someResource));
       }
   }, 1000);
   ```

3. **脱离dom的引用**

   获取一个 DOM 元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。

   ```js
   const refA = document.getElementById('refA');
   document.body.removeChild(refA); // dom删除了
   console.log(refA, 'refA'); // 但是还存在引用能console出整个div 没有被回收
   refA = null;
   console.log(refA, 'refA'); // 解除引用
   ```

4. **不合理的闭包**

   不合理的使用闭包，从而导致某些变量一直被留在内存当中

   ```js
   function bindEvent() {
     var obj = document.createElement('XXX');
     var unused = function () {
       console.log(obj, '闭包内引用obj obj不会被释放');
     };
     obj = null; // 解决方法
   }
   ```

5. **addEventListener**

   使用事件监听addEventListener监听的时候，在不监听的情况下使用removeEventListener取消对事件监听

6. **console**

   控制台日志记录对总体内存内置文件的影响，也是个重大的问题，同时也是容易被忽略的。记录错误的对象，可以将大量的数据保留在内存中。传递给console.log的对象是不能被垃圾回收，所以没有去掉console.log可能会存在内存泄漏



## 垃圾回收算法

1. **概念**

   在编程语言中，内存管理是一个重要的概念。当程序分配内存给变量时，这些内存在变量不再使用后需要被回收，以便其他程序可以使用这些内存。如果内存没有被正确回收，就会导致内存泄漏，随着时间的推移，程序可能会消耗越来越多的内存，最终导致程序崩溃。JavaScript的垃圾回收机制就是用来自动管理内存分配和释放的。它通过跟踪每个对象的引用次数来决定是否回收该对象。

2. **算法**

   - 引用计数：当一个对象引用指向它时，那么这个对象的引用就+1；当一个对象的引用为0时，这个对象就哭被销毁掉；很大的弊端会产生循环引用

     ```js
     const arr = [1, 2, 3, 4];
     console.log('hello world');
     arr = null
     ```

   - 标记清除：此算法分为 标记 和 清除 两个阶段，标记阶段即为所有活动对象做上标记，清除阶段则把没有标记（也就是非活动对象）销毁。整个标记清除算法大致过程就像下面这样：

     - 垃圾收集器在运行时会给内存中的所有变量都加上一个标记，假设内存中所有对象都是垃圾，全标记为0；
     - 然后从各个根对象开始遍历，把不是垃圾的节点改成1；
     - 清理所有标记为0的垃圾，销毁并回收它们所占用的内存空间；
     - 最后，把所有内存中对象标记修改为0，等待下一轮垃圾回收

   - 标记整理：和标记清除相似，不同的是，回收期间同时会将保留的存储对象搬运汇集到连续的内存空间，从而整合空闲空间，避免内存碎片化

3. **优化**

   - 分代收集：对象被分为新的和旧的两组；许多对象出现，完成它们的工作并很快死去，它们可以被清理；那些长期存活的对象会变得老旧，而且被检查的频次也会减少
   - 增量搜集：如果有许多对象，并且试图一次遍历并标记整个对象集，则需要一些时间，并在执行过程中带来明显的延迟；所以引擎试图将垃圾收集分为几部分来做，然后将这几部分逐一进行处理，这样会有许多微小的延迟而不是一个大的延迟
   - 闲时收集：垃圾收集器只会在GPU空闲时尝试进行，以减少可能对代码执行的影响



## 设计模式

1. **观察者模式**

   定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新。观察者模式属于行为型模式，行为型模式关注的是对象之间的通讯，观察者模式就是观察者和被观察者之间的通讯。

   ```js
   class Subject {
     constructor() {
       this.observerList = [];
     }
     addObserver(observer) {
       this.observerList.push(observer);
     }
     removeObserver(observer) {
       const index = this.observerList.findIndex(o => o.name === observer.name);
       this.observerList.splice(index, 1);
     }
     notifyObservers(message) {
       const observers = this.observeList;
       observers.forEach(observer => observer.notified(message));
     }
   }
   class Observer {
     constructor(name, subject) {
       this.name = name;
       if (subject) {
         subject.addObserver(this);
       }
     }
     notified(message) {
       console.log(this.name, 'got message', message);
     }
   }
   const subject = new Subject();
   const observerA = new Observer('observerA', subject);
   const observerB = new Observer('observerB');
   subject.addObserver(observerB);
   subject.notifyObservers('Hello from subject');
   subject.removeObserver(observerA);
   subject.notifyObservers('Hello again');
   ```

2. **发布/订阅模式**

   是一种消息范式，消息的发送者（称为发布者）不会将消息直接发送给特定的接收者（称为订阅者）。而是将发布的消息分为不同的类别，无需了解哪些订阅者（如果有的话）可能存在。同样的，订阅者可以表达对一个或多个类别的兴趣，只接收感兴趣的消息，无需了解哪些发布者存在

   ```js
   class PubSub {
     constructor() {
       this.messages = {};
       this.listeners = {};
     }
     // 添加发布者
     publish(type, content) {
       const existContent = this.messages[type];
       if (!existContent) {
         this.messages[type] = [];
       }
       this.messages[type].push(content);
     }
     // 添加订阅者
     subscribe(type, cb) {
       const existListener = this.listeners[type];
       if (!existListener) {
         this.listeners[type] = [];
       }
       this.listeners[type].push(cb);
     }
     // 通知
     notify(type) {
       const messages = this.messages[type];
       const subscribers = this.listeners[type] || [];
       subscribers.forEach((cb, index) => cb(messages[index]));
     }
   }
   class Publisher {
     constructor(name, context) {
       this.name = name;
       this.context = context;
     }
     publish(type, content) {
       this.context.publish(type, content);
     }
   }
   class Subscriber {
     constructor(name, context) {
       this.name = name;
       this.context = context;
     }
     subscribe(type, cb) {
       this.context.subscribe(type, cb);
     }
   }
   
   const TYPE_A = 'music';
   const TYPE_B = 'movie';
   const TYPE_C = 'novel';
   const pubsub = new PubSub();
   const publisherA = new Publisher('publisherA', pubsub);
   publisherA.publish(TYPE_A, 'we are young');
   publisherA.publish(TYPE_B, 'the silicon valley');
   const publisherB = new Publisher('publisherB', pubsub);
   publisherB.publish(TYPE_A, 'stronger');
   const publisherC = new Publisher('publisherC', pubsub);
   publisherC.publish(TYPE_C, 'a brief history of time');
   const subscriberA = new Subscriber('subscriberA', pubsub);
   subscriberA.subscribe(TYPE_A, res => {
     console.log('subscriberA received', res)
   });
   const subscriberB = new Subscriber('subscriberB', pubsub);
   subscriberB.subscribe(TYPE_C, res => {
     console.log('subscriberB received', res)
   });
   const subscriberC = new Subscriber('subscriberC', pubsub);
   subscriberC.subscribe(TYPE_B, res => {
     console.log('subscriberC received', res)
   });
   pubsub.notify(TYPE_A);
   pubsub.notify(TYPE_B);
   pubsub.notify(TYPE_C);
   ```

3. **单例模式**

   创建型模式，提供了一种创建对象的最佳方式，这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。在应用程序运行期间，单例模式只会在全局作用域下创建一次实例对象，让所有需要调用的地方都共享这一单例对象。比如说常用的如弹框组件的实现和全局状态的实现

   ```js
   // 定义一个类
   function Singleton(name) {
       this.name = name;
       this.instance = null;
   }
   // 原型扩展类的一个方法getName()
   Singleton.prototype.getName = function() {
       console.log(this.name)
   };
   // 获取类的实例
   Singleton.getInstance = function(name) {
       if(!this.instance) {
           this.instance = new Singleton(name);
       }
       return this.instance
   };
   
   // 获取对象1
   const a = Singleton.getInstance('a');
   // 获取对象2
   const b = Singleton.getInstance('b');
   // 进行比较
   console.log(a === b);
   ```

4. **策略模式**

   主要是用来将方法的实现和方法的调用分离开，外部通过不同的参数可以调用不同的策略。主要在 MVP 模式解耦的时候用来将视图层的方法定义和方法调用分离 

   ```js
   var calculateBouns = function(salary,level) {
       if(level === 'A') {
           return salary * 4;
       }
       if(level === 'B') {
           return salary * 3;
       }
       if(level === 'C') {
           return salary * 2;
       }
   };
   // 调用如下：
   console.log(calculateBouns(4000,'A')); // 16000
   console.log(calculateBouns(2500,'B')); // 7500var 
   // 变成策略模式后
   obj = {
           "A": function(salary) {
               return salary * 4;
           },
           "B" : function(salary) {
               return salary * 3;
           },
           "C" : function(salary) {
               return salary * 2;
           } 
   };
   var calculateBouns =function(level,salary) {
       return obj[level](salary);
   };
   console.log(calculateBouns('A',10000)); // 40000
   ```

5. **代理模式**

   是为一个对象提供一个代用品或占位符，以便控制对它的访问。代理模式的关键是，当客户不方便直接访问一个对象或者不满足需要时，提供一个替身对象来控制这个对象的访问，客户实际上访问的是替身对象。使用代理模式代理对象的访问的方式，一般又被称为拦截器，比如我们在项目中经常使用 Axios 的实例来进行 HTTP 的请求，使用拦截器 interceptor 可以提前对 请求前的数据 服务器返回的数据进行一些预处理。

   ```js
   // 图片本地对象，负责往页面中创建一个img标签，并且提供一个对外的setSrc接口
   let myImage = (function(){
       let imgNode = document.createElement( 'img' );
       document.body.appendChild( imgNode );
   
       return {
           //setSrc接口，外界调用这个接口，便可以给该img标签设置src属性
           setSrc: function( src ){
               imgNode.src = src;
           }
       }
   })();
   // 代理对象，负责图片预加载功能
   let proxyImage = (function(){
       // 创建一个Image对象，用于加载需要设置的图片
       let img = new Image;
       img.onload = function(){
           // 监听到图片加载完成后，给被代理的图片本地对象设置src为加载完成后的图片
           myImage.setSrc( this.src );
       }
       return {
           setSrc: function( src ){
               // 设置图片时，在图片未被真正加载好时，以这张图作为loading，提示用户图片正在加载
               myImage.setSrc( 'https://img.zcool.cn/community/01deed576019060000018c1bd2352d.gif' );
               img.src = src;
           }
       }
   })();
   proxyImage.setSrc( 'https://xxx.jpg' );
   ```

6. **工厂模式**

   是用来创建对象的一种最常用的设计模式，不暴露创建对象的具体逻辑，而是将将逻辑封装在一个函数中，那么这个函数就可以被视为一个工厂。

   ```js
   function Factory(career) {
       function User(career, work) {
           this.career = career 
           this.work = work
       }
       let work
       switch(career) {
           case 'coder':
               work =  ['写代码', '修Bug'] 
               return new User(career, work)
               break
           case 'hr':
               work = ['招聘', '员工信息管理']
               return new User(career, work)
               break
           case 'driver':
               work = ['开车']
               return new User(career, work)
               break
           case 'boss':
               work = ['喝茶', '开会', '审批文件']
               return new User(career, work)
               break
       }
   }
   let coder = new Factory('coder')
   console.log(coder)
   let boss = new Factory('boss')
   console.log(boss)
   ```

7. **中介者模式**

   指的是，多个对象通过一个中介者进行交流，而不是直接进行交流，这样能够将通信的各个对象解耦 

8. **适配器模式**

   用来解决两个接口不兼容的情况，不需要改变已有的接口，通过包装一层的方式实现两个接口的正常协作。假如我们需要一种新的接口返回方式，但是老的接口由于在太多地方已经使用了，不能随意更改，这个时候就可以使用适配器模式。比如我们需要一种自定义的时间返回格式，但是我们又不能对 js 时间格式化的接口进行修改，这个时候就可以使用适配器模式。