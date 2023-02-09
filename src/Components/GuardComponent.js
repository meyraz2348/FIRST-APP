import {
  Box,
  Button,
  Container,
  Stack,
  TextField,
  InputLabel,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import { useState } from "react";

function GuardComponent() {
  const [siteName, setSiteName] = useState("");
  const [formFields, setFormFields] = useState([{ name: "", num: "" }]);

  const siteNameHandler = (e) => {
    setSiteName(e.target.value);
  };
  const nameChangeHandler = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };
  const addFields = () => {
    let object = {
      name: "",
      num: "",
    };
    setFormFields([...formFields, object]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setFormFields([{ name: "", num: "" }]);
    setSiteName("");
  };
  return (
    <div>
      <Box
        component="main"
        sx={{
          "& .MuiTextField-root": { m: 1.5, width: "25ch" },
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={submitHandler}>
            <Stack direction="row" spacing={2}>
              <Box sx={{ py: 2 }}>
                <FormControl fullWidth>
                  <InputLabel id="siteName">Sitename</InputLabel>
                  <Select
                    labelId="siteName"
                    name="siteName"
                    value={siteName}
                    label="siteName"
                    onChange={siteNameHandler}
                  >
                    <MenuItem value={"BroadMedows"}>BroadMedows</MenuItem>
                    <MenuItem value={"Frankston"}>Frankston</MenuItem>
                    <MenuItem value={"EppingOffice"}>EppingOffice</MenuItem>
                  </Select>
                </FormControl>
                {formFields.map((form, index) => {
                  return (
                    <Stack direction="row" spacing={2}>
                      <TextField
                        label="name"
                        name="name"
                        margin="normal"
                        type="text"
                        variant="outlined"
                        onChange={(event) => nameChangeHandler(event, index)}
                        value={form.name}
                      />
                      <TextField
                        label="mobileNumber"
                        name="num"
                        margin="normal"
                        type="number"
                        variant="outlined"
                        onChange={(event) => nameChangeHandler(event, index)}
                        value={form.num}
                      />
                    </Stack>
                  );
                })}
              </Box>
            </Stack>
          </form>
          <Stack direction="row" spacing={2}>
            <Button
              color="primary"
              size="small"
              variant="contained"
              onClick={addFields}
            >
              +
            </Button>
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
        </Container>
      </Box>
    </div>
  );
}
export default GuardComponent;
