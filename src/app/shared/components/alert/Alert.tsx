import Alert from '@mui/material/Alert';

interface CustomAlertProps {
message: string,
}

export const CustomAlert =({message}: CustomAlertProps) => {

  return (
    <Alert severity="warning" color="error">
     {message}
    </Alert>
  );
}