$(document).ready(function () {
  $(".hinh").mouseenter(function () {
    $(this).css({
      width: "200px",
      height: "200px",
    });
  });

  $(".hinh").mouseleave(function () {
    $(this).css({
      width: "150px",
      height: "180px",
    });
  });
});
