import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const AllGrouts = () => {
  const createData = (
    Name,
    ItemCode,
    Description,
    Quantity,
    Price,
    Note,
    Weight,
    Color,
    Company
  ) => {
    return {
      Name,
      ItemCode,
      Description,
      Quantity,
      Price,
      Note,
      Weight,
      Color,
      Company,
    };
  };
  const [allGrouts, setAllGrouts] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:9000/all-grouts", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        setAllGrouts(res.data.data);
      })
      .catch((err) => alert("There was an error"));
  }, []);

  const rows = [];

  allGrouts.forEach((grout) => {
    rows.push(
      createData(
        grout.Name,
        grout.ItemCode,
        grout.Description,
        grout.Quantity,
        grout.Price,
        grout.Note,
        grout.Weight,
        grout.Color,
        grout.Company
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
            <TableCell align="right">Weight</TableCell>
            <TableCell align="right">Color</TableCell>
            <TableCell align="right">Company</TableCell>
            <TableCell align="right">Details</TableCell>
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
              <TableCell align="right">{row.Weight}</TableCell>
              <TableCell align="right">{row.Color}</TableCell>
              <TableCell align="right">{row.Company}</TableCell>
              <TableCell align="right">
                <Link to={`/grout-detail/${row.ItemCode}`}>
                  <Button>view details</Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllGrouts;
