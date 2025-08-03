import React, { useRef, useState, useEffect } from 'react';
import '../filters.css';

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [hasPermission, setHasPermission] = useState(false);
  const [capturedImages, setCapturedImages] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('');

  useEffect(() => {
    async function requestCamera() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoRef.current.srcObject = stream;
        videoRef.current.play();
        setHasPermission(true);
      } catch (err) {
        alert('Camera access denied or not supported.');
        setHasPermission(false);
      }
    }
    requestCamera();
  }, []);

  const capture = () => {
    const context = canvasRef.current.getContext('2d');
    const video = videoRef.current;
    canvasRef.current.width = video.videoWidth;
    canvasRef.current.height = video.videoHeight;

    // Apply the filter that is active on video wrapper
    const wrapper = document.querySelector('.camera-preview');
    context.filter = getComputedStyle(wrapper).filter;

    context.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    const imgDataUrl = canvasRef.current.toDataURL('image/png');
    setCapturedImages(prev => [...prev, { data: imgDataUrl, filter: selectedFilter }]);
  };

  const filters = [
    '',
    'filter-warm-moody',
    'filter-cool-fade',
    'filter-cinematic',
    'filter-vintage',
    'filter-bw-moody',
    'filter-vibrant',
    'lanaFilter',
  ];

  return (
    <div className="camera-container">
      <div className={`camera-preview ${selectedFilter}`}>
        <video ref={videoRef} className="webcam-video" autoPlay muted playsInline></video>
      </div>

      <canvas ref={canvasRef} style={{ display: 'none' }}></canvas>

      <div style={{ marginTop: '10px' }}>
        <select onChange={e => setSelectedFilter(e.target.value)} value={selectedFilter}>
          {filters.map(filter => (
            <option key={filter} value={filter}>{filter || 'None'}</option>
          ))}
        </select>
        <button onClick={capture}>Capture</button>
      </div>

      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
        {capturedImages.map((img, index) => (
          <div key={index} style={{ margin: '10px' }}>
            <img src={img.data} className={img.filter} style={{ width: '200px' }} alt={`capture-${index}`} />
            <a href={img.data} download={`image-${index}.png`}>
              <button>Download</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WebcamCapture;
