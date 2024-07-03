// src/app/page.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import Hero from '../src/components/Hero/Hero';

const HikingSection = dynamic(() => import('../src/components/HikingSection/HikingSection'), { ssr: false });

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <HikingSection
        number="01"
        subtitle="GET STARTED"
        title="What level of hiker are you?"
        description="Determining what level of hiker you are can be an important tool when planning future hikes. This hiking level guide will help you plan hikes according to different hike ratings set by various websites like All Trails and Modern Hiker. What type of hiker are you – novice, moderate, advanced moderate, expert, or expert backpacker?"
        imageUrl="/images/hiker1.jpg"
      />
      <HikingSection
        number="02"
        subtitle="HIKING ESSENTIALS"
        title="Picking the right Hiking Gear!"
        description="The nice thing about beginning hiking is that you don’t really need any special gear; you can probably get away with things you already have. Let’s start with clothing. A typical mistake beginning hikers make is wearing jeans and regular clothes, which will get heavy and chafe when they get sweaty or wet."
        imageUrl="/images/hiker2.jpg"
        reverse 
      />
      <HikingSection
        number="03"
        subtitle="WHERE YOU GO IS THE KEY"
        title="Understand Your Map & Timing"
        description="To start, print out the hiking guide and map. If it’s raining, throw them in a Zip-Lock bag. Read over the guide, study the map, and have a good idea of what to expect. I like to know what my next landmark is as I hike. For example, if I read the guide and know that in a mile, I make a right turn at the junction."
        imageUrl="/images/hiker3.jpg"
      />
    </div>
  );
};

export default HomePage;
