/**
 * Created by dell on 2017/5/3.
 */
$(function () {
    // 提示信息功能
    $("#show-msg").click(function() {
        var $msg = $("#msg-remember-demo").show();
        localStorage.removeItem("sui-msg-" + $msg.attr("id"));
    });

})
