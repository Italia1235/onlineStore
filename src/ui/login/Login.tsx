import React, { FC } from 'react';

import { ReturnComponentType } from '../../types';

import s from './Login.module.css';

export const Login: FC = (): ReturnComponentType => (
  <div className={s.loginPage}>
    login <input />
    password <input />
    <button type="submit">войти</button>
  </div>
);
