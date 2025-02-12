import React from 'react';

import Nav from '../Nav/Nav';
import TopBar from '../TopBar/TopBar';

const header = () => {
  return (
    <div className='header h-14 max-h-14 shadow-md'>
      {/* <TopBar /> */}
      <Nav />
    </div>
  );
};

export default header;
