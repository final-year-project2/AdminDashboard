import React from 'react'

function TicketCrd({result}) {
return (
    <div className='p-2 w-60 hover:shadow-gray-400 hover:shadow-md duration-300 rounded-md h-auto  bg-gray-100 text-gray-600'>
        <img src={result.image_1} alt="image one" className='rounded-md'/>
        <div className=' bg-white mt-2 p-2'>
            <div className='font-bold  text-xl '>{result.prize_categories}</div>
            <div>{result.number_of_tickets} Numer of ticket </div>
            <div className='text-2xl font-bold text-yellow-500'>{result.price_of_ticket} <span className='text-sm'>Birr</span></div>
            <div className='font-bold'>{result.title}</div>
        </div>
    </div>
)
}

export default TicketCrd
