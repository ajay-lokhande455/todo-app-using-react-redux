import React, { useState } from "react";
import { Box, Typography, TextField, Button, IconButton, Grid, Link } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import EmailIcon from "@mui/icons-material/Email";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailSend = () => {
    const mailtoLink = `mailto:lokhandeajay455@email.com?subject=Contact from Todo App&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  const handleWhatsAppRedirect = () => {
    const whatsappMessage = "Hi, I need help with the Todo App!";
    const phoneNumber = "7499385295"; // Replace with your WhatsApp phone number
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappLink, "_blank");
  };

  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        color: "primary.contrastText",
        padding: "20px",
        marginTop: "auto",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Contact Us
          </Typography>
          <Typography variant="body1">Email: support@example.com</Typography>
          <Typography variant="body1">Phone: +91 7499385295</Typography>
          <Box mt={2}>
            <IconButton
              color="inherit"
              aria-label="WhatsApp"
              onClick={handleWhatsAppRedirect}
            >
              <WhatsAppIcon />
            </IconButton>
            <Typography variant="caption">Chat on WhatsApp</Typography>
          </Box>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom>
            Send Us a Message
          </Typography>
          <TextField
            label="Your Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{
              marginBottom: "10px",
              "& .MuiInputBase-root": {
                backgroundColor: "background.paper", // Adapts to theme
                color: "text.primary", // Adapts to theme text color
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.primary", // Border adapts to theme
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.secondary", // Hover border color
              },
              "& .MuiInputLabel-root": {
                color: "text.secondary", // Label adapts to theme
              },
            }}
          />
          <TextField
            label="Your Message"
            variant="outlined"
            multiline
            rows={3}
            fullWidth
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{
              marginBottom: "10px",
              "& .MuiInputBase-root": {
                backgroundColor: "background.paper", // Adapts to theme
                color: "text.primary", // Adapts to theme text color
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.primary", // Border adapts to theme
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "text.secondary", // Hover border color
              },
              "& .MuiInputLabel-root": {
                color: "text.secondary", // Label adapts to theme
              },
            }}
          />
          <Button
            variant="contained"
            color="secondary"
            startIcon={<EmailIcon />}
            onClick={handleEmailSend}
          >
            Send Email
          </Button>
        </Grid>
      </Grid>

      <Box
        sx={{
          textAlign: "center",
          marginTop: "20px",
          borderTop: "1px solid rgba(255, 255, 255, 0.3)",
          paddingTop: "10px",
        }}
      >
        <Typography variant="body2">© 2025 Todo App by Ajay Lokahnde. All rights reserved.</Typography>
        <Link
          href="https://example.com/privacy-policy"
          underline="hover"
          sx={{ color: "secondary.light", marginLeft: 1 }}
        >
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
