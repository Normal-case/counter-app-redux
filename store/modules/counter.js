import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

const conuterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => { state.value += 1 },
        decrement: state => { state.value -= 1 },
    }
})

export const { increment, decrement } = conuterSlice.actions
export default conuterSlice.reducer