var banner = document.getElementById("banner");
var banner_ul = document.getElementById("banner-ul");
var banner_li = banner_ul.getElementsByTagName("li");
var count = 0;

//利用if else实现选择图片函数
var banner_switch = function () {
    if (count == 0) {
        banner_li[0].className = "banner-li li-active";
        banner_li[1].className = "banner-li";
        banner_li[2].className = "banner-li";
        banner.style.backgroundImage = "url(img/banner01.png)";
    }
    else if (count == 1) {
        banner_li[0].className = "banner-li";
        banner_li[1].className = "banner-li li-active";
        banner_li[2].className = "banner-li";
        banner.style.backgroundImage = "url(img/banner02.png)";
    }
    else if (count == 2) {
        banner_li[0].className = "banner-li";
        banner_li[1].className = "banner-li";
        banner_li[2].className = "banner-li li-active";
        banner.style.backgroundImage = "url(img/banner03.png)";
    }
}

//实现轮播图效果
var banner_lunbo = function () {
    count++;
    if (count == 3)
        count = 0;
    banner_switch();
}

//定时器 2s
var banner_time = setInterval(banner_lunbo, 2000);

//鼠标进入
banner.onmouseenter = function () {
    clearInterval(banner_time);
}

//鼠标移出
banner.onmouseleave = function () {
    banner_time = setInterval(banner_lunbo, 2000);
}


//事件委托 两种写法

// banner_ul.onclick = function (e) {
//     if (e.target === banner_li[0])
//         count = 0;
//     else if (e.target === banner_li[1])
//         count = 1;
//     else if (e.target === banner_li[2])
//         count = 2;
//     banner_switch();
// }

banner_ul.addEventListener('click', function (e) {
    if (e.target === banner_li[0])
        count = 0;
    else if (e.target === banner_li[1])
        count = 1;
    else if (e.target === banner_li[2])
        count = 2;
    banner_switch();
}, true)