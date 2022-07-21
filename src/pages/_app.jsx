/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
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

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object,
};

MyApp.defaultProps = {
  pageProps: undefined,
};

export default dynamic(() => Promise.resolve(MyApp), { ssr: false });
