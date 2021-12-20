import React from 'react';
import Banner from '../Banner/Banner';
import ClientsFeedback from '../ClientsFeedback/ClientsFeedback';
import HandleProject from '../HandleProject/HandleProject';
import OurWorks from '../OurWorks/OurWorks';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <OurWorks></OurWorks>
      <ClientsFeedback></ClientsFeedback>
      <HandleProject></HandleProject>
    </div>
  );
};

export default Home;