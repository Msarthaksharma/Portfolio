import React from 'react';

const WorkItems = (props) => {
  return (
    <div>    
      <div style={{backgroundImage:`url(${props.img})`}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
        {/* hover */}
        <div className='opacity-0 group-hover:opacity-100'>
          <span className='text-2xl font-bold text-white tracking-wider'>{props.title}</span>
          <div className='pt-8 text-center'>
            <a href={props.live}>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
            </a>
            <a href={props.git}>
              <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
            </a>
          </div> 
        </div>
      </div>
    </div>
  )
}

export default WorkItems;
