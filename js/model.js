var trace_vertical = 1, trace_horizontal = 1;

$("body").on( "keydown", function( event ) {

  var keycode = event.which;

  if(keycode == 68 || keycode == 39) {

    // d
    if(trace_horizontal < 50) {
      var nowmarg = parseInt($('.block').css('left'));
      $('.block').css({'left': nowmarg+10});
      trace_horizontal = trace_horizontal+1;
    }

  } else
  if(keycode == 65 || keycode == 37) {

    // a
    if(trace_horizontal > 1) {
      var nowmarg = parseInt($('.block').css('left'));
      $('.block').css({'left': nowmarg-10});
      trace_horizontal = trace_horizontal-1;
    }

  } else
  if(keycode == 83 || keycode == 40) {

    // s
    if(trace_vertical < 50) {
      var nowmarg = parseInt($('.block').css('top'));
      $('.block').css({'top': nowmarg+10});
      trace_vertical = trace_vertical+1;
    }

  } else
  if(keycode == 87 || keycode == 38) {

    // w
    if(trace_vertical > 1) {
      var nowmarg = parseInt($('.block').css('top'));
      $('.block').css({'top': nowmarg-10});
      trace_vertical = trace_vertical-1;
    }

  }
});
