import React from 'react';

import AppBar from './styles';

const NavBar: React.FC<any> = () => (
  <AppBar position="fixed">
    <div className="section logoSection">
      <div>Connect & Grow</div>
    </div>
  </AppBar>
);

export default NavBar;
