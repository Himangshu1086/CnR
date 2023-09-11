import React from 'react'

export default function Address() {
  return (
    <>
      <div className='justify-center m-auto w-2/3'>
        <div className='p-20 flex flex-col'>
          <h1 className='heading'>Our Office</h1>
          <div className='flex justify-center pt-10'>
              <div className='pt-3 pr-5 w-3/5'>
                <h1 className='text-3xl font-bold pb-3'>Registered Address</h1>
                <p className='text-xl'>Satbankura, Paschim Medinipur, West Bengal, India, 721253</p>
                <div className='mt-3 text-xl flex flex-col'>
                <p><span><b>Email:</b> </span><br/>
                <a href = "mailto: info@cnrinfracon.com">info@cnrinfracon.com</a>
                </p>
                <p className='pt-2 text-left'><b>Contact: </b></p>
                <p className='text-left'><span>+91 <u>6295473035</u></span><br/><span>+91 <u>9233353182</u></span></p>
                </div>
              </div>

              <div className="relative text-right w-full h-96"><div className="overflow-hidden bg-none w-full h-96">
                <iframe className="h-96" width="100%" frameborder="0"  marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Satbankura, Paschim Medinipur, 721253&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                {/* <a href="https://gachanymph.com/">Gacha Nymph Download</a> */}
                </div>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
