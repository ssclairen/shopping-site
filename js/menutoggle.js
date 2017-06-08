$(document).ready(function(){
  $("#submenu").click(function(){
    var img_url =$("#submenu img").attr("src");
    if (img_url == "images/top/next_icon_gray.png") {
        $("#submenu img").attr('src', 'images/top/down_icon.png');
    }
    else {
        $("#submenu img").attr('src', 'images/top/next_icon_gray.png');
    }
    $("#innermenu").slideToggle();
  });
});