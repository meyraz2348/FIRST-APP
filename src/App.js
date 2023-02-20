import { Paper, Container, Stack } from "@mui/material";

import { useEffect, useState } from "react";
import GuardComponent from "./Components/GuardComponent";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Sidings from "./Components/Sidings";
import GuradWatch from "./Components/GuradWatch";
import BasicTable from "./Components/DataTable";
function App() {
  const [addGuards, setAddGuards] = useState(false);
  const [addSidings, setAddSidings] = useState(false);
  const [guardWatch, setGuardWatch] = useState(false);
  const [hasData, setHasData] = useState(false);
  const GuardHandler = () => {
    console.log("calling guards");
    setAddSidings(false);
    setGuardWatch(false);

    setAddGuards(true);
    console.log("g", addGuards);
    console.log("s", addSidings);
  };
  const SidingHandler = () => {
    setAddGuards(false);
    setGuardWatch(false);

    setAddSidings(true);
    console.log("adding sidings");
  };
  const GuardWatchHandler = () => {
    setAddGuards(false);
    setAddSidings(false);
    setGuardWatch(true);
    console.log("adding Guards");
  };
  const watchHandler = () => {
    setHasData((prev) => !prev);
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <TemporaryDrawer
          onGuard={GuardHandler}
          onSiding={SidingHandler}
          onGuardWatch={GuardWatchHandler}
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
          {guardWatch && <GuradWatch onWatchHandler={watchHandler} />}
        </Container>
      </Stack>
    </>
  );
}
export default App;
