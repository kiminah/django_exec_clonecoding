/*
search.js
*/

$(function(){
    $('#search_input').each(function(index){
        $(this).hover(
            function(){
                $('#search_input').css('border','1px solid #5f5f5f');
            },
            function(){
                $('#search_input').css('border','1px solid transparent');
            }
        );
    });

/********************************* search 커서 변경 **************************************/

     $('#search').each(function(index){
        $(this).hover(
            function(){
                $('#search').css('cursor' , 'text');
            },
            function(){
                $('#search').css('cursor' , 'pointer');
            }
        );
    });


/********************************* search 클릭시 이동 **************************************/

    $('#search').on('click',function(){
        if($(document).scrollTop()>=$('#headerBox').height()){
            var location = document.querySelector("#search_main").offsetTop;
            var menuHeight = document.querySelector("#headerBox").offsetHeight;
            s_location= location -menuHeight;
            window.scrollTo({top:s_location, behavior:'smooth'});

            }
        else{
            var location = document.querySelector("#search_main").offsetTop;
            var menuHeight = document.querySelector("#headerBox").offsetHeight;
            s_location= location -menuHeight-70;
            window.scrollTo({top:s_location, behavior:'smooth'});
            }
    });

    /********************************* search 클릭시 animate **************************************/
    $("#search input").addClass('blur');

    $("#search input").focus(function(){
        $('#search').css({
        'box-shadow':'0px 3px 8px 0px rgb(0 0 0 / 40%)',
        'transition':'all ease 400ms',
        'background-color':'white',
        'border':'1px solid #dedede'
        });
        $(this).addClass('focus');
        $(this).removeClass('blur');

    });
    $("#search input").blur(function(){
        $('#search').css({
        'box-shadow':'0 0px 5px 0 rgb(0 0 0 / 10%)',
        'transition':'all ease 400ms',
        'background-color':'rgba(29,192,120,.12)',
        'border':'1px solid rgba(29,192,120,.24)'
        });
        $(this).addClass('blur');
        $(this).removeClass('focus');
    });


});