// JavaScript Document

$(document).ready(function () {
    $("li").click(function () {
        $('li > ul').not($(this).children("ul").toggle()).hide();
        
    });
});