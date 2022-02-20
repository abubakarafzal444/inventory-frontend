import * as React from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReactFileReader from "react-file-reader";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Skeleton,
} from "@mui/material";

export default function UploadTile() {
  const [uploadImage, setUploadImage] = React.useState("");
  const [newTile, setNewTile] = React.useState({
    Name: "",
    ItemCode: "",
    Description: "",
    Quantity: "",
    Price: "",
    Note: "",
    Size: "",
    Shade: "",
    Finishing: "",
    TileType: "",
    PcsInBox: "",
    Company: "",
  });
  const clearInput = () => {
    setNewTile({
      Name: "",
      ItemCode: "",
      Description: "",
      Quantity: "",
      Price: "",
      Note: "",
      Size: "",
      Shade: "",
      Finishing: "",
      TileType: "",
      PcsInBox: "",
      Company: "",
    });
  };
  const dataHandler = (event) => {
    let temp = { ...newTile };
    temp[event.target.name] = event.target.value;
    setNewTile(temp);
  };

  const handleFiles = (files) => setUploadImage(files);

  const formData = new FormData();
  formData.append("Name", newTile.Name);
  formData.append("ItemCode", newTile.ItemCode);
  formData.append("Description", newTile.Description);
  formData.append("Quantity", newTile.Quantity);
  formData.append("Price", newTile.Price);
  formData.append("Note", newTile.Note);
  formData.append("Size", newTile.Size);
  formData.append("Shade", newTile.Shade);
  formData.append("Finishing", newTile.Finishing);
  formData.append("TileType", newTile.TileType);
  formData.append("PcsInBox", newTile.PcsInBox);
  formData.append("Company", newTile.Company);
  formData.append("Image", uploadImage);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(newTile);
    axios
      .post("http://localhost:9000/add-tile", formData)
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
          value={newTile.Name}
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
          value={newTile.ItemCode}
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
          value={newTile.Description}
          name="Description"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Quantity"
          variant="outlined"
          type="number"
          placeholder="Quantity"
          onChange={dataHandler}
          value={newTile.Quantity}
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
          value={newTile.Price}
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
          value={newTile.Note}
          name="Note"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Size"
          variant="outlined"
          type="text"
          placeholder="Size"
          onChange={dataHandler}
          value={newTile.Size}
          name="Size"
          size="small"
          required
        />
        <TextField
          id="outlined-basic"
          label="Shade"
          variant="outlined"
          type="text"
          placeholder="Shade"
          onChange={dataHandler}
          value={newTile.Shade}
          name="Shade"
          size="small"
        />
        <TextField
          id="outlined-basic"
          label="Finishing"
          variant="outlined"
          type="text"
          placeholder="Finishing"
          onChange={dataHandler}
          value={newTile.Finishing}
          name="Finishing"
          size="small"
        />
        <FormControl>
          <InputLabel id="demo-simple-select-label">Tile Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="TileType"
            value={newTile.TileType}
            onChange={dataHandler}
            label="TileType"
          >
            <MenuItem value={"bathroom"}>bathroom</MenuItem>
            <MenuItem value={"floor"}>floor</MenuItem>
            <MenuItem value={"wall"}>wall</MenuItem>
            <MenuItem value={"kitchen"}>kitchen</MenuItem>
            <MenuItem value={"outdoor"}>outdoor</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="outlined-basic"
          label="PcsInBox"
          variant="outlined"
          type="number"
          placeholder="PcsInBox"
          onChange={dataHandler}
          value={newTile.PcsInBox}
          name="PcsInBox"
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
          value={newTile.Company}
          name="Company"
          size="small"
          required
        />
        <ReactFileReader
          fileTypes={[".png", ".jpg", ".jpeg"]}
          base64={false}
          handleFiles={handleFiles}
        >
          <Button size="small" variant="primary">
            Upload Tile Image
          </Button>
        </ReactFileReader>

        <Button variant="contained" type="submit">
          upload
        </Button>
        <div>
          <ReactFileReader
            fileTypes={[".png", ".jpg", ".jpeg"]}
            base64={true}
            handleFiles={handleFiles}
          >
            {uploadImage ? (
              <img src={uploadImage} alt="tile" width="200px" height="200px" />
            ) : (
              <Skeleton
                variant="rectangular"
                style={{ width: "200px", height: "200px" }}
              ></Skeleton>
            )}
          </ReactFileReader>
        </div>
      </div>
    </Box>
  );
}
