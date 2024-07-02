import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../Redux/counter'
import Cards from '../../components/widjet/topCards'
const Home = () => {
  const {count} = useSelector((state)=>state.counter)
  const Dispatch = useDispatch()
  return (
    <div className='flex'>
        <div  className='flex-2'>
            <SideBar/>
        </div>

        <div className='flex-1'>
            <NavBar/>
            <div className='flex pt-2 gap-10 mx-10'>
              <Cards type="User" Number='720' linkText="See all users" action="App user"/>
              <Cards  type="Seller" Number='120' linkText="See all seller" action="ticket Seller"/>
              <Cards type="Ticket" Number='550' linkText="See all tickets" action="Ticket to sell"/>
              <Cards type="Solled" Number='170' linkText="See solled ticket" action="solled ticket"/>
            </div>






            {/* home page and {count} <br />
            <button onClick={()=>Dispatch(increment())}>Incriment</button><br />
            <button onClick={()=>Dispatch(decrement())}>decriment</button><br />
            <button onClick={()=>Dispatch(incrementByAmount(10))}>Incriment by two</button><br /> */}
        </div>
    </div>
  )
}

export default Home

