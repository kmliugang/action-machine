# 初始化
 - name: 安装依赖和项目打包📦
      run: |  #竖线不写报错#
        npm install
        echo "当前目录：$(pwd)"
        echo "package.json 脚本："
        cat package.json
        echo "--- 开始打包 ---"
        npm run build


#  