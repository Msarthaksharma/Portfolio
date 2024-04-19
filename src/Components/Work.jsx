import React from 'react';
import WorkItems from '../Components/WorkItems';
import zigatoPreview from '../assets/preview/zigatoPreview.png'
import coinmarket from '../assets/preview/coinMarketPreview.png';
import travelsite from '../assets/preview/travelsitePreview.png';
import defi from '../assets/preview/defiPreview.png';
import info from '../info/info';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-full bg-[--primary-color] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Work</p>
          <p className='py-6'>Check out some of my recent work</p>
        </div>
        {/* container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {info.map((item, index) => (
            <WorkItems key={index} img={item.img} title={item.title} live={item.live} git={item.git} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
