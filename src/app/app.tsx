import { FC, ReactElement, useEffect } from 'react';
        
// import { multipliesSum } from "../tasks";

interface AppProps {};

const App: FC<AppProps> = (props): ReactElement => {
  useEffect(() => {
//     problem 1 testing
//     const summ = multipliesSum(3,5)(1000);
//     console.log('summ: ', summ);
  }, []);

  return <div data-testid="app-wrapper" className='app-wrapper'>
    <h3>App component</h3>
  </div>
};

export {
  App
};