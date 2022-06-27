import React from 'react';

type AdWidgetProps = {
  src?: string;
  children: React.ReactNode;
};
/**
 *
 * @param  принимает src: string;
  children: React.ReactNode;
 * @returns возвращает переданный баннер например через Image если передан src и вложенный JSX
 */
export const AdWidget: React.FC<AdWidgetProps> = () => {
  return <div>AdWidget</div>;
};
