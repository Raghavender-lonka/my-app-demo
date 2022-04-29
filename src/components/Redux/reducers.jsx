import { createSlice } from "@reduxjs/toolkit"

const counterInitialState = {
  currentCounter: 0,
  randomValue: 1,
}

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment: (state) => {
      state.currentCounter = state.currentCounter + 1
      //   state.randomValue = Math.random()
    },
    decrement: (state) => {
      state.currentCounter = state.currentCounter - 1
      //   state.randomValue = Math.random()
    },
    incrementByValue: (state, action) => {
      state.currentCounter = state.currentCounter + action.payload
      //   state.randomValue = Math.random()
    },
  },
})

const { increment, decrement, incrementByValue } = counterSlice.actions

const selectCounter = (state) => state.counter.currentCounter

export { increment, decrement, incrementByValue, selectCounter }

export default counterSlice.reducer
