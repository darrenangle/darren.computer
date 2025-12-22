import { useState, useEffect } from "react";
import { artImages } from "../data/artImages";
import { Navbar } from "./Navbar";
import { useImagePreloader } from "../hooks/useImagePreloader";
import "./Home.css";

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(() => 
    Math.floor(Math.random() * artImages.length)
  );
  const imagesPreloaded = useImagePreloader(artImages);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + artImages.length) % artImages.length);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        nextImage();
      } else if (event.key === "ArrowLeft") {
        prevImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (!imagesPreloaded) return;
    const timer = setTimeout(nextImage, 10000);
    return () => clearTimeout(timer);
  }, [currentImageIndex, imagesPreloaded]);

  return (
    <div className="brutalist-home-alt">
      <Navbar />
      <main className="home-hero" onClick={nextImage}>
        {!imagesPreloaded ? (
          <div className="loader-container">
            <div className="loader"></div>
          </div>
        ) : (
          <div className="hero-image-container">
            {artImages.map((src, index) => (
              <img 
                key={src}
                src={src} 
                alt="Art" 
                className={`hero-image ${index === currentImageIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
