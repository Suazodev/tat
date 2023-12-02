import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../core/store/mainStore";
import { setAppointments } from "../../../shared/slices/appointmentSlice";
import { Box, Typography } from "@mui/material";
import { getAppointments } from "../../auth/services/profile.services";

export const AppointmentsPage = () => {
  const {token} = useAppSelector((state) => state.user)

  const { appointments } = useAppSelector((state) => state.appointment);
  const dispatch = useAppDispatch();

  useEffect(() => {
  const handleAppointmentList = async () => {
    try {
      const result = await getAppointments(token);
      console.log(result, "soy el clg de la funcion ");
      dispatch(setAppointments(result as any));
    } catch (error) {
      console.error(error);
    }
  };
  handleAppointmentList();
}, [dispatch]);
  return (
    <Box>
    {token ? (
      <>
        {appointments.map((appointment, index) => (
            <div key={index}>
            <Typography>{appointment.startTime}</Typography>
            <Typography>{appointment.endTime}</Typography>
            <Typography>{appointment.intervention}</Typography>
            <Typography>{appointment.tattooArtist}</Typography>
          </div>
        ))}
      </>
    ) : (
      <Typography variant="h3">No user</Typography>
    )}
  </Box>
  )
   
}