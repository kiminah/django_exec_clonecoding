/**
*index.js
**/

$(function(){
    $(window).on('scroll',function(){
        //스크롤이 되는 문서의 top이 headerbox이상이면 메인 메뉴가 고정되고 그림자 표시
        if($(document).scrollTop()>=$('#headerBox').height()){
            $('#headerBox').addClass('MenuFixed')
        }
        else{
            $('#headerBox').removeClass('MenuFixed')
        }
    }); //scroll핸들러 종료

});//function종료