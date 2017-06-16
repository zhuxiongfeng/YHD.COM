/**
 * Created by zxf on 2017/2/14.
 */
$(function(){
    var array1=[[0,1,2,3],[4,5,6,7],[8,9,10,11],[12,13,14,15]];
    var array2=[[0,4,8,12],[1,5,9,13],[2,6,10,14],[3,7,11,15]];
    var score=0;
    $("#start").click(function(){
        //alert("wei")
        getRandomNum();
        getRandomNum();
        addClass();
        getScore();
    });
    $("#replay").click(function(){
        $(".main div").html("");
        $(".main div").removeClass();
        getRandomNum();
        getRandomNum();
        addClass();
        $(".dialog").remove();
        score=0;
        getScore();
    });
    function getScore(){
        $("#score").html(score);
    }
    function getEmptyDiv(){
        var divs=[];
        $(".main div").each(function(index,element ){
                if(element.innerText==""){
                    divs.push(element);
                }
        });
        return divs;
    }
    function addClass(){
        $(".main div").each(function(index,element){
            var num=element.innerText;
            $(element).removeClass().addClass("bg"+num);
        })
    }
    function getRandomNum(){
        var emptyDivs=getEmptyDiv();
        if(emptyDivs.length==0){
            gameOver();
        }
        var ranNum=Math.random()>0.6?"2":"4";
        var divRanNum=parseInt(Math.random()*emptyDivs.length);
        emptyDivs[divRanNum].innerHTML=ranNum;
    }
    function gameOver(){
        var div=$("<div></div>");
        div.addClass("dialog");
        var p1=$("<p>游戏结束</p>");
        p1.addClass("p");
        //var a1=$("<a></a>");
        //a1.html("游戏结束");
        //$(p1).append(a1);
        var p2=$("<p>再来一次</p>");
        //var a2=$("<a></a>");
        //a2.html("再来一次");
        //$(p2).append(a2);
        $(div).append(p1);
        $(div).append(p2);
        $(".main").after(div)
    }
    function rowUpMove(row1,row2) {
        var divs = $(".main div");

        for(var i=0;i<4;i++){
            //alert(array1[row1][i]);
            //alert(array2[row2][i]);
            var div1=divs[array1[row1][i]];
            var div2=divs[array1[row2][i]];

            if(div2.innerText==""){

            }
            else if(div1.innerText==""){
                div1.innerText=div2.innerText;
                div2.innerText="";

            }
            else if(div1.innerText==div2.innerText){
                div1.innerText=div2.innerText*2;
                div2.innerText="";
                score+=2;
                return score;

            }
        }

    }
    function colLeftMove(col1,col2){
        var divs=$(".main div");
        for(var i=0;i<4;i++){
            //alert(array2[col1][i]);
            //alert(array2[col2][i]);

            var div1=divs[array2[col1][i]];
            var div2=divs[array2[col2][i]];
            if(div2.innerText==""){

            }
            else if(div1.innerText==""){
                div1.innerText=div2.innerText;
                div2.innerText="";
            }
            else if(div1.innerText==div2.innerText){
                div1.innerText=div2.innerText*2;
                div2.innerText="";
            }
        }
    }
    $(window).keyup(function(e){
        var ev=e||event;
        var type=true;
        //alert(ev.keyCode);
        switch(ev.keyCode){
            case 37:
                //左
                for(var i=0;i<4;i++){
                    colLeftMove(0,1);
                    colLeftMove(1,2);
                    colLeftMove(2,3);
                }
                //if()
                getRandomNum();
                addClass();
                getScore();
                break;
            case 39:
                //右
                for(var i=0;i<4;i++){
                    colLeftMove(1,0);
                    colLeftMove(2,1);
                    colLeftMove(3,2);
                }
                getRandomNum();
                addClass();
                getScore();
                break;
            case 38:
                //上
                for(var i=0;i<4;i++){
                    rowUpMove(0,1);
                    rowUpMove(1,2);
                    rowUpMove(2,3);
                }
                //alert(type);
                //if(type){
                    getRandomNum();
                //}
                addClass();
                getScore();
                break;
            case 40:
                //下
                for(var i=0;i<4;i++){
                    rowUpMove(1,0);
                    rowUpMove(2,1);
                    rowUpMove(3,2);
                }
                //alert("fan");
                getRandomNum();
                addClass();
                getScore();
                break;
        }

    })
});
