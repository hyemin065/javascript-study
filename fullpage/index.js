function smoothScroll(target, duration){
    const eventTarget = document.querySelector(target);
    let topPosition = eventTarget.getBoundingClientRect().top;
    console.log(topPosition);
    let startPos = window.pageYOffset;
    let between = topPosition - startPos;

    let startTime = null;

    function trigger(currentTime){
        if(startTime === null){
            startTime = currentTime;
            let timeGap = startTime - currentTime; 
            const runTime = easing(timeGap, startPos);
        }
    }

    function easing(){
        Math.easeInOutQuint = function (t, b, c, d) {
            t /= d/2;
            if (t < 1) return c/2*t*t*t*t*t + b;
            t -= 2;
            return c/2(t*t*t*t*t + 2) + b;
        };
    } 

    
    
    
}

