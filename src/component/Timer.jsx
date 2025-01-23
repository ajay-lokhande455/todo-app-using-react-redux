// src/components/Timer.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";
import { startTimer, stopTimer, resetTimer, incrementTimer } from "../slices/timerSlice";

const Timer = ({ todoId }) => {
  const dispatch = useDispatch();
  const timer = useSelector((state) => state.timer.timers[todoId]?.time || 0);
  const isRunning = useSelector((state) => state.timer.timers[todoId]?.isRunning || false);

  useEffect(() => {
    let timerInterval;
    if (isRunning) {
      timerInterval = setInterval(() => {
        dispatch(incrementTimer({ todoId }));
      }, 1000); // Increment every second
    } else {
      clearInterval(timerInterval);
    }

    return () => clearInterval(timerInterval);
  }, [isRunning, dispatch, todoId]);

  const handleStartStop = () => {
    if (isRunning) {
      dispatch(stopTimer({ todoId }));
    } else {
      dispatch(startTimer({ todoId }));
    }
  };

  const handleReset = () => {
    dispatch(resetTimer({ todoId }));
  };

  return (
    <Box sx={{ display: "flex", alignItems: "center", margin: 2 }}>
      <Typography variant="body2">Time: {timer}s</Typography>
      <Button
        variant="contained"
        color={isRunning ? "secondary" : "primary"}
        onClick={handleStartStop}
        sx={{ marginLeft: 2 }}
      >
        {isRunning ? "Stop" : "Start"}
      </Button>
      <Button variant="outlined" color="error" onClick={handleReset} sx={{ marginLeft: 1 }}>
        Reset
      </Button>
    </Box>
  );
};

export default Timer;
