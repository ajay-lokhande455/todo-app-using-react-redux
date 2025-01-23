import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Brightness4Icon from "@mui/icons-material/Brightness4"; // Dark theme icon
import Brightness7Icon from "@mui/icons-material/Brightness7"; // Light theme icon

const Header = ({ toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!isDrawerOpen);
  };

  const menuItems = [
    { label: "Home", path: "/" },
    { label: "Add Todo", path: "/add-todo" },
    { label: "View Todos", path: "/todos" },
  ];

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "primary.main",
          color: "primary.contrastText",
          paddingX: 3,
          boxShadow: "none",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              fontSize: "1.8rem",
              letterSpacing: 1.5,
            }}
          >
            Todo App
          </Typography>

          {/* Hide buttons on smaller screens */}
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {menuItems.map((item) => (
              <Button
                key={item.label}
                sx={{
                  color: "primary.contrastText",
                  "&:hover": {
                    backgroundColor: "secondary.main",
                  },
                }}
                onClick={() => navigate(item.path)}
              >
                {item.label}
              </Button>
            ))}
          </Box>

          {/* Theme Toggle Button */}
          <IconButton
            color="inherit"
            onClick={toggleTheme}
            sx={{
              "&:hover": {
                backgroundColor: "secondary.main",
              },
            }}
          >
            {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>

          {/* Burger Menu Icon (for mobile) */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={handleDrawerToggle}
            sx={{
              display: { xs: "flex", md: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer for Mobile Menu */}
      <Drawer anchor="right" open={isDrawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 250,
            backgroundColor: "primary.main",
            height: "100%",
            color: "primary.contrastText",
          }}
          role="presentation"
          onClick={handleDrawerToggle}
          onKeyDown={handleDrawerToggle}
        >
          <List>
            {menuItems.map((item) => (
              <ListItem
                button
                key={item.label}
                onClick={() => navigate(item.path)}
              >
                <ListItemText
                  primary={item.label}
                  primaryTypographyProps={{
                    sx: {
                      fontWeight: "bold",
                      color: "primary.contrastText",
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
