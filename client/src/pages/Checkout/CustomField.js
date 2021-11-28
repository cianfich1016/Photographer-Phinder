import React from "react";
import { Grid, TextField } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const CustomField = ({ name, label, required }) => {
  const { control } = useFormContext();
  return (
    <Grid item xs={12} sm={6}>
      <Controller
        control={control}
        fullWidth
        name={name}
        render={({ field }) => (
          <TextField fullWidth label={label} required={required} />
        )}
      />
    </Grid>
  );
};
export default CustomField;
