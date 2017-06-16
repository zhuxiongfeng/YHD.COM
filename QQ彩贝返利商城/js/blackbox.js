/**
 * Created by hjxuan on 2017/3/7.
 */
$(function(){

    var animateTime = 200;                  //动画时间
    var $container = $(".blackboxcontainer");             //box对象


    // 动画函数
    function goTo($target,targetX,targetY,time){
        $target.stop();
        $target.animate({"left":targetX+"px","top":targetY+"px"},time,"linear");
    }

    // 鼠标移入动画
    $container.on("mouseenter",function(e){
        var ev = e || window.event;
        var cw = $(this).get(0).offsetWidth; //container width
        var ch = $(this).get(0).offsetHeight; // container height
        var k = ch / cw ; //斜率

        // alert(1);
        var x = ev.clientX - $(this).get(0).getBoundingClientRect().left;
        var y = ev.clientY - $(this).get(0).getBoundingClientRect().top;
        var $blackbox = $(this).children(".blackbox");
        //上
        if ( x>=-1 && y<=k*x && y<=-k*x+ch) {
            $blackbox.stop().css({"left":"0","top":-ch + "px","width":cw+"px","height":ch+"px"});
        } else
        //右
        if ( x<=cw+1 && y<k*x && y>-k*x+ch) {
            $blackbox.stop().css({"left":cw+"px","top":"0px","width":cw+"px","height":ch+"px"});
        } else
        //下
        if ( y<=ch+1 && y>=k*x && y>=-k*x+ch){
            $blackbox.stop().css({"left":"0px","top":ch+"px","width":cw+"px","height":ch+"px"});
        } else
        //左
        if ( x>=-1 && y>k*x && y<-k*x+ch){
            $blackbox.stop().css({"left":-cw+"px","top":"0px","width":cw+"px","height":ch+"px"});
        }
        goTo($blackbox,0,0,animateTime);
        // alert(1);
    });

    // 鼠标移出动画
    $container.on("mouseleave",function(e){
        var ev = e || window.event;
        var cw = $(this).get(0).offsetWidth; //container width
        var ch = $(this).get(0).offsetHeight; // container height
        var k = ch / cw ;
        var x = ev.clientX - $(this).get(0).getBoundingClientRect().left;
        var y = ev.clientY - $(this).get(0).getBoundingClientRect().top;

        var $blackbox = $(this).children(".blackbox");

        //上
        if ( y<=1 && y<=k*x && y<=-k*x+ch) {
            goTo($blackbox,0,-ch,animateTime);
        } else
        //右
        if ( x>=cw-1 && y<k*x && y>-k*x+ch) {
            goTo($blackbox,cw,0,animateTime);
        } else
        //下
        if ( y>=ch-1 && y>=k*x && y>=-k*x+ch){
            goTo($blackbox,0,ch,animateTime);
        } else
        //左
        if ( x<=1 && y>k*x && y<-k*x+ch){
            goTo($blackbox,-cw,0,animateTime);
        }
    });
});