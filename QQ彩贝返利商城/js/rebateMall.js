/**
 * Created by zxf on 2017/3/4.
 */
$(function(){
    //mainA轮播图
    //var index=0;
    //$(".lunbo  .tu img:eq(0)").css("display","block");
    //function showImg(){
    //    //$(".lunbo .tu img:eq("+index+")").animate({left:"-665px"},1500).hide();
    //    $(".lunbo .tu img:eq("+index+")").hide();
    //    index++;
    //    if(index==3){
    //        index=0;
    //    }
    //    $(".lunbo .tu img:eq("+index+")").show();
    //    setTimeout(showImg,3000);
    //}
    //  setTimeout(showImg,3000);

    var index=0;
    //$(".lunbo  .tu img:eq(0)").css("display","block");
    $(".lunbo div:eq("+index+")").css({"height":"35px","background":"#bf4215","top":"261px"});
    function showImg(){
        $(".lunbo .tu img:eq("+index+")").css({"left":"0px","top":"0px"});
        $(".lunbo .tu img:eq("+index+")").animate({left:"-665px"},800);
        $(".lunbo div:eq("+index+")").animate({"height":"32px","top":"264px"},800).css({"background":"rgba(39,81,112,0.6)"});
        //$(".lunbo .tu img:eq("+index+")").hide();
        index++;
        if(index==3){
            index=0;
        }
        $(".lunbo .tu img:eq("+index+")").css({"left":"666px","top":"0px"});
        $(".lunbo .tu img:eq("+index+")").animate({left:"0px"},800);
        $(".lunbo div:eq("+index+")").animate({"height":"35px","top":"261px"},800).css({"background":"#bf4215"});
        setTimeout(showImg,2000);
    }
      setTimeout(showImg,2000);


    //瀑布流布局

    //设置变量
    var total_width = 879;
    var col_num = 5;
    var col_width = 167;
    var kid_class1="waterDiv1";
    var kid_class2="waterDiv2";
    var kid_class3="waterDiv3";
    var kid_class4="waterDiv4";
    var kid_class5="waterDiv5";
    var kid_class6="waterDiv6";
    var margin_vertical = 10;
    if( col_num * col_width > total_width){
        console.log("Warning : Father div is too small !!!!");
    }
    var col_heights = new Array(col_num);
    for(i = 0; i < col_heights.length; i++){
        col_heights[i] = 0;
    }
    var min_col = 0;
    var top_int = 0;
    var left_int = 0;
    var i;
    var str = "";
    var margin_horizontal = ( total_width - col_num * col_width ) / ( col_num * 2 );
    //初始化
    $("." + kid_class1).each(function(){
        min_col = minOfArray(col_heights);
        top_int = col_heights[min_col];
        left_int = margin_horizontal + ( col_width + margin_horizontal * 2 ) * min_col;
        $(this).css("top", top_int + "px");
        $(this).css("left", left_int + "px");
        col_heights[min_col] += $(this).height() + margin_vertical;
    });
    //滚动条事件
    var top=0;
    var type1=true;
    var type2=true;
    var type3=true;
    var type4=true;
    var type5=true;
    $(document).scroll(function(){

        top=$(document).scrollTop();
        if(top>=400 && type1){
            //alert(1)
            $(".waterDiv2").css("display","block");
            //console.log($(document).scrollTop());
            $("." + kid_class2).each(function(){
                min_col = minOfArray(col_heights);
                top_int = col_heights[min_col];
                left_int = margin_horizontal + ( col_width + margin_horizontal * 2 ) * min_col;
                $(this).css("top", top_int + "px");
                $(this).css("left", left_int + "px");
                col_heights[min_col] += $(this).height() + margin_vertical;
            });
            type1=false;
        }
        else if(top>=700 && type2){
            $(".waterDiv3").css("display","block");
            //console.log($(document).scrollTop());
            $("." + kid_class3).each(function(){
                min_col = minOfArray(col_heights);
                top_int = col_heights[min_col];
                left_int = margin_horizontal + ( col_width + margin_horizontal * 2 ) * min_col;
                $(this).css("top", top_int + "px");
                $(this).css("left", left_int + "px");
                col_heights[min_col] += $(this).height() + margin_vertical;
            });
            type2=false;
        }
        else if(top>=1000 && type3){
            $(".waterDiv4").css("display","block");
            //console.log($(document).scrollTop());
            $("." + kid_class4).each(function(){
                min_col = minOfArray(col_heights);
                top_int = col_heights[min_col];
                left_int = margin_horizontal + ( col_width + margin_horizontal * 2 ) * min_col;
                $(this).css("top", top_int + "px");
                $(this).css("left", left_int + "px");
                col_heights[min_col] += $(this).height() + margin_vertical;
            });
            type3=false;
        }
        else if(top>=1200 && type4){
            $(".waterDiv5").css("display","block");
            //console.log($(document).scrollTop());
            $("." + kid_class5).each(function(){
                min_col = minOfArray(col_heights);
                top_int = col_heights[min_col];
                left_int = margin_horizontal + ( col_width + margin_horizontal * 2 ) * min_col;//计算当前元素应设置的绝对定位left值
                $(this).css("top", top_int + "px");
                $(this).css("left", left_int + "px");
                col_heights[min_col] += $(this).height() + margin_vertical;
            });
            type4=false;
        }
        else if(top>=1400 && type5) {
            $(".waterDiv6").css("display", "block");
            //console.log($(document).scrollTop());
            $("." + kid_class6).each(function () {
                min_col = minOfArray(col_heights);
                top_int = col_heights[min_col];
                left_int = margin_horizontal + ( col_width + margin_horizontal * 2 ) * min_col;
                $(this).css("top", top_int + "px");
                $(this).css("left", left_int + "px");
                col_heights[min_col] += $(this).height() + margin_vertical;
            });
            type5 = false;
        }
        //console.log($(document).scrollTop()+"px");
    });
    //找出数组中最小的元素
    function minOfArray(col_array){
        var min_num = col_array[0];
        var min_index = 0;
        for(var i = 0; i < col_array.length; i++){
            if(col_array[i] < min_num){
                min_num = col_array[i];
                min_index = i;
            }
        }
        return min_index;
    }
    //mainB右边栏轮播图1
    var index1=0;
    $(".lunbo1:eq("+index1+")").css("display","block");
    $("#xia").click(function(){
        $(".lunbo1:eq("+index1+")").css("display","none");
        index1++;

        if(index1==4){
            index1=0;
        }
        $(".lunbo1:eq("+index1+")").css("display","block");
        console.log(index1);
        $("#num1").html(index1+1+"/4");
    })

    $("#shang").click(function(){
        $(".lunbo1:eq("+index1+")").css("display","none");
        index1--;

        if(index1==-1){
            index1=3;
        }
        $(".lunbo1:eq("+index1+")").css("display","block");
        $("#num1").html(index1+1+"/4");
    });
    //mainB右边栏轮播图2
    var index2=0;
    $(".lunbo2:eq("+index2+")").css("display","block");
    $("#qian").click(function(){
        $(".lunbo2:eq("+index2+")").css("display","none");
        index2++;

        if(index2==3){
            index2=0;
        }
        $(".lunbo2:eq("+index2+")").css("display","block");
        console.log(index2);
        $("#num2").html(index2+1+"/3");
    })
    $("#hou").click(function(){
        $(".lunbo2:eq("+index2+")").css("display","none");
        index2--;

        if(index2==-1){
            index2=2;
        }
        $(".lunbo2:eq("+index2+")").css("display","block");
        $("#num2").html(index2+1+"/3");
    });

});

