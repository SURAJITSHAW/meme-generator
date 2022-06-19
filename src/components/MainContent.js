import { TextField, Button, Box, Container, Grid } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import defaultMeme from "../memeimg.png";

const MainContent = () => {
  return (
    <>
      <Container maxWidth="sm" style={{ marginTop: "50px" }}>
        <Grid
          container
          spacing={7}
          justify="center"
          style={{ marginBottom: "20px" }}
        >
          <Grid item>
            <TextField
              id="outlined-basic"
              variant="filled"
              placeholder="Shut up"
            />
          </Grid>
          <Grid item>
            <TextField
              id="outlined-basic"
              variant="filled"
              placeholder="and take my money"
            />
          </Grid>
        </Grid>

            <Button
              variant="contained"
              endIcon={<ImageOutlinedIcon />}
              sx={{
                background: "linear-gradient(45deg, #4e54c8, #8f94fb)",
                display: "block",
                width: "70%",
                mx: "auto"
              }}
            >
              Get a new meme image
            </Button>
   

        <Box
          component="img"
          sx={{
            position: "absolute",
            width: "100%",
            height: "auto",
            padding: "30px"
          }}
          alt="Troll Face"
          src={defaultMeme}
        />
      </Container>
    </>
  );
};

export default MainContent;
