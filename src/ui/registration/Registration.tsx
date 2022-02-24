import React, { ChangeEvent, FC } from 'react';

import { ReturnComponentType } from '../../types';

import s from './Registr.module.css';

type RegistrationPropsType = {
  email: string;
  password: string;
  confirmPassword: string;
  emailHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  passwordHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  confirmPasswordHandler: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const Registration: FC<RegistrationPropsType> = ({
  email,
  password,
  confirmPassword,
  emailHandler,
  passwordHandler,
  confirmPasswordHandler,
}): ReturnComponentType => (
  <div className={s.registrationPage}>
    Логин <input value={email} onChange={emailHandler} />
    Пароль <input value={password} onChange={passwordHandler} />
    Подтвердите пароль <input value={confirmPassword} onChange={confirmPasswordHandler} />
    <button type="submit">войти</button>
  </div>
);
