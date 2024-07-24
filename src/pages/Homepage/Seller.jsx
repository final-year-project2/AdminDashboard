import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import Table2 from "../../components/widjet/Table2";
import SellIcon from "@mui/icons-material/Sell";
import { Link } from "react-router-dom";
import PaginationButton from "../../components/widjet/PaginationButton";
function Seller() {
const [currentPage, setCurrentPage] = useState(1);

const {
data: sellerData,
isPending,
error,
} = useGetData(
`http://127.0.0.1:8000/adminOperation/sellerList/?page=${currentPage}`
);

const columns = [
{ field: "id", headerName: "ID", width: 100 },
{
    field: "user",
    headerName: "user",
    width: 160,
    renderCell: (params) => {
    return (
        <>
        <div>{params.row.user.name}</div>
        </>
    );
    },
},

{
    field: "image",
    headerName: "Photo",
    width: 160,
    renderCell: (params) => {
    return (
        <div className="flex  items-center">
        <img
            src={params.row.image}
            alt="Description"
            className="w-10 object-cover mt-1 h-10 rounded-full "
        />
        </div>
    );
    },
},

{
    field: "successful_campaigns",
    headerName: "successful_campaigns",
    width: 100,
},
{ field: "date_created", headerName: "date_created", width: 240 },
{ field: "rating", sortable: false, headerName: "rating", width: 160 },
{
    field: "Detail",
    headerName: "Detail",
    width: 70,
    sortable: false,
    renderCell: (params) => {
    return (
        <div className="text-blue-700 cursor-pointer   font-bold">
        <Link to={`/seller/${params.row.id}`}>detail</Link>
        </div>
    );
    },
},
];

return (
<div className="flex">
    <div className="flex-2  h-screen">
    <SideBar />
    </div>
    <div className="flex-1">
    <NavBar />
    <div className="mx-5 my-3 flex justify-between text-xl text-blue-600 font-bold">
        <div>Seller information</div>
        <div>
        <SellIcon fontSize="large" />
        </div>
    </div>
    {sellerData && (
        <div className="">
        <Table2 Data={sellerData} columns={columns} pageSize={10} />
        <PaginationButton
            Data={sellerData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
        />
        </div>)}
    </div>
</div>
);
}

export default Seller;
