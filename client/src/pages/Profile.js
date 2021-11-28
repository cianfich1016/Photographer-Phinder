import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Carousel from "react-material-ui-carousel";
// import CarouselSlide from "react-material-ui-carousel";
import Link from "@mui/material/Link";

export default function TitlebarImageList() {
  //   const cards = [1, 2, 3, 4, 5, 6];
  return (
    <main>
      {/* Hero unit */}
      <Box
      // sx={{
      //   bgcolor: "background.paper",
      //   pt: 7,
      //   pb: 5,
      // }}
      >
        <Container maxWidth="lg">
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            paddingTop="20px"
          >
            Simply Class Photography
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Hello! My name is Amy Olson, and I grew up in a small town in
            Southeastern Minnesota. I currently live just north of Rochester,
            Minnesota with my husband. My passion for photography began at a
            young age when I was constantly taking photos of family and friends.
            I finally made it a career, and after several years of experience in
            portrait photography, Simply Class was established in 2010. I
            specialize in natural light photography for all types of sessions
            including weddings, seniors, families, and newborns. I thrive on the
            excitement of each event, capturing those perfect and special
            moments with creativity and class. I offer high-end digital
            photography and am available nationwide and for destination
            weddings. Please contact me by phone or email for more information.
            I'd love to enjoy a cup of coffee with you to discuss details.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button variant="outlined">Edit the post</Button>
            <Button variant="contained">More of my work</Button>
            <Button variant="outlined">Connect with me</Button>
            <Button variant="contained">Make appointment with me</Button>
          </Stack>
        </Container>
      </Box>
      <Container maxWidth="md">
        {/* End hero unit */}
        {/* <Grid container spacing={1}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              {itemData.map((item, i) => (
                <Card
                  key={i}
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={item.img}
                    title={item.title}
                    alt="random"
                  />
                  <CardContent>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.author}</Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View</Button>
                    <Button size="small">Edit</Button>
                  </CardActions>
                </Card>
              ))}
            </Grid>
          ))}
        </Grid> */}
        <Carousel>
          {itemData.map((item, i) => (
            <div>
              <Card>
                <CardMedia
                  component="img"
                  image={item.img}
                  title={item.title}
                  style={{
                    height: "80%",
                    paddingTop: "5%",
                    width: "600",
                  }}
                />
                <CardContent>
                  <Typography>{item.title}</Typography>
                  <Typography>{item.author}</Typography>
                </CardContent>
              </Card>
            </div>
          ))}
        </Carousel>
      </Container>
    </main>
  );
}

const itemData = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
  },
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
  },
  {
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
  },
];
