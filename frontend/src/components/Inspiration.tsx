import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { httpsCallable } from "firebase/functions";
import { functions } from "..";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  CircularProgress,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ReactTyped } from "react-typed";

export default function Inspiration() {
  const [prevExamples, setPrevExamples] = useState<string[]>([]);
  const [example, setExample] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [selectedCompanyType, setSelectedCompanyType] = useState<string | null>(
    null
  );

  const askOpenAI = httpsCallable(functions, "askOpenAI");

  const updateExample = async (
    myBusinessType: string,
    myPrevExamples: string[]
  ) => {
    const result = await askOpenAI({
      prevAnswers: myPrevExamples,
      businessType: myBusinessType ?? "lokal virksomhed",
    });
    const newExample = result.data as string;
    setExample(newExample);
    setPrevExamples((prevExamples) => [...prevExamples, newExample]);
  };

  useEffect(() => {
    updateExample(selectedCompanyType ?? "lokal virksomhed", prevExamples);
  }, []);

  const handleRefresh = (businessType: string) => {
    setIsDisabled(true);
    setExample("");
    updateExample(businessType, prevExamples);

    setTimeout(() => {
      setIsDisabled(false);
    }, 5000);
  };

  const companyTypes: string[] = [
    "Revisor",
    "Bank",
    "Bageri",
    "Restaurant",
    "Supermarked",
    "Tøjbutik",
    "Frisørsalon",
    "Skønhedssalon",
    "Auktionarius",
    "Dyrlæge",
    "Fitnesscenter",
    "Mekaniker",
    "Ejendomsmægler",
    "Håndværker",
    "IT-service",
    "Børnehave",
    "Skole",
    "Webshop",
    "Fotograf",
    "Sygepleje",
    "Kommunikationsbureau",
    "Arkitekt",
    "Advokat",
    "Rengøringsservice",
    "Vinduespudser",
    "Entreprenør",
    "Vagt",
    "Terapeut",
    "Coach",
    "Hotel",
    "Campingplads",
    "Bibliotek",
    "Museum",
    "Biograf",
    "Musikskole",
    "Tandlæge",
    "Optiker",
    "Psykolog",
  ];

  const handleChangeCompanyType = (type: string) => {
    if (selectedCompanyType === type) {
      setSelectedCompanyType(null);
      return;
    }
    setPrevExamples([]);
    setSelectedCompanyType(type);
    handleRefresh(type);
  };

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
          id="header-inspiration"
        >
          Bliv inspireret med kunstig intelligens
        </Typography>
        <Typography variant="body1" sx={{ color: "grey.500" }}>
          Vi har lavet en AI model, som kan generere inspiration til hvad du kan
          bruge AI til. Vælg en type virksomhed, der passer bedst på dig, og lad
          AI'en guide dig. Klik på "Generér" for at få nye, automatiske forslag.
        </Typography>
      </Box>

      <Card sx={{ minWidth: 400, maxWidth: 600 }}>
        <CardContent>
          {companyTypes.map((type) => (
            <Chip
              key={type}
              label={type}
              onClick={() => handleChangeCompanyType(type)}
              variant={selectedCompanyType === type ? "filled" : "outlined"}
              color={selectedCompanyType === type ? "primary" : "default"}
              sx={{ margin: "4px" }}
            />
          ))}
          <Typography variant="h5" component="div" sx={{ mb: 2, mt: 4 }}>
            AI kan hjælpe dig med...
          </Typography>

          <Typography variant="body2" color="text.secondary" component="div">
            <ReactTyped
              strings={[example.toLocaleLowerCase().trim()]}
              typeSpeed={40}
            />
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            startIcon={
              isDisabled ? <CircularProgress size={20} /> : <RefreshIcon />
            }
            onClick={
              !isDisabled
                ? () => handleRefresh(selectedCompanyType ?? "lokal virksomhed")
                : undefined
            }
            disabled={isDisabled}
          >
            Generér
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
