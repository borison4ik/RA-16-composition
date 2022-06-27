import React from 'react';

type TextProps = {
  text: string;
};
/**
 *
 * @param принимает text: string;
 * @returns возвращает разметку завернутую в параграф
 */
export const Text: React.FC<TextProps> = () => {
  return <div>Text</div>;
};
