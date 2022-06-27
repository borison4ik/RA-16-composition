import React from 'react';

type SearchInputProps = {
  onSearch(): { link: string; text: string }[];
};
/**
 *
 * @params принимает обработчик для поиска
 * @returns рендерит компонент поиска на странице возвращает массив найденных объектов для Link
 */
export const SearchInput: React.FC<SearchInputProps> = () => {
  return <div>SearchInput</div>;
};
