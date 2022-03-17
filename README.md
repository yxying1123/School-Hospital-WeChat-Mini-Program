# 云开发 quickstart

这是云开发的快速启动指引，其中演示了如何上手使用云开发的三大基础能力：

- 数据库：一个既可在小程序前端操作，也能在云函数中读写的 JSON 文档型数据库
- 文件存储：在小程序前端直接上传/下载云端文件，在云开发控制台可视化管理
- 云函数：在云端运行的代码，微信私有协议天然鉴权，开发者只需编写业务逻辑代码

## 参考文档

- [云开发文档](https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/getting-started.html)

![image](https://user-images.githubusercontent.com/87290225/158806678-fbb8461c-33e1-4c0b-a5a8-bdca6b04514f.png)


![image](https://user-images.githubusercontent.com/87290225/158806709-1f871a45-0517-4376-b12e-0b97e21aa33a.png)




使用的交互技术
小程序框架配置中框架接口App(Object object)，注册小程序。接受一个 Object 参数，其指定小程序的生命周期回调等。App() 在 app.js 中调用。
WXML 是框架设计的一套标签语言，结合基础组件、事件系统，可以构建出页面的结构。
WXS是小程序的一套脚本语言，结合 WXML，可以构建出页面的结构
JSON进行静态配置。
组件和 API 和视图容器view组件、导航栏页面属性配置节点 navigation-bar等基础内容。
云开发提供了一个 JSON 数据库，数据库中的每条记录都是一个 JSON 格式的对象。一个数据库可以有多个集合，集合可看做一个 JSON 数组，数组中的每个对象就是一条记录，记录的格式是 JSON 对象。
云函数是一段运行在云端的代码，无需管理服务器，在开发工具内编写、一键上传部署即可运行后端代码。小程序内提供了专门用于云函数调用的 API。开发者可以在云函数内使用 wx-server-sdk 提供的 getWXContext 方法获取到每次调用的上下文（appid、openid 等），无需维护复杂的鉴权机制，即可获取天然可信任的用户登录态（openid）。

实现效果


![image](https://user-images.githubusercontent.com/87290225/158806930-fae7c104-9f71-41f2-9492-ff9daa465a8f.png)


![image](https://user-images.githubusercontent.com/87290225/158806956-305768cc-cb29-4d6b-b430-f759809223ce.png)


![image](https://user-images.githubusercontent.com/87290225/158806980-62bc0449-905b-4256-bdc7-473923318440.png)

   
   
   ![image](https://user-images.githubusercontent.com/87290225/158806998-1f998f49-1db3-43b0-b28b-f43f6cc6bb5a.png)

   ![image](https://user-images.githubusercontent.com/87290225/158807007-5b0ac0ce-0e18-490a-9fea-9bc7ece46e5e.png)
   
   
   
   
   
   ![image](https://user-images.githubusercontent.com/87290225/158807048-1ed202d0-8d2a-4f8d-a1bc-e0b77d7e4209.png)


