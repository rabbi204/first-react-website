import React from 'react';
import Common from './Common';

const Home = () => {
    const web = 'https://cdni.iconscout.com/illustration/premium/thumb/user-account-sign-up-4489360-3723267.png?f=webp';

  return (
    <>
        <Common name='Grow your business with' imgsrc={web} visit='/service' btnname='Get Started' />
    </>
  )
}

export default Home;