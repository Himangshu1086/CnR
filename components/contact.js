import React from 'react'

function Contact() {

  return (
      <div>
  <div className='form-box'>
      <div className='contact-form-photo'>
          {/* <div>
              <h1>Ask Me Anything</h1>
          </div> */}
          <img src="https://images.unsplash.com/photo-1562141989-a764b5668046?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1985&q=80" />
      </div>

      <div className='contact-form-inputs'>
          <form className='form text-white'>
          <h1 className='text-white text-3xl'>Contact Me</h1>
          <label className='pl-3 pt-2'>Name </label>
          <input type="text" placeholder='Name' className='rounded-sm text-black'/>
          <label className='pl-3'>Email </label>
          <input type="email" placeholder='Email' className='rounded-sm text-black'/>
          <label className='pl-3'>Query </label>
          <textarea placeholder="What's you query..." className='rounded-sm text-black'></textarea>
          <button className='rounded-sm'>Send</button>
          </form>
      </div>

  </div>
      </div>
  )
}

export default Contact