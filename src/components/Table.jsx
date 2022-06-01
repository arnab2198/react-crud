import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../styles/Table.css";
import Button from "@mui/material/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPen, faEye } from "@fortawesome/free-solid-svg-icons";

const titleHead = {
  fontWeight: "700",
  fontSize: "16px",
};

function createData(id, title, description, action) {
  return { id, title, description, action };
}

const rows = [
  createData(
    1,
    "React Development",
    "Need to complete react developemt by today and make the to do app",
    98
  ),
];

export default function BasicTable() {
  return (
    <TableContainer className="table-container" component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={titleHead}>ID</TableCell>
            <TableCell sx={titleHead}>Task Title</TableCell>
            <TableCell sx={titleHead} align="left">
              Task Details
            </TableCell>
            <TableCell sx={titleHead} align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.length > 0 ? (
            rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="td" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="left">
                  {row.title.length > 30
                    ? row.title.substring(0, 30 - 3) + "..."
                    : row.title}
                </TableCell>
                <TableCell align="left">
                  {row.description.length > 30
                    ? row.description.substring(0, 50 - 3) + "..."
                    : row.description}
                </TableCell>
                <TableCell align="center">
                  <Button>
                    <FontAwesomeIcon icon={faEye} />
                  </Button>
                  <Button>
                    <FontAwesomeIcon icon={faPen} />
                  </Button>
                  <Button>
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow className="no-data-text">
              <TableCell
                sx={{ textAlign: "center !important", fontSize: "16px" }}
                colSpan="4"
              >
                No data found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
