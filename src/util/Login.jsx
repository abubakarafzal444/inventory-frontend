import * as React from "react";
import axios from "axios";
import { Box, Button, TextField } from "@mui/material";

export default function Login() {
  const [enteredData, setEnteredData] = React.useState({
    UserName: "",
    Password: "",
  });
  const clearInput = () => {
    setEnteredData({
      UserName: "",
      Password: "",
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
      .post("http://localhost:9000/login", enteredData)
      .then((res) => {
        clearInput();
        //Add token and username in context
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("UserName", res.data.UserName);
        localStorage.setItem("Role", res.data.Role);

        const remainingMilliseconds = 10 * 24 * 60 * 60 * 1000;
        const expiryDate = new Date(
          new Date().getTime() + remainingMilliseconds
        );
        localStorage.setItem("expiryDate", expiryDate.toISOString());
      })
      .catch((err) => alert("There was an error"));
  };
  const logoutHandler = () => {
    console.log(localStorage.getItem("token"));
    //  setState to logout in context
    // localStorage.removeItem("token");
    // localStorage.removeItem("expiryDate");
    // localStorage.removeItem("UserName");
    // localStorage.removeItem("Role");
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
          <Button variant="contained" type="submit">
            upload
          </Button>
        </div>
      </Box>
      <Button variant="contained" type="submit" onClick={logoutHandler}>
        logout
      </Button>
    </>
  );
}
