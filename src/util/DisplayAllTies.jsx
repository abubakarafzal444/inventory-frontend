import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";

export default function AllTiles() {
  const createData = (
    Name,
    ItemCode,
    Description,
    Quantity,
    Price,
    Note,
    Size,
    Shade,
    Finishing,
    TileType,
    PcsInBox,
    Company
  ) => {
    return {
      Name,
      ItemCode,
      Description,
      Quantity,
      Price,
      Note,
      Size,
      Shade,
      Finishing,
      TileType,
      PcsInBox,
      Company,
    };
  };
  const [allTiles, setAllTiles] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:9000/all-tiles")
      .then((res) => {
        setAllTiles(res.data.data);
      })
      .catch((err) => alert("There was an error"));
  }, []);

  const rows = [];
  allTiles.forEach((tile) => {
    rows.push(
      createData(
        tile.Name,
        tile.ItemCode,
        tile.Description,
        tile.Quantity,
        tile.Price,
        tile.Note,
        tile.Size,
        tile.Shade,
        tile.Finishing,
        tile.TileType,
        tile.PcsInBox,
        tile.Company
      )
    );
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Item Code</TableCell>
            <TableCell align="right">Description</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Note</TableCell>
            <TableCell align="right">Size</TableCell>
            <TableCell align="right">Shade</TableCell>
            <TableCell align="right">Finishing</TableCell>
            <TableCell align="right">Tile Type</TableCell>
            <TableCell align="right">pcs in box</TableCell>
            <TableCell align="right">Company</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.ItemCode}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Name}
              </TableCell>
              <TableCell align="right">{row.ItemCode}</TableCell>
              <TableCell align="right">{row.Description}</TableCell>
              <TableCell align="right">{row.Quantity}</TableCell>
              <TableCell align="right">{row.Price}</TableCell>
              <TableCell align="right">{row.Note}</TableCell>
              <TableCell align="right">{row.Size}</TableCell>
              <TableCell align="right">{row.Shade}</TableCell>
              <TableCell align="right">{row.Finishing}</TableCell>
              <TableCell align="right">{row.TileType}</TableCell>
              <TableCell align="right">{row.PcsInBox}</TableCell>
              <TableCell align="right">{row.Company}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
