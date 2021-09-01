import { FC } from 'react';
import HeadNext from 'next/head'

const Head: FC = () => (
  <HeadNext>
    <title>Realtime chat application</title>
    <meta name="description" content="" />
    <link rel="icon" href="/favicon.ico" />
  </HeadNext>
);

export default Head;
