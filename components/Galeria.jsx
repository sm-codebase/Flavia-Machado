import React from "react";
import Image from "next/image";
import image1 from "../public/assets/img-1.jpeg";
import image2 from "../public/assets/img-2.jpeg";
import image3 from "../public/assets/img-3.jpeg";
import image4 from "../public/assets/img-4.jpeg";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const ImageSlider = () => {
  const images = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
    },
    {
      id: 4,
      src: image4,
      alt: "Image 4",
    },
  ];

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const previous = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const forward = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <main className="grid min-h-screen w-full place-content-center bg-gray-900">
      <div className="relative mx-auto max-w-2xl overflow-hidden rounded-md bg-gray-100 p-2 sm:p-4">
        <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
          <span>{currentIndex + 1}</span>/<span>{images.length}</span>
        </div>

        <div
          onClick={previous}
          className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
        >
          <SlArrowLeft className="fas fa-chevron-left text-2xl font-bold text-gray-800"></SlArrowLeft>
        </div>

        <div
          onClick={forward}
          className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
        >
          <SlArrowRight className="fas fa-chevron-right text-2xl font-bold text-gray-500"></SlArrowRight>
        </div>

        <div className="relative h-80" style={{ width: "30rem" }}>
          {images.map((img, index) => (
            <div
              key={index}
              style={{
                display: currentIndex === index ? "block" : "none",
              }}
              className="absolute top-0"
            >
              <Image
                src={images[currentIndex].src}
                alt={`image-${index}`}
                className="rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
      
    </main>
  );
};

export default ImageSlider;
