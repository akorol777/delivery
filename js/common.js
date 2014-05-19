$(document).ready(function() {
$(function() {
    $( ".js-run" ).click(function() {
      $( ".js-effect" ).toggleClass( "sign-hide", 100 );
      return false;
    });
  });
$(function() {
    $( ".js-run_load" ).click(function() {
      $( ".js-effect_load" ).addClass( "btn-load", 100 );
      return false;
    });
  });
});