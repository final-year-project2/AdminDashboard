import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import Table2 from '../../components/widjet/Table2';
import useGetData from '../../HttpService/GetHttpRequest/GetHttpRequest';
import PaginationButton from '../../components/widjet/PaginationButton';

function DrawedTicket() {
    const [currentPage, setCurrentPage] = useState(1);
const {
    data: ticketData,
    isPending,
    error,
    } = useGetData(
        `http://127.0.0.1:8000/product/drawed_ticket_list/?page=${currentPage}`
    );
console.log(ticketData)
const column = [
    { field: "id", headerName: "ID", width: 100 },
    {
        field: "seller",
        headerName: "seller",
        width: 120,
        renderCell: (params) => {
            return (
                <div className="flex  items-center">
                    {params.row.seller.user.name}
                </div>
            );
            },
        },
        {
            field: "image_1",
            headerName: "Photo",
            width: 120,
            renderCell: (params) => {
                return (
                    <div className="flex  items-center">
                    <img
                        src={params.row.image_1}
                        alt="Description"
                        className="w-10 object-cover mt-1 h-10 rounded-full "
                    />
                    </div>
                );
                },
        },

        { field: "title", headerName: "title", width: 250 },
        { field: "number_of_tickets", headerName: "number_of_tickets", width: 150 },
        { field: "prize_categories", headerName: "prize_categories", width: 200 },
        { field: "price_of_ticket", headerName: "price_of_ticket", width: 150 },
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
                Drawn Ticket List
            </div>
           { ticketData && <div className='mt-5'>
                <Table2 Data ={ticketData} columns = {column} pageSize = {10}/>
                <PaginationButton
                Data={ticketData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
            </div>}
        </div> 
      </div>
    </div>
)
}

export default DrawedTicket
