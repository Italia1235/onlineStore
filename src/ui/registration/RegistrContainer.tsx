import React, { ChangeEvent, FC, useState } from 'react';

import { ReturnComponentType } from '../../types';

import { Registration } from './Registration';

export const RegistrationContainer: FC = (): ReturnComponentType => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const emailHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.currentTarget.value);
  };
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.currentTarget.value);
  };
  const confirmPasswordHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setConfirmPassword(e.currentTarget.value);
  };

  return (
    <Registration
      email={email}
      password={password}
      confirmPassword={confirmPassword}
      emailHandler={emailHandler}
      passwordHandler={passwordHandler}
      confirmPasswordHandler={confirmPasswordHandler}
    />
  );
};
