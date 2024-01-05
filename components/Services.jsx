import React from "react";
import Image from "next/image";

const services = () => {
  return (
    <div id="services" className="container mx-auto text-black p-5 ">
      <div className="grid justify-items-center">
        <div className="grid text-center text-white p-6 text-2xl">
          <p>Faça seu evento conosco</p>
        </div>
        <video
          controls
          src={"/assets/videos/video-1.mp4"}
          style={{ width: "720px", height: "480px" }}
        />
      </div>
    </div>
  );
};

export default services;
