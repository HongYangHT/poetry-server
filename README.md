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
- npm init initdb
- npm run dev

#### APi 文档
- [api-doc](http://apidocjs.com/)编写
- npm run api-doc
- 启动服务就可以访问，[文档](https://hongyanght.github.io/poetry-server/api-doc/api/index.html)

#### PR | 代码提交
- 使用[commitizen](https://github.com/commitizen/cz-cli)
- npm install -g commitizen
- 使用 angular 的 commit 规范
  `commitizen init cz-conventional-changelog --save-dev --save-exact`
- 提交使用 `git cz`

#### 感谢
- 感谢[中文诗歌（chinese-poetry）](https://github.com/chinese-poetry/chinese-poetry)的辛苦整理
- 感谢[KomaBeyond 提供的转化工具(chinese-poetry-mysql)](https://github.com/KomaBeyond/chinese-poetry-mysql)

#### nodejs 后台开发注意事项
- `并行代替串行` 使用Promise.all来请求接口
```
  let fetchData = async function(){
  let p1 = getIdeaPromise()
  let p2 = getGuidancePromise()
  let [ideas, guidances] = await Promise.all([p1, p2])
  return {ideas, guidances}
}
```

- 使用`redis`进行缓存数据

```
scp ~/.ssh/id_rsa.pub www@106.14.122.74:/root/.ssh/authorized_keys
```
