$(document).ready(function(){
    let currentIndex = 0,
        slideWidth = $(".slide").width(),
        noSlides = $(".slide-inner").length,
        allSlide = $(".all-slide"),
        animationComplete = true;

    let dotStr = "";
    for(let i = 0; i < noSlides; i++)
        dotStr += '<button class="slide-bottom-btn'+ ((!i) ? ' active' : '') + '"></button>';
    $(".btn-bottom").html(dotStr);

    const moveSlide = (direction, steps, newIndex) => {
        animationComplete = false;
        let leftP = direction ? -1 * steps * slideWidth + "px" : 0;
        setTimeout(function() {
            allSlide.css('transition', '0.5s ease-in-out');
            allSlide.css("left", leftP);
        }, 0);
        setTimeout(function() {
            currentIndex = newIndex;
            $(".slide-inner[accesskey !=" + currentIndex + "]").removeClass("show");
            allSlide.css('transition', 'none');
            allSlide.css("left", 0);
            $('.slide-bottom-btn').removeClass('active');
            $('.slide-bottom-btn').eq(currentIndex).addClass('active');
            animationComplete = true;
        }, 500);
    }

    const restruture = (direction, newIndex) => {
        let steps = Math.abs(newIndex - currentIndex);
        if (animationComplete){
            if(direction) {
                if(newIndex > currentIndex) {
                    for(let i = (currentIndex + 1); i <= newIndex; i++)
                        allSlide.append($(".slide-inner[accesskey =" + i + "]").addClass("show"));
                } else {
                    allSlide.append($(".slide-inner[accesskey = 0]").addClass("show"));
                    steps = 1;
                }
            } else {
                if(newIndex < currentIndex) {
                    for(let i = (currentIndex - 1); i >= newIndex; i--) 
                        allSlide.prepend($(".slide-inner[accesskey =" + i + "]").addClass("show"));
                } else {
                    allSlide.prepend($(".slide-inner[accesskey =" + (noSlides - 1) + "]").addClass("show"))
                    steps = 1;
                }
                allSlide.css('transition', 'none');
                allSlide.css("left", - 1 * steps * slideWidth + "px");
            }
            allSlide.css("width", (steps + 1) * slideWidth + "px");
            moveSlide(direction, steps, newIndex);
        }
    }

    $(".btn-next").click(function(){
        let newIndex = currentIndex == (noSlides-1) ? 0 : 1 + currentIndex;
        restruture(1, newIndex);
    });

    $(".btn-prev").click(function(){
        let newIndex = !currentIndex? noSlides - 1 : currentIndex - 1;
        restruture(0, newIndex);
    });

    $('.slide-bottom-btn').click(function(){
        let newIndex = $('.slide-bottom-btn').index(this);
        restruture(newIndex > currentIndex ? 1 : 0, newIndex);
    });
});