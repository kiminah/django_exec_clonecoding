/**
* slideShow.js
**/
$(function(){

    autoPlay();
    // 이동한 이미지의 index 값 저장 (현재 보고 있는 이미지-현재위치)
    var movedIndex=0;
    var length=$('.slideImage').length;

    var back_color = ['#373672','#000000','#132239','#f6f7f9','#ffd592','#ffffff','#fafafa','#59cf93'];
    var font_color = ['#ffffff','#ffffff','#ffffff','#000000','#000000','#000000','#000000','#ffffff'];

    $('#controlPanel li:first-child').css({'color':'#24c27c','border':'solid 2px #24c27c'});
    $('#subControl li:first-child').css({'color':'#24c27c','border':'solid 2px #24c27c'});


    // 슬라이드 패널을 움직여주는 함수
    function moveSlide(index){
        // 전달받은 index 값을 movedIndex 에 저장
        movedIndex = index; // 전역변수

        // 슬라이드 showIndex (current-Index,total_count) 변경
        $('#current-Index').text(index+1);

        var boxWidth= $('.slideSet').width();
        // 슬라이드 이동
        var moveLeft= -(index*boxWidth);
        $('#slidePanel').animate({left:moveLeft},'slow');

        /* 배경색 및 글씨색 지정 */
        var child=movedIndex+1;
        $('#slidePanel>div:nth-child('+child+')').css('background-color',back_color[index]);
        $('#slidePanel>div:nth-child('+child+')').css('color',font_color[index]);

        // 슬라이드 메뉴 디자인 변경
        $('.slideMenu').css({'color':'#616161','border':'solid 1px #ccc'});
        $('.slideMenu').eq(index).css({'color':'#24c27c','border':'solid 2px #24c27c'});
        $('.slideMenu02').css({'color':'#616161','border':'solid 1px #ccc'});
        $('.slideMenu02').eq(index).css({'color':'#24c27c','border':'solid 2px #24c27c'});

        /* 슬라이드 메뉴 레이아웃 부분을 왼쪽으로 어떻게 넘기지.... */

    }

    // prevButton 클릭시 앞으로 이동
    $('#prevBtn').on('click',function(){
        prevChkPlay();
    });
    // nextButton 클릭시 뒤로 이동
    $('#nextBtn').on('click',function(){
        nextChkPlay();
    }); // nextBtn close

    /* pauseButton Event */
    // 클릭시 상태 변화
    $('#pauseBtn').on('click',
        function(){
            var status = $('#control-wrapper img:nth-child(2)').attr('id') // pause 버튼 상태 변수
            if(status=='pauseBtn'){
                $('#pauseBtn').attr('src','image/slide_play.png');
                $('#pauseBtn').attr('id','playBtn');
                autoPlayStop();
            }
            else{
                $('#playBtn').attr('src','image/slide_pause.png');
                $('#playBtn').attr('id','pauseBtn');
                autoPlay();
            }
    });

    $('.slideMenu').each(function(index){
			// 클릭했을 때 현재 인덱스 값을 moveSlide() 함수에게 전달
            $(this).on('click', function(){
                moveSlide(index);
            }); // on close
    });

    /********************* SubMenu *********************/

    // subMenu 버튼 클릭시 버튼모양 변경
    $('#listBtn').on('click',function(){
        $('#subControlBox').toggle(0,'linear');
        var status = $('#subControlBox').css('display');
        if(status=='block'){
            $('#listBtn img').attr('src','image/up-arrow-green.png');
            $('#listBtn').css('border','solid 1px #24c27c');

        }else{
            $('#listBtn img').attr('src','image/down-arrow.png');
            $('#listBtn').css('border','solid 1px #dee2e6');
        }
    });

    // subMenu 안의 [닫기] 버튼 눌렀을 때
    $('#closeBox').on('click',function(){
        $('#listBtn img').attr('src','image/down-arrow.png');
        $('#listBtn').css('border','solid 1px #dee2e6');
        $('#subControlBox').css('display','none');
    });

    // item 클릭시 slide 이미지 변경
     $('.slideMenu02').each(function(index){
        // 클릭했을 때 현재 인덱스 값을 moveSlide() 함수에게 전달
        $(this).on('click', function(){
            moveSlide(index);
        }); // on close
    });

    function autoPlay(){
        auto=setInterval(function(){
            nextChkPlay();
        },5000);
    }

    function autoPlayStop(){
        clearInterval(auto);
    }

    function prevChkPlay(){
        // 버튼 클릭시 보여줘야 할 이미지 index 결정해서
        // 현재 이미지 이전 이미지의 인덱스로 설정
        if(movedIndex<1)
            movedIndex=length-1;
        else
            movedIndex--;

        // moveSlide() 호출
        moveSlide(movedIndex);
    }

    function nextChkPlay(){
        if(movedIndex>=length-1)
            movedIndex=0;
        else
            movedIndex++;
        moveSlide(movedIndex);
    }
}); // function() 종료

