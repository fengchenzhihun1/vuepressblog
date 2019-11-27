# java8 学习

## LAMBDA表达式

* Lambda表达式也被称为箭头函数、匿名函数、闭包
* Lambda表达式体现的是轻量级函数式编程思想
* 、->、符合式Lambda表达式核心操作符合，符号左侧是操作参数，符号右侧是操作表达式
* JDK8新特性

## Model Code as Date

* Model Code as Date,编码及数据，尽可能轻量级的将代码封装为数据
* 解决方案：接口&实现类（匿名内部类）
* 存在问题：语法冗余、this关键字、变量捕获、数据控制

## 为什么要用Lambda表达式

* 它不是解决未知问题的新技术
* 对现有解决方案的语义化优化
* 需要根据实际需求考虑性能问题

## Lambda基础

* 函数式接口

  * 就是java类型系统中的接口

  * 包含一个接口方法的特殊接口

  * 语义化监测注解：@Functionallnterface

    

  * 默认接口方法

  * 静态接口方法			

* Lambda语法及使用

  参数  -> 方法体

  * Lambda表达式基本语法
    * 声明 函数式接口声明
    * 参数  不需要写类型（自动类型推导），如果只有一个参数不需要括号
    * 操作符 ->
    * 执行代码块 多行使用大括号，一行可以不使用大括号，且有返回值不需要return
  * 带参数的Lambda表达式
  * 带返回值的Lambda表达式

* java系统中的函数式接口

  * Predicate  test  接受T返回Boolean
  * Consumer accept 接受T 没有返回值
  * Function    apply  接受T返回R
  * UnaryOperator  接受T返回T
  * BinaryOperator  接受两个T，返回一个T对象结果
  * Suplier 不接受任何参数，直接通过get获取指定类型对象
  
* 变量捕获

  * 匿名内部类中的变量捕获

    匿名内部中的this指的是匿名内部类

  * Lambda表达式中的变量捕获

    Lambda所在的方法

* 类型检查

  * 表达式类型检查

    

  * 参数类型检查

    

* Lambda表达式运行原理
  * javap -p App.class
  * java -Djdk.internal.lambda.dumpProxyClass App

##  Lambda进阶

* 方法引用
  * 静态
  * 实例
  * 构造
* Stream API
* Stream操作原理
* 操作集合元素
## stream






