import React from 'react';
import styles from './Navbar.scss';
import CSSMoudules from 'react-css-modules';
import {IndexLink, Link} from 'react-router';
const NavBar = () => (
  <div styleName="nav-bar">
    <div styleName="logo">Life Is Short<i className="fa fa-bars" /></div>
    <div styleName="select-container">
      <IndexLink to="/">首页</IndexLink>
      <Link to="/blog">博文</Link>
      <Link to="/experiment">实验</Link>
    </div>
  </div>);
export default CSSMoudules(NavBar, styles);
