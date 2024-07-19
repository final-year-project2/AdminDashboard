import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import useGetData from "../../HttpService/GetHttpRequest/GetHttpRequest";
import DownloadDoneIcon from "@mui/icons-material/DownloadDone";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const TableView = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: TransactionData,
    isPending,
    error,
  } = useGetData(
    `http://127.0.0.1:8000/user/RetiveAllTransaction?page=${currentPage}`
  );

  const changePage = (value, type) => {
    if (currentPage < value && type == "up") {
      setCurrentPage((currentPage) => currentPage + 1);
    } else if (currentPage > 1 && type == "down") {
      setCurrentPage((currentPage) => currentPage - 1);
    }
  };
  return (
    <div className="m-10">
      <div className="mb-5 font-bold text-xl">
        Transactions
        <hr />
      </div>
      {TransactionData && (
        <div className="w-full h-auto">
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell align="left">
                    <div className="text-green-600 font-bold">No</div>
                  </TableCell>
                  <TableCell>
                    <div className="text-green-600 font-bold">Amount</div>
                  </TableCell>
                  <TableCell align="left">
                    <div className="text-green-600 font-bold">
                      Transaction_date
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div className="text-green-600 font-bold">
                      Transaction_type
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div className="text-green-600 font-bold">
                      Wallet_balance
                    </div>
                  </TableCell>
                  <TableCell align="left">
                    <div className="text-green-600 font-bold">Is Complete</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TransactionData.results.map((TransactionData, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="left">{index + 1}</TableCell>
                    <TableCell component="th" scope="row">
                      {TransactionData.amount}
                    </TableCell>
                    <TableCell align="left">
                      {TransactionData.transaction_date}
                    </TableCell>
                    <TableCell align="left">
                      {TransactionData.transaction_type}
                    </TableCell>
                    <TableCell align="left">
                      {TransactionData.wallet_balance}{" "}
                      <span className="text-xs font-thin">Birr</span>
                    </TableCell>
                    <TableCell align="left">
                      <div>
                        <DownloadDoneIcon color="" className="text-green-600" />
                        <span className="text-gray-500 font-thin text-sm">
                          Completed
                        </span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <div className="flex gap-2 justify-between  mt-7 mr-10">
            <div>{TransactionData.count} Record of transaction</div>
            <div className="flex">
              <button
                onClick={() =>
                  changePage(Math.ceil(TransactionData.count / 10), "down")
                }
                className={`${
                  currentPage == 1 ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <ArrowBackIosIcon />
              </button>
              <div>{currentPage}</div>
              <button
                onClick={() =>
                  changePage(Math.ceil(TransactionData.count / 10), "up")
                }
                className={`${
                  currentPage >= Math.ceil(TransactionData.count / 10)
                    ? "text-gray-300"
                    : "text-gray-600"
                }`}
              >
                <ArrowForwardIosIcon />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TableView;
