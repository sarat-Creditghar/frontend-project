import React from 'react'

const Welcomecard = ({welcomeData}) => {
  return (
     
     
    <div className='flex p-7'>
        <div className='w-2/3'>
           <h1 className='text-4xl font-bold'>{welcomeData.greeting}</h1>
           <h1 className='text-4xl'>{welcomeData.userName}</h1>
           <p className=' text-sm mt-3 mb-6'>
             {welcomeData.description}
           </p>
           <button className='btn '>{welcomeData.buttonText}</button>
        </div>
        <div className='img-part w-1/3'>
               {/*Img part*/}
        </div>
    </div>
   
  )
}

export default Welcomecard