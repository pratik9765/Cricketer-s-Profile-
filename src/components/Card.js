import React from 'react';

function Card (props){
    let profile =props.profile;
  return (
    <div>
        <div className='flex flex-row gap-10 p-4 pt-5 mt-5 max-[760px]:mb-8'>
            {/* image */}
            <div>
                <img className=' w-[600px] h-[300px] max-[760px]:w-[400px] max-[760px]:h-[200px] rounded-full' src={profile.image}  alt="" />
            </div>

            {/* info */}
            <div className='flex flex-col gap-6 '>
                <p className='text-3xl font-bold'>{profile.name}</p>
                <span className='text-xl font-semibold opacity-80'>{profile.job}</span>
                <p className='opacity-90'>{profile.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card