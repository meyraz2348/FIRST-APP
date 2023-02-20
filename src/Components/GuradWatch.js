import React, { useEffect } from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Circle from "@uiw/react-color-circle";
import { Box, Container, TextField, Button, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import BasicTable from "./DataTable";

const GuradWatch = (props) => {
  const [guardName, setGuardName] = useState("");
  const [guardNumber, setGuardNumber] = useState("");
  const [sidingName, setSidingName] = useState("");
  const [hasData, setHasData] = useState(false);

  const [startTime, setStartTime] = React.useState(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [finishTime, setFinishTime] = React.useState(
    dayjs("2018-01-01T00:00:00.000Z")
  );
  const [rows, setRows] = useState([]);
  const startTimeHandler = (newValue) => {
    setStartTime(newValue);
  };
  const finishTimeHandler = (newValue) => {
    setFinishTime(newValue);
  };
  const sidingChangeHandler = (event) => {
    setSidingName(event.target.value);
  };
  const nameChangeHandler = (event) => {
    setGuardName(event.target.value);
  };
  const numberChangeHandler = (event) => {
    setGuardNumber(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    setRows({
      guardName,
      guardNumber,
      sidingName,
      start: startTime,
      finish: finishTime,
    });
    setGuardName("");
    setGuardNumber("");
    setSidingName("");
    setStartTime("");
    setFinishTime("");
    setHasData((prev) => !prev);
    // props.onWatchHandler();
    console.log(rows);
    console.log(rows.guardNumber);
  };
  useEffect(() => {
    console.log(hasData);
    console.log("im runnign");
  }, [hasData]);
  return (
    <Box
      component="main"
      sx={{
        "& .MuiTextField-root": { m: 1.5, width: "25ch" },
        "& .MuiButton-root": { m: 1.5, width: "25ch" },
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        width: "100%",
        marginTop: "2rem",
      }}
    >
      <Stack direction="column">
        <Container maxWidth="large">
          <Paper style={{ width: "1200px" }}>
            <Box sx={{ py: 2 }}>
              <form onSubmit={submitHandler}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    label="Guard Name"
                    name="Guard Name"
                    margin="normal"
                    variant="outlined"
                    type="string"
                    onChange={(event) => nameChangeHandler(event)}
                    value={guardName}
                  />
                  <TextField
                    label="Guard Number"
                    name="Guard Number"
                    margin="normal"
                    type="string"
                    variant="outlined"
                    onChange={(event) => numberChangeHandler(event)}
                    value={guardNumber}
                  />
                  <TextField
                    label="Siding Name"
                    name="Siding Name"
                    type="string"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => sidingChangeHandler(event)}
                    value={sidingName}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Start Time"
                      value={startTime}
                      onChange={startTimeHandler}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      label="Finish Time"
                      value={finishTime}
                      onChange={finishTimeHandler}
                      renderInput={(params) => <TextField {...params} />}
                    />
                  </LocalizationProvider>
                  <Button
                    color="primary"
                    size="small"
                    type="submit"
                    variant="contained"
                    onClick={submitHandler}
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            </Box>
          </Paper>
        </Container>
        <Container
          maxWidth="large"
          style={{
            marginTop: "5rem",
          }}
        >
          <Box
            sx={{ py: 2 }}
            style={{
              textAlign: "center",
            }}
          >
            <h1>Watch-List</h1>
            <BasicTable arr={rows} />
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default GuradWatch;
