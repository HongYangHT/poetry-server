### poetry-server
- `poetry-server` 是依赖于[chinese-poetry 中文诗歌整理的数据](https://github.com/chinese-poetry/chinese-poetry)，采取前后端分离，来提供给[poetry 应用]()服务调用。

#### 技术栈(以下文档均为中文翻译文档，如需查询最新文档请搜索英文文档)
- [koa2](https://koa.bootcss.com/)
- [mysql](https://www.mysql.com/)
- [graphql](http://graphql.cn/)
- [sequelize](https://github.com/demopark/sequelize-docs-Zh-CN)

#### 架构设计
```
  |--config #相关配置
  |--src
  |  |----controllers #操作层
  |  |----db
  |     |-- index.js #数据库连接操作
  |  |----models #数据模型
  |  |----route #路由
  |  |----services #业务层
  |  |----sql
  |     |--db.sql #sql 脚本文件
  |  |----utils #功能函数
  |--node_modules
  |--.babelrc #babel配置文件
  |--app.js #程序入口文件
  |--package.json
  |--README.md
```

#### 启动
- 确认已安装mysql数据库
- 下载当前代码到本地
  `
  mkdir poetry-server && cd poetry-server && git clone https://github.com/HongYangHT/poetry-server.git
  `
- npm install 
- npm run dev
