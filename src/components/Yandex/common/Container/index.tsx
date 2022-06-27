import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};
/**
 *
 * @param принимает компоненты React и JSX и оборачивает в общий контейнер
 * @returns возвращает переданную в него разметку
 */
export const Container: React.FC<ContainerProps> = () => {
  return <div>Container</div>;
};
