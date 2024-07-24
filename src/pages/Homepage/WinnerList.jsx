import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import useGetData from '../../HttpService/GetHttpRequest/GetHttpRequest';
import Table2 from '../../components/widjet/Table2';
import PaginationButton from '../../components/widjet/PaginationButton';
import axios from 'axios';

function WinnerList() {
    // http://127.0.0.1:8000/product/WinnerList/
    const [currentPage, setCurrentPage] = useState(1);
    const {
        data: winnerData,
        isPending,
        error,
        } = useGetData(
            ` http://127.0.0.1:8000/product/WinnerList/?page=${currentPage}`
        );





const HandleSend = ()=>{
    
}

const column = [
    { field: "id", headerName: "ID", width: 150 },
    {
        field: "winner",
        headerName: "winner",
        width: 200,
        renderCell: (params) => {
            return (
                <div className="flex  items-center">
                    {params.row.winner.name}
                </div>
            );
            },
        },
        {
        field: "Phone_no",
        headerName: "winner phone_no",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="flex  items-center">
                    {params.row.winner.Phone_no}
                </div>
            );
            },
        },
        {
            field: "Ticket_id",
            headerName: "Dwawend ticket id",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="flex  items-center">
                        {params.row.Ticket_number.Ticket_id}
                    </div>
                );
                },
        },
        
        {
            field: "Ticket_number",
            headerName: "Drawed Number",
            width: 170,
            renderCell: (params) => {
                return (
                    <div className="flex  items-center">
                        {params.row.Ticket_number.Ticket_number}
                    </div>
                );
                },
        },
        
        
        {
            field: "drawn_at",
            headerName: "draw at",
            width: 150,
            renderCell: (params) => {
                return (
                    <div className="flex  items-center">
                        {params.row.drawn_at}
                    </div>
                );
                },
        }
    ]

return (
<div className="flex text-gray-600">
        <div className="flex-2 h-auto ">
            <SideBar />
        </div>
        <div className="flex-1">
        <NavBar />
        <div className='ml-10 mt-5'>
            <div className='text-2xl font-bold'>
                Winner List
            </div>
            { winnerData && <div className='mt-5'>
                <div className='w-9/10'><Table2 Data ={winnerData} columns = {column} pageSize = {10}/></div>
                <PaginationButton
                Data={winnerData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            </div>}
        </div> 
        </div>
</div>
)
}

export default WinnerList
