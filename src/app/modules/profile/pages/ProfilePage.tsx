import { Box, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../core/store/mainStore";
import { findSession } from "../../auth/services/profile.services";
import { setAppointment } from "../../../shared/slices/appointmentSlice";
import { useEffect } from "react";


export const ProfilePage = () => {
  const { user } = useAppSelector((state) => state.user);
  const {token} = useAppSelector((state) => state.user)
  // const { appointment } = useAppSelector((state) => state.appointment);
  const dispatch = useAppDispatch();

  useEffect(() => {
  const handleAppointmentList = async () => {
    try {
      const result = await findSession(token);
      console.log(result); // LLega la cita correctamente
      dispatch(setAppointment(result.data ));
      console.log(result.data); // LLega undefined
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
          <Typography>Perfil:</Typography>
          <Typography>{user.name}</Typography>
          <Typography>{user.surname}</Typography>
          <Typography>{user.email}</Typography>
          <Typography>{user.phone}</Typography>
          {/* {appointment.map((appointment) => (
            <div key={appointment.id}>
              <Typography>{appointment.startTime}</Typography>
              <Typography>{appointment.endTime}</Typography>
              <Typography>{appointment.intervention}</Typography>
              <Typography>{appointment.tattooArtist}</Typography>
            </div>
          ))} */}
        </>
      ) : (
        <Typography variant="h3">No user</Typography>
      )}
    </Box>
  );
};
