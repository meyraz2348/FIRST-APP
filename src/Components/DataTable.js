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
import axios from "axios";

const DataTable = ({ arr, setArr }) => {
  const [guardChecked, setGuardChecked] = React.useState({});
  const [smsChecked, setSmsChecked] = React.useState({});
  const [statusActive, setStatusActive] = React.useState({});
  const [rows, setRows] = React.useState([]);

  const handleGuardWatchChange = async (event, rowId) => {
    setGuardChecked((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
    console.log(guardChecked[rowId]);
    if (guardChecked[rowId]) {
      console.log(`Guard watch stopped for ${rowId}`);
    }

    if (!guardChecked[rowId]) {
      try {
        const request = await axios.post("http://localhost:3002/guardwatch", {
          rowId,
        });
        if (request.status !== 200) {
          return;
        }
        console.log("after rescode");
        setStatusActive((prevState) => ({
          ...prevState,
          [rowId]: "#95ff00",
        }));
      } catch (error) {
        console.log(error);
      }
    } else {
      setStatusActive((prevState) => ({
        ...prevState,
        [rowId]: "#d1001f",
      }));
    }
  };
  const handleSmsChange = (event, rowId) => {
    setSmsChecked((prevState) => ({
      ...prevState,
      [rowId]: !prevState[rowId],
    }));
  };

  const handleDelete = (event, rowId) => {
    setArr(rows.filter((row) => rowId !== row.guardNumber));
  };
  React.useEffect(() => {
    setRows(arr);
  }, [arr]);
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
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                key={row.guardNumber}
              >
                <TableCell align="center">{row.guardName}</TableCell>
                <TableCell align="center">{row.guardNumber}</TableCell>
                <TableCell align="center">{row.siding}</TableCell>
                <TableCell align="center">{row.start}</TableCell>
                <TableCell align="center">{row.finish}</TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    value="watch"
                    control={
                      <Switch
                        color="primary"
                        checked={guardChecked[row.guardNumber] || false}
                        onChange={(event) =>
                          handleGuardWatchChange(event, row.guardNumber)
                        }
                      />
                    }
                  />
                </TableCell>
                <TableCell align="center">
                  <FormControlLabel
                    value="sms"
                    control={
                      <Switch
                        color="primary"
                        checked={smsChecked[row.guardNumber] || false}
                        onChange={(event) =>
                          handleSmsChange(event, row.guardNumber)
                        }
                      />
                    }
                  />
                </TableCell>
                <TableCell align="right">
                  <Circle
                    colors={[statusActive[row.guardNumber] || "#d1001f"]}
                    style={{ justifyContent: "center" }}
                  />
                </TableCell>

                <TableCell
                  align="center"
                  onClick={(event) => handleDelete(event, row.guardNumber)}
                >
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
};
export default DataTable;
