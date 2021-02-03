/*
roadmap.js
*/

$(function(){
    /* Button Hover Event 는 ready_lecture.js에 존재 */

    /* Button css init */
    $('#prevBtn03').css({'cursor':'not-allowed','opacity':'0.2'});
    $('#nextBtn03').css({'cursor':'pointer'});

    /*** Click Event ***/
    var movedPage=0;
    var length=$('#roadContent>div').length; // 나열된 컨텐츠 개수 8개
    function moveSlide(index){
        movedPage = index;

        var boxWidth= $('#roadmap').width();
        var moveLeft= -(index*boxWidth);
        $('#roadContent').animate({left:moveLeft},'slow');

        // button allowed
        if(movedPage==0){
            $('#prevBtn03').css({'cursor':'not-allowed','opacity':'0.2'});
        }else if(movedPage==length/4-1){
            $('#nextBtn03').css({'cursor':'not-allowed','opacity':'0.2'});
        }

    } // moveSlide function() close

    $('#prevBtn03').on('click',function(){
        $('#nextBtn03').css({'cursor':'pointer','opacity':'0.7'});
        if(movedPage != 0)
            movedPage--;
        moveSlide(movedPage);
    }); // prevBtn click close

    $('#nextBtn03').on('click',function(){
        $('#prevBtn03').css({'cursor':'pointer','opacity':'0.7'});
        if(movedPage != length/4-1)
            movedPage++;
        moveSlide(movedPage);
    }); // nextBtn click close

});