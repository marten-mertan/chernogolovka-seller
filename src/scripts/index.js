$(window).load(function(){
  $('.js-equipment-slider').flexslider({
    animation: "slide",
    animationLoop: true,
    controlNav: false,
    prevText: "",
    nextText: "",
    slideshow: false,
  });

  $(document).on('click', '.js-desc-open', function(e) {
    e.preventDefault();
    let $this = $(this);
    let $parent = $this.parents('.js-item');
    if ($parent.hasClass('desc-opened')){
        $parent.children('.js-desc').slideUp();
        $parent.removeClass('desc-opened');

    } else {
        $parent.children('.js-desc').slideDown();
        $parent.addClass('desc-opened');
    }
  });

  $(document).on('click', '.js-clear-filter', function(e) {
    e.preventDefault();
    $('.js-select select').val(0);
    $('.js-dis-img img').each(function(e) {
        $(this).removeClass('disabled');
    });
  });

  $(document).on('change','.js-dis-select select',function (e) {
    let value =  $(this).val().toString();
    if (value === '0') {
        $('.js-dis-img img').each(function(e) {
            $(this).removeClass('disabled');
        });
    } else {
        $('.js-dis-img img').each(function(e) {
            let data = $(this).data('displacement').toString();
            if (data === value) {
                $(this).removeClass('disabled');
            } else {
                $(this).addClass('disabled');
            }
        });
    }
 });

});