import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../utils/main";



export const FaceCapture = () => {
    const navigate = useNavigate();
    
    const [showPicture, setShowPicture] = useState(false);
    const [currentStream, setCurrentStream] = useState<MediaStream>();
    
    const videoEl = useRef(null);
    const canvasEl = useRef(null);



    const handleOpen = async()=>{
        if(videoEl.current){

            const video:any = videoEl.current;
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: false })
                .then((stream) => {
                    video.srcObject = stream;
                    video.play();
                    setCurrentStream(stream)
                })
                .catch((err) => {
                    console.error(`An error occurred: ${err}`);
                });
        }
    }

    const handleCapture = async()=>{
        if(canvasEl.current && videoEl.current){
            const canvas:any = canvasEl.current;
            canvas.getContext('2d').drawImage(videoEl.current, 0, 0, canvas.width, canvas.height);
            setShowPicture(true)
            if(currentStream && currentStream.active){
                console.error(`currentStream: `, currentStream);
                currentStream.getTracks().forEach(function(track) {
                    track.stop();
                  });
            }
            
        }
    }

    
    

    const handleSubmit = async()=>{
        navigate('/term')
    }

    return ( 
        <div className="flex w-3/4 flex-col py-8 px-2 bg-gray-600 rounded-2xl">
            <div className="mb-2 self-center flex flex-col">
                <video ref={videoEl}  className={`w-full ${ !showPicture?'':'hidden'}`}/>
                <canvas ref={canvasEl} className={`w-full ${ showPicture?'':'hidden'}`} width="320" height="240"></canvas>

            </div>
            

            <div className="flex w-full mt-6 justify-end">
                {!currentStream &&<Button type="button" onClick={handleOpen} loading={false}>
                    Open Camera
                </Button>}

                {(currentStream && !showPicture) &&<Button type="button" onClick={handleCapture} loading={false}>
                    Capture
                </Button>}

                {(currentStream && showPicture) &&<Button type="button" onClick={()=>{setShowPicture(false); handleOpen();}} loading={false}>
                    Retake
                </Button>}

                {showPicture &&<Button type="button" onClick={handleSubmit} loading={false}>
                    Submit
                </Button>}
            </div>
            
        </div>
     );
}
 
