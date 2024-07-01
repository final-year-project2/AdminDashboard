import React from 'react'
import PersonPinIcon from '@mui/icons-material/PersonPin';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
function NavBar() {
  return (
    <div className='flex justify-between h-10 items-center'>
        <div>
            
        </div>
        <div className=' flex gap-4 pr-4 items-center'>
            <div>
                <PersonPinIcon  className='text-blue-500 text-6xl '/>
                <span className='text-gray-500 font-bold  '>Administer</span>
            </div>
            <AspectRatioIcon/>
        </div>
    </div>
  )
}

export default NavBar
