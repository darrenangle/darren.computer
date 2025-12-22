import { useState, useEffect } from "react";
import { artImages } from "../data/artImages";
import { Navbar } from "./Navbar";
import "./Home.css";

export function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    setCurrentImageIndex(Math.floor(Math.random() * artImages.length));
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % artImages.length);
  };

  return (
    <div className="brutalist-home-alt">
      <Navbar />
      <main className="home-hero" onClick={nextImage}>
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
      </main>
    </div>
  );
}