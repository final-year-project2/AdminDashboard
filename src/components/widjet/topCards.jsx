import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
function Cards({type,Number,linkText,action}) {
    return (
        <div className='flex justify-around shadow-md p-2 rounded-sm  hover:shadow-gray-400 duration-500 flex-1 text-gray-500 font-bold '>
            <div className='flex flex-col justify-between'>
                <div>
                    {type}
                </div>

                <div className='text-4xl py-2 pl-1 text-gray-600  '>
                    {Number}
                </div>

                <div className='hover:text-blue-400 duration-500'>
                    <Link to={''} >{linkText}</Link>
                    <hr />
                </div>
            </div>

            <div className='flex flex-col justify-between items-end text-green-400'>
                <div>
                    <ArrowForwardIcon/>
                    <span>{action}</span>
                </div>
                <div className='text-yellow-500 text-sm flex items-center'>
                    <AccessTimeIcon className='p-1'/>
                    <span>Current info</span>
                </div>
            </div>
        </div>
)
}

export default Cards
