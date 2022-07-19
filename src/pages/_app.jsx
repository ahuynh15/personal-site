import React from 'react';
import '@/styles/globals.css';
import store from 'src/store';
import dynamic from 'next/dynamic';
import { Provider } from 'react-redux';

function MyApp({ Component, pageProps }) {
  // Subscribe to changes in theme and store it in local storage
  store.subscribe(() => {
    const state = store.getState();
    localStorage.setItem('theme', state.theme.current);
  });

  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
