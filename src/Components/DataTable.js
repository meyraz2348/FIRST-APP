import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, FormControlLabel, Switch, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Circle from "@uiw/react-color-circle";

export default function BasicTable({ arr }) {
  const rows = Array.from(arr);
  console.log(rows.guardName);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Guard Name</TableCell>
            <TableCell align="center">Guard Number</TableCell>
            <TableCell align="center">Siding</TableCell>
            <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">Finish Time</TableCell>
            <TableCell align="center">Guard Watch</TableCell>
            <TableCell align="center">Send Sms</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        {rows && (
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.guardName}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center">Abcas</TableCell>
                <TableCell align="center">{row.guardNumber}</TableCell>
                <TableCell align="center">{row.siding}</TableCell>
                <TableCell align="center">{row.start}</TableCell>
                <TableCell align="center">{row.finish}</TableCell>

                <TableCell align="center">
                  <FormControlLabel
                    value="watch"
                    control={<Switch color="primary" />}
                  />
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    value="sms"
                    control={<Switch color="primary" />}
                  />
                </TableCell>
                <TableCell align="right">
                  <Circle
                    colors={["#95ff00"]}
                    style={{ justifyContent: "center" }}
                  />
                </TableCell>
                <TableCell align="center">
                  <IconButton aria-label="delete">
                    <DeleteIcon fontSize="inherit" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}
