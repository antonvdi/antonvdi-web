import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { httpsCallable } from "firebase/functions";
import { functions } from "..";
import { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CircularProgress,
} from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
import { ReactTyped } from "react-typed";

export default function Examples() {
  const [prevExamples, setPrevExamples] = useState<string[]>([]);
  const [example, setExample] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState(false);

  const askOpenAI = httpsCallable(functions, "askOpenAI");

  const updateExample = async () => {
    const result = await askOpenAI({ prevAnswers: prevExamples });
    setExample(result.data as string);
    setPrevExamples((prevExamples) => [...prevExamples, example]);
  };

  useEffect(() => {
    updateExample();
  }, []);

  const handleClick = () => {
    setIsDisabled(true);
    setExample("");
    updateExample();

    setTimeout(() => {
      setIsDisabled(false);
    }, 5000);
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
      <Card sx={{ width: 400 }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
            fontStyle={"italic"}
          >
            Genereret af AI
          </Typography>
          <Typography variant="h5" component="div" sx={{ mb: 2 }}>
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
            onClick={!isDisabled ? handleClick : undefined}
            disabled={isDisabled}
          >
            Regenerér
          </Button>
        </CardActions>
      </Card>
    </Container>
  );
}
