import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  userInfo: null,
  status: "idle",
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserInfo(state, action) {
      state.userInfo = action.payload;
    }
  },
 
});

export default userSlice.reducer;
export const { setUserInfo } = userSlice.actions;


export const getUserStatus = (state) => state.user.status;
export const getUserError = (state) => state.user.error;