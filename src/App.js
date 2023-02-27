import { Paper, Container, Stack } from "@mui/material";

import { useEffect, useState } from "react";
import GuardComponent from "./Components/GuardComponent";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Sidings from "./Components/Sidings";
import GuradWatch from "./Components/GuradWatch";
import Guard from "./Components/Guard";
function App() {
  const [addGuards, setAddGuards] = useState(false);
  const [addSidings, setAddSidings] = useState(false);
  const [guardWatch, setGuardWatch] = useState(false);
  const [addGuardNumber, setAddGuardNumber] = useState(false);
  const AddGuardHandler = () => {
    console.log("calling guards");
    setAddSidings(false);
    setAddGuardNumber(false);
    setGuardWatch(false);
    setAddGuards(true);
  };
  const SidingHandler = () => {
    setAddGuards(false);
    setAddGuardNumber(false);
    setGuardWatch(false);
    setAddSidings(true);
    console.log("adding sidings");
  };
  const GuardWatchHandler = () => {
    setAddGuards(false);
    setAddSidings(false);
    setAddGuardNumber(false);
    setGuardWatch(true);
    console.log("adding Guards");
  };
  const GuardHandler = () => {
    setAddGuards(false);
    setAddSidings(false);
    setGuardWatch(false);
    setAddGuardNumber(true);
    console.log("adding Guard Number");
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <TemporaryDrawer
          onAddGuard={AddGuardHandler}
          onSiding={SidingHandler}
          onGuardWatch={GuardWatchHandler}
          onGuard={GuardHandler}
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
        </Container>
      </Stack>
    </>
  );
}
export default App;
