
$(document).ready(function(){

             var $lectureWidth=$('#new_lecture_list_area').width();
             slide_size($lectureWidth);

            $(window).resize(function(){
                var $lectureWidth=$('#new_lecture_list_area').width();
                slide_size($lectureWidth);
            });
            function slide_size($lectureWidth){
                s_size=($lectureWidth-30)/5;
                $('#new_lecture_list_area .contents').css('width',s_size);
            };
            });//ready
