$(document).ready(function() {
  $("#green").click(function() {
    $("body").removeClass();
    $("body").addClass("green-background");
  });
  $("#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background");
  });
  $("#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("#white").click(function() {
    $("body").removeClass();
    $("body").addClass("white-background");
  });
});