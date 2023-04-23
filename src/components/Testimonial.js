import React, { useState } from 'react'
import Card from './Card';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";

function Testimonial (props) {
    let profiles = props.profiles;

    const[index,setIndex] = useState(0);

    function leftHandler(){
        if(index - 1 < 0){
            setIndex(profiles.length - 1)
        }

        else{
            setIndex(index - 1);
        }
    }


    function rightHandler(){
        if(index + 1 > profiles.length -1){
            setIndex(0)
        }

        else{
            setIndex(index + 1);
        }
    }


    function randomHandler(){
        const randomIndex =  Math.floor(Math.random() * profiles.length);
        setIndex(randomIndex);
    }



  return (
    <div className='w-[50%] mx-auto text-center items-end bg-slate-600 rounded-xl shadow-xl max-[1024px]:w-[100%]'>

        <div className=''>
            <Card profile={profiles[index]}></Card>
        </div>

        <div className='flex flex-col gap-6 mx-auto w-[50%]'>
            <div className='flex flex-row justify-around'>

                <button onClick={leftHandler}> <BsFillCaretLeftFill></BsFillCaretLeftFill> </button>
                <button onClick={rightHandler}> <BsFillCaretRightFill></BsFillCaretRightFill> </button>

            </div>

            <div className='bg-blue-300 hover:bg-blue-600 hover:text-white font-semibold w-[50%] ml-24 max-[760px]:ml-16 mb-5 rounded-2xl  hover:shadow-2xl'> 
                
            <button  onClick={randomHandler}>Random Show</button>
            </div>
        </div>
        
    </div>
  )
}

export default Testimonial