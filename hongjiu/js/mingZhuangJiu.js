//页面爬墙效果
$(function(){
    //点击跳转
    $('#paqiang>li').on('click',function(){
        var top=$('.bjtu>div').eq($(this).index()).offset().top;
        $('html,body').animate({
            scrollTop:top
        },500)
    })

    //固定定位
    $(window).on('scroll',function(){
        var top=$(this).scrollTop();
        if(top>839){
            $(".paqiang").addClass("paqiang1");
        }else{
            $(".paqiang").removeClass("paqiang1");
        }
    })
    //点击top到页顶
    $("#top").on("click",function(){
        $('html,body').animate({
            scrollTop:0
        },500)
    })
})