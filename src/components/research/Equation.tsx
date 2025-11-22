import React from 'react';

interface EquationProps {
  children: React.ReactNode;
  label?: string;
}

export const Equation: React.FC<EquationProps> = ({ children, label }) => {
  return (
    <div className="research-equation">
      <div className="research-equation-content">{children}</div>
      {label && <div className="research-equation-label">({label})</div>}
    </div>
  );
};
