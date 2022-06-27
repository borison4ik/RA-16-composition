import React from 'react';

type ListCategoriesLinksProps = {
  tabs: {
    href: string;
    text: React.ReactNode;
    title?: string;
  }[];
};
/**
 *
 * @param принимает массив объектов для обображения списка компонентов Link
 * @returns возвращает список ссылок
 */
export const ListCategoriesLinks: React.FC<ListCategoriesLinksProps> = ({ tabs }) => {
  return <div>TABS</div>;
};
