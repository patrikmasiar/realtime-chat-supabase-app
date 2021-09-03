import { FC } from 'react';
import { Auth, Space } from '@supabase/ui';
import { supabase } from '../utils/initSupabase';

const UpdatePassword: FC = () => {
  return (
    <Space direction="vertical" size={6}>
      <Auth.UpdatePassword supabaseClient={supabase} />
    </Space>
  )
};

export default UpdatePassword;
