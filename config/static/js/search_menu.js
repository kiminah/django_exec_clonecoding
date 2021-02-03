/*
search_menu.js
*/

/* 브라우저 크기에 따라서 크기 변경*/

$(document).ready(function(){

            /*처음 들어가는 브라우저 크기에 따라 사이즈 변경*/
             var $winWidth=$(window).width();
             window_menu($winWidth);

             /*윈도우 사이즈가 변경될때 사이즈변경*/
            $(window).resize(function(){
                var $winWidth=$(window).width();
                window_menu($winWidth);
            });

            /* 메뉴 크기 변경함수*/
            function window_menu($winWidth){
                    if($winWidth >= 1408){
                        s_display='inline-block';
                        l_float='left';
                        l_display='block';
                        m_display='block';
                        r_display='block';
                        k_display='inline-block';
                        }
                    else if($winWidth <=1408 && $winWidth>1149){
                        s_display='none';
                        l_float='left';
                        l_display='block';
                        m_display='block';
                        r_display='block';
                        k_display='inline-block';
                        }
                    else if($winWidth <=1149 && $winWidth>1017){
                        s_display='none';
                        l_float='left';
                        l_display='block';
                        m_display='block';
                        r_display='block';
                        k_display='none';
                        }
                    else{
                        s_display='none';
                        l_float='none';
                        l_display='none';
                        m_display='initial';
                        r_display='none';
                        k_display='none';
                    }

                    $('#search_input').css('display',s_display);
                    $('.menu-left').css('display',l_display);
                    $('#mainMenuBox').css('display',m_display);
                    $('#logoBox').css('float',l_float);
                    $('.menu-right').css('display',r_display);
                    $('#knowledge').css('display',k_display);
                };
            });//ready
