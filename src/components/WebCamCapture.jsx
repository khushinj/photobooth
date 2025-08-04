import React, { useRef, useState, useEffect } from 'react';
import '../filters.css'; // Custom filters CSS

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [HasPermission, setHasPermission] = useState(false);
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
        console.log(err);
      }
    }
    requestCamera();
  }, []);

  const capture = () => {
    const context = canvasRef.current.getContext('2d');
    const video = videoRef.current;
    canvasRef.current.width = video.videoWidth;
    canvasRef.current.height = video.videoHeight;
    context.filter = getComputedStyle(video).filter;
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
    'filter-rosy-matte',
  ];

  return (
    <div className="min-h-screen bg-[#fff9f5] font-sans text-[#3d2b1f]">
      {/* Hero Section */}
      <header className="text-center py-16 bg-gradient-to-b from-[#fdf0eb] to-transparent">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">Capture Your Best Moments</h1>
        <p className="text-lg md:text-xl text-[#6d5647] max-w-2xl mx-auto">
          A simple yet magical photo booth to capture precious memories, apply dreamy filters, and relive joy instantly.
        </p>
      </header>

      {/* Camera & Filter Section */}
      <section className="py-10 px-4">
        <div className="bg-white shadow-2xl rounded-3xl p-6 md:p-10 max-w-4xl mx-auto">
          <div className={`rounded-xl overflow-hidden border border-gray-300  ${selectedFilter}`}>
            <video
              ref={videoRef}
              className="w-full rounded-xl"
              autoPlay
              muted
              playsInline
            ></video>
          </div>
          <canvas ref={canvasRef} className="hidden"></canvas>

          <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <select
              className="w-full sm:w-auto p-3 rounded-xl border border-gray-300 bg-[#fffaf4] text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300 "
              onChange={e => setSelectedFilter(e.target.value)}
            >
              {filters.map((filter, index) => (
                <option key={index} value={filter}>
                  {filter || 'None'}
                </option>
              ))}
            </select>
            <button
              onClick={capture}
              className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
            >
              📸 Take Photo
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      {capturedImages.length > 0 && (
        <section className="mt-16 px-4">
          <h2 className="text-4xl font-semibold text-center mb-10">✨ Your Captures</h2>
          <div className="flex flex-wrap justify-center gap-8">
            {capturedImages.map((img, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-2xl shadow-md w-[220px] transition hover:shadow-xl"
              >
                <img src={img.data} alt={`capture-${index}`} className={`rounded-lg ${img.filter}`} />
                <a href={img.data} download={`image-${index}.png`}>
                  <button className="mt-3 w-full bg-[#3d2b1f] hover:bg-[#2c1d14] text-white text-sm py-2 rounded-lg">
                    Download
                  </button>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="mt-20 text-center py-6 text-[#6d5647] text-sm">
        Made with ❤️ for magical moments | © 2025 Wedding Booth
      </footer>
    </div>
  );
};

export default WebcamCapture;
