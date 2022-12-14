import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import FaceIcon from "@mui/icons-material/Face";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { authActions } from "../store/index";
import { useNavigate } from "react-router-dom";
import axios from "axios";
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

export default function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signup = () => {
    dispatch(authActions.signup());
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    sendRequest(data);
    // .then((res_data) => {
    //   // console.log("sdfsdf" + JSON.stringify(res_data));

    //   // if ((res_data.data.name = "AxiosError")) {
    //   //   alert("incorrect credentials");
    //   // } else {
    //   localStorage.setItem("userId", JSON.stringify(res_data.data.rollNo));
    //   // localStorage.setItem("user", JSON.stringify(true));
    //   console.log("sdfsdf" + res_data.data.rollNo);

    //   dispatch(authActions.login());
    //   navigate("/dashboard");
    //   // }
    // });
    console.log({
      rollno: data.get("rollNo"),
      password: data.get("password"),
    });
  };

  const sendRequest = async (data) => {
    const res = await axios
      .post(`http://localhost:5000/login`, {
        rollNo: data.get("rollNo"),
        password: data.get("password"),
      })
      .then((res) => {
        localStorage.setItem("token", JSON.stringify(res.data.token));
        // console.log("sdfsdf" + JSON.stringify(res_data));

        // if ((res_data.data.name = "AxiosError")) {
        //   alert("incorrect credentials");
        // } else {
        localStorage.setItem("userId", JSON.stringify(res.data.username));
        // localStorage.setItem("user", JSON.stringify(true));
        console.log("rollNO" + res.data.username);
        console.log("token" + res.data.token);

        dispatch(authActions.login());
        navigate("/dashboard");
      })

      .catch((err) => {
        console.log(err);
      });
    const res_data = res;
    console.log("kjhg" + JSON.stringify(res));
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
              mx: 4,
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
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                inputProps={{ style: { fontSize: 17 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 13 } }} // font size of input label
                margin="normal"
                required
                fullWidth
                id="number"
                label="ROLL NO"
                name="rollNo"
                autoComplete="rollNo"
                placeholder="1601"
                autoFocus
              />
              <TextField
                inputProps={{ style: { fontSize: 17 } }} // font size of input text
                InputLabelProps={{ style: { fontSize: 13 } }}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                style={{ backgroundColor: "#8b181b" }}
              >
                <h5>Sign In</h5>
              </Button>
              <Grid container>
                {/* <Grid item xs> forgot password
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                  <Link href="#" variant="body2" onClick={signup}>
                    <h6>{"Don't have an account? Sign Up"}</h6>
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
