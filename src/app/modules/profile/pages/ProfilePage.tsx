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
        phone: 0,
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
          <Typography>{user.isActive?.toString()}</Typography>
          <Typography>{user.phone}</Typography>
        </>
      ) : (
        <Typography variant="h3">No user</Typography>
      )}

{/* import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function FormPropsTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Disabled"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-helperText"
          label="Helper text"
          defaultValue="Default Value"
          helperText="Some important text"
        />
      </div>
      </div> */}
    {/* </Box> */}
  {/* ); */}
{/* } */}
    </Box>
  );
};
