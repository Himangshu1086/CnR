import React from 'react'
import Carousel from './corousel'
export default function Project() {
  return (
    <>
        <div className='justify-center w-2/3 m-auto'>
           <div className='p-20'>
            <h1 className='heading'>Milestone Achieved</h1>
            <div className='flex justify-center items-center w-full'>
                <div className='relative bg-black rounded-lg h-auto'>
                  <Carousel/>
                    <img className='opacity-40 rounded-lg' src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80" />
                    <div className='absolute bottom-0 w-full h-full text-white '>
                        <div className='relative top-1/3 left-1/3 w-2/5'>
                            <p className='text-xl'>LE21MAC4-SCB Medical Expansion Project. PILING JOB 900 mm dia and 600 mm dia.</p><br/>
                            <p className='text-md font-light'>Under Larsen & Turbo Ltd. Building & Factory.(Via S-Gen Consortium Infra Pvt Ltd)</p>
                            </div>
                    </div>
                    <div className='flex'>
                    <div className='absolute top-1/3 text-2xl m-4 left-0'><i class="fa fa-arrow-left text-white"></i></div>
                    <div className='absolute top-1/3 text-2xl m-4 right-0'><i class="fa fa-arrow-right text-white"></i></div>
                    </div>
                </div>
            </div>
           </div>
        </div>  
    </>
  )
}
