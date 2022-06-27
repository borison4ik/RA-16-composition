import React from 'react';

type LinkProps = {
  href: string;
  text: string;
  targer: string;
  title: string;
};
/**
 *
 * @param принимает href: string;
  text: string;
  targer: string;
  title: string;
 * @returns возвращает ссылку
 */
export const Link: React.FC<LinkProps> = () => {
  return <div>Link</div>;
};
