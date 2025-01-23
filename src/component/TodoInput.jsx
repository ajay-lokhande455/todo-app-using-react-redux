import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addTodo } from "../slices/todoSlice";
import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Typography,
} from "@mui/material";

const TodoInput = () => {
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleAddTodo = () => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      title: text.trim(),
      description: description.trim(),
      priority,
      dueDate: dueDate || null,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    if(confirm('You want to add to do')){
      dispatch(addTodo(newTodo));
    }
    setText("");
    setDescription("");
    setPriority("Medium");
    setDueDate("");
  };

  const handleShowAllTodo = () => {
    navigate("/todos");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 2,
        backgroundColor: "background.default", // Dynamic background based on theme
      }}
    >
      <Box
        sx={{
          background: "rgba(255, 255, 255, 0.2)", 
          padding: 4,
          borderRadius: 2,
          width: "100%",
          maxWidth: 500,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" align="center" gutterBottom sx={{ fontWeight: "bold" }}>
          Add ToDo
        </Typography>
        <TextField
          label="Task Title"
          variant="outlined"
          value={text}
          onChange={(e) => setText(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Task Description"
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={3}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Priority</InputLabel>
          <Select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            label="Priority"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </Select>
        </FormControl>
        <TextField
          label="Due Date"
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Box mt={3} display="flex" gap={2} justifyContent="center">
          <Button
            onClick={handleAddTodo}
            variant="contained"
            color="primary"
            fullWidth
            sx={{ padding: "12px" }}
          >
            Add ToDo
          </Button>
          <Button
            onClick={handleShowAllTodo}
            variant="outlined"
            color="primary"
            fullWidth
            sx={{ padding: "12px" }}
          >
            Show All ToDo
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoInput;
