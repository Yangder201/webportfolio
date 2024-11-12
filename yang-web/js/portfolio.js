document.addEventListener('DOMContentLoaded', function () {
    // 預設載入作品集首頁
    fetch('banner.html')
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.text();
        })
        .then(data => {
            document.getElementById('portfolio-area').innerHTML = data;
            // 初始化 Fancybox
            initFancybox();
        })
        .catch(error => console.error('Error loading:', error));

    const btnAreaBg = document.getElementById('btn-area-bg');
    const btnAreaBbg = document.getElementById('btn-area-bbg');
    const btnAreaBgM = document.getElementById('btn-area-bg-m'); // 手機版背景
    const btnClose = document.querySelector('.btn_close'); // 取得關閉按鈕

    // 電腦版選單功能
    document.querySelectorAll('.btn-box, .btn-box-all').forEach(button => {
        button.addEventListener('click', function () {
            const page = this.getAttribute('data-page'); // 獲取 data-page 屬性

            if (page) {
                fetch(page)
                    .then(response => {
                        if (!response.ok) throw new Error('Network response was not ok');
                        return response.text();
                    })
                    .then(data => {
                        document.getElementById('portfolio-area').innerHTML = data;

                        // 點選後收起 btn-area-bg
                        if (btnAreaBg) {
                            btnAreaBg.style.display = 'none';
                        }

                        // 重新初始化 Fancybox
                        initFancybox();
                    })
                    .catch(error => console.error('Error loading:', error));
            }
        });
    });

    // 電腦版主選單按鈕點擊行為
    document.querySelectorAll('.btn_menu').forEach(menuButton => {
        menuButton.addEventListener('click', function () {
            if (btnAreaBg.style.display === 'block') {
                btnAreaBg.style.display = 'none'; // 隱藏 btn-area-bg
                btnAreaBbg.style.display = 'none'; // 隱藏 btn-area-bbg
            } else {
                btnAreaBg.style.display = 'block'; // 顯示 btn-area-bg
                btnAreaBbg.style.display = 'block'; // 顯示 btn-area-bbg
            }
        });
    });

    // 電腦版關閉按鈕行為
    btnClose.addEventListener('click', function () {
        if (btnAreaBg) {
            btnAreaBg.style.display = 'none'; // 隱藏 btn-area-bg
        }
        if (btnAreaBbg) {
            btnAreaBbg.style.display = 'none'; // 隱藏 btn-area-bbg
        }
    });

    // 手機版主選單按鈕點擊行為
    document.querySelectorAll('.btn_menu-m').forEach(menuButtonM => {
        menuButtonM.addEventListener('click', function () {
            if (btnAreaBgM.style.display === 'block') {
                btnAreaBgM.style.display = 'none'; // 隱藏手機版背景
            } else {
                btnAreaBgM.style.display = 'block'; // 顯示手機版背景
            }
        });
    });

    // 手機版 btn_box_m 點擊換頁並收起手機版背景
    document.querySelectorAll('.btn_box_m').forEach(buttonM => {
        buttonM.addEventListener('click', function () {
            const page = this.getAttribute('data-page'); // 獲取 data-page 屬性

            if (page) {
                fetch(page)
                    .then(response => {
                        if (!response.ok) throw new Error('Network response was not ok');
                        return response.text();
                    })
                    .then(data => {
                        document.getElementById('portfolio-area').innerHTML = data;

                        // 點選後收起手機版背景
                        if (btnAreaBgM) {
                            btnAreaBgM.style.display = 'none';
                        }

                        // 重新初始化 Fancybox
                        initFancybox();
                    })
                    .catch(error => console.error('Error loading:', error));
            }
        });
    });
});



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

    // 這裡是你的選單按鈕點擊事件
    $('.btn-box, .btn-box-all').on('click', function() {
        const page = $(this).data('page'); // 獲取 data-page 屬性
        if (page) {
            fetch(page)
                .then(response => {
                    if (!response.ok) throw new Error('Network response was not ok');
                    return response.text();
                })
                .then(data => {
                    document.getElementById('portfolio-area').innerHTML = data; // 載入新內容

                    // 直接隱藏漢堡選單
                    $("#btn-area-bbg").hide(); // 收起背景
                    $("#btn-area-bg").hide(); // 直接隱藏選單
                    $(".btn_menu").fadeIn(1000); // 如果需要再顯示漢堡按鈕的話
                })
                .catch(error => console.error('Error loading:', error));
        }
    });

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
    updateButtons('#btn-area-m .btn_box_m, #btn-area-m .btn-box-now-m', 'btn-box-now-m', 'btn-box-now-m');

    // 新增：點擊選單項目後自動收合
    $('.btn-box, .btn-box-all').on('click', function() {
        $("#btn-area-bg").slideUp(300); // 使用 slideUp 隱藏選單
        $("#btn-area-bbg").hide(); // 收起背景
    });
});



