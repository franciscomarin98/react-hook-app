import {useRef, useState} from "react";

const SimpleVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (videoRef.current) {
            const video = videoRef.current;
            isPlaying ? video.pause() : video.play();
            setIsPlaying(!isPlaying);
        }
    }

    return (
        <div className="container">
            <video width={800} ref={videoRef} className='mx-auto d-block mt-5'>
                <source src='src/assets/planet.mp4' type='video/mp4'/>
            </video>
            <div className='text-center mt-2'>
                <button className='btn btn-primary' onClick={handlePlay}>
                    {isPlaying ? 'Pause video' : 'Play video'}
                </button>
            </div>
        </div>
    );
};

export default SimpleVideoPlayer;
