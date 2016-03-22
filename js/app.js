$(document).ready(function(){
  $('.ryu').mouseenter(function(){
    $('.ryu-still').hide();
    $('.ryu-ready').show();
  })
  .mouseleave(function(){
    $('.ryu-still').show();
    $('.ryu-ready').hide();
  })
  .mousedown(function(){
    // play hadouken sound
    $('.ryu-ready').hide();
    $('.ryu-throwing').show();
    $('.hadouken').finish().show().animate(
      {left: '1020px'},
      500,
      function(){
        $(this).hide();
        $(this).css({left: '520px'});
      }
    );
    // animate hadouken right
  })
  .mouseup(function(){
    $('.ryu-throwing').hide();
    $('.ryu-ready').show();
  });
});

