# requireJs简单使用

## 全局配置

上面的例子中重复出现了require.config配置，如果每个页面中都加入配置，必然显得十分不雅，requirejs提供了一种叫"主数据"的功能，我们首先创建一个main.js：

```javascript
require.config({
    paths : {
        "jquery" : ["http://libs.baidu.com/jquery/2.0.3/jquery", "js/jquery"],
        "a" : "js/a"   
    }
})
```

然后再页面中使用下面的方式来使用requirejs：

```javascript
<script data-main="js/main" src="js/require.js"></script>
```

解释一下，加载 requirejs 脚本的 script 标签加入了data-main属性，这个属性指定的 js 将在加载完 require.js 后处理，我们把require.config的配置加入到data-main后，就可以使每一个页面都使用这个配置，然后页面中就可以直接使用require来加载所有的短模块名

data-main还有一个重要的功能，当script标签指定data-main属性时，require会默认的将data-main指定的js为根路径，是什么意思呢？如上面的data-main="js/main"设定后，我们在使用require(['jquery'])后(不配置jquery的paths)，require会自动加载js/jquery.js这个文件，而不是jquery.js，相当于默认配置了：

```javascript
require.config({
    baseUrl : "js"
})
```