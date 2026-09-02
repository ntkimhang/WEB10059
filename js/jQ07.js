$(document).ready(function () {
  $(".so").mouseenter(function () {
    $(this).stop().animate(
      {
        width: "130px",
      },
      200,
    );

    $(this).css({
      "font-size": "50px",
      "font-weight": "bold",
      color: "black",
      background: "linear-gradient(to right, #b5b5b5, #eeeeee)",
    });
  });

  $(".so").mouseleave(function () {
    $(this).stop().animate(
      {
        width: "65px",
      },
      200,
    );

    $(this).css({
      "font-size": "20px",
      "font-weight": "normal",
      color: "#666666",
      background: "#dddddd",
    });
  });
});
