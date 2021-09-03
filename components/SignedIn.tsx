import { FC } from 'react';
import { useAuthStateChange } from '../hooks/useAuthStateChange';
import { AuthView } from '../types';
import UpdatePassword from './UpdatePassword';
import { Typography, Space, Button, Icon } from '@supabase/ui';
import { supabase } from '../utils/initSupabase';
import { useUserData } from '../hooks/useUserData';
import Link from 'next/link';

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

        <Button
          icon={<Icon type="LogOut" src={undefined} />}
          type="outline"
          onClick={() => supabase.auth.signOut()}
        >
          Log out
        </Button>
        {error && (
          <Typography.Text>Failed to fetch user!</Typography.Text>
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
          <div>Loading...</div>
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
