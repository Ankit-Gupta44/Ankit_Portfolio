import React from 'react'

function Skill({item}) {

  // <div>
  //         <a href="https://www.linkedin.com/in/ankit-gupta-a06635227/" target="_blank" rel="noopener noreferrer" className="text-xl text-white cursor-pointer font-bold ml-2">
  //           <EnvelopeIcon className="h-8 w-8 animate-pulse" />
  //           {/* <span className="text-slate-400 font-bold">Anand</span> */}
  //         </a>
  //       </div> 

  return (
    <div className=''>
        <p className='text-white text-left'>{item?.type}</p>
        <div className='w-full bg-gray-700 rounded-full h-2.5'>
            <div style={{width:item?.progress}} className='bg-green-600 h-2.5 rounded-full'>

            </div>
        </div>
    </div>

  )
}

export default Skill