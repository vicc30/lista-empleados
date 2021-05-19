import React from 'react';

const CameraComponent = (props) => {
    const { imagen } = props;

    const takePhoto = () => {
        console.log("taked");
    }
    return (
        <>
            {
                imagen === "" ?
                    <>
                        <div className="camera">
                            <video id="video">Video no disponible</video>
                            <button className="btn" id="startbutton" onClick={takePhoto}>Tomar una foto</button>
                        </div>
                    </>
                    :
                    <>
                        <div className="output">
                            <img id="photo" alt="" src={imagen} />
                        </div>
                    </>
            }
        </>
    );
}

export default CameraComponent;