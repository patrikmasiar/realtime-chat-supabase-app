import { FC } from 'react';
import { Auth } from '@supabase/ui';
import { useAuthStateChange } from '../hooks/useAuthStateChange';
import AuthUser from './AuthUser';
import SignedIn from './SignedIn';

const View: FC = () => {
  const { user } = Auth.useUser();
  const { authView } = useAuthStateChange();

  if (!user) {
    return <AuthUser view={authView} />
  }

  return <SignedIn user={user} />;
};

export default View;
