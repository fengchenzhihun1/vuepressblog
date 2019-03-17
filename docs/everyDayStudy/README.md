[TOC]

# 2018-12-27

## spring4学习

* IOC：工厂、反射

* DI：set get ，构造器，

* 属性注入

* xml单列的集合引用<util:list>

* p命名空间配置属性


1.  自动装配
   * xml自动装配
   * 构造器、byType、 byName
   * 内容摘要

![20181227223726](C:\Users\wrcsh\Desktop\笔记\phone\20181227223726.png)

# 2019-01-06

1. 泛型依赖注入

2. 切面

   * @Aspect @Component  声明一个切面类，放入IOC容器中
   * @Before 前置通知

3. 事物ACID

   事物管理器

   事物的传播范围

4. 本质来说Controller，seivice这些注解是一样只是为了区分

5. 

6. 

7. 


# 2019-01-14

1. JDK8接口

   * 可以有静态方法

   * 可以有一个默认方法、

   * 一个类实现两个接口的 同名default会报错

   * 优先使用类而不是接口


2. clone

   clone一般是浅拷贝

   实现cloneable接口，重新定义clone方法

3. lambda

   参数 箭头 表达式

   * lambada本质是返回一个对象，而方法返回的对象一定是对象中所用的方法，对应关系，实现关系、

   *  代码传递给对象

   * 函数式接口

     函数式接口必须有一个抽象方法

   * java.util.function中定义很多的通用函数

   * 方法引用

     object::instanceMethod     System.out::println  <==>  x->System.out.print.println(y)

     Class::staticMethod	      Math::pow <==> (x,y)-> Math.row(x,y) 

     Class::instanceMethod       String::compareToIgnoreCase <==> x.compareToIgnoreCase(y)

   * 构造器引用
     * lambada表达式是闭包
     * 三部分 1、一个代码块  2、参数 3、自由变量的值，这是指非参数而且不在代码中定义的变量
     * lambda表达式中捕获的变量必须实际上是最终变量（初始化之后不会再为它赋值）    

4. 内部类

    * 局部内部类 方法内部，不能使用public private
    * 接口中为什么可以定义多个default 还可以定义类？
    * 匿名内部类
    * 静态内部类

# 2019-01-16

异常对象都是派生自Throwable

1. Throwable
   - Exception
   - ErroException

2. Exception
   - RuntimeException
     - 错误的类型转换
     - 数组越界
     - 空指针
   - 其他异常
     - 读文件错误
     - 打开不存在的文件

3. Erro与RuntimeException称为受检查异常，其他异常称为非受检查异常   

4. -个异常如果没有被捕获，则程序会终止执行，并在控制台打印异常信息（包括异常类型、堆栈信息）

   异常机制使用技巧

   * 异常处理不能代替简单的测试
   * 不要过分细化异常
   * 利用异常层次结构
   * 不要压制异常
   * 在检查错误是，“苛刻”要比放任好
   * 不要羞于传递异常

   早抛出、晚捕获


# 2019-01-20

1. 用批判思维来学习
2. 用脑子思考，强迫自己去思考
3. 开口合里最单依
4. java限定词extends

   - 可以使用T extends Complable & Serablizable
   - 如果有&则只能有一个类且必须是限定词的第一个位置
5. 运行时不检查泛型，编译时检查
6. 

# 2019-01-21

1. RabbitMq

   * 虚拟主机的概念，

   * message

   * Publisher

     消息的生产者，想交换器发布信息

   * amqp高速消息队列协议

   * exchange（交换器），接收生产者发送的消息，并将信息路由到服务器的队列

     * 四种类型
       * direct   点对点
       * fanout   广播给所有路由键发布消息
       * topic 通配
       * headers

   * Queue

   * Bingding 将交换器和消息队列连接起来的路由键规则

   * coonection 网络连接

   * channel 多路复用双向数据流通道

   * cousumer 消费者

     virtual host 

     虚拟主机，表示一批交换机，隔离，默认是/

   * broker

     消息队列的实体

     # 2019-02-13

      ### 线程的6 钟状态

     * New（新创建）

       新创建线程时，线程并没有运行

     * Runnable（可运行）

       调用start方法，线程处于runnable状态。线程的运行取决于操作系统给线程提供运行的时间

     * Blocked（被堵塞）

     * Waiting（等待）

     * Timed waiting（计时等待）

     * Terminated（被终止）

       

     

     

     

     

     

     

   

    

    

    

    

    

    

    

    

    















