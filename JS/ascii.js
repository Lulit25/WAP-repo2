document.addEventListener("DOMContentLoaded",function(event){
    var start = document.getElementById("start");
    var stop = document.getElementById("stop");
    var size = document.getElementById("size");
    var check = document.getElementById("speed");
    var animation = document.getElementById("select");
    var frame = document.getElementById("textarea");
    let animationsFrames = [];
    let index = 0;
    let timer;
    let speed = 250;

    frame.style.fontSize = size.value + 'pt';
    stop.disabled = true;

    start.onclick = function(){
        startAnimation();
        controlDisabled(true, false);
    }
       
    stop.onclick = function(){
        stopAnimation();
        controlDisabled(false, true);
    }
    
    check.addEventListener('change', () => {
        check.checked ? setSpeed(50) : setSpeed(250);;
    });
    size.addEventListener('change', (e) => {
        frame.style.fontSize = size.value + 'pt';
    });
    animation.addEventListener('change', () => {
        frame.value = ANIMATIONS[animation.value][0];
        restartAnimation()
    });
    const startAnimation = () => {
        if (animation.value != 'blank') {
            animationsFrames = ANIMATIONS[animation.value].split('=====');
        } else {
            animationsFrames = frame.value.split('=====')
        }
        index = 0;
        timer = setInterval(() => {
            frame.value = getNextFrame();
        }, speed);
    }

    const stopAnimation = () => {
        clearInterval(timer);
    }
    const getNextFrame = () => {
        if (animationsFrames != undefined && animationsFrames.length > 0) {
            let nextframe = animationsFrames[index];
            if (index < animationsFrames.length - 1) {
                index++
            } else {
                index = 0;
            }
            return nextframe;
        }
    }
    const restartAnimation = () => {
        if (start.disabled) {
            stopAnimation();
            startAnimation();
        }
    }
    const setSpeed = (val) => {
        speed = val;
        restartAnimation();
    }
    const controlDisabled = (s, p) => {
        start.disabled = s;
        stop.disabled = p;
    }
})