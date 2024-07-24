import React from "react";
import {BarChart,Bar,Rectangle,XAxis,YAxis,CartesianGrid,Tooltip,Legend} from "recharts";
import SimpleCard from "./simpleCard";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";

function UseRActiveStafCard() {
const {
data: userStatusData,
isPending,
error,
} = useGetData(`http://127.0.0.1:8000/adminOperation/UserStausCount/`);

var data = [];

if (userStatusData) {
data = [
    {
    name: "Activated user",
    Total: userStatusData.Total_user,
    user: userStatusData.Active_user,
    },
    {
    name: "InActivared user",
    Total: userStatusData.Total_user,
    user: userStatusData.Not_Active_user,
    },
    {
    name: "Staf user",
    Total: userStatusData.staff_user,
    user: userStatusData.staff_user,
    },
    { name: "Super Admin", Total: userStatusData.staff_user, user: 1 },
];
}

return (
<>
    {userStatusData && (
    <div className="flex mx-5 my-5 items-center justify-center">
        <div className="w-2/5 ">
        <div className="flex gap-2">
            <SimpleCard
            Position="Super admin"
            number={1}
            operation="Super Adminstrator"
            />
            <SimpleCard
            Position="staf member"
            number={userStatusData.staff_user}
            operation="Administrator"
            />
        </div>
        <div className="flex gap-2 mb-8">
            <SimpleCard
            Position="Active user"
            number={userStatusData.Active_user}
            operation="App user"
            />
            <SimpleCard
            Position="In active user"
            number={userStatusData.Not_Active_user}
            operation="App user"
            />
        </div>
        </div>
        <div className=" w-3/5 ml-10">
        <BarChart
            width={600}
            height={320}
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
            dataKey="user"
            fill="#8884d8"
            activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
            <Bar
            dataKey="Total"
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
            />
        </BarChart>
        </div>
    </div>
    )}
</>
);
}

export default UseRActiveStafCard;
