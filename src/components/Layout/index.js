import * as React from "react"
import PropTypes from "prop-types"

import GlobalStyles from '../../styles/global'
import Navbar from '../Navbar'
import Main from '../Main';
import Background from '../Background'

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Background />
      <Main />
      <main>{children}</main>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
