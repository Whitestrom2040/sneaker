import { createSlice } from '@reduxjs/toolkit'

const sneakersSlice: any = createSlice({
    name: 'Sneakers',
    initialState: {
        value: [],
    },
    reducers: {
        showdata: (state, action) => {
            state.value = action.payload
        },

        deleteRightData: (state) => { state.value = [] }
    },
})


export const { showdata, deleteRightData } = sneakersSlice.actions

export default sneakersSlice.reducer