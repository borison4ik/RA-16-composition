import React, { useState } from 'react';
import { Transition } from 'react-transition-group';

import './index.css';

type CollapseProps = {
  collapsedLabel?: string;
  expandedLabel?: string;
  children: React.ReactNode;
};
const duration = 300;

export const Collapse: React.FC<CollapseProps> = ({ collapsedLabel, expandedLabel, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const _collapsedLabel = collapsedLabel || 'Развернуть';
  const _expandedLabel = expandedLabel || 'Свернуть';

  const onClicHandler = (): void => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className='_collapse'>
      <button className='collapse_btn btn btn-primary' onClick={onClicHandler}>
        {isOpen ? _expandedLabel : _collapsedLabel}
      </button>
      <Transition in={isOpen} timeout={duration} mountOnEnter>
        {(state) => <div className={`_collapse_body ${state}`}>{children}</div>}
      </Transition>
    </div>
  );
};
