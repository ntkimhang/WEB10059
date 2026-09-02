$(document).ready(function () {
  $("#doiMau").click(function () {
    $("tr:odd").css("background-color", "deeppink");
  });

  $("#macDinh").click(function () {
    $("tr:odd").css("background-color", "white");
  });
});
