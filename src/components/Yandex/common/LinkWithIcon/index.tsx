import React from 'react';

type LinkWithIconProps = {
  href: string;
  text: string;
  targer: string;
  title: string;
  iconSrc: string;
};
/**
 *
 * @param принимает href: string;
  text: string;
  targer: string;
  title: string;
  iconSrc: string;
 * @returns возвращает ссылку c иконкой
 */
export const LinkWithIcon: React.FC<LinkWithIconProps> = () => {
  return <div>LinkWithIcon</div>;
};
