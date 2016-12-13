/**
 * Created by Administrator on 2016/12/4.
 */
$(
    function () {
      tabExange();
      exangeBackgroud();
      picitemShow();
      ullistShow();
      showBigPic();
      scollTopShow();
      returnTop();
    }
);
/**
 * 左侧菜单
 */
function tabExange() {
    $('.content-con').hide();
    $('.hot-word-con').hide();
    var that = null;
    $('.normal-nav li').hover(
        function (e) {
            $('.content-con').toggle();
            $('.hot-word-con').eq($(this).index()).show();
            that = $(this).index();
        },
        function () {
            $('.content-con').toggle();
            $('.hot-word-con').eq($(this).index()).hide();
        }
    );
    $('.content-con').hover(
        function () {
            $('.content-con').show();
            $('.hot-word-con').eq(that).show();
             $('.normal-nav li').eq(that).css('background','#ffffff');
        },function () {
            $('.content-con').hide();
            $('.hot-word-con').eq(that).hide();
             $('.normal-nav li').eq(that).css('background','rgba(238,238,238,.95)');
        }
    );
}
/**
 * 设置轮换的背景
 */
function exangeBackgroud() {
    var color=["rgb(188,3,255)","rgb(232,232,232)","rgb(209,174,146)","rgb(232,232,232)","rgb(6,6,6)","rgb(224,249,254)"];
    var i =0;
    var index = 0;
    setInterval(function () {
        index =i++%$('.main-banner').length;
        $('.main-banner').hide();
        $('.main-banner').eq(index).show();
        $('.main-banner').eq(index).css("background-color",color[index]);
        $('.slider-nav li').removeClass();
        $('.slider-nav li').eq(index).addClass('slected');
    },3000)
    $('.slider-nav li').mouseenter(
        function () {
            $('.main-banner').hide();
            $('.main-banner').eq($(this).index()).show();
            $('.slider-nav li').removeClass();
            $('.slider-nav li').eq($(this).index()).addClass('slected');
            $('.main-banner').eq($(this).index()).css("background-color",color[$(this).index()]);
            index = $(this).index();
        }
    );
}
/**
 * 轮播图
 */
function picitemShow() {
    $('.slide-page-next').show();
    $('.slide-page-prev').hide();
    $('.slide-page-next').click(
        function () {
            $('.items-ctn').animate(
                {
                    "margin-left":"-492px"
                },1000,function () {
                    $('.slide-page-next').hide();
                    $('.slide-page-prev').show();
                }
            )

        }
    );
    $('.slide-page-prev').click(function () {
        $('.items-ctn').animate(
            {
                "margin-left":"0px"
            },1000,function () {
                $('.slide-page-next').show();
                $('.slide-page-prev').hide();
            }
        )
    });
}
/**
 * 公告轮播
 */
function ullistShow() {
    setInterval(function () {
        $('.fc-item-list').animate({
            "margin-top":"-40px"
        },1000,function () {
            $('.fc-item').first().appendTo($('.fc-item-list'));
            $('.fc-item-list').css("margin-top",0);
        });
    },2000)
}
/**
 * 鼠标浮动显示大图标
 */
function showBigPic() {
    $('.live-slide-item').mouseenter(function () {
        $('.live-slide-item .above-cover').hide();
        $(this).find('.above-cover').show();
        $('#J_live-cover img.big-live-cover').attr("src","./img/big"+($(this).index()+1)+".webp");
        $('#J_live-cover p.big-live-title').html($(this).find('p.live-title').html());
    });
}

function scollTopShow() {
    setInterval(
        function () {
            if($('body').scrollTop()>500)
            {
                $('.as-total-container').css('top','0px');
                $('.fp-lift').show("slow");
            }else{
                $('.as-total-container').css('top','-51px');
                $('.fp-lift').hide("slow");
            }
        }
    ,100)
}
/**
 * 左导航栏返回顶部
 */
function returnTop() {
    $('.top').click(function () {
        $('body').animate(
            {
                "scrollTop":"0"
            }
        ,500)
    });
}