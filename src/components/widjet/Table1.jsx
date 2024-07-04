import React, { useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import useGetData from '../../HttpService/GetHttpRequest/GetHttpRequest';
import DownloadDoneIcon from '@mui/icons-material/DownloadDone';
import { useSelector } from 'react-redux';
const TableView = () => {
  const {transaction_count} = useSelector((state)=>state.dashboarData)
  const total_page = Math.ceil(transaction_count/10)
  const [currentPage,setCurrentPage] = useState(1)
  const { data:TransactionData,isPending,error } = useGetData(`http://127.0.0.1:8000/user/RetiveAllTransaction?page=${currentPage}`)

  

  const changePage = (value)=>{
    if(currentPage<total_page && value == 'up'){
      setCurrentPage((currentPage)=>currentPage+1)
    }else if(currentPage>1 && value == 'down'){
      setCurrentPage((currentPage)=>currentPage-1)
    }
  }
  return (
    <div className='m-10'>
      <div className='mb-5 font-bold text-xl'>
        Transactions {transaction_count}
        <hr />
      </div>
      {TransactionData && <div className='w-full h-auto'>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell><div className='text-green-600 font-bold'>Amount</div></TableCell>
                  <TableCell align="right"><div className='text-green-600 font-bold'>Transaction_date</div></TableCell>
                  <TableCell align="right"><div className='text-green-600 font-bold'>Transaction_type</div></TableCell>
                  <TableCell align="right"><div className='text-green-600 font-bold'>Wallet_balance</div></TableCell>
                  <TableCell align="right"><div className='text-green-600 font-bold'>Is Complete</div></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {TransactionData.map((TransactionData,index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">{TransactionData.amount}</TableCell>
                    <TableCell align="right">{TransactionData.transaction_date}</TableCell>
                    <TableCell align="right">{TransactionData.transaction_type}</TableCell>
                    <TableCell align="right">{TransactionData.wallet_balance}</TableCell>
                    <TableCell align="right">
                      <div>
                        <DownloadDoneIcon color='' className='text-green-600'/>
                        <span className='text-gray-500 font-thin text-sm'>Completed</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
      </div>}
      <div>
        <button onClick={()=>changePage('up')}>
              {currentPage}
        </button>
      </div>
    </div>
  )
}

export default TableView
