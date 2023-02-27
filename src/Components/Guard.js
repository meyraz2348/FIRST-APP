import React, { useEffect } from "react";
import { Box, Container, TextField, Button, Paper } from "@mui/material";
import { Stack } from "@mui/system";
import { useState } from "react";
import GuardData from "./GuardData";
import axios from "axios";
const Gurad = (props) => {
  const [guardNumber, setGuardNumber] = useState("");
  const [rows, setRows] = useState([]);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const request = await axios.post("http://localhost:3002/guard", {
        guardNumber,
      });
      console.log(request);
      const { sidingName, start, recentScan } = request.data;
      if (request.status !== 200) {
        return;
      }
      setRows((row) => [
        ...row,
        {
          guardNumber,
          sidingName,
          start,
          recentScan,
          timeElapsed: Math.floor(Math.abs(start - recentScan)),
        },
      ]);
      setGuardNumber("");
    } catch (error) {
      console.log("Error Occured ");
    }
  };

  return (
    <Box
      component="main"
      sx={{
        "& .MuiTextField-root": { m: 1.5, width: "25ch" },
        "& .MuiButton-root": { m: 1.5, width: "25ch" },
        alignItems: "center",
        justifyContent: "center",
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
                <Stack
                  direction={{ xs: "column", sm: "row" }}
                  spacing={2}
                  justifyContent="center"
                >
                  <TextField
                    label="Guard Number"
                    name="Guard Number"
                    margin="normal"
                    type="string"
                    variant="outlined"
                    onChange={(event) => setGuardNumber(event.target.value)}
                    value={guardNumber}
                  />
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
            justifyContent: "center",
          }}
        >
          <Box
            sx={{ py: 2 }}
            style={{
              textAlign: "center",
            }}
          >
            <h1>Recent Scan-List</h1>
            <GuardData arr={rows} setArr={setRows} />
          </Box>
        </Container>
      </Stack>
    </Box>
  );
};

export default Gurad;
