import React, { useState } from "react";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import { Link, useLocation } from "react-router-dom";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import PushPinIcon from "@mui/icons-material/PushPin";
import Table2 from "../../components/widjet/Table2";
import { Alert } from "@mui/material";
import axios from "axios";
function TicketDetail() {
const [currentPage, setCurrentPage] = useState(1);
const location = useLocation();
const myObject = location.state;
const [isDisplayed, setIsDisplayed] = useState(false);
const [drawButtonVisible,setDrawButtonVisible] = useState(false)
const [isLoaded,setIsLoaded] = useState(false)
const [isBan,setIsBan] = useState(false)
const SetDrawButtonVisible =()=>{
    setDrawButtonVisible(!drawButtonVisible)
}
const {
data: SingleticketData,
isPending,
error,
} = useGetData(
`http://127.0.0.1:8000/ticket/purchased_ticket/${myObject.id}/?page=${currentPage}`
);

const {
    data: winerData,
    } = useGetData(
    `http://127.0.0.1:8000/product/single_ticket_winner/${myObject.id}`
    );

console.log(`SingleticketData`)
console.log(SingleticketData)
// http://127.0.0.1:8000/product/single_ticket_winner/8
const DrawWinner = ()=>{
    axios.post(`http://127.0.0.1:8000/product/select-winner/`,{
        "Ticket_id":myObject.id
    })
    .then(response=>{
        if(response.status==200){
            SetDrawButtonVisible()
            alert("drawed orrectly ")
        }
    })
    .catch((error)=>{
        if(error.name === 'AbortError'){
            SetDrawButtonVisible()
            alert('post aborted')
        }
        else{
            SetDrawButtonVisible()
            alert("something is wrong try again")
        }
    })
}

// if(myObject.Is_Ban){
//     setIsBan(true)
// }

const BanTicket = ()=>{
    axios.patch(`http://127.0.0.1:8000/product/BanUnban/${myObject.id}/`)
    .then(response=>{
        if(response.status==200){
            setIsBan(!isBan)
            setIsDisplayed(!isDisplayed)
            if(response.data ==="Banned"){
                setIsBan(true)
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



const [ImageUrl, setImageUrl] = useState(myObject.image_1);
const [activeImage, setActiveImage] = useState(1);
const HandleImageChange = (Image, index) => {
setImageUrl(Image);
setActiveImage(index);
};
let data = [
{ name: "Group A", value: parseInt(myObject.number_of_tickets) },
{ name: "Group B", value: SingleticketData?.count },
{
    name: "Group C",
    value: myObject.number_of_tickets - SingleticketData?.count,
},
];
const column = [
{ field: "id", headerName: "ID", width: 120 },
{ field: "User_id", headerName: "User ID", width: 120 },
{ field: "Ticket_id", headerName: "Ticket ID", width: 120 },
{ field: "Ticket_number", headerName: "Ticket number", width: 160 },
];

console.log(myObject.winner_drawn)
return (
<div className="flex relative">
    {drawButtonVisible && <div className="absolute font-bold top-10 text-center text-gray-600   right-52 bg-blue-100 w-60 p-2 rounded-md">
        <div className="font-bold text-2xl text-red-500 mb-5">
            Are you sure
        </div>
        <div>
            if you click yes this ticket will automaticaly draw 
        </div>
        <div className="flex justify-between mt-8">
            <div onClick={()=>DrawWinner()} className="hover:bg-red-500 duration-200 text-gray-800 py-2 px-5  cursor-pointer rounded-md hover:text-white">
                Yes
            </div>
            <div onClick={()=>SetDrawButtonVisible()} className=" border-2 border-red-500 p-2 cursor-pointer rounded-md text-red-500">
                Cancel
            </div>
        </div>
    </div>}
    <div className="flex-2 h-auto ">
    <SideBar />
    </div>
    <div className="flex-1">
    <NavBar />
   {SingleticketData&& <div className="flex justify-between mt-4 items-center mb-5">
        <div className="flex gap-5 text-gray-600 items-center mx-3">
            <Link to={`/seller/${myObject.seller.id}`}>
            <div className="flex items-center p-1 rounded-md gap-2 hover:bg-gray-100   duration-300  cursor-pointer">
                <div className="font-bold">
                <span className="text-sm font-thin">seller </span>
                {myObject.seller.user.name}
                </div>
                <div>
                <img
                    src={myObject.seller.image}
                    alt=""
                    className="w-10 h-10 rounded-full"
                />
                </div>
            </div>
            </Link>

            <div className="bg-blue-500 text-white  font-bold p-1 rounded-md">
            electronics
            </div>
        </div>


        {/* to daw the ticket  */}
    { ( (SingleticketData.count < myObject.number_of_tickets)&& !myObject.winner_drawn) && <div>
            {SingleticketData.count != 0&&<div onClick={()=>SetDrawButtonVisible()} className=" font-bold  border-2 text-xl cursor-pointer border-green-500 hover:text-white duration-300 text-gray-600 text-center mr-10 px-3 py-2 rounded-md hover:bg-green-500">
                Draw ticket 
            </div>}
        </div>}

        

    </div>}
    <div className="flex">
        <div className="">
        <div className="p-3 m-3 h-96 bg-blue-50">
            {SingleticketData && (
            <div className="relative ml-5 pt-5">
                <PieChart className="" width={250} height={225}>
                <Pie
                    dataKey="value"
                    startAngle={180}
                    endAngle={0}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#1281C6"
                    label
                />
                </PieChart>
                <div className="absolute text-2xl font-bold text-gray-800 w-full pl-4 bg-white rounded-md top-36">
                <div>
                    {myObject.number_of_tickets}
                    <span className="text-sm"> Total number of ticket</span>
                </div>
                <div>
                    {SingleticketData.count}{" "}
                    <span className="text-sm"> Ticketss are solled</span>
                </div>
                <div>
                    {myObject.number_of_tickets - SingleticketData?.count}{" "}
                    <span className="text-sm"> Tickets are remain</span>
                </div>
                </div>
            </div>
            )}

            <div className="text-3xl pl-4 mt-3  font-bold">
            <div>
                {myObject.price_of_ticket}{" "}
                <span className="text-sm font-thin">
                Birr price of one ticket
                </span>
            </div>
            </div>
            <div className="pl-5 mt-2 h-5 overflow-hidden font-semibold">{myObject.title}</div>
            <div className="flex justify-between w-full">
            {!myObject.Is_Ban && <div>
                {!isBan&& <div
                    onClick={() => setIsDisplayed(!isDisplayed)}
                    className="bg-red-500 p-1 mt-2 cursor-pointer text-white w-32 text-center rounded-sm ml-4">
                    Ban ticket
                </div>}
            </div>}
            {isDisplayed ? (
                <div onClick={()=>BanTicket()}
                className={`border-2 rounded-md border-red-600 p-1 mt-2 cursor-pointer text-red-600 w-28 text-center`}
                >
                Are you sure
                </div>
            ) : (
                ""
            )}
            </div>
        </div>
        </div>
        <div className="w-3/4 p-3 mr-3 ml-5 my-3  h-96 border-pink-200 border-2  rounded-md ">
        <img
            src={ImageUrl}
            alt="first image"
            className="min-w-full rounded-md object-cover h-full"
        />
        </div>
        <div className="w-1/5 h-90  flex flex-col  mr-3 ml-5 my-3 gap-5">
        <img
            src={myObject.image_1}
            onClick={() => HandleImageChange(myObject.image_1, 1)}
            alt="first image"
            className={
            activeImage === 1
                ? "ActiveImage DetaiImageCss "
                : "DetaiImageCss"
            }
        />
        <img
            src={myObject.image_2}
            onClick={() => HandleImageChange(myObject.image_2, 2)}
            alt="first image"
            className={
            activeImage === 2
                ? "ActiveImage DetaiImageCss "
                : "DetaiImageCss"
            }
        />
        <img
            src={myObject.image_3}
            onClick={() => HandleImageChange(myObject.image_3, 3)}
            alt="first image"
            className={
            activeImage === 3
                ? "ActiveImage DetaiImageCss "
                : "DetaiImageCss"
            }
        />
        </div>
    </div>
    <div className="flex text-white">
        <div className="w-1/2  mx-4 mt-4 mb-10">
            {SingleticketData && (
            <Table2 Data={SingleticketData} columns={column} pageSize={5} />
            )}
        </div>
        {winerData? <div className="w-1/2 ">
            {winerData.count!=0&&<div className="text-center bg-blue-500 px-3 pt-10 mb-20 mx-20 rounded-md text-2xl text-white mt-10 font-bold ">
            <div> 
            THE winner of this ticket is
            </div>
        <div>
                <div className="text-4xl font-bold mt-6">{winerData.results[0]?.winner?.name}</div>
                <div className="mt-6 text-6xl pb-5"><span className="text-2xl">Ticket No </span>{winerData.results[0].Ticket_number.Ticket_number}</div>
            </div>
            <div>

            </div>

        </div>}
        </div>:<div></div>}
    </div>
    </div>
</div>
);
}

export default TicketDetail;
