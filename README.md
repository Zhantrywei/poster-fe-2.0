# poster-fe-2.0

> a system about poster designing

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 2018/5/21

1. 重新设计表单设计模块(到时海报设计模块做相对应的修改)
2. 对应每一个组件进行设计
    1. 背景组件->背景管理
    2. 文本组件->文本管理
    3. 图片组件->图片管理
    4. 单行文本组件->单行文本管理 (归类密码组件) 加一个是否切换为密码框
    5. 多行文本组件->多行文本管理
    6. 单选框组件->单选框管理
    7. 多选框组件->多选框管理
    8. 下拉框组件->下拉框管理
    9. 上传附件组件->上传管理
    10. 提交按钮组件->提交按钮管理
    11. 图层管理组件->图层管理
3. 需要学习的知识:
    1. vue组件间的通信(复习);
    2. render函数;
    3. vuex;
    4. 拖拉等操作;
4. 遇到的问题:
    1. vue-awesome: 引入失败
        ```javascript
            在main.js中引入
            import Icon from 'vue-awesome/components/Icon'
            import 'vue-awesome/icons/index.js'
            Vue.component('icon', Icon)
        ```
    2. el-tabs是字符,要用render函数引入组件,这个需要学习一下
      ``` js
        'http://www.codes51.com/itwd/4369839.html'
      ```
5. 初步设计提交的表单设计的json
    ```json
      formStyle: {
        "bgStyle": {
          "bgImgUrl": "",
          "bgColor": "",
          "bgOpacity": 0.5
        },
        "contentComponents": [
          //文本组件
          {
            "type": "text",
            "content": "",//注意进行换行符转换,
            "fontFamily": "",
            "fontSize": 18,
            "fontColor": "",
            "bgColor":"",
            "textAlign": "",
            "isBorder": true,
            "isItalic": true,
            "isUnderLine": true,
            "lineHight": 0.1,
            "letterSpacing": 20,
            //不用宽高,由内容填充,可旋转移动,不可伸缩
            "width": 100,
            "x": 60,
            "y": 50,
            "angle": 30
          },
          //图片组件
          
        ]
      }
    ```