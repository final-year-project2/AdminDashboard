import React, { useEffect, useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import {SetStaticData} from '../../Redux/DashboardSlice'
import Cards from '../../components/widjet/topCards'
import useGetData from '../../HttpService/GetHttpRequest/GetHttpRequest'
import TotalIndicatorcard from '../../components/widjet/TotalIndicatorcard'
import  TableView  from '../../components/widjet/Table1'
import Fotter from '../../components/Fotter/Fotter'
const Home = () => {
  const {count} = useSelector((state)=>state.counter)
  
  const Dispatch = useDispatch()
  const { data:staticsData,isPending,error } = useGetData('http://127.0.0.1:8000/adminOperation/user_number/')


  useEffect(() => {
    if (staticsData && staticsData.length!== 0) {
      Dispatch(SetStaticData({staticsData}));
    }
  }, [staticsData, Dispatch]);
  return (
    <div>
      <div className='flex'>
        <div  className='flex-2 h-auto '>
            <SideBar/>
        </div>

        <div className='flex-1 mb-10'>

            <NavBar/>

            {isPending && <div className='flex justify-center items-center'>Loading ...</div>}
            {error && <div className='flex justify-center items-center text-red-500'>{error}</div>}

            { staticsData && <div className='flex pt-2 gap-10 mx-10'>
              <Cards type="User" Number={`${staticsData.user_count}`} linkText="See all users" action="App user" unit = 'users'/>
              <Cards  type="Seller" Number={`${staticsData.seller_count}`} linkText="See all seller" action="ticket Seller" unit = 'sellers'/>
              <Cards type="Ticket" Number={`${staticsData.ticket_count}`} linkText="See all tickets" action="Ticket to sell" unit = 'tickets'/>
              <Cards type="Solled" Number={`${staticsData.solled_count}`} linkText="See solled ticket" action="solled ticket" unit = 'solled'/>
            </div>
            }
            <TotalIndicatorcard/>
            <div>
            <TableView/>
            </div>
            
        </div>
      </div>

    </div>
  )
}

export default Home

