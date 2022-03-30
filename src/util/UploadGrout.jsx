import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button, Input, Skeleton } from "@mui/material";

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
    const formData = new FormData();
    formData.append("Name", newGrout.Name);
    formData.append("ItemCode", newGrout.ItemCode);
    formData.append("Description", newGrout.Description);
    formData.append("Quantity", newGrout.Quantity);
    formData.append("Price", newGrout.Price);
    formData.append("Note", newGrout.Note);
    formData.append("Weight", newGrout.Weight);
    formData.append("Color", newGrout.Color);
    formData.append("Company", newGrout.Company);
    formData.append("image", newGrout.image);

    console.log(newGrout);
    axios
      .post("http://localhost:9000/add-grout", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log("Data sent", res);
        clearInput();
      })
      .catch((err) => alert("There was an error"));
  };
  const handleFiles = (event) => {
    let temp = { ...newGrout };
    temp.image = event.target.files[0];
    setNewGrout(temp);
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
          label="Grout Name"
          variant="outlined"
          type="text"
          placeholder="Grout Name"
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
        <label htmlFor="icon-button-file">
          <Button variant="contained" component="span">
            Upload Image
          </Button>

          <Input
            accept="image/*"
            id="icon-button-file"
            type="file"
            name="image"
            style={{ display: "none" }}
            onChange={handleFiles}
          />
        </label>
        <Button variant="primary" type="submit">
          upload
        </Button>
        <div>
          {newGrout.image ? (
            <img
              src={URL.createObjectURL(newGrout.image)}
              alt="tile"
              width="200px"
              height="200px"
            />
          ) : (
            <Skeleton
              variant="rectangular"
              style={{ width: "200px", height: "200px" }}
            ></Skeleton>
          )}
        </div>
      </div>
    </Box>
  );
}
