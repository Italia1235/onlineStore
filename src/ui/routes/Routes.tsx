import { FC } from 'react';

import { Route } from 'react-router-dom';

import { ReturnComponentType } from '../../types';
import { REGISTRATION_ROUTE } from '../../utils/constans/path';
import { RegistrationContainer } from '../registration';

export const Routes: FC = (): ReturnComponentType => (
  <Routes>
    <Route path={REGISTRATION_ROUTE} element={<RegistrationContainer />} />
  </Routes>
);
