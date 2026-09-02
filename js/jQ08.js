$(document).ready(function () {
  var dangKeo = false;
  var x;
  var y;

  $("#hinhtron").mousedown(function (e) {
    dangKeo = true;

    x = e.offsetX;
    y = e.offsetY;
  });

  $(document).mousemove(function (e) {
    if (dangKeo == true) {
      $("#hinhtron").css({
        left: e.pageX - x,
        top: e.pageY - y,
      });
    }
  });

  $(document).mouseup(function () {
    dangKeo = false;
  });

  $(document).keydown(function (e) {
    var left = $("#hinhtron").position().left;
    var top = $("#hinhtron").position().top;

    if (e.keyCode == 37) {
      $("#hinhtron").css("left", left - 10);
    }

    if (e.keyCode == 38) {
      $("#hinhtron").css("top", top - 10);
    }

    if (e.keyCode == 39) {
      $("#hinhtron").css("left", left + 10);
    }

    if (e.keyCode == 40) {
      $("#hinhtron").css("top", top + 10);
    }
  });
});
