import React, { PureComponent } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import {
AreaChart,
Area,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
ResponsiveContainer,
} from "recharts";
function TotalIndicatorcard() {
const {
data: TotalTransactionData,
isPending,
error,
} = useGetData("http://127.0.0.1:8000/adminOperation/Total_trunsaction/");
console.log(TotalTransactionData);
const target = 100;
var data = [];
if (TotalTransactionData && TotalTransactionData.length != 0) {
data = [
    {
    name: "day 1 to 7",
    Amount: TotalTransactionData.start_of_1_7,
    pv: 2400,
    amt: 160,
    },

    {
    name: "day 8 to 14",
    Amount: 60,
    pv: 2400,
    amt: 170,
    },
    {
    name: "day 15 to 21",
    Amount: TotalTransactionData.start_of_15_21,
    pv: 2400,
    amt: 2400,
    },
    {
    name: "day 22 to 28",
    Amount: 50,
    pv: 2400,
    amt: 160,
    },

    {
    name: "day 29 to 30",
    Amount: 100,
    pv: 2400,
    amt: 190,
    },
];
}

return (
<div className="m-10">
    {TotalTransactionData && (
    <div className="flex    text-gray-500">
        <div className="flex-none w-1/3  mr-5 p-3 shadow-md rounded-sm ">
        <div className="flex justify-between font-semibold">
            <div>Total Revenue</div>
            <div>
            <KeyboardDoubleArrowDownIcon
                fontSize="25"
                className="text-green-400 "
            />
            </div>
        </div>

        <div className="flex justify-center">
            <div className="w-32 pt-5">
            <CircularProgressbar
                text={`${
                (TotalTransactionData.total_Transaction / 100) * 100
                }%`}
                strokeWidth={5}
                value={70}
            />
            </div>
        </div>

        <div className=" text-center pb-5 px-3 ">
            <p className="pb-2">Total Sales made Untill Know</p>
            <div className="text-4xl font-semibold pb-5">
            {TotalTransactionData.total_Transaction}
            <span className="font-thin text-base">Birr</span>
            </div>
            <p>
            Previes transactions processing last payment may not be include
            </p>
        </div>

        <div className="flex justify-between text-center px-3">
            <div>
            <div className="font-bold">gained</div>
            <div className="text-xl font-bold">
                <ArrowRightAltIcon fontSize="" />
                {TotalTransactionData.total_Transaction}
                <span className="font-thin text-base">Birr</span>
            </div>
            </div>
            <div>
            <div className="font-bold">Traget</div>
            <div className="text-xl font-bold">
                <ArrowRightAltIcon fontSize="" />
                {target}
                <span className="font-thin text-base">Birr</span>
            </div>
            </div>
            <div>
            <div className="font-bold">Remain</div>
            <div className="text-xl font-bold">
                <ArrowRightAltIcon fontSize="" />
                {target - TotalTransactionData.total_Transaction}{" "}
                <span className="font-thin text-base">Birr</span>
            </div>
            </div>
        </div>
        </div>

        <div className="flex-none w-2/3">
        <ResponsiveContainer width="100%" height="100%">
            <AreaChart
            width={500}
            height={400}
            data={data}
            margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
            }}
            >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="Amount"
                stroke="#8884d8"
                fill="#8884d8"
            />
            </AreaChart>
        </ResponsiveContainer>
        </div>
    </div>
    )}
    <div></div>
</div>
);
}

export default TotalIndicatorcard;
