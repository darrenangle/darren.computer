import React from 'react';

interface CitationProps {
  children: React.ReactNode;
  id: string;
}

export const Citation: React.FC<CitationProps> = ({ children, id }) => {
  return (
    <cite id={id} className="research-citation">
      {children}
    </cite>
  );
};

export const CiteRef: React.FC<{ id: string }> = ({ id }) => {
  return (
    <a href={`#${id}`} className="research-cite-ref">
      [{id}]
    </a>
  );
};
