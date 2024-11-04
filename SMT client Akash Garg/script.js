scroll=document.getElementById("scroll");
scroll.src="s2.jpg"
var i=1
setInterval(function (){
    console.log(scroll);
    scroll.onload = function() {
        i++;
        scroll.style.opacity = 1; // Fade in or show image if needed
    };

    scroll.onerror = function() {        
        i=1;
        scroll.src="SMT logo.jpg"
        scroll.style.opacity = 0; // Hide image or handle error
    };
    scroll.src="scroll/s"+i+".jpg";

    setTimeout(function(){scroll.opacity=0.1;},500)
}, 1000);
