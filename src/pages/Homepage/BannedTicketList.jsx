import React, { useState } from 'react'
import SideBar from '../../components/SideBar/SideBar'
import NavBar from '../../components/NavBar/NavBar'
import useGetData from '../../HttpService/GetHttpRequest/GetHttpRequest';
import { DataGrid } from '@mui/x-data-grid';
import PaginationButton from '../../components/widjet/PaginationButton';
import axios from 'axios';

function BannedTicketList() {
const [currentPage, setCurrentPage] = useState(1);
const [data,setData] = useState([])
const {
    data: ticketData,
    isPending,
    error,
    } = useGetData(
    `http://127.0.0.1:8000/product/BannedList/?page=${currentPage}`
    );
// if(ticketData && data.length == 0){
//     setData(ticketData.results)
// }
const BanTicket = (id)=>{
    axios.patch(`http://127.0.0.1:8000/product/BanUnban/${id}/`)
    .then(response=>{
        if(response.status==200){
            if(response.data ==="Banned"){
                setData(data.filter(data => data.seller.id != id));
                alert("Ticket banned ")
            }else{
                alert("Ticket un banned ")
            }

        }
    })
    .catch((error)=>{
        alert("something went wrong try again")
    })
}

const column = [
    { field: "id", headerName: "ID", width: 100 },
    {
    field: "name",
    headerName: "seller name",
    width: 180,
    renderCell: (params) => {
            return (
                <div className="flex  items-center">
                {params.row.seller.user.name}
                </div>
            );
        },
    },
    {
    field: "Phone_no",
    headerName: "seller phone no",
    width: 180,
    renderCell: (params) => {
            return (
                <div className="flex  items-center">
                {params.row.seller.user.Phone_no}
                </div>
            );
        },
    },
    {
    field: "title",
    headerName: "Ticket title",
    width: 250,
    renderCell: (params) => {
            return (
                <div className="flex  items-center">
                {params.row.title}
                </div>
            );
        },
    },
    
    {
        field: "prize_categories",
        headerName: "Catagory",
        width: 170,
        renderCell: (params) => {
                return (
                    <div className="flex  items-center">
                    {params.row.prize_categories}
                    </div>
                );
            },
        },

    {
        field: "price_of_ticket",
        headerName: "ticket price",
        width: 150,
        renderCell: (params) => {
                return (
                    <div className="flex  items-center">
                    {params.row.price_of_ticket}
                    </div>
                );
            },
        },

        {
        field: "this",
        headerName: "Action",
        width: 120,
        renderCell: (params) => {
                return (
                    <div onClick={()=>BanTicket(params.row.id)} className=" rounded-md cursor-pointer bg-yellow-500 text-center text-white font-bold m-2  items-center">
                        Un ban
                    </div>
            );
        },
    },
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
                Banned Ticket List
            </div>
            {ticketData  && <div>
                    <DataGrid
                    rows={ticketData.results}
                    columns={column}
                    pageSizeOptions={[1,2,3,4,5,6,7,8,9, 10]} 
                    initialState={{
                        pagination: {
                        paginationModel: { page: 0, pageSize: 10 },
                        },
                    }}
                /> 
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

export default BannedTicketList
