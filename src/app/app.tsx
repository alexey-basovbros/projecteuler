import { FC, ReactNode } from 'react';

interface AppProps {};

const App: FC<AppProps> = (): ReactNode => {
  return <div className='app-wrapper'>
    <h3>App component</h3>
  </div>
};

export {
  App
};