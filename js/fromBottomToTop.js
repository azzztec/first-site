(function(){

    let t;
    //Event listener that returning current position to the start of the page
    function up() {  
        var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
        if(top > 0) {
            window.scrollBy(0,-200);
            t = setTimeout(up,20);
        } else clearTimeout(t);
        return false;
    }

    document.querySelector('.studio_name').addEventListener('click',up);
    
}());