import { useState, useEffect } from 'react';

export const useAuthStateChange = () => {
  const [authView, setAuthView] = useState<AuthView>(AuthView.SIGN_IN);

  useEffect(() => {
    return () => {};
  }, []);

  return {
    authView,
  };
};
