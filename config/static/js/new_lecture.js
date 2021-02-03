/**
* new_lecture.js
**/

/* div가 12개일때만 사용가능한 js....*/

$(function(){
    var move_Index=0;
    var boxWidth= $('#new_lecture_area').width();

    // 슬라이드 패널을 움직여주는 함수 - 사용자정의
    function moveSlide(index){
        //전달 받은 index값을 moveIndex에 저장
        move_Index = index;
        var moveLeft= -(index*boxWidth);
        $('#new_lecture_content').animate({left:moveLeft},'slow');
    };

    //prev 버튼 클릭하면 뒤로 이동
    $('#prev_new_lecture_Btn').on('click',function(){
        if(move_Index == 1.4){
             move_Index = move_Index - 1;
             move_Index=move_Index.toFixed(1);  /* 대체 왜 1.4에서 1을 빼는데 3.9가 나오는건데.....*/
             $('#next_new_lecture_Btn').css({'background-color':'#ffffffc9','cursor' : 'pointer'});
            $('#next_nlec_Btn').css('opacity','1');
             }
        else if(move_Index==0.4 || move_Index==1){
            move_Index = move_Index - move_Index;
            $('#prev_new_lecture_Btn').css({'background-color':'#fff','cursor' : 'no-drop'});
            $('#prev_nlec_Btn').css('opacity','0.1');
            }
       moveSlide(move_Index);
    });
    $('#next_new_lecture_Btn').on('click',function(){
        if(move_Index == 1){
            move_Index = move_Index + 0.4;
            $('#next_new_lecture_Btn').css({'background-color':'#fff','cursor' : 'no-drop'});
            $('#next_nlec_Btn').css('opacity','0.1');
            }
        else if(move_Index == 0 || move_Index == 0.4){
            move_Index = move_Index + 1;
            $('#prev_new_lecture_Btn').css({'background-color':'#ffffffc9','cursor' : 'pointer'});
            $('#prev_nlec_Btn').css('opacity','1');
            }
       moveSlide(move_Index);
    }); //next버튼 종료

    $('.contents').hover(
        function(){ // 마우스 올렸을 때
            index = $(this).attr('id');
            $('#'+index+'>.hoverBox_lec').css('display','block');
        },
        function(){ // 마우스 내렸을 때
            $('#'+index+'>.hoverBox_lec').css('display','none');
        }
    ); // content hover close
})

