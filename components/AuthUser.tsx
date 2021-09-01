import { FC, useState } from 'react';
import { Space, Typography, Auth } from '@supabase/ui';
import { supabase } from '../utils/initSupabase';

const AuthUser: FC = () => {
  const [authView, setAuthView] = useState('sign_in');

  return (
    <Space siize={8} direction="vertical">
       <div>
        <Typography.Title level={3}>
          Welcome to Realtimechat
        </Typography.Title>
      </div>
      <Auth
        supabaseClient={supabase}
        providers={['google', 'github']}
        // @ts-ignore
        view={authView}
        socialLayout="horizontal"
        socialButtonSize="xlarge"
      />
    </Space>
  )
};

export default AuthUser;