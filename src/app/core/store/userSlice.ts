import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IUser } from "../../shared/interfaces/user.interface";
import { userModel } from "../../shared/model/user.model";

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
  },
});

export const { setUser, setToken } = counterSlice.actions;

export default counterSlice.reducer;
