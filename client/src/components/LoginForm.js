import React, { useState } from "react";
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

export default function Login() {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const [validated] = useState(false);
  //   const [showAlert, setShowAlert] = useState(f
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    //  check if form has everything (as per react-bootstrap docs)
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    console.log(userFormData);

    // if (form.email === "admin@littech.in" && form.password === "secret") {
    //   this.props.history.push("/home");
    // } else {
    //   alert("Incorrect Credentials!");
    // }

    // try {
    //   const response = await loginUser(userFormData);

    //   if (!response.ok) {
    //     throw new Error("something went wrong!");
    //   }

    //   const { token, user } = await response.json();
    //   console.log(user);
    //   Auth.login(token);
    // } catch (err) {
    //   console.error(err);
    //   setShowAlert(true);
    // }
    setUserFormData({
      username: "",
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
                  Sign in
                </Typography>
              </Grid>
              &nbsp;
              <Grid item>
                <form
                  //   noValidate
                  //   validated={validated}
                  onSubmit={handleFormSubmit}
                >
                  <Grid container direction="column" spacing={2}>
                    <Grid item>
                      <TextField
                        type="email"
                        placeholder="Email"
                        fullWidth
                        name="username"
                        variant="outlined"
                        // value={this.state.username}
                        onChange={handleInputChange}
                        required
                        autoFocus
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        type="password"
                        placeholder="Password"
                        fullWidth
                        name="password"
                        variant="outlined"
                        onChange={handleInputChange}
                        required
                      />
                    </Grid>
                    <Grid item>
                      <Button
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
  );
}
