// ---------------------------预加载--------------------------

    var imgs = $("#wrap img");
    var $mask = $("#mask");
    var $loading = $("#mask>div");

    var loadingH = 0;
    // 用来表示已经加载了多少张图片
    var num = 0;

    for (var i = 0; i < imgs.length; i++) {
        // 创建图片对象
        var img = new Image();
        // 赋予地址
        img.src = imgs[i].src;
        // 当图片加载完后触发方法
        img.onload = function () {
            //计算加载了多少张
            num++;
            //计算百分比
            loadingH = parseInt((num / imgs.length) * 58);
            //改变loading的高
            $loading.height(loadingH);
            // alert(loadingH);
            // console.log(loadingH);
            
            //判断是否已经加载所有的图片
            if(num == imgs.length){
                $mask.hide();
            }
        }       
    }

// ---------------------------导航交互----------------------
// 首页
var $typeLi=$(".type>li");
var $back=$("#back");
// 添加事件
$typeLi.on("mouseenter",function(){
    var l = -(100-($(this).index()+1)*25) + "%";
       $back.css({transition:"0.8s",left:l})
});
var $logo=$(".logo");

$logo.on("click",function(){
    $(".wrap").find("#nav").show().siblings().hide();
})

// ..........header..............
    var $cter=$(".cter>li");
    var $a=$(".cter>li>a");
    var $span=$(".cter>li>span");
    var $all=$(".all");

$typeLi.on("click",function(){
    // 导航条
    $("#header").slideDown();
    // 显示文本样式
    $span.eq($(this).index()).addClass("span").parent().siblings().children("span").removeClass("span");
    $a.eq($(this).index()).attr("id","active").parent().siblings().children("a").removeAttr("id");
    // 导航主页隐藏
    $(".wrap").find("#nav").hide();
    // 显示分页面
    $all.eq($(this).index()).show();
})

$cter.on("click",function(){
        // 页眉导航切换
        $span.eq($(this).index()).addClass("span").parent().siblings().children("span").removeClass("span");
        $a.eq($(this).index()).attr("id","active").parent().siblings().children("a").removeAttr("id");
        // 切换页面
        $all.eq($(this).index()).show().find().siblings().hide();
    })
// ..........work..............
    var $workContextA=$(".workContext>ul>li>a");
    var $workContextLi=$(".workContext>ul>li");
    var $field=$(".subfield>li");
    var $fieldA=$(".subfield>li>a");
    var $ulul=$(".workContext>ul>li>ul>li");
    // <!-- CREATIVE -->
    var $left=null;
    var $dir=$("#dir>span");
    var $right=$(".f");
    var $div=$(".contextLeft>div");
    var $big=$(".big");
// 全部图片切换效果
$workContextLi.on("click",function(){
    $big.hide();
    $big.eq($(this).index()).show();
})
// 点击文字切换图片事件
// CONFERENCE
    var $conference=$("#work>div:nth-of-type(3)>.workBottom");
    var $conferenceLi=$(".workContext>ul>li:nth-of-type(2)>ul>li");
$conferenceLi.on("click",function(){
    $conference.hide();
    $conference.eq($(this).index()).show();
});
// PARTY
    var $party=$("#work>div:nth-of-type(4)>.workBottom");
    var $partyLi=$(".workContext>ul>li:nth-of-type(3)>ul>li");
$partyLi.on("click",function(){
    $party.hide();
    $party.eq($(this).index()).show();
});
// ROADSHOW
    var $roadshow=$("#work>div:nth-of-type(5)>.workBottom");
    var $roadshowLi=$(".workContext>ul>li:nth-of-type(4)>ul>li");
$roadshowLi.on("click",function(){
    $roadshow.hide();
    $roadshow.eq($(this).index()).show();
});
// EXHIBITION
    var $exhibition=$("#work>div:nth-of-type(6)>.workBottom");
    var $exhibitionLi=$(".workContext>ul>li:nth-of-type(5)>ul>li");
$exhibitionLi.on("click",function(){
    $exhibition.hide();
    $exhibition.eq($(this).index()).show();
});
// DINNER
    var $dinner=$("#work>div:nth-of-type(7)>.workBottom");
    var $dinnerLi=$(".workContext>ul>li:nth-of-type(6)>ul>li");
$dinnerLi.on("click",function(){
    $dinner.hide();
    $dinner.eq($(this).index()).show();
});
// 右边隐藏字体的显示隐藏
$fieldA.on("click",function(){
    removeactive();
    $(this).addClass("active").parent().siblings().removeClass("active");
})
// 右边隐藏字体显示隐藏的控制
function removeactive(obj){
        for (var i = 0; i < $fieldA.length; i++) {
            $fieldA.eq(i).removeClass("active");
        };
}
// 右左两边字体共同控制右边字体的显示隐藏
$workContextA.on("click",function(){
        $fieldA.removeClass("active");
        $(this).parent().find(".subfield").find($fieldA).eq(0).addClass("active");
})

