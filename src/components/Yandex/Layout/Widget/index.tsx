import React from 'react';

type WidgetProps = {
  children: React.ReactNode;
};
/**
 *
 * @param принимает JSX ReactNode возвращает разметку для Widget
 */
export const Widget: React.FC<WidgetProps> = () => {
  return <div>Widget</div>;
};
