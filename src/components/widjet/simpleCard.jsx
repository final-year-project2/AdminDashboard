import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
function SimpleCard({ Position, number, operation }) {
    return (
        <div className=" shadow-md p-2 rounded-sm  hover:shadow-gray-400 duration-500 flex-1 text-gray-500 font-bold ">
        <div className="flex   justify-between items-center">
            <div>{Position}</div>

            <div className="text-4xl py-2 pl-1 text-blue-600  ">
            <SupervisorAccountIcon />
            </div>
        </div>

        <div className="text-4xl flex justify-center items-end  py-2 pl-1 text-blue-600  ">
            {number}
            <span className="text-sm font-light pl-2">Person</span>
        </div>

        <div className="flex  justify-between  text-green-500">
            <span>{operation}</span>

            <div className="text-green-400 text-sm flex items-center">
            <AccessTimeIcon className="p-1" />
            </div>
        </div>
        </div>
    );
}

export default SimpleCard;
