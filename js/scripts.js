$('.mob-tabpane-toggler').on('click', function(e) {
    if($(window).width() < 768) {
        e.preventDefault();
        var $this = $(this), $thisHrefValue = $(this).attr('href');
        $this.parent().parent().siblings().removeClass('active show');
        $this.parent().parent().addClass('active show');
        $this.parent().parent().parent().siblings('nav').find('a').removeClass('active');
        $thisHrefValue = $thisHrefValue + '-tab';
        $($thisHrefValue).addClass('active');
    }
});

document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
          document.getElementById('navbar').classList.add('sticky-top');
          navbar_height = document.querySelector('.navbar').offsetHeight;
          document.body.style.paddingTop = navbar_height + 'px';
        } else {
          document.getElementById('navbar').classList.remove('sticky-top');
          document.body.style.paddingTop = '0';
        } 
    });
  }); 
