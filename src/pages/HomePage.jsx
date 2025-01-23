import React from "react";
import { Box, Container, Typography, Button, Grid, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        color: "text.primary", // Theme-aware text color
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "80vh",
          backgroundColor: theme.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(0, 0, 0, 0.6)",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "bold", marginBottom: 3 }}>
          Welcome to Your Todo App
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: "normal", marginBottom: 2 }}>
          Stay organized, manage your tasks efficiently, and meet your goals with ease.
        </Typography>

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={() => navigate("/add-todo")}
          sx={{ fontWeight: "bold", padding: "12px 30px", fontSize: "1.1rem" }}
        >
          Start Organizing
        </Button>

        {/* Grid container for features */}
        <Grid
          container
          spacing={2}
          sx={{
            marginTop: 5,
            textAlign: "left",
            maxWidth: "80%",
          }}
        >
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">✔️ Easy Task Management</Typography>
            <Typography variant="body2" color="text.secondary">
              Add, edit, and delete tasks effortlessly to stay on top of your responsibilities.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6">✔️ Track Due Dates & Priorities</Typography>
            <Typography variant="body2" color="text.secondary">
              Set due dates, and prioritize tasks to meet deadlines without stress.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="text.primary">
              ✔️ Stay Motivated with Progress
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Mark tasks as completed and track your progress over time.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" color="text.primary">
              ✔️ Stay Organized Everywhere
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Access your tasks from anywhere on any device, making organization easy and seamless.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HomePage;
