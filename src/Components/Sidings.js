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
function Sidings() {
  const [siteName, setSiteName] = useState("");
  const [formFields, setFormFields] = useState([{ scans: "" }]);
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
      scans: "",
    };
    setFormFields([...formFields, object]);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    setFormFields([{ scans: "" }]);
    setSiteName("");
    console.log(siteName, formFields);
  };
  return (
    <>
      <Box
        component="main"
        sx={{
          "& .MuiTextField-root": { m: 1.5, width: "25ch" },
          "& .MuiFormControl-root": { m: 1.5, width: "25ch" },
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <form onSubmit={submitHandler}>
            <Box
              sx={{ py: 2 }}
              display="grid"
              justifyContent="center"
              alignContent="center"
            >
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
                  <Stack key={index} direction="row" spacing={2}>
                    <TextField
                      label="scans"
                      name="scans"
                      margin="normal"
                      variant="outlined"
                      onChange={(event) => nameChangeHandler(event, index)}
                      value={form.scans}
                    />
                  </Stack>
                );
              })}
            </Box>
          </form>
          <Stack direction="row" spacing={2} justifyContent="center">
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
    </>
  );
}
export default Sidings;
