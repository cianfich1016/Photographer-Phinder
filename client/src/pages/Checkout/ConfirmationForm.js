import React from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
} from "@material-ui/core";

import { Link } from "react-router-dom";

const ConfirmationForm = ({ order, error }) => {
  const SuccessPurchase = () => {
    return (
      <>
        {order.customer ? (
          <>
            <div>
              <Typography variant="h5">
                {" "}
                Thank you for choosing ``, firstname lastName{" "}
              </Typography>
              <Divider style={{ margin: "20px 0" }} />
              <Typography variant="subtitle2">Order</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button">
              Back to Home
            </Button>
          </>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </div>
        )}
      </>
    );
  };
  const Error = () => {
    return (
      <>
        <Typography variant="h5">Error: {error}</Typography>
        <Button component={Link} to="/" variant="outlined" type="button">
          Back to Home
        </Button>
      </>
    );
  };
  return <>{error ? <Error /> : <SuccessPurchase />}</>;
};
export default ConfirmationForm;
