import React from 'react';
import {Link} from 'react-router-dom';

import Root from './styles';

const HeroBanner: React.FC = () => {
  return (
    <Root>
      <div className="banner">
        <div className="bannerContent">
          <div className="actionTitle">Explore New Farming Projects</div>
          <div className="actionDescription">Find start to finish resources, share your goods and services</div>
          <Link to="/projects" className="action">
            <span>Browse Projects</span>
          </Link>
        </div>
      </div>
    </Root>
  );
};

export default HeroBanner;
