import { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Paper,
  Slider,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { ToggleButton } from "@material-ui/lab";
import DirectionsBoatTwoToneIcon from "@material-ui/icons/DirectionsBoatTwoTone";
import ArrowForward from "@material-ui/icons/ArrowForward";

import "./index.css";

const useStyles = makeStyles({
  buttonLabel: {
    justifyContent: "space-evenly",
  },
  thumb: {
    height: 28,
    width: 28,
    marginTop: -12,
    marginLeft: -16,
    border: "4px solid lightgrey",
  },
  track: {
    color: "#5E00FF",
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
});

function App() {
  const classes = useStyles();
  const [sliderValue, setSliderValue] = useState(180);

  const handleSliderChange = (event, newValue) => {
    setSliderValue(newValue);
  };
  const CreditCardSVG = () => {
    return (
      <Box>
        <svg
          width="4em"
          height="4em"
          viewBox="0 0 16 16"
          class="bi bi-credit-card"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z"
          />
          <path d="M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z" />
        </svg>
      </Box>
    );
  };
  return (
    <div
      style={{
        display: "grid",
        gap: 50,
        gridTemplateColumns: "1.5fr 1fr",
      }}
    >
      <Card
        raised
        style={{
          padding: 30,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <Grid container style={{ width: "90%", margin: "0 auto" }}>
          <Grid item>
            <Box style={{ fontWeight: 800, fontSize: 24 }}>
              Upgrade your plan
            </Box>
            <Box
              style={{
                width: "90%",
                fontSize: 16,
                fontWeight: "light",
                color: "grey",
              }}
            >
              Please make the payment to start enjoying all the features of our
              premium plan as soon as possible.
            </Box>
          </Grid>
          {/* Small Busineess Button */}
          <Grid item style={{ width: "100%" }}>
            <Paper
              style={{
                border: "2px solid blue",
                height: 140,
                backgroundColor: "#F2F2FF",
                margin: "30px auto",
              }}
            >
              <Box
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  height: "100%",
                  position: "relative",
                }}
              >
                {/* Small Bussiness and Icon */}
                <Box style={{ display: "flex", margin: "0 auto 0 20px" }}>
                  <Paper
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: "#5E00FF",
                      display: "grid",
                      placeItems: "center",
                    }}
                  >
                    <DirectionsBoatTwoToneIcon
                      style={{
                        width: "100%",
                        height: "50%",
                      }}
                    />
                  </Paper>
                  <Box
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-evenly",
                      marginLeft: 20,
                    }}
                  >
                    <Typography style={{ fontWeight: 800, fontSize: 20 }}>
                      Small Business
                    </Typography>
                    <Typography
                      style={{
                        fontWeight: 600,
                        color: "blue",
                        letterSpacing: 2,
                      }}
                    >
                      CHANGE PLAN
                    </Typography>
                  </Box>
                </Box>
                {/* Price */}
                <Box style={{ margin: "0 20px 0 auto" }}>
                  <Typography variant="h3">
                    <span style={{ position: "relative" }}>
                      8,350
                      <span
                        style={{
                          fontSize: 20,
                          position: "absolute",
                          top: 0,
                          left: -15,
                          color: "grey",
                        }}
                      >
                        $
                      </span>
                    </span>
                    <small
                      style={{ color: "grey", fontWeight: "100", fontSize: 20 }}
                    >
                      {" "}
                      / year
                    </small>
                  </Typography>
                </Box>
                {/* End Price */}
              </Box>
            </Paper>
          </Grid>
          {/* End Small Bussiness Button */}

          {/* Payment Details Section */}
          <Grid item container>
            <Box my={1} fontWeight="bold" fontSize={25} mb={3}>
              Payment details
            </Box>
            {/* Credit Cards */}
            <Grid item container justify="space-between" xs={12}>
              <Box
                display="grid"
                alignItems="center"
                gridTemplateColumns="1fr auto 5fr 1fr"
                gridGap={15}
              >
                <Box color="warning.main">
                  <CreditCardSVG />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  <Box fontWeight="bold">Credit Card</Box>
                  <Box color="text.secondary">2344 xxxx xxxx 8880</Box>
                </Box>
                <div></div>
                <Box width="130%">
                  <TextField
                    fullWidth
                    id="standard-number"
                    placeholder="CVC"
                    type="number"
                    variant="outlined"
                    size="small"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item container justify="space-between" xs={12}>
              <Box
                display="grid"
                alignItems="center"
                gridTemplateColumns="1fr auto 5fr 1fr"
                gridGap={15}
              >
                <Box color="primary.main">
                  <CreditCardSVG />
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-evenly"
                >
                  <Box fontWeight="bold">Credit Card</Box>
                  <Box color="text.secondary">2344 xxxx xxxx 8880</Box>
                </Box>
                <div></div>
                <Box width="130%">
                  <TextField
                    fullWidth
                    id="standard-number"
                    placeholder="CVC"
                    type="number"
                    variant="outlined"
                    size="small"
                    value="88"
                  />
                </Box>
              </Box>
            </Grid>
            <Box
              my={3}
              fontWeight="bold"
              color="#7535FF"
              fontSize={20}
              width="100%"
              letterSpacing={2}
            >
              ADD PAYMENT METHOD
            </Box>
            <Box width="100%">
              <TextField
                placeholder="Email address"
                type="text"
                variant="outlined"
                size="normal"
                fullWidth
              />
            </Box>
            <Box my={3} width="100%" bgcolor="#5E00FF">
              <Button
                size="large"
                variant="contained"
                fullWidth
                endIcon={
                  <ArrowForward style={{ color: "white", fontSize: 20 }} />
                }
                style={{ background: "inherit", padding: 30 }}
              >
                <Box fontWeight="bold" color="white" fontSize={20}>
                  Proceed to payment
                </Box>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr 1fr",
          alignItems: "center",
          gap: 20,
          margin: "20px 20px 20px",
        }}
      >
        {/* Profile */}
        <Card raised style={{ height: "100%", borderRadius: 10 }}>
          <Box
            style={{
              height: "20%",
              position: "relative",
              border: "4px solid white",
            }}
          >
            <img
              src="https://images.unsplash.com/photo-1448375240586-882707db888b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              style={{
                objectFit: "cover",
                height: "100%",
                width: "100%",
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
              }}
            />
            <Avatar
              style={{
                position: "absolute",
                width: 80,
                height: 80,
                top: "40%",
                left: "40%",
                border: "4px solid white",
                marginBottom: 20,
              }}
              alt="Remy Sharp"
              src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
            />
            {/* Profile info 1 */}
            <Box
              display="flex"
              position="absolute"
              pt={6}
              width="100%"
              mx="auto"
              flexDirection="column"
              textAlign="center"
            >
              <Box fontWeight="bold" fontSize={24} gutterBottom>
                Thomas Roberts
              </Box>
              <Box gutterBottom color="text.secondary">
                Los Angeles
              </Box>
              <Button
                variant="contained"
                size="small"
                style={{
                  borderRadius: 50,
                  background: "#5E00FF",
                  width: "30%",
                  color: "white",
                  margin: "20px auto 40px",
                  padding: "10px 0",
                  fontWeight: "bold",
                  fontSize: 14,
                }}
              >
                Pro Level
              </Button>
            </Box>
          </Box>
          {/* End Profile Info 1 */}
          {/* Profile Info 2 */}
          <Box
            display="flex"
            position="relative"
            top="55%"
            justifyContent="space-evenly"
            textAlign="center"
          >
            {/* Followers */}
            <Box display="flex" flexDirection="column">
              <Box color="text.secondary" fontSize={14}>
                Followers
              </Box>
              <Box fontWeight={400} fontSize={24}>
                980
              </Box>
            </Box>
            {/* Projects */}
            <Box display="flex" flexDirection="column">
              <Box color="text.secondary" fontSize={14}>
                Projects
              </Box>
              <Box fontWeight={400} fontSize={24}>
                142
              </Box>
            </Box>
            {/* Rank */}
            <Box display="flex" flexDirection="column">
              <Box color="text.secondary" fontSize={14}>
                Rank
              </Box>
              <Box fontWeight={400} fontSize={24}>
                129
              </Box>
            </Box>
          </Box>
        </Card>
        {/* Profile 2 */}
        <Card raised style={{ height: "100%", borderRadius: 10 }}>
          {/* Price Select */}
          <Grid container display="flex" style={{ padding: 30 }}>
            <Grid item xs={12}>
              <Box fontWeight="bold" fontSize={24} my={1}>
                Set up your pricing
              </Box>
            </Grid>
            <Box fontSize={16} color="grey" my={1}>
              Please set up your hourly or fixed rate so that the client is
              aware of your pricing.
            </Box>
          </Grid>
          {/* Price Select Buttons */}
          <Grid container xs={12} justify="space-around">
            <Box width="40%">
              {/* Hourly Button */}
              <ToggleButton
                fullWidth
                variant="outlined"
                color="primary"
                style={{
                  padding: 20,
                  width: "100%",
                  background: "#F2F2FF",
                  border: "2px solid #C1B6FF",
                }}
                classes={{
                  root: classes.buttonLabel,
                }}
                selected={true}
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-clock-history"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8.515 1.019A7 7 0 0 0 8 1V0a8 8 0 0 1 .589.022l-.074.997zm2.004.45a7.003 7.003 0 0 0-.985-.299l.219-.976c.383.086.76.2 1.126.342l-.36.933zm1.37.71a7.01 7.01 0 0 0-.439-.27l.493-.87a8.025 8.025 0 0 1 .979.654l-.615.789a6.996 6.996 0 0 0-.418-.302zm1.834 1.79a6.99 6.99 0 0 0-.653-.796l.724-.69c.27.285.52.59.747.91l-.818.576zm.744 1.352a7.08 7.08 0 0 0-.214-.468l.893-.45a7.976 7.976 0 0 1 .45 1.088l-.95.313a7.023 7.023 0 0 0-.179-.483zm.53 2.507a6.991 6.991 0 0 0-.1-1.025l.985-.17c.067.386.106.778.116 1.17l-1 .025zm-.131 1.538c.033-.17.06-.339.081-.51l.993.123a7.957 7.957 0 0 1-.23 1.155l-.964-.267c.046-.165.086-.332.12-.501zm-.952 2.379c.184-.29.346-.594.486-.908l.914.405c-.16.36-.345.706-.555 1.038l-.845-.535zm-.964 1.205c.122-.122.239-.248.35-.378l.758.653a8.073 8.073 0 0 1-.401.432l-.707-.707z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8 1a7 7 0 1 0 4.95 11.95l.707.707A8.001 8.001 0 1 1 8 0v1z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.5 3a.5.5 0 0 1 .5.5v5.21l3.248 1.856a.5.5 0 0 1-.496.868l-3.5-2A.5.5 0 0 1 7 9V3.5a.5.5 0 0 1 .5-.5z"
                  />
                </svg>
                <Box fontWeight="bold">Hourly</Box>
              </ToggleButton>
            </Box>
            <Box width="40%">
              {/* Fixed Button */}
              <ToggleButton
                fullWidth
                variant="outlined"
                color="primary"
                style={{ padding: 20, width: "100%" }}
                classes={{
                  root: classes.buttonLabel,
                }}
              >
                <svg
                  width="2em"
                  height="2em"
                  viewBox="0 0 16 16"
                  class="bi bi-file-earmark-check"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
                  <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
                  <path
                    fill-rule="evenodd"
                    d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"
                  />
                </svg>
                <Box fontWeight="bold">Fixed</Box>
              </ToggleButton>
            </Box>
          </Grid>
          {/* End Price Select Buttons */}
          <Box display="flex" width="100%" px={5} py={3} position="relative">
            <Box fontWeight="400" fontSize={35}>
              {sliderValue}
              <span
                style={{ fontSize: 16, fontWeight: "normal", color: "grey" }}
              >
                {" "}
                /year
              </span>
            </Box>
            <Box
              position="absolute"
              top={30}
              left={30}
              fontWeight="normal"
              color="text.secondary"
            >
              $
            </Box>
          </Box>
          <Box width="85%" mx="auto">
            <Slider
              value={sliderValue}
              onChange={handleSliderChange}
              classes={{
                thumb: classes.thumb,
                track: classes.track,
                rail: classes.rail,
              }}
              min={20}
              max={200}
              marks={[
                {
                  value: 20,
                  label: "$20",
                },
                {
                  value: 200,
                  label: "$200",
                },
              ]}
              aria-labelledby="continuous-slider"
            />
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default App;
