import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

export default function UploadGrout() {
  const [newGrout, setNewGrout] = React.useState({
    Name: "",
    ItemCode: "",
    Description: "",
    Quantity: "",
    Price: "",
    Note: "",
    Weight: "",
    Color: "",
    Company: "",
  });
  const clearInput = () => {
    setNewGrout({
      Name: "",
      ItemCode: "",
      Description: "",
      Quantity: "",
      Price: "",
      Note: "",
      Weight: "",
      Color: "",
      Company: "",
    });
  };
  const dataHandler = (event) => {
    let temp = { ...newGrout };
    temp[event.target.name] = event.target.value;
    setNewGrout(temp);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newGrout);
    axios
      .post("http://localhost:9000/add-grout", newGrout)
      .then((res) => {
        console.log("Data sent", res);
        clearInput();
      })
      .catch((err) => alert("There was an error"));
  };
  return (
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
          label="Tile Name"
          variant="outlined"
          type="text"
          placeholder="Tile Name"
          onChange={dataHandler}
          value={newGrout.Name}
          name="Name"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="ItemCode"
          variant="outlined"
          type="text"
          placeholder="Item Code"
          onChange={dataHandler}
          value={newGrout.ItemCode}
          name="ItemCode"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="Description"
          variant="outlined"
          type="text"
          placeholder="Description"
          onChange={dataHandler}
          value={newGrout.Description}
          name="Description"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          type="number"
          placeholder="Quantity"
          onChange={dataHandler}
          value={newGrout.Quantity}
          name="Quantity"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="Price"
          variant="outlined"
          type="number"
          placeholder="Price"
          onChange={dataHandler}
          value={newGrout.Price}
          name="Price"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="Note"
          variant="outlined"
          type="text"
          placeholder="Note"
          onChange={dataHandler}
          value={newGrout.Note}
          name="Note"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Weight"
          variant="outlined"
          type="number"
          placeholder="Weight"
          onChange={dataHandler}
          value={newGrout.Weight}
          name="Weight"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="Color"
          variant="outlined"
          type="text"
          placeholder="Color"
          onChange={dataHandler}
          value={newGrout.Color}
          name="Color"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="Company"
          variant="outlined"
          type="text"
          placeholder="Company"
          onChange={dataHandler}
          value={newGrout.Company}
          name="Company"
          size="small"
          required
        />

        <Button variant="primary" type="submit">
          upload
        </Button>
      </div>
    </Box>
  );
}
