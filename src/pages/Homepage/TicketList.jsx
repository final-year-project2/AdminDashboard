import React from "react";
import SideBar from "../../components/SideBar/SideBar";
function TicketList() {
  return (
    <div className="flex">
      <div className="flex-2 h-auto ">
        <SideBar />
      </div>
      <div className="flex-1">main page</div>
    </div>
  );
}

export default TicketList;