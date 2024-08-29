// StreamingText.tsx
import React, { useEffect, useState } from "react";
import { Typography, TypographyProps } from "@mui/material";

interface StreamingTextProps extends TypographyProps {
  speed?: number; // optional prop for speed (default = 50)
  text: string; // prop for text
}

const StreamingText: React.FC<StreamingTextProps> = ({
  speed = 50,
  text,
  ...typographyProps
}) => {
  const [displayedText, setDisplayedText] = useState<string>("");

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      if (index < text.length - 1) {
        setDisplayedText((prev) => prev + text[index]);
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => {
      clearInterval(interval);
      setDisplayedText("");
    };
  }, [text, speed]);

  return <Typography {...typographyProps}>{displayedText}</Typography>;
};

export default StreamingText;
