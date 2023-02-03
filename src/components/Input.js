 import React from "react";

 function Input() {
   return(
    <input type="text" className='py-4 px-6 outline-none border border-zinc-200 rounded-md md:col-span-2' 
    required placeholder='Enter your e-mail address' />
   );
 }

 export default Input;