
//define as variáveis
let src;
let dst;
let cap;

//define constante
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
        cv.imshow('canvasOutput', dst);
        // schedule the next one.
        let delay = 1000/FPS - (Date.now() - begin);
        setTimeout(processVideo, delay);
    } catch (err) {
        alert(err);
    }
};

// espera carregar os objetos para iniciar as operações
$( document ).ready(function() {
    //captura o video
    let video = document.getElementById("videoInput"); // video is the id of video tag

    //captura o input da webcam
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(function(stream) {

            //inicia o video na página para o usuário ver
            video.srcObject = stream;
            video.play();

            //captura características do vídeo
            src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
            dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
            cap = new cv.VideoCapture(video);
            debugger;
            // schedule the first one.
            setTimeout(processVideo, 0);
        })
        .catch(function(err) {
            console.log("An error occurred! " + err);
        });
});

