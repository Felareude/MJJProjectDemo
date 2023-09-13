var goods = document.getElementById("goods");
var goodsList = document.getElementById("goods-ul");
var goodsleftArror = document.getElementById("goods-left-arrow");
var goodsrightArror = document.getElementById("goods-right-arrow");

var goods_imgPosition = 0;

//函数节流锁 true表示可以访问
var goodslock = true;

goodsrightArror.onclick = function () {
    if (!goodslock) return;

    goodslock = false;

    goodsList.style.transition = "all 0.5s ease 0s";
    goods_imgPosition++;
    if (goods_imgPosition == 10) {
        setTimeout(function () {
            goodsList.style.transition = 'none';
            goodsList.style.marginLeft = 0;
            goods_imgPosition = 0
        }, 500);
    }
    goodsList.style.marginLeft = goods_imgPosition * -221 + "px";

    setTimeout(function () {
        goodslock = true;
    }, 500);
}

goodsleftArror.onclick = function () {
    if (!goodslock) return;

    goodslock = false;

    if (goods_imgPosition == 0) {
        goodsList.style.transition = "none";
        goods_imgPosition = 10;
        goodsList.style.marginLeft = goods_imgPosition * -221 + "px";
        setTimeout(function () {
            goodsList.style.transition = "all 0.5s ease 0s";
            goods_imgPosition--;
            goodsList.style.marginLeft = goods_imgPosition * -221 + "px";
        }, 0);
    } else {
        goods_imgPosition--;
        goodsList.style.marginLeft = goods_imgPosition * -221 + "px";
    }

    setTimeout(function () {
        goodslock = true;
    }, 500);
}