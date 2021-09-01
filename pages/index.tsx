import { Card } from '@supabase/ui';
import type { NextPage } from 'next'
import Head from '../components/Head';
import View from '../components/View';

const Home: NextPage = () => {
  return (
    <div>
      <Head />
      <main>
        <div style={{ maxWidth: '500px', margin: '90px auto' }}>
          <Card>
            <View />
          </Card>
        </div>
      </main>
    </div>
  )
}

export default Home
