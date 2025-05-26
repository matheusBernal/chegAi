import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    path:'home',
}

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    setPath: (state, action) => {
      state.path = action.payload;
    },
  },
});


export const {setPath} = homepageSlice.actions;

export default homepageSlice.reducer