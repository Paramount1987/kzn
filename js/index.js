$(document).ready(function(){

//-------------------slider
   $('.carousel-default').slick({
   	vertical: true,
   	dots: true,
   	arrows: false,
   	autoplay: true,
    autoplaySpeed: 4000
  });

//-------------------scroll
$('.scroll-h').jScrollPane();

//-------------------film-review
$(".film-link-review").click(function(e){

e.preventDefault();
var heightFull = $(".film-review .inner").height();
$(".film-review").animate({height: heightFull}, 500);
$(this).css("display","none");

});
//-------------------list get and set height
if($(".list-other-news")){
	var height = 0;

	$(".list-other-news li").each(function(){
		height = $(this).find(".news-body").height() > height ? $(this).find(".news-body").height() : height;

	});

	$(".list-other-news li .news-body").height(height);

}

//-------------------gallery img
$(".gallery-img .img-thumbnail-item").click(function(e){

e.preventDefault();

var img = $(this).attr("href");

$(".gallery-img .img-review img").attr("src",img);

});


});