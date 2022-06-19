import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import trollFace from "../Troll-Face.png"


export default function ButtonAppBar() {

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{
        background: 'linear-gradient(45deg, #4e54c8, #8f94fb)'
      }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <Box
              component="img"
              sx={{
                height: 30,
                width: 34,
              }}
              alt="Troll Face"
              src={trollFace}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            MemeGenerator
          </Typography>
          <Button sx={{
            display: {
                xs: 'none',
                sm: 'block'
            }
          }} color="inherit">React - Project 3</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
