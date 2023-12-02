import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../core/store/mainStore";


export const ProfilePage = () => {
  const { user } = useAppSelector((state) => state.user);
  const {token} = useAppSelector((state) => state.user)



  return (
    <Box>
      {token ? (
        <>
          <Typography>Perfil:</Typography>
          <Typography>{user.name}</Typography>
          <Typography>{user.surname}</Typography>
          <Typography>{user.email}</Typography>
          <Typography>{user.phone}</Typography>
      
        </>
      ) : (
        <Typography variant="h3">No user</Typography>
      )}
    </Box>
  );
};
