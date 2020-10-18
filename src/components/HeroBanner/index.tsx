import React from 'react';
import Button from '@material-ui/core/Button';

import Root from './styles';

const HeroBanner: React.FC = () => {
  return (
    <Root>
      <div className="banner">
        <div className="bannerContent">
          <div className="actionTitle">Explore Farming Projects</div>
          <Button className="action" variant="contained">
            Browse Projects
          </Button>
        </div>
      </div>
    </Root>
  );
};

export default HeroBanner;
