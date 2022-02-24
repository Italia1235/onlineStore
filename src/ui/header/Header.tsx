import React, { FC } from 'react';

import { ReturnComponentType } from '../../types';

import s from './Header.module.css';

export const Header: FC = (): ReturnComponentType => (
  <div>
    <div className={s.header}>Header</div>
  </div>
);
