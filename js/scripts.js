$(document).ready(function() {
  $("#green").click(function() {
    $("body").removeClass("red-background black-background white-background");
    $("body").addClass("green-background");
    $("p").removeClass("blk-btn rd-btn wht-btn");
    $("p").addClass("gr-btn");
  });
  $("#red").click(function() {
    $("body").removeClass("green-background black-background white-background");
    $("body").addClass("red-background");
    $("p").removeClass("blk-btn gr-btn wht-btn");
    $("p").addClass("rd-btn");
  });
  $("#black").click(function() {
    $("body").removeClass("green-background red-background white-background");
    $("body").addClass("black-background");
    $("p").removeClass("gr-btn rd-btn wht-btn");
    $("p").addClass("blk-btn");
  });
  $("#white").click(function() {
    $("body").removeClass("green-background red-background black-background");
    $("body").addClass("white-background");
    $("p").removeClass("blk-btn rd-btn gr-btn");
    $("p").addClass("wht-btn");
  })
});