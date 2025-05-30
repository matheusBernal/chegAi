import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path:'home',
}

export const homelayoutSlice = createSlice({
  name: 'homelayout',
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});


export const {setPath} = homelayoutSlice.actions;

export default homelayoutSlice.reducer;