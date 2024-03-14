import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   user: null,
   isAuthentificated: false,
   loading: false 
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    setUser(state, action) {
        state.user = action.payload;
      },
        setIsAuthentificated(state, action) {
            state.isAuthentificated = action.payload;
        },
        setLoading(state, action) {
          state.loading = action.payload;
        }
  },
});

export default userSlice.reducer;

export const {setIsAuthentificated, setUser, setLoading} = userSlice.actions;