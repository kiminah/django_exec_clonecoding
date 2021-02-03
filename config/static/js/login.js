/*
login.js
*/


$(function(){
    $('#login').each(function(index){
        $('#login').on('click', function () {
                $('#modal').show();
        }),
        $('#close-button').on('click', function () {
                $('#modal').hide();
        });
    });
})

