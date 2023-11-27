import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageSlideshowProps {
  images: string[];
}

function ImageSlideshow({ images }: ImageSlideshowProps) {
  const [currentImage, setCurrentImage] = useState(0);

  const handleSwipe = (newDirection: number) => {
    const newImageIndex = (currentImage + newDirection + images.length) % images.length;
    setCurrentImage(newImageIndex);
  };

  return (
    <div style={{ position: "relative", overflow: "hidden", maxWidth: "100%" }}>
      <div>
        <ImageContainer src={images[currentImage]} alt={`Image ${currentImage + 1}`} />
      </div>
      <div style={{ textAlign: "center", marginTop: "10px" }}>
        {images.map((_, index) => (
          <Dot key={index} active={index === currentImage} onClick={() => handleSwipe(index - currentImage)} />
        ))}
      </div>
    </div>
  );
}
interface ImageContainerProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

function ImageContainer(props: ImageContainerProps) {
  return (
    <img
      {...props}
      style={{
        width: "100%",
        ...props.style,
      }}
      className={"aspect-square outline-none border-none object-cover " + props.className}
    />
  );
}

interface DotProps {
  active: boolean;
  onClick: () => void;
}

function Dot({ active, onClick }: DotProps) {
  return (
    <span
      style={{
        display: "inline-block",
        height: "10px",
        width: "10px",
        borderRadius: "50%",
        background: active ? "#007BFF" : "#CED4DA",
        margin: "0 5px",
        cursor: "pointer",
      }}
      onClick={onClick}
    />
  );
}

export default ImageSlideshow;
