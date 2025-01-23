import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  MenuItem,
  Box,
} from "@mui/material";
import { deleteTodo, toggleTodo, updateTodo } from "../slices/todoSlice";
import EditIcon from "@mui/icons-material/Edit";

const TodoList = () => {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();
  

  const [open, setOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);
  const [updatedTitle, setUpdatedTitle] = useState("");
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updatedPriority, setUpdatedPriority] = useState("");
  const [updatedDueDate, setUpdatedDueDate] = useState("");
  const [updatedCategory, setUpdatedCategory] = useState("");
  const [error, setError] = useState("");

  const handleDelete = (todoId) => {
    if (window.confirm("Do you want to delete this todo?")) {
      dispatch(deleteTodo(todoId));
    }
  };

  const handleCompleted = (todoId) => {
    dispatch(toggleTodo(todoId));
  };

  const handleEdit = (todo) => {
    setCurrentTodo(todo);
    setUpdatedTitle(todo.title);
    setUpdatedDescription(todo.description || "");
    setUpdatedPriority(todo.priority || "Medium");
    setUpdatedDueDate(todo.dueDate || "");
    setUpdatedCategory(todo.category || "General");
    setError("");
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setCurrentTodo(null);
    setUpdatedTitle("");
    setUpdatedDescription("");
    setUpdatedPriority("");
    setUpdatedDueDate("");
    setUpdatedCategory("");
    setError("");
  };

  const handleSave = () => {
    if (!updatedTitle.trim()) {
      setError("Title cannot be empty.");
      return;
    }

    if (currentTodo) {
      if(confirm('you Want to save the Changes')){
      dispatch(
        updateTodo({
          id: currentTodo.id,
          title: updatedTitle.trim(),
          description: updatedDescription.trim(),
          priority: updatedPriority,
          dueDate: updatedDueDate,
          category: updatedCategory,
        })
      );}
      handleClose();
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", padding: 4 }}>
      {todos.length === 0 ? (
        <Typography variant="h6" sx={{ textAlign: "center", marginTop: 4 }}>
          No tasks added yet!
        </Typography>
      ) : (
        <Box
          display="grid"
          gridTemplateColumns={{
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
          }}
          gap={3}
        >
          {todos.map((todo) => (
            <Card key={todo.id} sx={{ boxShadow: 5 }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                  {todo.title}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  {todo.description || "No additional details available."}
                </Typography>
                <Typography variant="body2" sx={{ marginTop: 1 }}>
                  <strong>Priority:</strong> {todo.priority}
                </Typography>
                <Typography variant="body2">
                  <strong>Due Date:</strong> {todo.dueDate || "None"}
                </Typography>
                <Typography variant="body2">
                  <strong>Category:</strong> {todo.category}
                </Typography>
                <Typography sx={{ color: todo.completed ? "green" : "red", fontWeight: "bold" }}>
                  {todo.completed ? "Completed" : "Not Completed"}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => handleCompleted(todo.id)} variant="outlined" color={todo.completed ? "success" : "warning"}>
                  {todo.completed ? "Mark Incomplete" : "Mark Completed"}
                </Button>
                <Button size="small" onClick={() => handleDelete(todo.id)} variant="outlined" color="error">
                  Delete
                </Button>
                <Button size="small" onClick={() => handleEdit(todo)} variant="outlined">
                  <EditIcon />
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Todo</DialogTitle>
        <DialogContent>
          <TextField
            label="Title"
            fullWidth
            value={updatedTitle}
            onChange={(e) => setUpdatedTitle(e.target.value)}
            margin="normal"
            error={!!error}
            helperText={error}
          />
          <TextField
            label="Description"
            fullWidth
            value={updatedDescription}
            onChange={(e) => setUpdatedDescription(e.target.value)}
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            label="Priority"
            select
            fullWidth
            value={updatedPriority}
            onChange={(e) => setUpdatedPriority(e.target.value)}
            margin="normal"
          >
            <MenuItem value="Low">Low</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="High">High</MenuItem>
          </TextField>
          <TextField
            label="Due Date"
            fullWidth
            value={updatedDueDate}
            onChange={(e) => setUpdatedDueDate(e.target.value)}
            type="date"
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            label="Category"
            fullWidth
            value={updatedCategory}
            onChange={(e) => setUpdatedCategory(e.target.value)}
            margin="normal"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TodoList;
