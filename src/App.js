import { Paper, Container, Stack } from "@mui/material";

import { useEffect, useState } from "react";
import GuardComponent from "./Components/GuardComponent";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Sidings from "./Components/Sidings";
import GuradWatch from "./Components/GuradWatch";
import Guard from "./Components/Guard";
import AllScans from "./Components/AllScans";
function App() {
  const [addGuards, setAddGuards] = useState(false);
  const [addSidings, setAddSidings] = useState(false);
  const [guardWatch, setGuardWatch] = useState(false);
  const [addGuardNumber, setAddGuardNumber] = useState(false);
  const [displayScans, setDispalyScans] = useState(false);
  const AddGuardHandler = () => {
    console.log("calling guards");
    setAddSidings(false);
    setAddGuardNumber(false);
    setGuardWatch(false);
    setDispalyScans(false);
    setAddGuards(true);
  };
  const SidingHandler = () => {
    setAddGuards(false);
    setDispalyScans(false);
    setAddGuardNumber(false);
    setGuardWatch(false);
    setAddSidings(true);
    console.log("adding sidings");
  };
  const GuardWatchHandler = () => {
    setAddGuards(false);
    setDispalyScans(false);
    setAddSidings(false);
    setAddGuardNumber(false);
    setGuardWatch(true);
    console.log("adding Guards");
  };
  const GuardHandler = () => {
    setDispalyScans(false);
    setAddGuards(false);
    setAddSidings(false);
    setGuardWatch(false);
    setAddGuardNumber(true);
    console.log("adding Guard Number");
  };

  const DisplayScanHandler = () => {
    setAddGuards(false);
    setAddSidings(false);
    setGuardWatch(false);
    setAddGuardNumber(false);
    setDispalyScans(true);
    console.log("Displaying scans");
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <TemporaryDrawer
          onAddGuard={AddGuardHandler}
          onSiding={SidingHandler}
          onGuardWatch={GuardWatchHandler}
          onGuard={GuardHandler}
          onScan={DisplayScanHandler}
        />
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
            marginTop: "6rem",
          }}
        >
          {addGuards && <GuardComponent />}
          {addSidings && <Sidings />}
          {guardWatch && <GuradWatch />}
          {addGuardNumber && <Guard />}
          {displayScans && <AllScans />}
        </Container>
      </Stack>
    </>
  );
}
export default App;
