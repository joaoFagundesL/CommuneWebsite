import React from 'react'

  function Form() {
    return(
      <div className='grid gap-2 mt-4'>
        <input type="text" className='py-4 px-6 outline-none border border-zinc-200 rounded-md' required placeholder='Enter your e-mail address' />
        <button className='py-4 bg-button text-white font-semibold'>Join Waitlist</button>
      </div>

    );
  }

export default Form;