import React, { useState, useEffect } from "react";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
} from "@material-ui/core";
import Alert from "@mui/material/Alert";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useFormControl } from "@mui/material/FormControl";
import Checkbox from "@material-ui/core/Checkbox";
import { Input } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { FormControl } from "@mui/material";
import Container from "@mui/material/Container";
import SignUp from "./SignUp";
import { loginUser } from "../utils/API";
import Auth from "../utils/auth";
// import { useHistory } from "react-router-dom";

import { teal, indigo } from "@mui/material/colors";
const secondaryLight = teal[200];
const primary = indigo[500];

export default function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  //   const [showAlert, setShowAlert] = useState(f
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  // const history = useHistory();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     history.push("/add");
  //   }
  // }, []);
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //  check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(userFormData);
    try {
      const response = await loginUser(userFormData);
      console.log({ userFormData });
      console.log("hhhh", response);
      console.log("Rose");
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      console.log("line 60");
      const { token, user } = await response.json();
      console.log(user);
      Auth.login(token);
    } catch (err) {
      console.error(err);
    }

    setUserFormData({
      email: "",
      password: "",
    });
  };
  const paperStyle = {
    padding: 20,
    height: "80vh",
    width: 300,
    margin: "30px auto",
  };
  return (
    <Container
      maxWidth="xxl"
      sx={{
        bgcolor: secondaryLight,
      }}
    >
      <div>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              spacing={2}
              className="login-form"
              color="inherit"
            >
              <Container
                variant="elevation"
                elevation={2}
                className="login-background"
                style={paperStyle}
              >
                <Grid item align="center">
                  <Avatar>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Log in
                  </Typography>
                </Grid>
                &nbsp;
                <Grid item>
                  <form
                    noValidate
                    validated={validated}
                    onSubmit={handleFormSubmit}
                  >
                    <Grid container direction="column" spacing={2}>
                      <Grid item>
                        <TextField
                          sx={{
                            color: primary,
                          }}
                          type="email"
                          placeholder="Email"
                          fullWidth
                          name="email"
                          variant="outlined"
                          value={userFormData.email}
                          // value={this.state.username}
                          onChange={handleInputChange}
                          required
                          autoFocus
                        />
                      </Grid>
                      <Grid item>
                        <TextField
                          sx={{
                            color: primary,
                          }}
                          type="password"
                          placeholder="Password"
                          fullWidth
                          name="password"
                          variant="outlined"
                          onChange={handleInputChange}
                          value={userFormData.password}
                          required
                        />
                      </Grid>
                      <Grid item>
                        <Button
                          disabled={
                            !(userFormData.email && userFormData.password)
                          }
                          variant="contained"
                          color="primary"
                          type="submit"
                          className="button-block"
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Grid>
                &nbsp;
                <Grid item>
                  <Typography>
                    {" "}
                    Don't have an account?
                    <Link href="/signup"> Sign Up</Link>
                  </Typography>
                </Grid>
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
