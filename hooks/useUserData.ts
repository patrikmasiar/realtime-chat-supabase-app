import { Auth } from '@supabase/ui';
import useSWR from 'swr' ;
import { fetcher } from '../utils/fetcher'

export const useUserData = () => {
  const { session } = Auth.useUser();

  return useSWR(
    session ? ['/api/getUser', session.access_token] : null,
    fetcher
  );
};