import React from 'react';

type PageProps = {
  children: React.ReactNode;
};
/**
 *
 * @param принимает JSX ReactNode
 * @returns рендерит логотип с помощью Image например
 */
export const Page: React.FC<PageProps> = () => {
  return <div>LOGO</div>;
};
