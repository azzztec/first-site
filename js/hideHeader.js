(function(){

    let bottomBorderScroll = window.pageYOffset + 400,
        topBorderScroll = window.pageYOffset + 100;

    window.addEventListener('scroll',function(){

        if(window.pageYOffset > bottomBorderScroll){
            document.querySelector('.header').style.transform='translate(0,-100%)';
            hidden = true;
        }

        if(window.pageYOffset <= topBorderScroll){
            document.querySelector('.header').style.transform='translate(0,0)';
            hidden = false;
        }
    });

//     var oldScrollY = 0;
//     var div = document.querySelector(".header");

//     window.onscroll = function() {
//     var scrolled = window.pageYOffset || document.documentElement.scrollTop;
//     var dY = scrolled - oldScrollY;
  
//     if ( dY > 0 ){
//         div.className = "header fixed-bottom";
//     } else {
//         div.className = "header fixed-top";
//     }
  
//     oldScrollY = scrolled;
// }

    // var lastScrollTop = 0;

    // window.addEventListener("scroll", function(){  
    //     var st = window.pageYOffset || document.documentElement.scrollTop;
    //     if((window.pageYOffset < 200) || (document.documentElement.scrollTop < 200)){
    //         document.querySelector(".header").style.top = "0";
    //         return false;
    //     }
    //     if (st > lastScrollTop){
    //         document.querySelector(".header").style.top = "-100%";
    //     } else {
    //         document.querySelector(".header").style.top = "0";
    //     }
    //     lastScrollTop = st;
    // },  false);

    
}());