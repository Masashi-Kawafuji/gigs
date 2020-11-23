import React from 'react';
import Header from 'layouts/Header';
import Footer from 'layouts/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      {children}
      <Footer />
    </React.Fragment>
  );
}

export default Layout;