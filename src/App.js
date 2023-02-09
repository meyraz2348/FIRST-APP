import { Paper, Container, Stack } from "@mui/material";

import { useState } from "react";
import GuardComponent from "./Components/GuardComponent";
import TemporaryDrawer from "./Components/TemporaryDrawer";
import Sidings from "./Components/Sidings";
function App() {
  const [addGuards, setAddGuards] = useState(false);
  const [addSidings, setAddSidings] = useState(false);

  const GuardHandler = () => {
    console.log("calling guards");

    setAddSidings(false);
    setAddGuards(true);
    console.log("g", addGuards);
    console.log("s", addSidings);
  };
  const SidingHandler = () => {
    setAddGuards(false);
    setAddSidings(true);
    console.log("adding sidings");
  };

  return (
    <>
      <Stack spacing={2}>
        <TemporaryDrawer onGuard={GuardHandler} onSiding={SidingHandler} />
        <Container
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
            marginTop: "6rem",
          }}
        >
          <Paper style={{ width: "700px" }}>
            {addGuards && <GuardComponent />}
            {addSidings && <Sidings />}
          </Paper>
        </Container>
      </Stack>
    </>
  );
}
export default App;
