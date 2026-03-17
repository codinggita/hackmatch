import React from 'react';
import './Skeleton.css';

const Skeleton = ({ className = '', variant = 'text' }) => {
  return (
    <div className={`skeleton skeleton--${variant} ${className}`} />
  );
};

export default Skeleton;
