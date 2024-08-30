import React from "react";
import Typography, { TypographyProps } from "@mui/material/Typography";
import { styled } from "@mui/system";

const StreamingTextContainer = styled("div")({
  display: "inline-block",
  overflow: "hidden",
  whiteSpace: "nowrap",
  animation: "typing 5s steps(40, end) 1",
  "@keyframes typing": {
    "0%": {
      width: "0%",
    },
    "50%": {
      width: "100%",
    },
    "100%": {
      width: "100%",
    },
  },
});

/**
 * Props for StreamingText component.
 */
interface StreamingTextProps extends TypographyProps {
  message: string;
}

/**
 * A component that simulates a streaming effect for a chatbot message using MUI Typography.
 * @param {StreamingTextProps} props - The props for the component.
 * @returns {JSX.Element} - The rendered component.
 */
const StreamingText: React.FC<StreamingTextProps> = ({
  message,
  ...typographyProps
}) => {
  return (
    <StreamingTextContainer>
      <Typography {...typographyProps}>{message}</Typography>
    </StreamingTextContainer>
  );
};

export default StreamingText;
