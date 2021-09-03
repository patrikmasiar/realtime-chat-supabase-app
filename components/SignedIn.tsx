import { FC } from 'react';
import { useAuthStateChange } from '../hooks/useAuthStateChange';
import { AuthView } from '../types/index.d';
import UpdatePassword from './UpdatePassword';
import { Typography, Space } from '@supabase/ui';
import { supabase } from '../utils/initSupabase';
import { useUserData } from '../hooks/useUserData';
import Link from 'next/link';
import LogoutButton from './LogoutButton';
import Loader from './Loader';
import FetchError from './FetchError';

type Props = {
  user: any; // TODO
};

const SignedIn: FC<Props> = ({ user }) => {
  const { authView } = useAuthStateChange();
  const { data, error } = useUserData();

  return (
    <Space direction="vertical" size={6}>
      {authView === AuthView.UPDATE_PASSWORD && (
        <UpdatePassword />
      )}
      <>
        <Typography.Text>You&apos;re signed in</Typography.Text>
        <Typography.Text strong>Email: {user.email}</Typography.Text>
        <LogoutButton onClick={() => supabase.auth.signOut()} />
        {error && (
          <FetchError />
        )}
        {data && !error ? (
          <>
            <Typography.Text type="success">
              User data retrieved server-side (in API route):
            </Typography.Text>

            <Typography.Text>
              <pre>{JSON.stringify(data, null, 2)}</pre>
            </Typography.Text>
          </>
        ) : (
          <Loader />
        )}

        <Typography.Text>
          <Link href="/profile">
            <a>SSR example with getServerSideProps</a>
          </Link>
        </Typography.Text>
      </>
    </Space>
  )
};

export default SignedIn;
