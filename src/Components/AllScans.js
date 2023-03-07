import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Paper, TablePagination } from "@mui/material";

import axios from "axios";

const AllScans = () => {
  const [rows, setRows] = React.useState([]);
  const [dummyData, setDummyData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const URL = "http://localhost:3002/api/scans/get-scans";
  const fetchScans = async () => {
    console.log("fetching data");
    const request = await axios.get(URL);
    setDummyData(request.data.documents);
    setRows(dummyData.reverse());
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  React.useEffect(() => {
    console.log("useEffect running");
    fetchScans();
    console.log(rows);
  }, [rows]);
  return (
    <Paper>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Guard Number</TableCell>
              <TableCell align="center">Guard Name</TableCell>
              <TableCell align="center">QR Code</TableCell>
              <TableCell align="center">Start Date</TableCell>
              <TableCell align="center">Start Time</TableCell>
            </TableRow>
          </TableHead>
          {rows && (
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => (
                  <TableRow
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    key={row.guardNumber}
                  >
                    <TableCell align="center">{row.CONTACT_ID}</TableCell>
                    <TableCell align="center">{row.NAME}</TableCell>
                    <TableCell align="center">{row.SCAN_ID}</TableCell>
                    <TableCell align="center">
                      {new Date(row.DATE_TIME).toLocaleDateString("en-US")}
                    </TableCell>
                    <TableCell align="center">
                      {new Date(row.DATE_TIME).toLocaleTimeString()}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          )}
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 20, 30]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};
export default AllScans;
