import React from "react";

const video = () => {
  return (
    <div id="services" className="container mx-auto text-black p-5 ">
      <div className="grid justify-items-center  ">
        <div>
          <div className="grid text-center text-2xl text-black mt-6 p-4 ">
            <p></p>
          </div>
          <video
            controls
            src={"/assets/videos/video-1.mp4"}
            style={{ width: "850px", height: "480px", borderRadius: "30px" }}
            
          />
        </div>
      </div>
    </div>
  );
};

export default video;
