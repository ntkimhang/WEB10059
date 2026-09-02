$(document).ready(function () {
  var phanTuDaXoa = [];

  $("#mauchu").change(function () {
    var mau = $(this).val();

    $("#ketqua").css("color", mau);
  });

  $("#binhthuong").click(function () {
    $("#ketqua").css("text-shadow", "none");
  });

  $("#cobong").click(function () {
    $("#ketqua").css("text-shadow", "3px 3px 3px gray");
  });

  $("#danhsach").on("click", "li", function () {
    var chuoi = $(this).text();

    $("#ketqua").text(chuoi);
  });

  $("#xoa").click(function () {
    var phanTuCuoi = $("#danhsach li:last");

    if (phanTuCuoi.length > 0) {
      phanTuDaXoa.push(phanTuCuoi.text());

      phanTuCuoi.remove();
    }
  });

  $("#phuchoi").click(function () {
    if (phanTuDaXoa.length > 0) {
      var phanTu = phanTuDaXoa.pop();

      $("#danhsach").append("<li>" + phanTu + "</li>");
    }
  });
});
