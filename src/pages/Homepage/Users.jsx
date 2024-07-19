import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Table2 from "../../components/widjet/Table2";
import NavBar from "../../components/NavBar/NavBar";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import UseRActiveStafCard from "../../components/widjet/UseRActiveStafCard";
import PaginationButton from "../../components/widjet/PaginationButton";
function Users() {
const [currentPage, setCurrentPage] = useState(1);

const {
data: userData,
isPending,
error,
} = useGetData(`http://127.0.0.1:8000/user/list/?page=${currentPage}`);

const columns = [
{ field: "id", headerName: "ID", width: 160 },
{ field: "name", headerName: "name", width: 160 },
{ field: "Phone_no", headerName: "Phone_no", width: 160 },
{ field: "is_active", headerName: "is_active", width: 160 },
{ field: "is_staff", sortable: false, headerName: "is_staff", width: 160 },
];

return (
<div className="flex ">
    <div className="flex-2 h-auto ">
    <SideBar />
    </div>

    {isPending && (
    <div className="flex justify-center items-center">Loading...</div>
    )}

    {error && <div className="flex justify-center items-center">{error}</div>}

    {userData && (
    <div className="flex-1">
        <NavBar />

        <div className="flex justify-between text-center mt-5">
        <div>
            <div className="mx-5 my-2 font-bold text-2xl text-gray-600">
            users Information
            </div>
        </div>
        <div className="border-blue-600  duration-300 border-2 hover:cursor-pointer   rounded-md  flex justify-center items-center hover:bg-blue-600 hover:text-white  mx-5 font-bold text-blue-600 px-2">
            Add New User
        </div>
        </div>

        <UseRActiveStafCard />

        <div className="flex mt-3">
        <div className="w-4/5">
            <Table2 Data={userData} columns={columns} pageSize={10}/>
            <PaginationButton
            Data={userData}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            />
        </div>
        <div className="w-1/5 bg-blue-500 font-bold text-7xl flex justify-center items-center  text-white h-40 mt-3 mx-2 rounded-sm ">
            <div>
            {userData.count} <span className="text-sm ">Total</span>
            </div>
        </div>
        </div>
    </div>
    )}
</div>
);
}

export default Users;
