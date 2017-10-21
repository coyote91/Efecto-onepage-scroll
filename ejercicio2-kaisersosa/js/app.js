$(document).ready(function () {
$(".main").onepage_scroll({
    pagination: false,
    responsiveFallback: 600,
    afterMove: function(index) {
        if (index > 1) $('.prev').removeClass('disabled');
        else $('.prev').addClass('disabled');

        var total = $('section').length;
        if (index < total) $('.next').removeClass('disabled');
        else $('.next').addClass('disabled');

        if (typeof window['f0'+index+'callback'] === "function") {
            window['f0'+index+'callback']();
        }
    },
    beforeMove: function (index) {
        if ( $('#workgrid').hasClass('dis') ) $(".main").moveTo(index);
    }
});

$('.prev').click(function () {
    if ( !$('#workgrid').hasClass('dis') )
        $(".main").moveUp();
});


$('.next').not('disabled').click(function () {
    if ( !$('#workgrid').hasClass('dis') )
        $(".main").moveDown();
});


$('#nav').on('click','.next.disabled',function () {
    $(".main").moveTo(1);
});



});
