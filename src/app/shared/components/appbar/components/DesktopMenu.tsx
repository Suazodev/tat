import { Box, Button } from "@mui/material";

interface DesktopMenuProps {
  token: string;
  handleNavigate: (path: string) => void;
}

export const DesktopMenu = ({
  token,
  handleNavigate,
}: DesktopMenuProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {token && (
        <Button
          onClick={() => handleNavigate("/appointments")}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          Appointments
        </Button>
      )}
      <Button
        onClick={() => handleNavigate("/about")}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        About
      </Button>
    </Box>
  );
};
