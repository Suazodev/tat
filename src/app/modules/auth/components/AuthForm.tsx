import { Grid, TextField } from "@mui/material";

interface AuthFormProps {
  isRegistering: boolean;
}
export const AuthForm = ({isRegistering}: AuthFormProps) => {
  const textFieldGenerator = (
    id: string,
    label: string,
    autoComplete: string
  ) => (
    <TextField
      required
      fullWidth
      id={id}
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
            {textFieldGenerator("firstName", "First Name", "given-name")}
          </Grid>
          <Grid item xs={12} sm={6}>
            {textFieldGenerator("lastName", "Last Name", "family-name")}
          </Grid>
        </>
      )}
      <Grid item xs={12}>
        {textFieldGenerator("email", "Email Address", "email")}
      </Grid>
      <Grid item xs={12}>
        {textFieldGenerator("password", "Password", "new-password")}
      </Grid>
    </Grid>
  );
};
