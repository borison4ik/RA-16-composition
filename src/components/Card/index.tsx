import React from 'react';

type CardProps = {
  imgSrc?: string;
  alt?: string;
  children: React.ReactNode;
};

export const Card: React.FC<CardProps> = ({ imgSrc, alt, children }) => {
  return (
    <div className='card' style={{ width: '18rem' }}>
      {imgSrc && <img src={imgSrc} className='card-img-top' alt={alt ? alt : ''} />}

      <div className='card-body'>{children}</div>
    </div>
  );
};
