import { Auth } from '@supabase/ui'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { supabase } from '../utils/initSupabase'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Auth.UserContextProvider supabaseClient={supabase}>
      <Component {...pageProps} />
    </Auth.UserContextProvider>
  )
}
export default MyApp
