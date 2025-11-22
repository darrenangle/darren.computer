import React from 'react';

interface FigureProps {
  src: string;
  alt: string;
  caption?: string;
}

export const Figure: React.FC<FigureProps> = ({ src, alt, caption }) => {
  return (
    <figure className="research-figure">
      <img src={src} alt={alt} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};
