var recommend = document.getElementById("recommend-ul");
var leftArror = recommend.getElementsByClassName("left-arrow")[0];
var rightArror = recommend.getElementsByClassName("right-arrow")[0];
var ulbox = document.getElementById("re-ulbox");

var position = 0;

var lock = true;

rightArror.onclick = function () {
    //加锁
    if (!lock) return;
    //在运行时关锁
    lock = false;
    //重置动画效果
    ulbox.style.transition = "all 0.5s ease 0s";
    // 368px一张图片
    position++;
    ulbox.style.marginLeft = position * -368 + "px";
    // console.log("yes");//
    if (position == 9)
        setTimeout(function () {
            //延时0.5s后消除动画效果并转移到第一张
            ulbox.style.transition = "none";
            position = 0;
            ulbox.style.marginLeft = position * -368 + "px";
        }, 500)

    //函数节流 把锁打开
    setTimeout(function () {
        lock = true;
    }, 500)
}

leftArror.onclick = function () {
    if (!lock) return;

    lock = false;

    //小于时瞬间弹回最后然后再进行动画
    if (position == 0) {
        position = 9;
        ulbox.style.transition = "none";
        ulbox.style.marginLeft = position * -368 + "px";
        setTimeout(function () {
            ulbox.style.transition = "all 0.5s ease 0s";
            position--;
            ulbox.style.marginLeft = position * -368 + "px";
        }, 0)
    } else {
        position--;
        ulbox.style.marginLeft = position * -368 + "px";
    }

    setTimeout(function () {
        lock = true;
    }, 500)
}