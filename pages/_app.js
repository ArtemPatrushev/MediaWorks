import React from 'react';
import App from 'next/app';
import { Provider } from 'react-redux';
import {createWrapper} from 'next-redux-wrapper';
import store from '../redux/reduxStore';
import '../styles/globals.css';

// function MyApp({ Component, pageProps }) {
//   return (
//     <Provider store={store}>
//       <Component {...pageProps} />
//     </Provider>
//   ) 
//}

class MyApp extends App {
  render () {
    // debugger;
    const {Component, pageProps} = this.props;
    return (
      <Provider store={store}>
        <Component {...pageProps}></Component>
      </Provider>
    )
  }
}

const makeStore = () => store;
const wrapper = createWrapper(makeStore);

export default wrapper.withRedux(MyApp);
