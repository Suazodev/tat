import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../core/store/mainStore";
import { DesktopMenu } from "./components/DesktopMenu";
import { MobileMenu } from "./components/MobileMenu";
import { UserMenu } from "./components/UserMenu";

export const Appbar = () => {
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const { token, user } = useAppSelector((state) => state.user);

  
  const handleOpenNavMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  
  const handleNavigate = (path: string) => {
    if (anchorElNav) handleCloseNavMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            onClick={() => handleNavigate("/")}
            variant="h6"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
             <img
              src="/public/tattoo_logo/Logo_Studio_Tattoo.png"
              alt="Logo"
              style={{ width: 70, height: 70 }}
            />
          </Typography>
          <MobileMenu
            token={token}
            anchorElNav={anchorElNav}
            handleCloseNavMenu={handleCloseNavMenu}
            handleOpenNavMenu={handleOpenNavMenu}
            handleNavigate={handleNavigate}
          />
          <Typography
            onClick={() => handleNavigate("/")}
            variant="h5"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
              cursor: "pointer",
            }}
          >
             <img
              src="/public/tattoo_logo/Logo_Studio_Tattoo.png"
              alt="Logo"
              style={{ width: 70, height: 70 }}
            />
          </Typography>
          <DesktopMenu token={token} handleNavigate={handleNavigate} />
          <UserMenu token={token} userRole={user?.role ?? ""} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
