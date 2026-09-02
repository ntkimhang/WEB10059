$(document).ready(function () {
  $("#right").click(function () {
    $("#hinh").animate({
      left: "+=20px",
    });
  });

  $("#left").click(function () {
    $("#hinh").animate({
      left: "-=20px",
    });
  });

  $("#up").click(function () {
    $("#hinh").animate({
      top: "-=20px",
    });
  });

  $("#down").click(function () {
    $("#hinh").animate({
      top: "+=20px",
    });
  });
});
