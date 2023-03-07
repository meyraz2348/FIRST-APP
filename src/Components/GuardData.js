import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper } from "@mui/material";
import { mockData } from "../mockData";
const GuardData = ({ arr }) => {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    setRows(arr);
  }, [arr]);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">Guard Number</TableCell>
            <TableCell align="center">Guard Name</TableCell>
            <TableCell align="center">Siding</TableCell>
            {/* <TableCell align="center">Start Time</TableCell>
            <TableCell align="center">Recent Scan Time</TableCell>
            <TableCell align="center">Time Elapsed</TableCell> */}
          </TableRow>
        </TableHead>
        {rows && (
          <TableBody>
            {rows.map((row) => (
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={row.guardNumber}
              >
                <TableCell align="center">{row.guardNumber}</TableCell>
                <TableCell align="center">{row.guardName}</TableCell>
                <TableCell align="center">{row.sidingName}</TableCell>
                {/* <TableCell align="center">
                  {new Date(row.startTime).toLocaleTimeString()}
                </TableCell>
                <TableCell align="center">
                  {new Date(row.finishTime).toLocaleTimeString()}
                </TableCell>
                <TableCell align="center">{row.timeElasped}</TableCell> */}
                {/* <TableCell align="center">BroadMedows</TableCell>
                <TableCell align="center">22:11:00</TableCell>
                <TableCell align="center">23:11:00</TableCell>
                <TableCell align="center">00:60:00</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
};
export default GuardData;
