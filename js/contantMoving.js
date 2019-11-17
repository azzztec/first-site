(function(){

    let lastElemLeft,
        lastElemRight,
        currentWidth=document.body.clientWidth;

    document.body.addEventListener('mouseover',function(event){

        if(currentWidth<501) return false;

        let leftElem = event.target.closest('.left'),
            rightElem = event.target.closest('.right'),
            // randomX = randomInteger(0, 226),
            allContent = document.querySelectorAll('.contant_item');

        if(leftElem){
            leftElem.style.transform = "translateX(0px)";
            // leftElem.querySelector('.contant_item_on_image_wrapper').style.transform = "scaleX(1)";
            lastElemLeft=leftElem;
        }

        if(rightElem){
            rightElem.style.transform = "translateX(0px)";
            // rightElem.querySelector('.contant_item_on_image_wrapper').style.transform = "scaleX(1)";
            lastElemRight=rightElem;
        }
        

        if(!leftElem && !rightElem){
            for(let elem of allContent){
                if(elem == lastElemLeft){
                    elem.style.transform = "translateX(-20%)";
                    // lastElemLeft.querySelector('.contant_item_on_image_wrapper').style.transform = "scaleX(0)";
                }

                if(elem == lastElemRight){
                    elem.style.transform = "translateX(20%)"; 
                    // lastElemRight.querySelector('.contant_item_on_image_wrapper').style.transform = "scaleX(0)";
                }
            }     
        }

    });
    // random number from min to (max+1)
    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
    }

}());