//go to top
$(function () {
    $("#gotop").click(function () {
        jQuery("html,body").animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});

//左選單收合
$(document).ready(function () {
    $(".btn_menu").click(function () {
        $("#btn-area-bbg").show(5);
        $("#btn-area-bg").animate({ marginLeft: "25%" }, 300);
        $(".btn_menu").animate({ display: "none" }, 300);
    });

    $(".btn_close").click(function () {
        $("#btn-area-bbg").hide(5);
        $("#btn-area-bg").animate({ marginLeft: "-51%" }, 200);
        $(".btn_menu").animate({ display: "" }, 1000);
    });
});

//手機板選單
$(document).ready(function () {
    $(".btn_menu-m").click(function () {
        $("#btn-area-bg-m").slideToggle(300);
    });
});



//滑鼠移入選單按鈕出現文字變化
$(document).ready(function () {
    $(".btn_menu").hover(
        function () {
            $(this).html("MENU");
        },
        function () {
            $(this).html("≡"); //恢復原狀
        }
    );
});






