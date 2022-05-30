import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/Table.css";
import { Link } from "react-router-dom";

const titleHead = {
  fontWeight: "700",
  fontSize: "16px",
};

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Frozen yoghurt", 159, 98),
  createData("Ice cream sandwich", 237, 67),
  createData("Eclair", 262, 72),
  createData("Cupcake", 305, 85),
  createData("Gingerbread", 356, 83),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={titleHead}>Task Title</TableCell>
            <TableCell sx={titleHead} align="center">
              Task Details
            </TableCell>
            <TableCell sx={titleHead} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="center">{row.calories}</TableCell>
              <TableCell align="center">
                <Link to="/view-task">
                  <i className="fa fa-regular fa-eye"></i>
                </Link>
                <Link to="/update-task">
                  <i className="fa fa-regular fa-pencil"></i>
                </Link>
                <Link to="/delete-task">
                  <i className="fa fa-regular fa-trash"></i>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
