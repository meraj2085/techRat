import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: null,
  },
  isLoading: false,
  products: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setPcBuild: (state, action) => {
      const existing = state.products.find(
        (product) => product._id === action.payload._id
      );
      const existingIndex = state.products.findIndex(
        (product) => product.category === action.payload.category
      );
      if (existing) {
        return;
      } else if (existingIndex !== -1) {
        state.products.splice(existingIndex, 1, action.payload);
      } else {
        state.products.push(action.payload);
      }
    },
  },
});

export const { setUser, setLoading, setPcBuild } = userSlice.actions;

export default userSlice.reducer;
