import React from 'react';

type SearchProps = {
  logo?: string;
  children: React.ReactNode;
};
/**
 *
 * @param принимает логотип например для смены
 * Родительский компонет для блока с поиском
 * содержит в себе такие компоненты как ListCategoriesLinks, Logo, SearchInput
 */
export const Search: React.FC<SearchProps> = () => {
  return <div>Search</div>;
};
