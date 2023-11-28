import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../../core/store/mainStore";
import { setToken, setUser } from "../../../shared/slices/userSlice";

export const ProfilePage = () => {
  const { user } = useAppSelector((state) => state.user);
  const { token } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const handleUserAdd = () => {
    dispatch(
      setUser({
        name: "John",
        surname: "Doe",
        email: "jhond@doe.com",
        isActive: true,
        phone: "123456789",
      })
    );
    dispatch(setToken("123456789"));
  };

  return (
    <Box>
      <Button onClick={handleUserAdd}>Add user</Button>
      {token ? (
        <Typography>{token}</Typography>
      ) : (
        <Typography>No token</Typography>
      )}
      {user.name ? (
        <>
          <Typography>{user.name}</Typography>
          <Typography>{user.surname}</Typography>
          <Typography>{user.email}</Typography>
          <Typography>{user.isActive.toString()}</Typography>
          <Typography>{user.phone}</Typography>
        </>
      ) : (
        <Typography variant="h3">No user</Typography>
      )}
    </Box>
  );
};
