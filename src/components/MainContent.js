import { TextField, Button, Box, Container, Grid } from "@mui/material";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import defaultMeme from "../memeimg.png";

const MainContent = () => {
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: "50px" }}>
        <Grid
          container
          spacing={3}
          justify="center"
          style={{ marginBottom: "20px" }}
        >
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              variant="filled"
              placeholder="Shut up"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              id="outlined-basic"
              variant="filled"
              placeholder="and take my money"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              endIcon={<ImageOutlinedIcon />}
              sx={{
                background: "linear-gradient(45deg, #4e54c8, #8f94fb)",
                display: "block",
                width: "100%",
              }}
            >
              Get a new meme image
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Box
              component="img"
              sx={{
                width: "100%",
                height: "auto",
              }}
              alt="Troll Face"
              src={defaultMeme}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default MainContent;
