import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import { Link, useNavigate } from "react-router-dom";
import Table2 from "../../components/widjet/Table2";
import PaginationButton from "../../components/widjet/PaginationButton";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CircularProgressbar } from "react-circular-progressbar";
import CatagoryPersontIndicator from "../../components/widjet/CatagoryPersontIndicator";
function TicketList() {
  const [currentPage, setCurrentPage] = useState(1);
  let navigate = useNavigate();
  const {
    data: ticketData,
    isPending,
    error,
  } = useGetData(
    `http://127.0.0.1:8000/product/ticket_list/?page=${currentPage}`
  );
  const { data: ticketCatagoryStatics } = useGetData(
    `http://127.0.0.1:8000/adminOperation/TicketCatagorystatics/`
  );
console.log('data')
  console.log(ticketData);

  const column = [
    { field: "id", headerName: "Ticket ID", width: 50 },
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
    {
      field: "name",
      headerName: "Seler",
      width: 150,
      renderCell: (params) => {
        return <div>{params.row.seller.user.name}</div>;
      },
    },
    { field: "number_of_tickets", headerName: "No of thicket", width: 150 },
    { field: "price_of_ticket", headerName: "thicket price", width: 120 },
    { field: "prize_categories", headerName: "Catagory", width: 120 },
    { field: "title", headerName: "title", width: 260 },
   
    { field: "winner_drawn", headerName: "Is_Drawed", width: 120 ,
      renderCell: (params) => {
        return (
          <div className="text-blue-700 cursor-pointer   font-bold">
            {params.row.winner_drawn ? <div className="bg-green-400 m-2 rounded-md text-center text-white font-bold">
                Yes
            </div>:
              <div className=" rounded-md text-center text-red-500 font-bold">
                Pending...
              </div>}
          </div>
        );
      },},
    {
      field: "Detail",
      headerName: "Detail",
      width: 140,
      sortable: false,
      renderCell: (params) => {
        return (
          <div
            className="text-blue-700 cursor-pointer   font-bold"
            onClick={() =>
              navigate(`/ticket_list/${params.row.id}`, { state: params.row })
            }
          >
            detail
          </div>
        );
      },
    },
  ];

  const data = [
    {
      name: "Electronics",
      TotalNo: ticketCatagoryStatics?.electronics,
    },
    {
      name: "home",
      TotalNo: ticketCatagoryStatics?.home,
    },
    {
      name: "car",
      TotalNo: ticketCatagoryStatics?.car,
    },
    {
      name: "other",
      TotalNo: ticketCatagoryStatics?.other,
    },
  ];

  return (
    <div className="flex">
      <div className="flex-2 h-auto ">
        <SideBar />
      </div>
      <div className="flex-1">
        <NavBar />
        <div className="ml-32 text-xl font-bold mb-5">Ticket List</div>
        {ticketCatagoryStatics && (
          <div className="flex justify-around mb-10">
            <div className="w-2/5  h-96 mt-5">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="TotalNo"
                    fill="#8884d8"
                    activeBar={<Rectangle fill="pink" stroke="blue" />}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="text-gray-600 w-1/3  mt-2 font-bold">
              <div className="mb-2">Number of tickets in each catagory</div>
              <div className="flex gap-12 mb-3  ">
                  
                    <CatagoryPersontIndicator
                      persent={
                        (ticketCatagoryStatics.electronics /ticketCatagoryStatics.total) *
                        100
                      } number={ticketCatagoryStatics.electronics} name={"electronics"}
                    />
                    <CatagoryPersontIndicator
                      persent={
                        (ticketCatagoryStatics.home / ticketCatagoryStatics.total) *
                        100
                      } number={ticketCatagoryStatics.home} name={"home"}
                    />
              </div>
              <div  className="flex gap-12 mb-3  ">
                  <CatagoryPersontIndicator
                    persent={
                      (ticketCatagoryStatics.car / ticketCatagoryStatics.total) *
                      100
                    }  number={ticketCatagoryStatics.car} name={"car"}
                  />
                  <CatagoryPersontIndicator
                    persent={
                      (ticketCatagoryStatics.other /
                        ticketCatagoryStatics.total) *
                      100
                    }  number={ticketCatagoryStatics.other} name={"other"}
                  />
              </div>
            </div>
          </div>
        )}
        {ticketData && (
          <div className="w-9/10">
            <Table2 Data={ticketData} columns={column} pageSize={10} />
            <PaginationButton
              Data={ticketData}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        )}
      </div>
    </div>
  );
}
export default TicketList;
