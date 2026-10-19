/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Script } from 'gatsby';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig';
import '../styles/main.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Script src="/parallax.js" />
        <Navigation menuLinks={config.menuLinks} userLinks={config.userLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    );
  }
}
