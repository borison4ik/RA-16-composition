import React from 'react';

type WheatherProps = {
  src?: string;
  temperature: string;
  detail: { text: string }[];
};
/**
 *
 * @param  принимает src: string;
  temperature: string;
  detail: {text: string}[];
 * @returns возвращает виджет погоды
 */
export const Wheather: React.FC<WheatherProps> = () => {
  return <div>Wheather</div>;
};
