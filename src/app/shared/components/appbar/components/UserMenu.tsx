import {
  Avatar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { MouseEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../../../core/store/mainStore";
import { cleanUser } from "../../../slices/userSlice";

interface UserMenuProps {
  token: string;
  userRole: string;
}

export const UserMenu = ({ token, userRole }: UserMenuProps) => {
  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const dispatch = useAppDispatch();

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleNavigate = (path: string) => {
    if (anchorElUser) handleCloseUserMenu();
    setTimeout(() => {
      navigate(path);
    }, 300);
  };

  const handleLogout = () => {
    if (anchorElUser) handleCloseUserMenu();
    dispatch(cleanUser());
    navigate("/");
  };

  return (
    <Box sx={{ flexGrow: 0 }}>
      <Tooltip title="Open settings">
        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
      >
        {token && userRole === "admin" && (
          <MenuItem onClick={() => handleNavigate("/admin")}>
            <Typography textAlign="center">Admin</Typography>
          </MenuItem>
        )}
        {token ? (
          <Box>
            <MenuItem onClick={() => handleNavigate("/profile")}>
              <Typography textAlign="center">Profile</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <Typography textAlign="center">Logout</Typography>
            </MenuItem>
          </Box>
        ) : (
          <MenuItem onClick={() => handleNavigate("/auth")}>
            <Typography textAlign="center">Auth</Typography>
          </MenuItem>
        )}
      </Menu>
    </Box>
  );
};
