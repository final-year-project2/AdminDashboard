import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    StaticsData: {},
    transaction_count:0
}
export const dashboardSlice = createSlice({
    name: 'StaticsData',
    initialState,
    reducers: {
    SetStaticData: (state, action) => {
        state.StaticsData = action.payload
        state.transaction_count=action.payload.staticsData.transaction_count
    },
},
})
export const { SetStaticData } = dashboardSlice.actions

export default dashboardSlice.reducer