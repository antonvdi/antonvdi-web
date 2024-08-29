import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import StreamingText from "./StreamingText";
import { getFunctions, httpsCallable } from "firebase/functions";

export default function Examples() {
  const functions = getFunctions();
  const helloWorld = httpsCallable(functions, "helloWorld");
  helloWorld().then((result) => {
    // Read result of the Cloud Function.
    /** @type {any} */
    const data = result.data;
    console.log(data);
  });

  return (
    <Container
      id="pricing"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
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
          sx={{ color: "text.primary" }}
        >
          AI kan hjælpe dig med...
        </Typography>
        <StreamingText
          variant="body1"
          sx={{ color: "text.secondary" }}
          text="test"
        />
      </Box>
    </Container>
  );
}
