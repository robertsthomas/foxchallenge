import {
  Avatar,
  Box,
  Button,
  Card,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import DirectionsBoatTwoToneIcon from "@material-ui/icons/DirectionsBoatTwoTone";
import ArrowForward from "@material-ui/icons/ArrowForward";

function App() {
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
        gridTemplateColumns: "2fr 1fr",
      }}
    >
      <Card
        raised
        style={{
          height: "90vh",
          padding: 30,
          margin: 20,
          borderRadius: 10,
        }}
      >
        <Grid container style={{ width: "90%", margin: "0 auto" }}>
          <Grid item>
            <Typography gutterBottom variant="h5" style={{ fontWeight: 800 }}>
              Upgrade your plan
            </Typography>
            <Typography
              gutterBottom
              style={{
                width: "90%",
                fontSize: 20,
                fontWeight: "light",
                color: "grey",
              }}
            >
              Please make the payment to start enjoying all the features of our
              premium plan as soon as possible.
            </Typography>
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
                      style={{ color: "grey", fontWeight: "100", fontSize: 16 }}
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
            <Box my={1} fontWeight="bold" fontSize={20} mb={3}>
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
                <Box>
                  <TextField
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
                <Box>
                  <TextField
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
              color="info.main"
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
            <Box my={3} width="100%" bgcolor="info.main">
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
                  width: "35%",
                  color: "white",
                  margin: "20px auto 40px",
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
        <Card raised style={{ height: "100%", borderRadius: 10 }}>
          bottom
        </Card>
      </div>
    </div>
  );
}

export default App;
