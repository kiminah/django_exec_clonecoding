/*
ready_lecture.js
*/

$(function(){

    /************************ Button Event ************************/

    /* Button css init */
    $('#prevBtn02').css({'cursor':'not-allowed','opacity':'0.2'});
    $('#nextBtn02').css({'cursor':'pointer'});

    /*** Hover Effect ***/
    $('.prevNextButtonBox02 div').hover(
        function(){
            $(this).css({'box-shadow':'0 2px 8px 0 rgb(0 0 0 / 40%)','transition':'all ease 400ms'});
        },
        function(){
            $(this).css({'box-shadow':'0 2px 8px 0 rgb(0 0 0 / 10%)','transition':'all ease 400ms'});
        }
    );//button hover close

    /*** Click Event ***/
    var movedPage=0;
    var length=$('#ready_content>div').length; // 나열된 컨텐츠 개수 8개

    function moveSlide(index){
        movedPage = index;

        var boxWidth= $('#roadmap').width();
        var moveLeft= -(index*boxWidth);
        $('#ready_content').animate({left:moveLeft},'slow');

        // button allowed
        if(movedPage==0){
            $('#prevBtn02').css({'cursor':'not-allowed','opacity':'0.2'});
        }else if(movedPage==length/5-1){
            $('#nextBtn02').css({'cursor':'not-allowed','opacity':'0.2'});
        }

    } // moveSlide function() close

    $('#prevBtn02').on('click',function(){
        $('#nextBtn02').css({'cursor':'pointer','opacity':'0.7'});
        if(movedPage != 0)
            movedPage--;

        moveSlide(movedPage);
    }); // prevBtn click close

    $('#nextBtn02').on('click',function(){
        $('#prevBtn02').css({'cursor':'pointer','opacity':'0.7'});
        if(movedPage != length/5-1)
            movedPage++;

        moveSlide(movedPage);
    }); // nextBtn click close

    /************************ Content Hover ************************/

    $('.contents').hover(
        function(){ // 마우스 올렸을 때
            index = $(this).attr('id');
            $('#'+index+'>.hoverBox').css('display','block');
        },
        function(){ // 마우스 내렸을 때
            $('#'+index+'>.hoverBox').css('display','none');
        }
    ); // content hover close

    /************************ ICON Hover ************************/
    $('.hoverMenu img').hover(
        function(){
            icon_class=$(this).attr('class');
            if(icon_class=='addCart'){
                $('.'+icon_class).attr('src','static/image/cart02.png')
                $('.'+icon_class).before( '<p>바구니에 추가하기</p>' )
            }else if(icon_class=='addHeart'){
                $('.'+icon_class).attr('src','static/image/heart02.png')
                $('.'+icon_class).before( '<p>위시리스트에 추가하기</p>' )
            }else{
                $('.'+icon_class).before( '<p>내 목록에 추가</p>' )
            }
           $('.hoverMenu>div>p').addClass('arrow_box');
        },
        function(){
            if(icon_class=='addCart'){
                $('.'+icon_class).attr('src','static/image/cart.png')
            }else if(icon_class=='addHeart'){
                $('.'+icon_class).attr('src','static/image/heart.png')
            }
            $('.hoverMenu>div>p').remove(); // hover 시 생성된 <p> 제거
        }
    ); // icon hover close

}); // function() close