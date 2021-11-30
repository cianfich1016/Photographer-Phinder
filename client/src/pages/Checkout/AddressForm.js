import React, { useState, useEffect } from "react";
import {
  InputLabel,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useForm, FormProvider } from "react-hook-form";
import CustomField from "./CustomField";
import { commerce } from "../../lib/commerce";
import { Link } from "react-router-dom";

const AddressForm = ({ checkoutToken, next }) => {
  const methods = useForm();
  //   const [location, setLocation] = useState([]);
  //   const subdivisions = Object.entries(location).map(([code, name]) => ({
  //     id: code,
  //     label: name,
  //   }));
  //   const fetchLocation = async (countryCode) => {
  //     const { subdivisions } = await commerce.services.localeListSubdivisions(
  //       countryCode
  //     );
  //     setLocation(subdivisions);
  //     setLocation(Object.keys(subdivisions)[0]);
  //   };
  //   useEffect(() => {
  //     fetchLocation();
  //   }, []);
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Shipping Address
      </Typography>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit((data) => next({ ...data }))}>
          <Grid container spacing={3}>
            <CustomField required name="firstName" label="First Name" />
            <CustomField required name="lastName" label="Last Name" />
            <CustomField required name="address1" label="Address" />
            <CustomField required name="email" label="Email" />
            <CustomField required name="city" label="City" />
            <CustomField required name="zip" label="ZIP/ Postal code" />
            {/* <Grid item xs={12} sm={6}>
              <InputLabel>Location</InputLabel>
              <Select
                value={location}
                fullWidth
                onChange={(e) => setLocation(e.target.value)}
              >
                {subdivisions.map((subdivision) => (
                  <MenuItem key={subdivision.id} value={subdivision.id}>
                    {subdivision.label}
                  </MenuItem>
                ))}
              </Select>
            </Grid> */}
          </Grid>
          <br />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button component={Link} to="/cart" variant="outlined">
              Back to Cart
            </Button>
            <Button type="submit" color="primary" variant="contained">
              Next
            </Button>
          </div>
        </form>
      </FormProvider>
    </>
  );
};
export default AddressForm;
