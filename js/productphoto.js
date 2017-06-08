$(window).load(function(){
  $(".otherpics p img").click(function(){
    var img_src = $(this).attr("src");
    $("#mainpics").attr("src", img_src);
  });
});