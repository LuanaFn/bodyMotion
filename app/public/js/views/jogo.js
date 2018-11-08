var offsetHeight = 600;
var offsetWidth = 600;

let video = document.getElementById("videoInput"); // video is the id of video tag
let src = new cv.Mat(offsetHeight, offsetWidth, cv.CV_8UC4);
let dst = new cv.Mat(offsetHeight, offsetWidth, cv.CV_8UC1);
let cap = new cv.VideoCapture(video);

navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("An error occurred! " + err);
    });
    
const FPS = 30;
function processVideo() {
    try {
        /*if (!streaming) {
            // clean and stop.
            src.delete();
            dst.delete();
            return;
        }*/
        let begin = Date.now();
        // start processing.
        cap.read(src);
        cv.cvtColor(src, dst, cv.COLOR_RGBA2GRAY);
        cv.flip(dst, dst, 1);

        cv.imshow('canvasOutput', dst);
        
        // schedule the next one.
        let delay = 1000/FPS - (Date.now() - begin);
        setTimeout(processVideo, delay);
    } catch (err) {
        console.log(err);
    }
};

// schedule the first one.
setTimeout(processVideo, 0);