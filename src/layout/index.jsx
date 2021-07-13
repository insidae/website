/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Helmet from 'react-helmet';
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import config from '../../data/SiteConfig';
import favicon from '../images/favicon.png'
import '../styles/main.scss';

export default class MainLayout extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div>
        <Helmet>
          <meta name="description" content={config.siteDescription} />
          <link rel="shortcut icon" type="image/png" href={favicon} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
          <script src="/parallax.js" />
          {/* 
          88                          88           88                          
          ""                          ""           88                          
                                                   88                          
          88  8b,dPPYba,   ,adPPYba,  88   ,adPPYb,88  ,adPPYYba,   ,adPPYba,  
          88  88P'   `"8a  I8[    ""  88  a8"    `Y88  ""     `Y8  a8P_____88  
          88  88       88   `"Y8ba,   88  8b       88  ,adPPPPP88  8PP"""""""  
          88  88       88  aa    ]8I  88  "8a,   ,d88  88,    ,88  "8b,   ,aa  
          88  88       88  `"YbbdP"'  88   `"8bbdP"Y8  `"8bbdP"Y8   `"Ybbd8"'
          */}
        </Helmet>
        <Navigation menuLinks={config.menuLinks} userLinks={config.userLinks} />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    );
  }
}
