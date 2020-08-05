require.config({
    paths: {
        "jquery": ["http://libs.baidu.com/jquery/2.0.3/jquery"],
    }
})
require(["jquery", "a", "jquery.cookie"], function ($) {
    $(function () {
        alert("load finished");
        console.log($.cookie);
    })
})