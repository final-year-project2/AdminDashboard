import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter'
import dashboardSlice from './DashboardSlice'
export const store = configureStore({
    reducer: {
        counter:counterReducer,
        dashboarData:dashboardSlice
    },
})