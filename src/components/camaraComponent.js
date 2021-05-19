import React from 'react';

const CameraComponent = (props) => {
    const { imagen } = props;
    
    // Camera script
    var streaming = false,
        //Selectores
        video = document.querySelector('#video'),
        canvas = document.querySelector('#canvas'),
        photo = document.querySelector('#photo'),
        width = 160,
        height = 0;

    function takepicture() {
        navigator.getMedia = (navigator.getUserMedia ||
            navigator.webkitGetUserMedia ||
            navigator.mozGetUserMedia ||
            navigator.msGetUserMedia);
    
        //Parametros iniciales
        navigator.getMedia(
            {
                video: true,
                audio: false
            },
            function (stream) {
                if (navigator.mozGetUserMedia) {
                    video.mozSrcObject = stream;
                } else {
                    video.srcObject = stream;
                }
                video.play();
            },
            function (err) {
                console.log("An error occured! " + err);
            }
        );
    
        if (video) {
            video.addEventListener('canplay', function (ev) {
                if (!streaming) {
                    height = video.videoHeight / (video.videoWidth / width);
                    video.setAttribute('width', width);
                    video.setAttribute('height', height);
                    canvas.setAttribute('width', width);
                    canvas.setAttribute('height', height);
                    streaming = true;
                }
            }, false);
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(video, 0, 0, width, height);
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    const takePhoto = () => {
        document.querySelector('#output').style.display="";
        document.querySelector('#camera').style.display="none";
        takepicture();
    };

    const initialize = () => {
        document.querySelector('#output').style.display="none";
        document.querySelector('#camera').style.display="";
        takepicture();
    }

    return (
        <>
            {
                <>
                    <div className="camera" style={{display:"none"}} id="camera">
                        <video id="video">Video no disponible</video>
                        <button className="btn" id="startbutton" onClick={takePhoto}>Tomar una foto 1</button>
                    </div>
                    <canvas id="canvas">
                    </canvas>
                    <div className="output" id="output">
                        <img id="photo" alt="" src={imagen} />
                        <button className="btn" id="startbutton" onClick={initialize}>Tomar una foto 2</button>
                    </div>
                </>
            }
        </>
    );
}

export default CameraComponent;