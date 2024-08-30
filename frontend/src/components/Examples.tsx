import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import StreamingText from "./StreamingText";
import { httpsCallable } from "firebase/functions";
import { functions } from "..";
import { useEffect, useState } from "react";
import { IconButton } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";

export default function Examples() {
  const [prevExamples, setPrevExamples] = useState<string[]>([]);
  const [example, setExample] = useState<string>("");

  const askOpenAI = httpsCallable(functions, "askOpenAI");

  const updateExample = () => {
    askOpenAI({ prevAnswers: prevExamples })
      .then((result) => {
        setExample(result.data as string);
        setPrevExamples((prevExamples) => [...prevExamples, example]);
      })
      .catch((error) => {
        console.error("Error calling askOpenAI:", error);
      });
  };

  useEffect(() => {
    updateExample();
  }, []);

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
        <Box display="flex" alignItems="center">
          <IconButton
            onClick={updateExample}
            size="small"
            sx={{ top: -5, mr: 2 }}
          >
            <RefreshIcon />
          </IconButton>
          <Typography
            component="h2"
            variant="h4"
            gutterBottom
            sx={{ color: "text.primary" }}
          >
            AI kan hjælpe dig med...
          </Typography>
        </Box>

        <StreamingText
          variant="body1"
          sx={{ color: "text.secondary" }}
          message={example.toLocaleLowerCase().trim()}
        />
      </Box>
    </Container>
  );
}
