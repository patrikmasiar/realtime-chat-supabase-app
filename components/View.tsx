import { Auth } from '@supabase/ui';
import { FC } from 'react';
import AuthUser from './AuthUser';
import SignedIn from './SignedIn';

const View: FC = () => {
  const { user } = Auth.useUser();

  if (!user) {
    return <AuthUser />
  }

  return <SignedIn />;
};

export default View;
