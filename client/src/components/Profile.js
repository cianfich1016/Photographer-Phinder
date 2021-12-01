import * as React from "react";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
//import Carousel from "react-material-ui-carousel";
// import CarouselSlide from "react-material-ui-carousel";
import Link from "@mui/material/Link";
import { teal, indigo } from "@mui/material/colors";
const primary = indigo[500];
const primaryLight = indigo[200];
const primaryDark = indigo[900];
const secondary = teal[500];
const secondaryLight = teal[200];

//This needs handlers for fetch calls to delete buttons need to be pathed to page to update page

export default function TitlebarImageList() {
  return (
    <main>
      <Container
        maxWidth="xxl"
        sx={{
          bgcolor: secondaryLight,
        }}
      >
        <Box>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
            paddingTop="20px"
            sx={{
              color: primaryDark,
            }}
          >
            Simply Class Photography
          </Typography>
          <Typography
            variant="h5"
            align="center"
            color="text.secondary"
            paragraph
            sx={{
              color: primaryDark,
            }}
          >
            Hello!My name is Amy Olson, and I grew up in a small town in
            Southeastern Minnesota.I currently live just north of Rochester,
            Minnesota with my husband.My passion for photography began at a
            young age when I was constantly taking photos of family and friends.
            I finally made it a career, and after several years of experience in
            portrait photography, Simply Class was established in 2010. I
            specialize in natural light photography for all types of sessions
            including weddings, seniors, families, and newborns.I thrive on the
            excitement of each event, capturing those perfect and special
            moments with creativity and class.I offer high-end digital
            photography and am available nationwide and for destination
            weddings.Please contact me by phone or email for more information.
            I'd love to enjoy a cup of coffee with you to discuss details.
          </Typography>
          <Stack
            sx={{ pt: 4 }}
            direction="row"
            spacing={2}
            justifyContent="center"
          >
            <Button
              sx={{
                bgcolor: primaryDark,
              }}
              variant="contained"
            >
              More of my work
            </Button>
            <Button
              sx={{
                bgcolor: primaryLight,
                color: primaryDark,
                border: primaryDark,
                borderStyle: "solid",
                borderWidth: "1px",
              }}
              variant="outlined"
            >
              Connect with me
            </Button>
            <Button
              sx={{
                bgcolor: primaryDark,
              }}
              variant="contained"
            >
              Make appointment with me
            </Button>
          </Stack>
        </Box>

        <Box
          maxWidth="lg"
          sx={{
            paddingLeft: 90,
            m: 5,
          }}
        >
          {/* <Carousel>
            {itemData.map((item, i) => (
              <div>
                <Card>
                  <CardMedia
                    component="img"
                    image={item.img}
                    title={item.title}
                  // style={{
                  //   height: 1000,
                  //   // paddingTop: "5%",
                  //   width: 1000,
                  // }}
                  />
                  <CardContent>
                    <Typography>{item.title}</Typography>
                    <Typography>{item.author}</Typography>
                  </CardContent>
                </Card>
              </div>
            ))}
          </Carousel> */}
        </Box>
      </Container>
    </main>
  );
}