//侧边栏
//$(function () {
//    function getScrollTop() {
//        return document.documentElement.scrollTop || document.body.scrollTop;
//    }
//    $(window).scroll(function () {
//        if(getScrollTop()==0){
//            $(".sidebar").css(
//                {
//                    "bottom":"-200px",
//                    "opacity":"0"
//                });
//        }
//        else if(getScrollTop()>0){
//            if($(".sidebar").css("bottom")=="-200px") {
//                $(".sidebar").animate(
//                    {
//                        "bottom": "100px",
//                        "opacity": "1"
//                    });
//            }
//        }
//    })
//
//
//
//
//
//    $(".sidebarTop .sidebarColor").hover(function () {
//        disDiv(".sidebarWX");
//        showDiv(".sidebarEdu");
//    },function () {
//        setTimeout(function () {
//            disDiv(".sidebarEdu")
//        },500);
//    })
//    $(".sidebarEdu").hover(function () {
//        disDiv(".sidebarWX");
//        $(".sidebarEdu").css("display","block");
//    },function () {
//        setTimeout(function () {
//            disDiv(".sidebarEdu")
//        },1000);
//    })
//
//
//    $(".sidebarTop .sidebarQRcode").hover(function () {
//        disDiv(".sidebarEdu");
//        showDiv(".sidebarWX");
//    },function () {
//        setTimeout(function () {
//            disDiv(".sidebarWX")
//        },1000);
//        // alert("1");
//    })
//    $(".sidebarWX").hover(function () {
//        disDiv(".sidebarEdu");
//        $(".sidebarWX").css("display","block");
//    },function () {
//        setTimeout(function () {
//            disDiv(".sidebarWX")
//        },1000);
//        // alert("2");
//    })
//
//
//
//
//
//
//    function showDiv(classname1) {
//        var widthS=$(classname1).css("width");
//        var heightS=$(classname1).css("height");
//        $(classname1).css({
//            "display":"block",
//            "height":"0",
//            "width":"0",
//            "opacity":"0"
//        });
//        $(classname1).animate({
//            "height":heightS,
//            "width":widthS,
//            "opacity":"1"
//        },500);
//    }
//
//
//    function disDiv(classname1) {
//        $(classname1).css("display","none");
//    }





//})