/* eslint-disable react/react-in-jsx-scope */
import '../src/assets/styles/fontawesome.min.css';
import '../src/assets/styles/main.scss';
import '../src/assets/styles/animate.min.css';
import '../src/assets/styles/nprogress.css';
import '../src/assets/styles/demo/demo.css';
import '../src/assets/styles/demo/nucleo-icons-page-styles.css';

import { Provider } from 'react-redux';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import { DefaultSeo } from 'next-seo';
import Router from 'next/router';
import NProgress from 'nprogress';
import { initStore } from '@reducers/store';
import { appWithTranslation } from '@helpers/i18n';

NProgress.configure({ showSpinner: true });

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const { originalUrl } = ctx.req || {};
    return {
      pageProps: Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {},
      originalUrl
    };
  }

  render() {
    const { Component, pageProps, store } = this.props;
    return (
      <>
        <DefaultSeo
          title="Fia's Portofolio"
          description="Fia's Portofolio"
          openGraph={{
            type: 'website',
            locale: 'en_IE',
            url: '',
            site_name: ''
          }}
        />
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </>
    );
  }
}

export default withRedux(initStore)(appWithTranslation(MyApp));
