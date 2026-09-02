$(document).ready(function () {
  $(".mau").click(function () {
    var mauChon = $(this).css("background-color");

    $("#thongbao").text("Màu bạn chọn là: " + mauChon);

    $("#ketqua2").css("background-color", mauChon);
  });
});
