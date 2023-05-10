import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";
import Image from "next/image";

export default function SwiperCard() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    {
      id: 1,
      src: "/img.jpeg",
    },
    {
      id: 2,
      src: "/fragile.jpeg",
    },
    {
      id: 3,
      src: "/cover-photo.gif",
    },
    {
      id: 4,
      src: "/artistBg.jpeg",
    },
    {
      id: 5,
      src: "/cover-photo.gif",
    },
  ];

  const handleClick = (id) => {
    setSelectedImage(id);
  };

  return (
    <div>
      <Image
        width={693}
        height={693}
        src={images[selectedImage]?.src}
        style={{ paddingBottom: "10px", width: "100%", height: "100%" }}
      />
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper">
        {images.map((image, index) => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                width={300}
                height={200}
                src={image.src}
                onClick={() => handleClick(index)}
                alt="img"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
