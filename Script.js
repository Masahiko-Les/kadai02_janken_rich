$('#first_page').on('click', function() { 
    $('#first_page_wrapper').fadeOut(2000);
});

$('.Theme_Box').on('click', function() { 
    let $answer=$(this).find(".Theme_input");
    if($answer.hasClass("open")){
      $answer.removeClass("open");
    }else{
      $answer.addClass("open");
    }
});

$('.menu-icon').on('click', function() {
    $('.menu').slideToggle(100);
});