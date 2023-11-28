import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../interfaces/user.interface";
import { userModel } from "../model/user.model";

interface UserSlice {
  user: IUser;
  token: string;
}

const initialState: UserSlice = {
  user: userModel,
  token: "",
};

const counterSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    cleanUser: (state) => {
      state.user = userModel;
      state.token = "";
    }
  },
});

export const { setUser, setToken, cleanUser } = counterSlice.actions;

export default counterSlice.reducer;
