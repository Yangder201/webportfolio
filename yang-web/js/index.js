// 全域變數
let s; // skrollr 實例
const controller = new ScrollMagic.Controller();
let textScene;

// DOM 載入完成後初始化
$(document).ready(function() {
    initSkrollr();
    initScrollAnimations();
    initMenuBehavior();
    initMobileMenu();
    initHoverEffects();
    initColorChange();
});

// Skrollr 初始化
function initSkrollr() {
    // 檢測是否為移動設備
    if(!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        s = skrollr.init({
            smoothScrolling: true,
            smoothScrollingDuration: 1000,
            forceHeight: false,
            mobileDeceleration: 0.004,
            mobileCheck: function() { return false; } // 禁用移動版
        });
    }
}

// 初始化滾動動畫
function initScrollAnimations() {
    const tl = gsap.timeline();
    
    // 逐行顯示文字動畫
    for(let i = 1; i <= 9; i++) {
        tl.to(`.info_text:nth-child(${i})`, { 
            opacity: 1, 
            y: 0, 
            duration: 0.5,
            ease: "power1.out" 
        });
    }

    // 設定 ScrollMagic 場景
    textScene = new ScrollMagic.Scene({
        triggerElement: '#base_info',
        triggerHook: 0.5,
        duration: '80%'
    })
    .setTween(tl)
    .addTo(controller);

    // 移動設備處理
    if(window.innerWidth <= 768) {
        textScene.removePin();
    }
}

// 選單行為初始化
function initMenuBehavior() {
    // 錨點平滑滾動
    $("a").on("click", function(event) {
        if(this.hash !== "") {
            event.preventDefault();
            const hash = this.hash;
            const targetOffset = $(hash).offset().top;

            $("html, body").animate({
                scrollTop: targetOffset
            }, 800);
        }
    });

    // 回到頂部按鈕
    $("#gotop").click(function() {
        $("html,body").animate({
            scrollTop: 0
        }, 500);
    });

    // 顯示/隱藏回到頂部按鈕
    let scrollTimeout;
    $(window).scroll(function() {
        if(scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(function() {
            if($(window).scrollTop() > 300) {
                $('#gotop').fadeIn("fast");
            } else {
                $('#gotop').stop().fadeOut("fast");
            }
            
            // 更新選單焦點
            updateMenuFocus();
            
            // 刷新 skrollr（如果存在）
            if(s && typeof s.refresh === 'function') {
                s.refresh();
            }
        }, 150);
    });
}

// 更新選單焦點
function updateMenuFocus() {
    const scrollPosition = window.scrollY + 50;
    const menuItems = document.querySelectorAll('#cssmenu ul li a');

    menuItems.forEach(function(item) {
        const sectionId = item.getAttribute('href').substring(1);
        const section = document.getElementById(sectionId);

        if(section && section.offsetTop <= scrollPosition && 
           section.offsetTop + section.offsetHeight > scrollPosition) {
            menuItems.forEach(menuItem => menuItem.parentNode.classList.remove('focus'));
            item.parentNode.classList.add('focus');
        }
    });
}

// 手機版選單初始化
function initMobileMenu() {
    $(".btn_menu-m").click(function() {
        $("#header-m").slideToggle(300);
    });

    $("#btn-area-m li").click(function() {
        $("#header-m").css("display", "none");
    });
}

// 滑鼠懸停效果初始化
function initHoverEffects() {
    const openText = document.querySelector('.open_text');
    const openTextEn = document.querySelector('.open_text_en');

    if(window.innerWidth > 768) { // 只在桌面版啟用
        document.addEventListener('mousemove', function(event) {
            const x = event.clientX / window.innerWidth;
            const y = event.clientY / window.innerHeight;

            if(openText) {
                openText.style.transform = `translate(${(x - 0.5) * 50}px, ${(y - 0.5) * 50}px)`;
            }
            if(openTextEn) {
                openTextEn.style.transform = `translate(${(x - 0.5) * 30}px, ${(y - 0.5) * 30}px)`;
            }
        });
    }
}

// 選單顏色變化初始化
function initColorChange() {
    const elementsToChange = document.querySelectorAll("#cssmenu > ul > li > a, #logo a");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            elementsToChange.forEach(element => {
                element.style.color = entry.isIntersecting ? "#1c1c1c" : "#ffffff";
            });
        });
    });

    const sections = [
        document.querySelector("#tool_bg"), 
        document.querySelector("#trait_bg")
    ];
    sections.forEach(section => section && observer.observe(section));
}

// 視窗大小改變處理
$(window).on('resize', function() {
    if(s && typeof s.refresh === 'function') {
        s.refresh();
    }

    if(window.innerWidth <= 768) {
        if(textScene) {
            textScene.removePin();
        }
    } else {
        if(textScene) {
            textScene.setPin('#base_info');
        }
    }
});


// 初始化滾動動畫
function initScrollAnimations() {
    const tl = gsap.timeline();
    
    // 設定每行文字的動畫
    const textElements = document.querySelectorAll('.info_text');
    textElements.forEach((element, index) => {
        if (index === 0) {
            tl.set(element, { opacity: 0, y: 20 });
        } else {
            tl.set(element, { opacity: 0, y: 20 }, 0);
        }
    });

    textElements.forEach((element, index) => {
        tl.to(element, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power1.out"
        }, index * 0.7); // 每個文字之間間隔 0.7 秒
    });

    // 設定 ScrollMagic 場景
    textScene = new ScrollMagic.Scene({
        triggerElement: '#base_info',
        triggerHook: 0,    // 重要：改回 0
        duration: '100%'   // 使用完整的滾動距離
    })
    .setPin('#base_info')  // 重新加入 pin 效果
    .setTween(tl)
    .addTo(controller);

    // 只在非移動設備上啟用固定效果
    if(window.innerWidth <= 768) {
        textScene.removePin();
    }
}

// 修正選單焦點更新函數
function updateMenuFocus() {
    const scrollPosition = window.scrollY + (window.innerHeight / 3); // 調整觸發位置
    const menuItems = document.querySelectorAll('#cssmenu ul li a');

    menuItems.forEach(function(item) {
        const href = item.getAttribute('href');
        // 排除外部連結
        if (href.startsWith('#')) {
            const sectionId = href.substring(1);
            const section = document.getElementById(sectionId);

            if (section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;

                if (scrollPosition >= sectionTop && 
                    scrollPosition < (sectionTop + sectionHeight)) {
                    // 移除所有焦點
                    menuItems.forEach(menuItem => 
                        menuItem.parentNode.classList.remove('focus'));
                    // 添加當前焦點
                    item.parentNode.classList.add('focus');
                }
            }
        }
    });
}

// 加強版滾動事件處理
let scrollThrottle;
window.addEventListener('scroll', function() {
    if (!scrollThrottle) {
        scrollThrottle = setTimeout(function() {
            updateMenuFocus();
            scrollThrottle = null;
        }, 50); // 50ms 節流，避免過度觸發
    }
});