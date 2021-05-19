import React, { useEffect } from 'react';

const CameraComponent = (props) => {
    const { id } = props;
    var streaming = false,
        video = document.getElementById('video' + id),
        canvas = document.getElementById('canvas' + id),
        photo = document.getElementById('photo' + id),
        width = 160,
        height = 0;
    useEffect(() => {
        updateSelector(id);
    });
    // Camera script
    function updateSelector(id) {
        streaming = false;
        video = document.getElementById('video' + id);
        canvas = document.getElementById('canvas' + id);
        photo = document.getElementById('photo' + id);
        width = 160;
        height = 0;
    }
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

    const takePhoto = (id) => {
        document.getElementById('output' + id).style.display = "";
        document.getElementById('camera' + id).style.display = "none";
        takepicture();
    };

    const initialize = (id) => {
        document.getElementById('output' + id).style.display = "none";
        document.getElementById('camera' + id).style.display = "";
        takepicture();
    }

    return (
        <>
            {
                <>
                    <div className="camera" style={{ display: "none" }} id={"camera" + id}>
                        <video id={"video" + id}>Video no disponible</video>
                        <button className="btn" onClick={() => takePhoto(id)}>Tomar foto</button>
                    </div>
                    <canvas id={"canvas" + id}>
                    </canvas>
                    <div className="output" id={"output" + id}>
                        <img id={"photo" + id} alt="" src={""} />
                        <button className="btn" onClick={() => initialize(id)}>Iniciar camara</button>
                    </div>
                </>
            }
        </>
    );
}

export default CameraComponent;