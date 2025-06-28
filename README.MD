# 初始化
 - name: 安装依赖和项目打包📦
      run: |  #竖线不写报错#
        npm install
        echo "当前目录：$(pwd)"
        echo "package.json 脚本："
        cat package.json
        echo "--- 开始打包 ---"
        npm run build


#  需要切换分支

 action->部署分支


# 部署访问资源404

1. 需要打包设置资源访问路径 base:'/action-machine/' 
2. 路径对应的是仓库名称


# yml

```yml
name: 打包Vue3项目

on: push

permissions:
  contents: write
  pages: write

jobs:
  npm-build:
    name: npm-build工作
    runs-on: ubuntu-latest

    steps:
    - name: Checkout code 读取仓库代码
      uses: actions/checkout@v4

    - name: 安装依赖和项目打包📦
      run: |
        npm install
        echo "当前目录：$(pwd)"
        echo "package.json 脚本："
        cat package.json
        echo "--- 开始打包 ---"
        npm run build
    
    - name: 检查 dist 是否生成
      run: ls -la dist

    - name: 部署🚀
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        branch: gh-pages
        folder: dist

```