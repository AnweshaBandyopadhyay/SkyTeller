import React from 'react';
import LeftSec from '../sides/LeftSec';
import RightSec from '../sides/RightSec';
import backgroundImage from '/assets/background4.svg';

const OnePage = () => {
  return (
    <div
      className="flex flex-wrap md:flex-nowrap min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <LeftSec />
      <RightSec />
    </div>
  );
};

export default OnePage;
