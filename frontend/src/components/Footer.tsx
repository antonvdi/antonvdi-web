import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Copyright() {
  return (
    <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
      {"Copyright © "}
      <Link color="text.secondary" href="https://aiconsultancy.dk/">
        AI Consultancy
      </Link>
      &nbsp;
      {new Date().getFullYear()}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: { xs: 4, sm: 8 },
        py: { xs: 8, sm: 10 },
        textAlign: { sm: "center", md: "left" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>
          <Copyright />
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ display: "inline" }}
          >
            CVR-nr: 4490 3199
          </Typography>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ display: "inline" }}
          >
            anton@irvold.dk
          </Typography>
          <br />
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ display: "inline" }}
          >
            Tlf. +45 42 80 90 73
          </Typography>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ display: "inline" }}
          >
            AIConsultancy.dk
          </Typography>
          <br />
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ display: "inline" }}
          >
            Nyborgvej 69, 1. 2.
          </Typography>
          <Typography sx={{ display: "inline", mx: 0.5, opacity: 0.5 }}>
            &nbsp;•&nbsp;
          </Typography>
          <Typography
            color="text.secondary"
            variant="body2"
            sx={{ display: "inline" }}
          >
            5000 Odense C
          </Typography>
        </div>
        <Stack
          direction="row"
          spacing={1}
          useFlexGap
          sx={{ justifyContent: "left", color: "text.secondary" }}
        >
          <IconButton
            color="inherit"
            size="small"
            href="https://github.com/antonvdi"
            aria-label="GitHub"
            sx={{ alignSelf: "center" }}
          >
            <FacebookIcon />
          </IconButton>
          {/* <IconButton
            color="inherit"
            size="small"
            href="https://x.com/MaterialUI"
            aria-label="X"
            sx={{ alignSelf: "center" }}
          >
            <TwitterIcon />
          </IconButton> */}
          <IconButton
            color="inherit"
            size="small"
            href="https://www.linkedin.com/in/anton-irvold/"
            aria-label="LinkedIn"
            sx={{ alignSelf: "center" }}
          >
            <LinkedInIcon />
          </IconButton>
        </Stack>
      </Box>
    </Container>
  );
}
