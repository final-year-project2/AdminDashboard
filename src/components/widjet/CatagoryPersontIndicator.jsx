import React from 'react'
import { CircularProgressbar } from 'react-circular-progressbar'

function CatagoryPersontIndicator({persent,number,name}) {
return (
<div className='text-center w-40 p-3 bg-gray-100 rounded-md'>
    <div className="h-24 flex justify-center">
        <div className='w-24 mb-3'>
        <CircularProgressbar
            text={`${persent}%`}
            strokeWidth={8}
            value={persent}
        />
        </div>
    </div>
    
    <div>
        {number} {name} Tickets
    </div>
</div>
)
}

export default CatagoryPersontIndicator
