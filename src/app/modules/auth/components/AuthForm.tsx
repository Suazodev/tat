import { Grid, TextField } from "@mui/material";

interface AuthFormProps {
  isRegistering: boolean;
}
export const AuthForm = ({isRegistering}: AuthFormProps) => {
  const textFieldGenerator = (
    id: string,
    type: string,
    label: string,
    autoComplete: string
  ) => (
    <TextField
      required
      fullWidth
      id={id}
      type={type}
      label={label.toUpperCase()}
      name={id}
      autoComplete={autoComplete}
    />
  );

  return (
    <Grid container spacing={2}>
      {isRegistering && (
        <>
          <Grid item xs={12} sm={6}>
            {textFieldGenerator("firstName", "text", "First Name", "given-name")}
          </Grid>
          <Grid item xs={12} sm={6}>
            {textFieldGenerator("lastName", "text","Last Name", "family-name")}
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        {textFieldGenerator("email", "email", "Email Address", "email")}
      </Grid>
      <Grid item xs={12}>
        {textFieldGenerator("password", "password", "Password", "new-password")}
      </Grid>
    </Grid>
  );
};
