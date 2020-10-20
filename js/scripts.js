$(document).ready(function() {
  $("#green").click(function() {
    $("p").removeClass("gr-btn")
    $("p").addClass("gr-btn")
    $("body").removeClass();
    $("body").addClass("green-background");
    
  });
  $("#red").click(function() {
    $("body").removeClass();
    $("p").addClass("rd-btn")
    $("body").addClass("red-background");
  });
  $("#black").click(function() {
    $("body").removeClass();
    $("p").addClass("blk-btn")
    $("body").addClass("black-background");
  });
  $("#white").click(function() {
    $("body").removeClass();
    $("p").addClass("wht-btn")
    $("body").addClass("white-background");
  })
});