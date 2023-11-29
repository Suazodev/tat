import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAppointment } from "../interfaces/appointment.interface";
import { appointmentModel } from "../model/appointment.model";

interface AppointmentSlice {
  appointment: IAppointment;
}

const initialState: AppointmentSlice = {
  appointment: appointmentModel,
};

const counterSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointment: (state, action: PayloadAction<IAppointment>) => {
      state.appointment = action.payload;
    },
  },
});

export const { setAppointment } = counterSlice.actions;

export default counterSlice.reducer;
