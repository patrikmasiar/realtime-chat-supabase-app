import { FC } from 'react';
import { Space, Typography, Auth } from '@supabase/ui';
import { supabase } from '../utils/initSupabase';

type Props = {
  view: AuthView;
};

const AuthUser: FC<Props> = ({ view }) => {
  return (
    <Space siize={8} direction="vertical">
       <div>
        <Typography.Title level={3}>
          Welcome to Realtimechat
        </Typography.Title>
      </div>
      <Auth
        supabaseClient={supabase}
        // @ts-ignore
        view={view}
        socialLayout="horizontal"
        socialButtonSize="xlarge"
      />
    </Space>
  )
};

export default AuthUser;