import React, { useState, useEffect } from "react";
import Image from "next/image";
import { RxDotFilled } from "react-icons/rx";
import primg1 from "../public/assets/carousel/pr-img-1.jpeg";
import primg2 from "../public/assets/carousel/pr-img-2.jpeg";
import primg3 from "../public/assets/carousel/pr-img-3.jpeg";
import primg4 from "../public/assets/carousel/pr-img-4.jpeg";
import { SlArrowRight, SlArrowLeft } from "react-icons/sl";

const slides = [
  {
    id: 1,
    src: primg1,
    alt: "Image 1",
    summary: "Casamentos",
    description: "Na Casa de Eventos Flavia Machado, transformamos seu casamento em um conto de fadas realidade.",
  },
  {
    id: 2,
    src: primg2,
    alt: "Image 2",
    summary: "Eventos",
    description: "Na Casa de Eventos Flavia Machado, transformamos seus eventos em celebrações memoráveis.",
  },
  {
    id: 3,
    src: primg3,
    alt: "Image 3",
    summary: "Festas",
    description: "Na Casa de Eventos Flavia Machado, transformamos suas festas em experiências inesquecíveis.",
  },
  {
    id: 4,
    src: primg4,
    alt: "Image 4",
    summary: "Celebrações",
    description: "Na Casa de Eventos Estrela Dourada, transformamos seus eventos em celebrações memoráveis.",
  },
];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  useEffect(() => {
    let intervalId;

    if (!isHovered) {
      // Auto-scroll every 5 seconds (adjust the interval as needed)
      intervalId = setInterval(() => {
        nextSlide();
      }, 10000);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isHovered, currentIndex]);

  return (
    <div className="min-h-[600px] mt-[90px] md:mt-[150px] ">
      <div
        className="max-w-full h-[800px] w-full m-auto py-  relative group "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="w-full h-full   bg-center bg-cover duration-500 relative transition-opacity bg-black">
          <Image
            className=" opacity-30 transition-opacity duration-500 "
            src={slides[currentIndex].src}
            alt={`Slide ${slides[currentIndex].id}`}
            layout="fill"
            objectFit="cover"
            priority // Add the priority property
          />

          <div className="absolute  flex items-center justify-center font-bold text-center animate-fade-in drop-shadow-lg h-full w-full">
            <div>
              <h1 className="text-7xl bg-clip-text font-bold text-white ">
                {slides[currentIndex].summary}
              </h1>
              <p className="text-white text-2xl font-sans py-6">
                {slides[currentIndex].description}
              </p>
            </div>
          </div>
        </div>

        {/* Left Arrow*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl  p-2  text-white cursor-pointer">
          <SlArrowLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow*/}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl  p-2 text-white cursor-pointer">
          <SlArrowRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide) => (
            <div
              key={slide.id}
              onClick={() => goToSlide(slide.id - 1)}
              className="text-lg cursor-pointer text-white"
            >
              {/* Adicione aqui o conteúdo que deseja exibir */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
