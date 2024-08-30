import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
} from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
      }}
      id="header-ydelser"
    >
      <Container
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: { xs: 3, sm: 6 },
        }}
      >
        <Box
          sx={{
            width: { sm: "100%", md: "60%" },
            textAlign: { sm: "left", md: "center" },
          }}
        >
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            id="header-kontakt"
          >
            Start med AI i dag
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.500" }}>
            ... og kontakt mig ved nedenstående informationer og lad os tage en
            uforpligtende snak.
          </Typography>
        </Box>
        <Card
          sx={{
            minWidth: 400,
            maxWidth: 600,
          }}
        >
          <CardContent>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Avatar
                alt="Your Name"
                src={"/static/images/headshot.jpg"}
                sx={{
                  width: 120,
                  height: 120,
                  marginRight: 2, // Add margin to the right of the avatar
                  border: "2px solid white",
                }}
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Typography variant="h4" component="h1" gutterBottom>
                  Anton Irvold
                </Typography>
                <Typography
                  variant="body1"
                  sx={{ marginBottom: 2 }}
                  textAlign={"left"}
                >
                  Jeg er uddannet softwareingeniør fra Syddansk Universitet, og
                  har arbejdet med AI, app- og webudvikling i flere år. Se min
                  LinkedIn, for at læse mere om min baggrund, og kontakt mig dér
                  eller på mail for at høre mere.
                </Typography>
              </Box>
            </Box>
          </CardContent>
          <CardActions>
            <Button
              startIcon={<></>}
              href="mailto:anton@irvold.dk"
              color="primary"
              target="_blank"
              sx={{ mr: 1 }}
              variant="contained"
            >
              anton@irvold.dk
            </Button>
            <Button
              startIcon={<></>}
              color="info"
              href="https://www.linkedin.com/in/anton-irvold"
              target="_blank"
              variant="contained"
            >
              Connect på LinkedIn
            </Button>
          </CardActions>
        </Card>
      </Container>
    </Box>
  );
}
