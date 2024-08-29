import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import AppsIcon from "@mui/icons-material/Apps";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import ChatIcon from "@mui/icons-material/Chat";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import LinkIcon from "@mui/icons-material/Link";

const items = [
  {
    icon: <TextFieldsIcon />,
    title: "AI copywriting",
    description:
      "Generer sælgende og engagerende tekster til sociale medier, nyhedsbreve og webindhold ved hjælp af AI, der sikrer, at dit budskab altid rammer plet.",
  },
  {
    icon: <ChatIcon />,
    title: "Chatbot",
    description:
      "Implementer en AI-drevet chatbot, der kan besvare kundernes spørgsmål 24/7 og lette chatten, så dine medarbejdere kan fokusere på mere komplekse forespørgsler.",
  },
  {
    icon: <PhotoLibraryIcon />,
    title: "Computer Vision",
    description:
      "Brug Computer Vision til at analysere billeder og videoer, så du kan identificere objekter, ansigter, tekst og meget mere.",
  },
  {
    icon: <AppsIcon />,
    title: "App-udvikling",
    description:
      "Lancer dine kundevendte AI-løsninger som en app eller web-applikation, der er tilgængelig på tværs af platforme, så dine kunder kan få adgang til dem, uanset hvor de er.",
  },
  {
    icon: <AnalyticsIcon />,
    title: "AI-drevet dataanalyse",
    description:
      "Analyser din virksomheds databaser eller Excel-ark med AI for at identificere mønstre, træffe bedre beslutninger og forudsige fremtidige resultater.",
  },
  {
    icon: <LinkIcon />,
    title: "Integrationer",
    description:
      "Integrér dine IT-systemer med offentlige og private eksterne snitflader og tredjepartsapplikationer for at automatisere processer og forbedre datakvaliteten.",
  },
];

export default function Highlights() {
  return (
    <Box
      id="highlights"
      sx={{
        pt: { xs: 4, sm: 12 },
        pb: { xs: 8, sm: 16 },
        color: "white",
        bgcolor: "grey.900",
      }}
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
          <Typography component="h2" variant="h4" gutterBottom>
            Vi kan tilbyde dig dette...
          </Typography>
          <Typography variant="body1" sx={{ color: "grey.400" }}>
            ... og meget mere. Vi er her for at hjælpe dig med at opnå dine mål,
            uanset om du har brug for en AI løsning, en integration eller noget
            helt tredje. Vi udvikler platformen og værktøjerne, så du kan
            fokusere på at skabe værdi for dine kunder.
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {items.map((item, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Stack
                direction="column"
                component={Card}
                spacing={1}
                useFlexGap
                sx={{
                  color: "inherit",
                  p: 3,
                  height: "100%",
                  borderColor: "hsla(220, 25%, 25%, 0.3)",
                  backgroundColor: "grey.800",
                }}
              >
                <Box sx={{ opacity: "50%" }}>{item.icon}</Box>
                <div>
                  <Typography gutterBottom sx={{ fontWeight: "medium" }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "grey.400" }}>
                    {item.description}
                  </Typography>
                </div>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
