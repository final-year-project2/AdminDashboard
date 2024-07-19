import React from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/SideBar/SideBar";
import NavBar from "../../components/NavBar/NavBar";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import SellerDetailCard from "../../components/widjet/SellerDetailCard";
function SelerDetail() {
  const { id } = useParams();
  const {
    data: sellerData,
    isPending,
    error,
  } = useGetData(`http://127.0.0.1:8000/adminOperation/sellerDetail/${id}`);
  console.log(sellerData);
  const {
    data: TicketData,
  } = useGetData(` http://127.0.0.1:8000/product/ticket_list/${id}`);
  console.log(TicketData);
  
  return (
    <div className="flex ">
      <div className="flex-2 h-auto ">
        <SideBar />
      </div>

      <div className="flex-1">
        <NavBar />
        {sellerData && (
          <div className="flex">
            <div className="w-1/3">
              <SellerDetailCard sellerData={sellerData} />
            </div>
            <div className="w-2/3">
            <div className="text-gray-600 text-3xl font-bold mt-2">His Tickets</div>
              <div className="flex flex-wrap gap-2">
                <div className="w-64 h-72 bg-gray-200">
                      abebe
                </div>
                <div className="w-64 h-72 bg-gray-200">
                      abebe
                </div>
                <div className="w-64 h-72 bg-gray-200">
                      abebe
                </div>
                <div className="w-64 h-72 bg-gray-200">
                      abebe
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default SelerDetail;
