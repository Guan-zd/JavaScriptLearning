# JavaScript高级程序设计

`第4版`

`[美]马特-弗里斯比(Matt Frisbie)`

Professional JavaScript for Web Developers,4th Edition

**Standing on the Shoulders of Giants**

本书是JavaScript经典图书的新版。第4版涵盖ECMAScript2019，全面、深入地介绍了JavaScript开发者必须掌握的前端开发技术，涉及JavaScript的基础特性和高级特性。书中详尽讨论了JavaScript的各个方面，从JavaScript的起源开始，逐步讲解到新出现的技术，其中重点介绍ECMAScript和DOM标准。在此基础上，接下来的各章揭示了JavaScript的基本概念，包括类、契约、迭代器、代理，等等。另外，书中深入探讨了客户端检测、事件、动画、表单、错误处理及JSON。本书同时也介绍了近几年来涌现的重要新规范，包括FetchAPI、模块、工作者线程、服务线程以及大量新的API。

## 第1章	什么是JavaScript

- JavaScript历史回顾
- JavaScript是什么
- JavaScript与ECMAScript的关系
- JavaScript的不同版本

**1995年，JavaScript问世。**

**JavaScript逐渐成为市面上所有主流浏览器的标配**

**JavaScript的应用也不再局限与数据验证，而是渗透到浏览器窗口及其内容的方方面面。**

**从简单的输入验证脚本到强大的编程语言，JavaScript的崛起没有任何人预测**。

**它很简单，学会用只要几分钟；它又很复杂，掌握它要很多年。**

**要真正学好用好JavaScript，理解其本质、历史及局限性是非常重要的。**

### 1.1	简短的历史回顾

- 1995年 Brendan Eich 开发
- 1996年8月，微软重磅进入Web浏览器领域，代表JavaScript作为一门语言向前迈了一大步
- 1997年，JavaScript1.1作为提案被提交给欧洲计算机制造商协会(Ecma)
- 1998年，国际化标准组织(ISO)和国际电工委员会(IEC)也将ECMAScript采纳为标准(ISO/IEC-16262)。自此以后，各家浏览器均以ECMAScript作为自己JavaScript实现的依据，虽然具体实现不同。

### 1.2	JavaScript实现

**完整的JavaScript实现包含以下几个部分**

- 核心(ECMAScript)
- 文档对象模型(DOM)
- 浏览器对象模型(BOM)

#### 1.2.1	ECMAScript

**ECMAScript，即ECMAScript定义的语言，并不局限于Web浏览器**

**Web浏览器只是ECMAScript实现可能存在的一种宿主环境(host environment)**

**ECMA-262定义了什么**

- 语法
- 类型
- 语句
- 关键字
- 保留字
- 操作符
- 全局对象

ECMAScript只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript实现了ECMAScript，而Adobe ActionScript也实现了ECMAScript

##### 1.2.1.1	ECMAScript版本

- ECMA-262	第1版 
- ECMA-262	第2版
- ECMA-262	第3版
- ECMA-262	第4版
- ECMA-262	第5版 2009.12
- ECMA-262	第6版 2015.6
- ECMA-262	第7版 2016.6
- ECMA-262	第8版 2017.6
- ECMA-262	第9版 2018.6
- ECMA-262	第10版 2019.6

##### 1.2.1.2	ECMAScript符合性是什么意思

- 支持ECMA-262中描述的所有“类型、值、对象、属性、函数，以及程序语法与语义”
- 支持Unicode字符标准
- 增加ECMA-262中未提及的“额外的类型、值、对象、属性和函数”
- 支持ECMA-262中没有定义的“程序和正则表达式语法”

##### 1.2.1.3	浏览器对ECMAScript的支持

**到了2008年，五大浏览器(IE,FireFox,Safari,Chrome和Opera)全部兼容ECMA-262第3版**

#### 1.2.2	DOM

**文档对象(DOM,Document Object Model)是一个应用编程接口(API)，用于在HTML中使用扩展的XML**

- DOM将整个页面抽象为一组分层节点
- HTML或XML页面的每个组成部分都是一种节点，包含不同数据。
- DOM通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容与结构。
- 使用DOM API，可以轻松地删除、添加、替换、修改节点。

##### 1.2.2.1	为什么DOM是必需的

- 为了保持Web跨平台的本性，必须要做点什么。
- 人们担心如果无法控制网景和微软各行其是，那么Web就会发生分裂，导致人们面向浏览器开发网页。

##### 1.2.2.2	DOM级别

**DOM Level1**

- 这个规范由两个模块组成：DOM Core 和 HTML
- DOM并非只能通过JavaScript访问，而且确实被其它很多语言实现了。

**DOM Level 2**

- DOM 视图：描述追踪文档不同视图(如应用CSS样式前后的文档)的接口
- DOM 事件：描述事件及事件处理的接口
- DOM 样式：描述处理元素CSS样式的接口
- DOM 遍历和范围：描述遍历和操作DOM树的接口

**DOM Level3**

- 以统一方式加载和保存文档的方法(包含在一个叫DOM Load and Save的新模块)
- 验证文档的方法(DOM Validation)
- 支持了所有XML1.0的特性，包括XML Infoset、XPath和XML Base

**DOM Level4(DOM Living Standard)**

- 替代Mutation Eventsn的Mutation Observers


##### 1.2.2.3	其他DOM

有些其它语言也发布了自己的DOM标准。下面列出的语言是基于XML的，每一种都增加了该语言独有的DOM方法与接口

- 可伸缩矢量图 SVG
- 数学标记语言 MathML
- 同步多媒体集成语言 SMIL

##### 1.2.2.4	Web浏览器对DOM的支持情况

**DOM标准在Web浏览器实现它之前就作为标准发布了**

#### 1.2.3  BOM

**浏览器对象模型(BOM) API**，用于支持访问和操作浏览器的窗口

总体来说,BOM主要针对浏览器窗口和子窗口(frame)，不过人们通常会把任何特定于浏览器的扩展都归在BOM的范畴内。

- 弹出新窗口的能力
- 移动、缩放和关闭浏览器窗口的能力
- navigation对象，提供关于浏览器的详尽信息
- location对象，提供浏览器加载页面的详尽信息
- screen，提供关于用户屏幕分辨率的详尽信息
- performance对象，提供浏览器内存占用，导航行为和时间统计的详尽信息
- 对cookie的支持
- 其它自定义对象

每个浏览器实现的都是自己BON,每个浏览器都会给它们定义自己的属性和方法