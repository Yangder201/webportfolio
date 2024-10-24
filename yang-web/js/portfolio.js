$(document).ready(() => {
    // 左選單收合
    const handleMenuToggle = (btnMenu, btnClose, bgSelector, marginValue) => {
        $(btnMenu).click(() => {
            $("#btn-area-bbg").show(5);
            $(bgSelector).animate({ marginLeft: marginValue }, 300);
            $(btnMenu).fadeOut(300);
        });

        $(btnClose).click(() => {
            $("#btn-area-bbg").hide(5);
            $(bgSelector).animate({ marginLeft: "-51%" }, 200);
            $(btnMenu).fadeIn(1000);
        });
    };

    handleMenuToggle(".btn_menu", ".btn_close", "#btn-area-bg", "25%");

    // 手機板選單
    $(".btn_menu-m").click(() => {
        $("#btn-area-bg-m").slideToggle(300);
    });

    // 滑鼠移入選單按鈕出現文字變化
    $(".btn_menu").hover(
        function () {
            $(this).html("MENU");
        },
        function () {
            $(this).html("≡"); // 恢復原狀
        }
    );

    // go to top
    $("#gotop").click(() => {
        $("html,body").animate({ scrollTop: 0 }, 500);
    });

    $(window).scroll(() => {
        if ($(this).scrollTop() > 300) {
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

    // 取得當前頁面的 URL
    const currentPage = window.location.pathname;
  
    // 桌面版按鈕處理
    const updateButtons = (selector, className, nowClass) => {
        const buttons = document.querySelectorAll(selector);
        buttons.forEach(button => {
            const link = button.querySelector('a');
            if (link && currentPage.includes(link.getAttribute('href'))) {
                button.classList.add(nowClass);
                button.innerHTML = link.textContent;  // 移除 <a> 並保持文字
            }
        });
    };

    updateButtons('#btn-area .btn-box, #btn-area .btn-box-now', 'btn-box-now', 'btn-box-now');
    updateButtons('#btn-area-m .btn-box-m, #btn-area-m .btn-box-now-m', 'btn-box-now-m', 'btn-box-now-m');
});
