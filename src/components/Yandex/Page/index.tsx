import React from 'react';

type PageProps = {
  children: React.ReactNode;
};
/**
 *
 * @param принимает компоненты React и JSX и оборачивает в общий контейнер
 * @returns возвращает переданную в него разметку
 */
export const Page: React.FC<PageProps> = ({ children }) => {
  return <div>{children}</div>;
};
