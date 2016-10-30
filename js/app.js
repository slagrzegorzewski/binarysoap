$(function(){
    var linksNavi = $(".navi");

    linksNavi.on('click', 'a', function(event){
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 800);
    });


    var mainClick = $(".navbar-brand");

    mainClick.on("click", function(){
         setTimeout(function () {
            location.reload();
        }, 1000 );
    });
});
