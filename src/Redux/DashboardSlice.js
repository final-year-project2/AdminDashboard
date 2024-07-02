import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    StaticsData: {},
}
export const dashboardSlice = createSlice({
    name: 'StaticsData',
    initialState,
    reducers: {
    SetStaticData: (state, action) => {
        state.StaticsData = action.payload
    },
},
})
export const { SetStaticData } = dashboardSlice.actions

export default dashboardSlice.reducer