import { FC, ReactElement } from 'react';

interface AppProps {};

const App: FC<AppProps> = (): ReactElement => {
  return <div data-testid="app-wrapper" className='app-wrapper'>
    <h3>App component</h3>
  </div>
};

export {
  App
};