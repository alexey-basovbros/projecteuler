import { FC, ReactElement } from 'react';

interface AppProps {};

const App: FC<AppProps> = (): ReactElement => {
  return <div className='app-wrapper'>
    <h3>App component</h3>
  </div>
};

export {
  App
};