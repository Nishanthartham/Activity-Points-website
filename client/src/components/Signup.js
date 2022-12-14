import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import FaceIcon from "@mui/icons-material/Face";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
//#8b181b red
//green rgb(56,85,41)
function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  // const isSignup = useSelector((state) => state.isSignup);
  const navigate = useNavigate();
  const dispath = useDispatch();
  const signin = () => {
    dispath(authActions.signin());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendRequest(data).then((res_data) => {
      // console.log(typeof res_data);

      // console.log("kdsl" + res_data);

      // if ((res_data.data.name = "AxiosError")) {
      //   alert("incorrect credentials");
      // }
      localStorage.setItem("userId", res_data.data.rollNo);
      console.log("sdfsdf" + res_data.data.rollNo);
      dispath(authActions.login());
      navigate("/dashboard");
    });

    console.log({
      rollNo: data.get("rollNo"),
      password: data.get("password"),
    });
  };

  const sendRequest = async (data) => {
    var res_data;
    const res = await axios
      .post(`http://localhost:5000/register`, {
        name: data.get("firstName"),
        rollNo: data.get("rollNo"),
        password: data.get("password"),
      })
      .catch((err) => {
        console.log(err);
        res_data = err;
        console.log("ljkhn" + res_data.data);
        return res_data;
      });

    res_data = res;
    console.log(res_data.data);
    return res_data;
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(cbit.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ m: 1, bgcolor: "rgb(56,85,41)", height: 50, width: 50 }}
            >
              <FaceIcon sx={{ fontSize: 50 }} />
            </Avatar>
            <Typography component="h1" variant="h4">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { fontSize: 17 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 13 } }}
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    inputProps={{ style: { fontSize: 17 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 13 } }}
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ style: { fontSize: 17 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 13 } }}
                    required
                    fullWidth
                    id="email"
                    label="Roll NO"
                    name="rollNo"
                    autoComplete="rollno"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    inputProps={{ style: { fontSize: 17 } }} // font size of input text
                    InputLabelProps={{ style: { fontSize: 13 } }}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                  />
                </Grid>
                {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#8b181b" }}
              >
                <h5>Sign Up</h5>
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link href="#" variant="body2" onClick={signin}>
                    <h6>Already have an account? Sign in</h6>
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