//左边字体控制右边字体的显示隐藏
$workContextLi.on("click",function(){
        for (var i = 0; i < $workContextLi.length; i++){
            // 布尔值是用来检测右边字体的是显示还是隐藏
            $workContextLi.eq(i).attr("bol",false);
            $workContextLi.eq(i).find("ul").hide();
        };
        // 给右边的li标签添加布尔值
        $(this).attr("bol",true);
        // 让右边的ul标签显示出来
        $(this).find("ul").show();
    })
// 鼠标控制右边字体的显示隐藏
$workContextLi.on("mouseenter",function(){
        $(this).find("ul").show();
    })
$workContextLi.on("mouseleave",function(){
        // 判断是否有被点击的标签如果没有新的被点击切换就不
        // 执行下面if语句，反之。
        if ($(this).attr("bol")=="true"){
            return;
        };
        $(this).find("ul").hide();
    })
$right.on("click",function(){
        $(this).parent().parent().prev().find($div).hide();
        $div.eq($(this).index()).show();
})
$dir.on("click",function(){
    $(this).addClass("add").siblings().removeClass("add");
    $left=$(".contextLeft>div:visible .d");
    $left.hide();
    $left.eq($(this).index()).show();
});
// .........team..............
// 获取到对应的元素
        var moveBar = document.querySelector(".move");
        var scrollBar = document.querySelector(".scr");
        var wrap =document.querySelector(".teamWrap");
        var content = document.querySelector(".teamContext");
        // 给滑块moveBar
        moveBar.onmousedown = function(e){
            var e = e || window.event;

            //得到鼠标的坐标
            var mouseY = e.clientY;
            // 得到wrap的offsetTop和moveBar的offsetTop
            var wrapOffsetTop = wrap.offsetTop;
            var moveBarTop = moveBar.offsetTop;
            // 计算差值
            var differ = mouseY - wrapOffsetTop - moveBarTop;

            // 滑块滑动时候
            document.onmousemove = function(e){
                var e = e || window.event;
                // 得到滑动时候的鼠标坐标
                var moveY = e.clientY;
                // 滑块变化移动值
                var top = moveY - wrapOffsetTop - differ;

                // ----调用函数-----
                moveBarFn(top);

                // 阻止默认事件
                return false;
                window.event.returnValue = false;
                event.preventDefalt();
            }
        }
        // 松开鼠标
        document.onmouseup = function(){
            //
            document.onmousemove = null;
        }
        // -------添加键盘事件-------
        document.onkeydown = function(e){
            var e = e || window.event;
            // 声明一个变量
            var top = 0;

            switch(e.keyCode){
                // 上
                case 38:
                    // 先获取到当前滑块的offsetTop的值
                    // 在基础上减少10
                    top = moveBar.offsetTop - 10;
                    break;
                // 下
                case 40:
                    top = moveBar.offsetTop + 10;
                    break;
            }
            // 调用函数来改变滑块的位置
            moveBarFn(top);
        }
        // -------添加键盘事件-------
        // 封装一个函数
        function moveBarFn(top) {
            // 判断碰壁
            // 碰到上边
            if(top <= 0){
                top = 0;
            }
            // 碰到下边
            if(top >= scrollBar.offsetHeight - moveBar.offsetHeight){
                top = scrollBar.offsetHeight - moveBar.offsetHeight;
            }
            // 改变滑块moveBar的位置
            moveBar.style.top = top + "px";
            // ------------------------------------
            // 计算比例
            var scale = top / (scrollBar.offsetHeight - moveBar.offsetHeight);
            //得到文字剩余部分的高度
            var contentDiffer = content.offsetHeight - wrap.offsetHeight;
            // 改变文字位置
            content.style.top = contentDiffer * -scale + "px";

            // ------------------------------------
        }
        // -------添加滚轮事件-------
        mouseWheelFn(wrap,function(){
            var top = moveBar.offsetTop - 10;
            moveBarFn(top);
        },function(){
            var top = moveBar.offsetTop + 10;
            moveBarFn(top);
        });
        // -------添加滚轮事件-------
        function mouseWheelFn(element,upFn,downFn){
            element.onmousewheel = fn;
            // 判断浏览器是否支持addEventListener方法
            if(window.addEventListener){
                element.addEventListener("DOMMouseScroll",fn,false);
            }
            // 函数,判断用户滚轮向上还是向下
            function fn(e){
                var e = e || window.event;
                // 判断滚轮方向
                // 滚轮向上
                if(e.wheelDelta > 0 || e.detail < 0){
                    upFn();
                }else{
                    downFn();
                }
                // 阻止冒泡
                e.cancelBubble = true;
                e.stopPropagation();
            }
        }
// .............contact....................
var map=$("#map");
map.on("click",function(){
    window.location.href="map.html";
})