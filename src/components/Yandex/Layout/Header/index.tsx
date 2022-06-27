import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
};
/**
 *
 * @param принимает компоненты React и JSX и оборачивает в общий контейнер
 * @returns возвращает переданную в него разметку
 */
export const Header: React.FC<HeaderProps> = () => {
  return <div>Header</div>;
};
