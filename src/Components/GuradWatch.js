import React, { useEffect } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { Box, Container, TextField, Button, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import DataTable from "./DataTable";

const GuradWatch = (props) => {
  const [guardName, setGuardName] = useState("");
  const [guardNumber, setGuardNumber] = useState("");
  const [sidingName, setSidingName] = useState("");
  const [isButtonValid, setIsButtonValid] = useState(false);

  const [formValid, setFormValid] = useState(false);
  const [startTime, setStartTime] = React.useState(new Date().getTime());
  const [finishTime, setFinishTime] = React.useState(new Date().getTime());
  const [sTime, setSTime] = useState(false);
  const [fTime, setFTime] = useState(false);
  const [rows, setRows] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();

    setRows((row) => [
      ...row,
      {
        guardName,
        guardNumber,
        siding: sidingName,
        start: new Date(startTime).toLocaleTimeString(),
        finish: new Date(finishTime).toLocaleTimeString(),
      },
    ]);
    setGuardName("");
    setGuardNumber("");
    setSidingName("");
    setStartTime(new Date().getTime());
    setFTime(false);
    setSTime(false);
    setFinishTime(new Date().getTime());
  };

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
          <Paper style={{ width: "1050px" }}>
            <Box sx={{ py: 2 }}>
              <form onSubmit={submitHandler}>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <TextField
                    label="Guard Name"
                    name="Guard Name"
                    margin="normal"
                    variant="outlined"
                    type="string"
                    onChange={(event) => setGuardName(event.target.value)}
                    value={guardName}
                  />
                  <TextField
                    label="Guard Number"
                    name="Guard Number"
                    margin="normal"
                    type="string"
                    variant="outlined"
                    onChange={(event) => setGuardNumber(event.target.value)}
                    value={guardNumber}
                  />
                  <TextField
                    label="Siding Name"
                    name="Siding Name"
                    type="string"
                    margin="normal"
                    variant="outlined"
                    onChange={(event) => setSidingName(event.target.value)}
                    value={sidingName}
                  />
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimePicker
                      label="Start Time"
                      value={startTime}
                      onChange={(newValue) => setStartTime(newValue)}
                      renderInput={(params) => <TextField {...params} />}
                    />
                    <TimePicker
                      label="Finish Time"
                      value={finishTime}
                      onChange={(newValue) => setFinishTime(newValue)}
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
            <DataTable arr={rows} setArr={setRows} />
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default GuradWatch;
