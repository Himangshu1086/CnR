import React from 'react'
import Carousel from './corousel'

export default function Project() {

  return (
    <>
        <div className='justify-center w-2/3 m-auto'>
           <div className='p-20'>
            <h1 className='heading'>Milestone Achieved</h1>
            <div className='flex justify-center items-center w-full'>
                <div className='relative bg-black rounded-lg h-auto overflow-hidden'>
                  <Carousel/>
                </div>
            </div>
           </div>
        </div>  
    </>
  )
}
