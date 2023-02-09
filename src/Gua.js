import React from "react";

import { Box, Button, Container, Stack, TextField } from "@mui/material";
import * as Yup from "yup";

import { useFormik } from "formik";
import { useState } from "react";
const Gua = (props) => {
  const fieldValue = props.fieldValue;
  const formik = useFormik({
    initialValues: {
      name: "",
      num: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(30).required("Name is required"),
      num: Yup.string().max(30).required("Number is required"),
    }),

    onSubmit: (values, { resetForm }) => {
      console.log("ca");
      console.log(values);
      resetForm({ values: "" });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ py: 2 }}>
          {fieldValue.map((fo, index) => {
            return (
              <Stack direction="row" spacing={2}>
                <TextField
                  error={Boolean(formik.touched.name && formik.errors.name)}
                  fullWidth
                  helperText={formik.touched.name && formik.errors.name}
                  label="name"
                  margin="normal"
                  key={index}
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(formik.touched.num && formik.errors.num)}
                  fullWidth
                  helperText={formik.touched.num && formik.errors.num}
                  label="num"
                  margin="normal"
                  name="num"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.num}
                  variant="outlined"
                />
              </Stack>
            );
          })}
        </Box>
      </form>
    </div>
  );
};

export default Gua;
