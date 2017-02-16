/**
 * Created by Administrator on 2017/1/4.
 */
$(
    function () {
        document.querySelector('html').style.fontSize = document.documentElement.clientWidth/10 +"px";
        $("body").css( "height" , $(window).height() +"px");//设置自适应高度
        TabsInit();
        Tabs();
        banner();
    }
);
//初始化标签
function TabsInit() {
    $(".main").children().not($(".footer")).hide();
    $(".main").children().eq(0).show();
    var src = $(".footer").children().eq(0).find('img').attr("src").replace("1","2");
    $(".footer").children().eq(0).find('img').attr("src",src);
}
//标签选择
function Tabs() {
    $(".footer").children().click(function () {
        $(".main").children().not($(".footer")).hide();
        var index = $(this).index();
        $(".main").children().eq(index).show();
         $(".footer").children().each(
             function () {
                 var orgsrc = $(this).find("img").attr('src').replace("2","1");
                 $(this).find("img").attr("src",orgsrc);
             }
         )
        var src = $(this).find('img').attr("src").replace("1","2");
        console.log(src);
        $(this).find('img').attr("src",src);
    });
}
//轮播图
function banner() {
    $(".index .header ul li").not($(".index .header ul li").eq(0)).hide();
    var i = 0;
    setInterval(function () {
            var index = i%3;
            $(".index .header ul li").hide()
            $(".index .header ul li").eq(index).show();
            i++;
    },3000);
}