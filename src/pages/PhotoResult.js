import React, { useRef, useState } from "react";
import Webcam from "react-webcam";

function PhotoResult() {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
  };

  return (
  <div className="container">
    <h2>Capture Photo</h2>

    {!image ? (
      <>
        <div style={{ textAlign: "center" }}>
          <Webcam
            audio={false}
            ref={webcamRef}
            screenshotFormat="image/jpeg"
            width={400}
          />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <button onClick={capture}>Click Photo</button>
        </div>
      </>
    ) : (
      <>
        <div style={{ textAlign: "center" }}>
          <img src={image} alt="Captured" width={400} />
        </div>
        <br />
        <div style={{ textAlign: "center" }}>
          <button onClick={() => setImage(null)}>Retake</button>
        </div>
      </>
    )}
  </div>
);
}

export default PhotoResult;