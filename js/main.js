$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        dots:false,
        nav:false,
        margin:20,
        responsive : {
            // breakpoint from 0 up
            0 : {
                margin:5,
                items:1,
            },
            // breakpoint from 480 up
            501 : {
                margin:8,
                items:2,
            },
            // breakpoint from 768 up
            769 : {
            
        }
    },
    });

    var owl = $('.owl-carousel');
        owl.owlCarousel();
        // Go to the next item
        $('.next_arrow').click(function() {
            owl.trigger('next.owl.carousel');
        })
        // Go to the previous item
        $('.prev_arrow').click(function() {
            // With optional speed parameter
            // Parameters has to be in square bracket '[]'
            owl.trigger('prev.owl.carousel', [300]);
        })
});

// (function (){

    // let coefGreen,
    //     coefBoth,
    //     leftBorder = document.querySelector('.intro_line').getBoundingClientRect().left,
    //     rightBorder = document.querySelector('.intro_line').getBoundingClientRect().right;

    // window.addEventListener('mousemove',function(event){
    //     pageMiddleX = Math.round(document.documentElement.clientWidth/2);

    //     if((event.clientX < pageMiddleX) && (event.clientX > leftBorder)){
    //         coefGreen = 33.33333 + (leftBorder/event.clientX)*10 +'%';
    //         coefBoth = 33.33333 - (leftBorder/event.clientX)*10 +'%';

    //         document.querySelector('.intro_line_green ').style['flex-basis']=coefGreen;
    //         document.querySelector('.intro_line_aqua ').style['flex-basis']=coefBoth;                Animated line(commented in HTML as well)
    //     }

    //     if((event.clientX > pageMiddleX) && (event.clientX < rightBorder)){
    //         coefGreen = 33.33333 + (leftBorder/(rightBorder-event.clientX+100))*10 +'%';
    //         coefBoth = 33.33333 - (leftBorder/(rightBorder-event.clientX+100))*10 + 2 +'%';

    //         document.querySelector('.intro_line_green ').style['flex-basis']=coefGreen;
    //         document.querySelector('.intro_line_blue ').style['flex-basis']=coefBoth;
    //     }
    // });

    
// }());
