import { useState, useEffect } from 'react';
import { supabase } from '../utils/initSupabase';
import { AuthView } from '../index.d';

export const useAuthStateChange = () => {
  const [authView, setAuthView] = useState<AuthView>(AuthView.SIGN_IN);

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === 'PASSWORD_RECOVERY') {
          setAuthView(AuthView.UPDATE_PASSWORD)
        }

        if (event === 'USER_UPDATED') {
          setTimeout(() => setAuthView(AuthView.SIGN_IN), 1000);
        }
          
        fetch('/api/auth', {
          method: 'POST',
          headers: new Headers({ 'Content-Type': 'application/json' }),
          credentials: 'same-origin',
          body: JSON.stringify({ event, session }),
        }).then((res) => res.json())
      }
    )

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return {
    authView,
  };
};
