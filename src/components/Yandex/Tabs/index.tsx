import React from 'react';

type PageProps = {
  tabs: {
    title: string;
    content: React.ReactNode;
  }[];
};
/**
 *
 * @param принимает массив объектов для обображения их в TAB
 * @returns возвращает переданную в него разметку
 */
export const Page: React.FC<PageProps> = ({ tabs }) => {
  return <div>TABS</div>;
};
