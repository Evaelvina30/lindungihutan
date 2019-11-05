import React from 'react';
import Navbar from '../../component/navbar';
import Navigation from '../../component/navigation';
import Card1 from '../../component/card1';
import Card2 from '../../component/card2';
import Card3 from '../../component/card3';
import Card4 from '../../component/card4';
import Cardku from '../../component/cardku';

function Home() {
  return (
    <div className="App" >
      <Navbar />
      <Card1 />
      <Card2 />
      <Cardku />
      <Card3 />
      <Card4 />
      <Navigation />

    </div>
  );
}

export default Home;