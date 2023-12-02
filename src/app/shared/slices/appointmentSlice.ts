import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IAppointment } from "../interfaces/appointment.interface";
import { appointmentModel } from "../model/appointment.model";

interface AppointmentSlice {
  appointments: IAppointment[];
}

const initialState: AppointmentSlice = {
  appointments: [appointmentModel],
};

const counterSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setAppointments: (state, action: PayloadAction<IAppointment[]>) => {
      console.log(action);
      state.appointments = action.payload;
    },
  },
});

export const { setAppointments } = counterSlice.actions;

export default counterSlice.reducer;
