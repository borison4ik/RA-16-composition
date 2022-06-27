import React from 'react';

type TitleProps = {
  children: React.ReactNode;
};
/**
 *
 * @param принимает JSX ReactNode
 * @returns возвращает разметку завернутую в заголовок
 */
export const Title: React.FC<TitleProps> = () => {
  return <div>Title</div>;
};
