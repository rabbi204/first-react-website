import React from 'react'
import Common from './Common';

const About = () => {
  const web = 'https://img.freepik.com/free-vector/online-courses-colorful-cartoon-characters-watching-video-tutorial-business-seminar-e-learning-webinar-online-learning-remote-studying_335657-2372.jpg';

  return (
    <>
      <Common name='Welcome to About Page' imgsrc={web} visit='/contact' btnname='Contact Now' />
    </>
  )
}

export default About;