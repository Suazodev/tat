import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { AuthForm } from "../components/AuthForm";
import { useAuth } from "../hooks/useAuth";

export const AuthPage = () => {
  const { handleSubmit, isRegistering, setIsRegistering } = useAuth();

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h4"
          style={{
            color: "#ad9859",
          }}>
          {isRegistering ? "Register" : "Login"}
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <AuthForm isRegistering={isRegistering} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            {isRegistering ? "Register" : "Login"}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={() => setIsRegistering(!isRegistering)}>
                {isRegistering
                  ? "Already have an account? Sign in"
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
