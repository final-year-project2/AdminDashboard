import React from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
function PaginationButton({ Data, setCurrentPage, currentPage }) {
const changePage = (value, type) => {
    if (currentPage < value && type == "up") {
    setCurrentPage((currentPage) => currentPage + 1);
    } else if (currentPage > 1 && type == "down") {
    setCurrentPage((currentPage) => currentPage - 1);
    }
};

    return (
        <>
        <div className="flex gap-2 justify-between mb-10 mt-5  mr-20">
            <div className="pl-5 text-blue-600">{Data.count} User Record</div>
            <div className="flex">
            <button
                onClick={() => changePage(Math.ceil(Data.count / 10), "down")}
                className={`${
                currentPage == 1 ? "text-gray-300" : "text-blue-600"
                }`}
            >
                <ArrowBackIosIcon />
            </button>
            <div>{currentPage}</div>
            <button
                onClick={() => changePage(Math.ceil(Data.count / 10), "up")}
                className={`${
                currentPage >= Math.ceil(Data.count / 10)
                    ? "text-gray-300"
                    : "text-blue-600"
                }`}
            >
                <ArrowForwardIosIcon />
            </button>
            </div>
        </div>
        </>
    );
}

export default PaginationButton;
