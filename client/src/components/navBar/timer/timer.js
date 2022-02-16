import React, { useState } from "react";
import { io } from "socket.io-client";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    display: "block",
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

const Timer = () => {
  const classes = useStyles();
  const [time, setTime] = useState(5);
  const [open, setOpen] = React.useState(false);

  const socket = io.connect("http://localhost:4000");

  const changeInterval = (e) => {
    const value = e.target.value;
    socket.emit("start");

    socket.emit("interval", value * 1000);
    setTime(value);
  };

  const selectClose = () => {
    setOpen(false);
  };

  const selectOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button className={classes.button} onClick={selectOpen}>
        select interval
      </Button>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={selectClose}
          onOpen={selectOpen}
          value={time}
          onChange={changeInterval}
          data-testid="time"
        >
          <MenuItem value={2}> 2 sec </MenuItem>
          <MenuItem value={5}> 5 sec </MenuItem>
          <MenuItem value={10}> 10 sec </MenuItem>
          <MenuItem value={20}> 20 sec </MenuItem>
          <MenuItem value={30}> 30 sec </MenuItem>
          <MenuItem value={60}> 1 min </MenuItem>
          <MenuItem value={300}> 5 min </MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Timer;
