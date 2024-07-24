import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import SellerDetailCard from "../../components/widjet/SellerDetailCard";
import TicketCrd from "../../components/widjet/TicketCrd";
function SelerDetail() {
  const { id } = useParams();
  const {
    data: sellerData,
    isPending,
    error,
  } = useGetData(`http://127.0.0.1:8000/adminOperation/sellerDetail/${id}`);
  console.log(sellerData);
  const { data: TicketData } = useGetData(
    ` http://127.0.0.1:8000/product/ticket_list/${id}`
  );

  return (
    <div className="flex ">
      <div className="flex-2 h-auto ">
        <SideBar />
      </div>

      <div className="flex-1 items-center justify-center w-full h-full">
        <NavBar />
        {sellerData ? (
          <div className="flex">
            <div className="w-1/3">
              <SellerDetailCard sellerData={sellerData} />
            </div>
            <div className="w-2/3">
              <div className="text-gray-600 text-3xl ml-5 font-bold mt-2">
                His Tickets
              </div>
              {TicketData && TicketData.results.length > 0 ? (
                <div className="flex flex-wrap gap-2">
                  {TicketData.results.map((result) => (
                      <TicketCrd result={result} />
                  ))}
                </div>
              ) : (
                <div className="text-gray-600 ml-5">
                  ther is no ticket list 
                </div>
              )}
            </div>
          </div>
        ):"Lodding ..."}
      </div>
    </div>
  );
}

export default SelerDetail;
