import { Box, Button } from "@mui/material";

interface DesktopMenuProps {
  pages: {
    title: string;
    path: string;
  }[];
  handleNavigate: (path: string) => void;
}

export const DesktopMenu = ({
  pages,
  handleNavigate,
}: DesktopMenuProps) => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      {pages.map((page) => (
        <Button
          key={page.title}
          onClick={() => handleNavigate(page.path)}
          sx={{ my: 2, color: "white", display: "block" }}
        >
          {page.title}
        </Button>
      ))}
    </Box>
  );
};
