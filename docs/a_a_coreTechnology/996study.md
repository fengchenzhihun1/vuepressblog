# 996study

## LAMBDA

### LAMBDA表达式简介

* Java8引入函数式编程风格
* 可以理解为一种匿名函数的替代
* 通过行为参数化传递代码

### LAMBDA表达形式

![](../images/996/20191215232824.png)

![](../images/996/20191215232855.png)

![](../images/996/20191215232911.png)

![](../images/996/20191215232928.png)

![](../images/996/20191215232938.png)

![](../images/996/20191215232956.png)

### 自定义函数式接口

* 规则要求

  接口只有一个抽象方法

### 常用函数式接口

![](../images/996/20191215235003.png)



### 方法引用

![](../images/996/20191216000440.png)

![](../images/996/20191216000543.png)

![](../images/996/20191216000608.png)

![](../images/996/20191216000631.png)

##  Stream流
* JDK1.8引入的新成员，以声明式方式处理集合数据
* 将基础操作链接起来，完成复杂的数据处理流水线
* 提供透明地并行处理
### 流的简介
* 从支持数据处理操作的源生成的元素序列
    * 元素序列：接口访问一组有序序列 
    * 源：集合
    * 数据处理：增删改查
    
* 流与集合的区别
    * 时间与空间
        集合空间 存储
        时间空间 计算
    * 只能遍历一次
        流只能遍历一次  
    * 外部迭代与内部迭代
    
 * 流的组成       
 ![](../images/996/Xshot-0040.png)

 * 流的分类
 ![](../images/996/Xshot-0041.png)
 ![](../images/996/Xshot-0042.png)   

 * 流的使用
   
   * peek
   
     对流进行遍历操作，与foreach相似但不会销毁元素
   
   * 扁平化
    flatMap将一个对象转换为一个流（比如使用String.spliect），则会将一个字符串装换切割然后合并成一个流
   
   * 状态操作
   
      有状态的中间操作，会对无状态的操作的先后产生影响
   
   * findAny与findFirst
   
      any使用并行速度快点
   
   * 流的构建
   
      * 值
   
        ```java
        Stream.of(1,2,3,4,5);
        ```
   
      * 数组
   
        ```java
        int[] numbers = {1,2,3,4,5};
        Arrays.stream(numbers);
        ```
   
      * 文件
   
        ```java
        Stream<String> stream = Files.lines(Path.get(""));
        ```
   
      * 函数（无限流）
   
        ```java
        Stream.iterate(0, n -> n+2);
        Stream.generate(Math::random);
        ```
   
   *  流的收集
   
      * 将流中的元素累积成一个结果
      * 作用与终端collect（）上；
      * collect/Collector/Collectors
   
   * 预定义收集齐功能
   
      * 将元素规约和汇总为一个值
   
      * 将流元素分组
   
        ![](../images/996/Xshot-0043.png)
   
      * 将流元素分区
   
        ![](../images/996/Xshot-0044.png)
   
   
## 资源关闭

* GC特点

  ![](../images/996/Xshot-0045.png)

* 常见的需要手动释放的

  * 文件/流资源
  * 套接字
  * 数据库连接

* 物理资源可以不手动释放吗

  * 资源被长时间占用
  * 超过最大限制后，将无资源可用
  * 导致系统无法正常运行

* 新型流（1.8后）

  在try中声明流

* 总结

  ![](../images/996/Xshot-0047.png)

## Google Guava工具集

* 简介

  ![](../images/996/Xshot-0048.png)

  

* Option

  * 创建空的Option对象 Option.empty();

  * 非null  Option.of（“qqq”）；

  * 任意值  Option.ofNullable(null);

  * option.ifPresent();

  * option.orelse("引用缺失");

  * option.orElseGet(return "自定义异常");

  * option.orElseThrow(() -> {throw new RuntimeException("引用缺失异常")})

  * 解决集合null问题

    ```java
    Option.ofNullable(list)
    	.map(List::stream)
    	.orElseGet(Stream::empty)
    	.forEach(system.out::println);
    ```

  * 不可变集合

    ![](../images/996/Xshot-0049.png)

    ![](../images/996/Xshot-0050.png)

    

  * 新集合类型

    * Multiset

      ![](../images/996/Xshot-0051.png)

      ![](../images/996/Xshot-0052.png)

      ![](../images/996/Xshot-0053.png)

  * 集合工具类

    * sets

      并 差 叫 分解 笛卡尔积

    * Lists

      翻转 拆分

  * IO

    Files

    ![](../images/996/Xshot-0054.png)

    

    ![](../images/996/Xshot-0055.png)

## 线程池

  * 线程池简介

    ![](../images/996/Xshot-0056.png)

  * 好处

    * 降低资源消耗
    * 提供响应速度
    * 提高线程的可管理性

  * 简单线程池

    ![](../images/996/Xshot-0057.png)

    ![](../images/996/Xshot-0058.png)

  * 线程池的核心参数

    ![](../images/996/Xshot-0059.png)

  * 线程池的处理流程

    ![](../images/996/Xshot-0060.png)

  * 可选择的阻塞队列

    * 无界队列

      ArraylockingQuene

    * 有界队列

      LinkedBlockingQuene

    * 同步移交队列

      SynchronousQueue

  * 可选择的饱和策略

    ![](../images/996/Xshot-0061.png)

  * 执行示意图

    ![](../images/996/Xshot-0062.png)

  * 常用线程池

    * newCachedThreadPool

      ![](../images/996/Xshot-0063.png)

    * newFixedThreadPool

      ![](../images/996/Xshot-0064.png)

    * newSingleThreadExecutor

      ![](../images/996/Xshot-0065.png)
      
    * 线程池的状态
    
      ![](../images/996/Xshot-0066.png)
    
      
    
    * 

​    












