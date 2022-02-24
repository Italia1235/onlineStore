import React, { FC } from 'react';

import { ReturnComponentType } from '../../types';
import { Header } from '../header';
import { RegistrationContainer } from '../registration';

import s from './Main.module.css';

export const Main: FC = (): ReturnComponentType => (
  <div className={s.main}>
    <Header />
    <RegistrationContainer />
  </div>
);
