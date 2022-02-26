import * as React from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

export default function AddUser() {
  const [enteredData, setEnteredData] = React.useState({
    UserName: "",
    Password: "",
    ConfirmPassword: "",
    Role: "",
  });
  const clearInput = () => {
    setEnteredData({
      UserName: "",
      Password: "",
      ConfirmPassword: "",
      Role: "",
    });
  };
  const dataHandler = (event) => {
    let temp = { ...enteredData };
    temp[event.target.name] = event.target.value;
    setEnteredData(temp);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:9000/add-user", enteredData, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log("Data sent", res);
        clearInput();
      })
      .catch((err) => alert("There was an error"));
  };
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        autoComplete="off"
        onSubmit={submitHandler}
      >
        <div>
          <TextField
            id="outlined-basic"
            label="UserName"
            variant="outlined"
            type="text"
            placeholder="User Name"
            onChange={dataHandler}
            value={enteredData.Name}
            name="UserName"
            size="small"
            // required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Password"
            onChange={dataHandler}
            value={enteredData.Password}
            name="Password"
            size="small"
            // required
          />
          <TextField
            id="outlined-basic"
            label="ConfirmPassword"
            variant="outlined"
            type="password"
            placeholder="Confirm Password"
            onChange={dataHandler}
            value={enteredData.ConfirmPassword}
            name="ConfirmPassword"
            size="small"
            // required
          />
          <TextField
            id="outlined-basic"
            label="Role"
            variant="outlined"
            type="text"
            placeholder="Role"
            onChange={dataHandler}
            value={enteredData.Role}
            name="Role"
            size="small"
          />

          <Button variant="contained" type="submit">
            upload
          </Button>
        </div>
      </Box>
    </>
  );
}
