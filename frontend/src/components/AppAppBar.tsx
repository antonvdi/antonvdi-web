import { styled, alpha } from "@mui/material/styles";
import Box from "@mui/material/Box";
import AppBar, { AppBarProps } from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import MenuItem from "@mui/material/MenuItem";
import Drawer from "@mui/material/Drawer";
import MenuIcon from "@mui/icons-material/Menu";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import AIConsultancyIcon from "./AIConsultancyIcon";
import { useState } from "react";
import { Slide, useScrollTrigger } from "@mui/material";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  backdropFilter: "blur(24px)",
  border: "1px solid",
  borderColor: theme.palette.divider,
  backgroundColor: alpha(theme.palette.background.default, 0.4),
  boxShadow: theme.shadows[1],
  padding: "8px 12px",
}));

export default function AppAppBar(props: AppBarProps) {
  const [open, setOpen] = useState(false);
  const trigger = useScrollTrigger();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const scrollToHeader = (id: string) => {
    const headerElement = document.getElementById(id);
    if (headerElement) {
      headerElement.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <AppBar
        position="fixed"
        sx={{
          boxShadow: 0,
          bgcolor: "transparent",
          backgroundImage: "none",
          mt: 2,
        }}
        {...props}
      >
        <Container maxWidth="lg">
          <StyledToolbar variant="dense" disableGutters>
            <Box
              sx={{ flexGrow: 1, display: "flex", alignItems: "center", px: 0 }}
            >
              <AIConsultancyIcon />
              <Box sx={{ display: { xs: "none", sm: "flex" } }}>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => scrollToHeader("header-inspiration")}
                >
                  Inspiration
                </Button>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => scrollToHeader("header-ydelser")}
                >
                  Ydelser
                </Button>
                <Button
                  variant="text"
                  color="info"
                  size="small"
                  onClick={() => scrollToHeader("header-faq")}
                >
                  FAQ
                </Button>

                <Button
                  variant="text"
                  color="secondary"
                  size="small"
                  sx={{ fontWeight: 700 }}
                  onClick={() => scrollToHeader("header-kontakt")}
                >
                  Kontakt
                </Button>
              </Box>
            </Box>
            <Box sx={{ display: { xs: "flex", sm: "none" } }}>
              <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ p: 2, backgroundColor: "background.default" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <IconButton onClick={toggleDrawer(false)}>
                      <CloseRoundedIcon />
                    </IconButton>
                  </Box>
                  <Divider sx={{ my: 3 }} />
                  <MenuItem
                    onClick={() => scrollToHeader("header-inspiration")}
                  >
                    Inspiration
                  </MenuItem>
                  <MenuItem onClick={() => scrollToHeader("header-ydelser")}>
                    Ydelser
                  </MenuItem>
                  <MenuItem onClick={() => scrollToHeader("header-faq")}>
                    FAQ
                  </MenuItem>
                  <MenuItem onClick={() => scrollToHeader("header-kontakt")}>
                    Kontakt
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </StyledToolbar>
        </Container>
      </AppBar>
    </Slide>
  );
}
