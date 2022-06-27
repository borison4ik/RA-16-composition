import React from 'react';

type ImageProps = {
  src: string;
  alt: string;
  title: string;
};
/**
 *
 * @param принимает src: string;
  alt: string;
  title: string;
 * @returns возвращает img
 */
export const Image: React.FC<ImageProps> = () => {
  return <div>Image</div>;
};
