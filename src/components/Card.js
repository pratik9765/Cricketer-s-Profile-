import React from 'react';

function Card (props){
    let profile =props.profile;
  return (
    <div>
        <div className='flex flex-row gap-10  max-[550px]:gap-4 p-4 pt-5 mt-2 max-[760px]:mb-8  max-[550px]:mb-2 max-[550px]:flex-col justify-center '>
            {/* image */}
            <div className='mx-auto'>
                <img className=' w-[600px] h-[300px] max-[760px]:w-[400px] max-[760px]:h-[200px]  max-[550px]:w-[140px] max-[550px]:h-[140px] rounded-full' src={profile.image}  alt="" />
            </div>

            {/* info */}
            <div className='flex flex-col gap-6  max-[550px]:gap-2 '>
                <p className='text-3xl font-bold max-[760px]:text-xl'>{profile.name}</p>
                <span className='text-xl font-semibold opacity-80 max-[760px]:text-lg'>{profile.job}</span>
                <p className='opacity-90 max-[760px]:text-sm'>{profile.text}</p>
            </div>
        </div>
    </div>
  )
}

export default Card