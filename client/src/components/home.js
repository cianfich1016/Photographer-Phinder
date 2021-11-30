import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
// import Link from "@mui/material/Link";
import { teal, indigo } from "@mui/material/colors";
import { findByCategory, findByState } from "../utils/API";
import SearchResults from "./SearchResults";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import { commerce } from "../lib/commerce";

// import React, { useState } from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormHelperText from '@mui/material/FormHelperText';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
// import Button from '@mui/material/Button';
// import Link from "@mui/material/Link";
// import { teal, indigo } from '@mui/material/colors';
// import { findByState } from '../utils/API'
// import SearchResults from './SearchResults';
// import Profile from "./Profile"
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import { Typography } from '@mui/material';
// import { CardActionArea, CardActions } from '@mui/material';
// // import Paper from '@mui/material/Paper'



// const primary = indigo[500];
// const primaryLight = indigo[200];
// const primaryDark = indigo[900];
// const secondary = teal[500];
// const secondaryLight = teal[200];

// const HomePage = () => {
//     const [search, setSearch] = useState('');
//     console.log(search)
//     // const [photoType, setPhotoType] = useState('');
//     // const [location, setLocation] = useState('');

//     const [photographers, setPhotographers] = useState([])

//     const handleSearchChange = (event) => {
//         setSearch(event.target.value);
//     };

//     // const handleLocationChange = (event) => {
//     //     setLocation(event.target.value);
//     //     //fetch call and page change
//     // };

//     // const handleTypeFormSubmit = async (event) => {
//     //     event.preventDefault();

//     //     if (!search) {
//     //         return false;
//     //     }

//     //     try {
//     //         const response = await findByCategory(search);

//     //         if (!response.ok) {
//     //             throw new Error('something went wrong!');
//     //         }
//     //         setPhotographers(response.data);
//     //         setSearch('');
//     //     } catch (err) {
//     //         console.error(err);
//     //     }
//     //     return (
//     //         <div>
//     //             {/* Pass our results to the SearchResults component to map over */}
//     //             <SearchResults results={photographers} />
//     //         </div>
//     //     );
//     // };

//     const handleLocationFormSubmit = async (event) => {
//         event.preventDefault();

//         if (!search) {
//             return false;
//         }

//         try {
//             const response = await findByState(search);

//             if (!response.ok) {
//                 throw new Error('something went wrong!');
//             }
//             const { items } = await response.json();

//             const photographerData = items.map((photographer) => ({
//                 id: photographer.id,
//                 companyName: photographer.companyName,
//                 image: photographer.image,
//                 photoType: photographer.photoType
//             }));

//             setPhotographers(photographerData);
//             setSearch('');
//         } catch (err) {
//             console.error(err);
//         }
//         // return (
//         //     <div>
//         //         {/* Pass our results to the SearchResults component to map over */}
//         //         <SearchResults results={} />
//         //     </div>
//         // );
//     };

//     const handleFormSubmit = async (event) => {
//         event.preventDefault();

//         const choosePhotographer = photographers.find((photographer) => photographer.photographer.id === photographer.id);


//         if (!photographers) {
//             return false;
//         }

//         try {
//             const response = await /* fetch call for single profile*/(choosePhotographer);

//             if (!response.ok) {
//                 throw new Error('something went wrong!');
//             }
//             setPhotographers(choosePhotographer.id);
//         } catch (err) {
//             console.error(err);
//         }
//         return (
//             <div>
//                 {/* Pass our results to the Profile component to display*/}
//                 <Profile results={photographers} />
//             </div>
//         );
//     };


const primary = indigo[500];
const primaryLight = indigo[200];
const primaryDark = indigo[900];
const secondary = teal[500];
const secondaryLight = teal[200];

const HomePage = ({ products }) => {
  const [search, setSearch] = useState("");
  // // const [photoType, setPhotoType] = useState('');
  // // const [location, setLocation] = useState('');

  const [photographers, setPhotographers] = useState([]);

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // // const handleLocationChange = (event) => {
  // //     setLocation(event.target.value);
  // //     //fetch call and page change
  // // };

  const handleTypeFormSubmit = async (event) => {
    event.preventDefault();

    if (!search) {
      return false;
    }

    try {
      const response = await commerce.products.list({
        category_slug: [search],
      });
      console.log(response);
      if (!response.ok) {
        throw new Error("something went wrong!");
      }
      setPhotographers(response.data);
      setSearch("");
    } catch (err) {
      console.error(err);
    }
    return (
      <div>
        {/* Pass our results to the SearchResults component to map over */}
        <SearchResults results={photographers} />
      </div> )};
    //     <Container maxWidth="xxl"
    //         sx={{
    //             bgcolor: secondaryLight,
    //         }}>
    //         <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
    //             {/* <Grid item xs={6}>
    //         <Box sx={{
    //         display: 'flex',
    //         justifyContent: 'center',
    //         p: 1,
    //         m: 1,
    //         bgcolor: primaryLight,
    //         borderStyle: "solid",
    //         borderColor: primaryDark,
    //         borderWidth: "5px",
    //         borderRadius: "10px"
    //     }}> */}
    //             {/* <FormControl className="type"
    //                         onSubmit={}
    //                         sx={{
    //                             m: 1,
    //                             minWidth: 120,
    //                         }}>
    //                         <h1>Photographer Type</h1>
    //                         <InputLabel id="demo-simple-select-helper-label"></InputLabel>
    //                         <Select
    //                             labelId="demo-simple-select-helper-label"
    //                             id="demo-simple-select-helper"
    //                             value={}
    //                             label="photoType"
    //                             onChange={}
    //                         >
    //                             <MenuItem value="Type" >
    //                                 <em>None</em>
    //                             </MenuItem>
    //                             <MenuItem value={"Wedding"}>Wedding</MenuItem>
    //                             <MenuItem value={"Maternity"}>Maternity</MenuItem>
    //                             <MenuItem value={"Family"}>Family</MenuItem>
    //                             <MenuItem value={"HeadShot"}>Head Shots</MenuItem>
    //                             <MenuItem value={"Pet"}>Pet</MenuItem>
    //                             <MenuItem value={"Other"}>Other</MenuItem>
    //                         </Select>
    //                         <FormHelperText>Photography Type</FormHelperText>
    //                         <Button variant="contained"
    //                             sx={{
    //                                 bgcolor: primaryDark,
    //                             }}>
    //                             Search <Link href="./searchresults"> </Link>
    //                         </Button>
    //                     </FormControl>
    //                 </Box> */}
    //             {/* </Grid> */}
    //             <Grid item xs={12}>
    //                 <Box sx={{
    //                     display: 'flex',
    //                     justifyContent: 'center',
    //                     p: 1,
    //                     m: 1,
    //                     bgcolor: primaryLight,
    //                     borderStyle: "solid",
    //                     borderColor: primaryDark,
    //                     borderWidth: "5px",
    //                     borderRadius: "10px"
    //                 }}>
    //                     <form>
    //                         <FormControl className="state"
    //                             // onSubmit={handleLocationFormSubmit}
    //                             sx={{ m: 1, minWidth: 120 }}>
    //                             <h1>Search Photographes by State</h1>
    //                             <InputLabel id="demo-simple-select-helper-label"></InputLabel>
    //                             <Select
    //                                 labelId="demo-simple-select-helper-label"
    //                                 id="demo-simple-select-helper"
    //                                 value={search}
    //                                 label="location"
    //                                 onChange={handleSearchChange}
    //                             >
    //                                 <MenuItem value="Location">
    //                                     <em>None</em>
    //                                 </MenuItem>
    //                                 <MenuItem value={"Alabama"}>Alabama</MenuItem>
    //                                 <MenuItem value={"Alaska"}>Alaska</MenuItem>
    //                                 <MenuItem value={"Arizona"}>Arizona</MenuItem>
    //                                 <MenuItem value={"Arkansas"}>Arkansas</MenuItem>
    //                                 <MenuItem value={"California"}>California</MenuItem>
    //                                 <MenuItem value={"Colorado"}>Colorado</MenuItem>
    //                                 <MenuItem value={"Connecticut"}>Connecticut</MenuItem>
    //                                 <MenuItem value={"Delaware"}>Delaware</MenuItem>
    //                                 <MenuItem value={"Florida"}>Florida</MenuItem>
    //                                 <MenuItem value={"Georgia"}>Georgia</MenuItem>
    //                                 <MenuItem value={"Hawaii"}>Hawaii</MenuItem>
    //                                 <MenuItem value={"Idaho"}>Idaho</MenuItem>
    //                                 <MenuItem value={"Illinois"}>Illinois</MenuItem>
    //                                 <MenuItem value={"Indiana"}>Indiana</MenuItem>
    //                                 <MenuItem value={"Iowa"}>Iowa</MenuItem>
    //                                 <MenuItem value={"Kansas"}>Kansas</MenuItem>
    //                                 <MenuItem value={"Kentucky"}>Kentucky</MenuItem>
    //                                 <MenuItem value={"Louisiana"}>Louisiana</MenuItem>
    //                                 <MenuItem value={"Maine"}>Maine</MenuItem>
    //                                 <MenuItem value={"Maryland"}>Maryland</MenuItem>
    //                                 <MenuItem value={"Massachusetts"}>Massachusetts</MenuItem>
    //                                 <MenuItem value={"Michigan"}>Michigan</MenuItem>
    //                                 <MenuItem value={"Minnesota"}>Minnesota</MenuItem>
    //                                 <MenuItem value={"Mississippi"}>Mississippi</MenuItem>
    //                                 <MenuItem value={"Missouri"}>Missouri</MenuItem>
    //                                 <MenuItem value={"Montana"}>Montana</MenuItem>
    //                                 <MenuItem value={"Nebraska"}>Nebraska</MenuItem>
    //                                 <MenuItem value={"Nevada"}>Nevada</MenuItem>
    //                                 <MenuItem value={"New Hampshire"}>New Hampshire</MenuItem>
    //                                 <MenuItem value={"New Jersey"}>New Jersey</MenuItem>
    //                                 <MenuItem value={"New Mexico"}>New Mexico</MenuItem>
    //                                 <MenuItem value={"New York"}>New York</MenuItem>
    //                                 <MenuItem value={"North Carolina"}>North Carolina</MenuItem>
    //                                 <MenuItem value={"North Dakota"}>North Dakota</MenuItem>
    //                                 <MenuItem value={"Ohio"}>Ohio</MenuItem>
    //                                 <MenuItem value={"Oklahoma"}>Oklahoma</MenuItem>
    //                                 <MenuItem value={"Oregon"}>Oregon</MenuItem>
    //                                 <MenuItem value={"Pennsylvania"}>Pennsylvania</MenuItem>
    //                                 <MenuItem value={"Rhode Island"}>Rhode Island</MenuItem>
    //                                 <MenuItem value={"South Carolina"}>South Carolina</MenuItem>
    //                                 <MenuItem value={"South Dakota"}>South Dakota</MenuItem>
    //                                 <MenuItem value={"Tennessee "}>Tennessee</MenuItem>
    //                                 <MenuItem value={"Texas"}>Texas</MenuItem>
    //                                 <MenuItem value={"Utah"}>Utah</MenuItem>
    //                                 <MenuItem value={"Vermont"}>Vermont</MenuItem>
    //                                 <MenuItem value={"Virginia"}>Virginia</MenuItem>
    //                                 <MenuItem value={"Washington"}>Washington</MenuItem>
    //                                 <MenuItem value={"West Virginia"}>West Virginia</MenuItem>
    //                                 <MenuItem value={"Wisconsin"}>Wisconsin</MenuItem>
    //                                 <MenuItem value={"Wyoming"}>Wyoming</MenuItem>
    //                             </Select>
    //                             <FormHelperText>Location</FormHelperText>
    //                             {/* <Link href="/searchresults"> */}
    //                             <Button variant="contained"
    //                                 onClick={handleLocationFormSubmit}
    //                                 sx={{
    //                                     bgcolor: primaryDark,
    //                                 }}> Search
    //                             </Button>
    //                             {/* </Link> */}
    //                         </FormControl>
    //                     </form>
    //                 </Box>
    //             </Grid>
    //         </Grid>
    //         <Grid item xs={12}>
    //             <Box
    //                 sx={{
    //                     display: "flex",
    //                     justifyContent: 'space-around',
    //                     flexDirection: "row",
    //                     flexWrap: "nowrap"
    //                 }}>
    //                 <img className="homeImage" src="/image/pexels-andre-furtado-1264210.jpg" alt="Woman with Camera"></img>
    //                 <img className="homeImage" src="/image/pexels-hamann-la-947785.jpg" alt="Woman with Camera"></img>
    //                 <img className="homeImage" src="/image/pexels-element-digital-1051076.jpg" alt="Woman with Camera"></img>
    //             </Box>
    //         </Grid>
    //         <Grid item xs={12}>
    //             <Box sx={{
    //                 display: 'flex',
    //                 justifyContent: 'center',
    //                 p: 1,
    //                 m: 1,
    //                 bgcolor: primaryLight,
    //                 borderStyle: "solid",
    //                 borderColor: primaryDark,
    //                 borderWidth: "5px",
    //                 borderRadius: "10px"
    //             }}>
    //                 <div className="homepagetext">
    //                     <h1> Let us help you capture the perfect photographer to capture your perfect moments...</h1>
    //                     <p> Whether you are celebrating a milestone in your life be it marriage or an edition to the family,
    //                         or are looking to update your headshots, or maybe Fido needs a new portrait on the wall, let Photographer Phinder
    //                         help you find that perfect person who will imortalize your memories!</p>

    //                     <p> Not sure how to start?Photographer Phinder can help narrow the field, just let us know either what state you are looking
    //                         to find a talented photographer or what type of photography you're looking for. We categorize our photographers by their identified
    //                         specialty, choose from:
    //                     </p>
    //                     <ul>
    //                         <li>
    //                             Wedding - Often our wedding photgraphers are also an excellent option if you're looking for engagement photos as well!
    //                         </li>
    //                         <li>
    //                             Maternity/Baby - Looking for someone to caputre Baby before and after the birth?This is where you want to be!
    //                         </li>
    //                         <li>
    //                             Family - Whether it's you and your significant other, or you and the kids, even the entire extended family, we've got you covered
    //                             with our Family Photographers
    //                         </li>
    //                         <li>
    //                             Head Shot - Corporate or Artistic, there are many talented headshot photgraphers in you area!
    //                         </li>
    //                         <li>
    //                             Pet - Don't think that this is just limited to your pup and kitten, you got a horse a pig or even a snake - I'm sure we've got someone
    //                             who'd love to snap their portrait.
    //                         </li>
    //                         <li>
    //                             Other - Something off the beaten path?Maybe your home, car, or airplane - you might be looking for someone right here!
    //                         </li>
    //                     </ul>
    //                     <p> Odds are you'll find the perfect person amoung our talented professionals!</p>
    //                 </div>
    //             </Box>
    //         </Grid>
    //         <Grid item xs={12}>
    //             <Box sx={{
    //                 display: 'flex',
    //                 justifyContent: 'center',
    //                 p: 1,
    //                 m: 1,
    //                 bgcolor: primaryLight,
    //                 borderStyle: "solid",
    //                 borderColor: primaryDark,
    //                 borderWidth: "5px",
    //                 borderRadius: "10px"
    //             }}>
    //                 {
    //                     photographers.map((photographer) => (
    //                         <Card sx={{ maxWidth: 345 }} key={photographer.id}>
    //                             <CardActionArea>
    //                                 <CardMedia
    //                                     component="img"
    //                                     height="140"
    //                                     image={photographer.image}
    //                                     alt=""
    //                                 />
    //                                 <CardContent sx={{
    //                                     bgcolor: primaryLight
    //                                 }}>
    //                                     <Typography gutterBottom variant="h5" component="div">
    //                                         Name : {photographer.companyName}
    //                                         Specialty: {photographer.photoType}
    //                                     </Typography>
    //                                     <Button href="./Profile" onClick={handleFormSubmit}>Select</Button>
    //                                 </CardContent>
    //                             </CardActionArea>
    //                             {/* <CardActions> */}
    //                             {/* </CardActions> */}
    //                         </Card>
    //                     ))
    //                 }
    //             </Box>

    //         </Grid>
    //     </Container >
    // );
  // };

  // const handleLocationFormSubmit = async (event) => {
  //   event.preventDefault();

  //   if (!search) {
  //     return false;
  //   }

  //   try {
  //     const response = await findByState(search);

  //     if (!response.ok) {
  //       throw new Error("something went wrong!");
  //     }

  //     setPhotographers(response.data);
  //     setSearch("");
  //   } catch (err) {
  //     console.error(err);
  //   }
  //   return (
  //     <div>
  //       {/* Pass our results to the SearchResults component to map over */}
  //       <SearchResults results={photographers} />
  //     </div>
  //   );
  // };
  // Need eventlistener on button click to make api call and change page?

  return (
    <Container
      maxWidth="xxl"
      sx={{
        bgcolor: secondaryLight,
      }}
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 4, md: 6 }}>
        <Grid item xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              p: 1,
              m: 1,
              bgcolor: primaryLight,
              borderStyle: "solid",
              borderColor: primaryDark,
              borderWidth: "5px",
              borderRadius: "10px",
            }}
          >
            <FormControl
              className="type"
              onSubmit={handleTypeFormSubmit}
              sx={{
                m: 1,
                minWidth: 120,
              }}
            >
              <h1>Photographer Type</h1>
              <InputLabel id="demo-simple-select-helper-label"></InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={search}
                label="photoType"
                variant="outlined"
                onChange={handleSearchChange}
              >
                <MenuItem value="Type">
                  <em>None</em>
                </MenuItem>
                {/* {categories.map((category) => (
                  <MenuItem key={category.id}>{category.name}</MenuItem>
                ))} */}
                <MenuItem value={"Wedding"}>Wedding</MenuItem>
                <MenuItem value={"Maternity"}>Maternity</MenuItem>
                <MenuItem value={"Family"}>Family</MenuItem>
                <MenuItem value={"HeadShot"}>Head Shots</MenuItem>
                <MenuItem value={"Pet"}>Pet</MenuItem>
                <MenuItem value={"Other"}>Other</MenuItem>
              </Select>
              <FormHelperText>Photography Type</FormHelperText>
              <Button
                variant="contained"
                sx={{
                  bgcolor: primaryDark,
                }}
                // component={Link}
                // to="/"
              >
                Search
              </Button>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1,
            m: 1,
            bgcolor: primaryLight,
            borderStyle: "solid",
            borderColor: primaryDark,
            borderWidth: "5px",
            borderRadius: "10px",
          }}
        >
          <FormControl
            className="type"
            onSubmit={handleTypeFormSubmit}
            sx={{
              m: 1,
              minWidth: 120,
            }}
          >
            <h1> Just want to see all photographer available ?</h1>
            <Button
              variant="contained"
              sx={{
                bgcolor: primaryDark,
              }}
              component={Link}
              to="/products"
            >
              All Photographers
            </Button>
          </FormControl>
        </Box>
      </Grid>

      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: "row",
            flexWrap: "nowrap",
          }}
        >
          <img
            className="homeImage"
            src="/image/pexels-andre-furtado-1264210.jpg"
            alt="Woman with Camera"
          ></img>
          <img
            className="homeImage"
            src="/image/pexels-hamann-la-947785.jpg"
            alt="Woman with Camera"
          ></img>
          <img
            className="homeImage"
            src="/image/pexels-element-digital-1051076.jpg"
            alt="Woman with Camera"
          ></img>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            p: 1,
            m: 1,
            bgcolor: primaryLight,
            borderStyle: "solid",
            borderColor: primaryDark,
            borderWidth: "5px",
            borderRadius: "10px",
          }}
        >
          <div className="homepagetext">
            <h1>
              {" "}
              Let us help you capture the perfect photographer to capture your
              perfect moments...
            </h1>
            <p>
              {" "}
              Whether you are celebrating a milestone in your life be it
              marriage or an edition to the family, or are looking to update
              your headshots, or maybe Fido needs a new portrait on the wall,
              let Photographer Phinder help you find that perfect person who
              will imortalize your memories!
            </p>

            <span>
              {" "}
              Not sure how to start?Photographer Phinder can help narrow the
              field, just let us know either what state you are looking to find
              a talented photographer or what type of photography you're looking
              for. We categorize our photographers by their identified
              specialty, choose from:
              <ul>
                <li>
                  Wedding - Often our wedding photgraphers are also an excellent
                  option if you're looking for engagement photos as well!
                </li>
                <li>
                  Maternity/Baby - Looking for someone to caputre Baby before
                  and after the birth?This is where you want to be!
                </li>
                <li>
                  Family - Whether it's you and your significant other, or you
                  and the kids, even the entire extended family, we've got you
                  covered with our Family Photographers
                </li>
                <li>
                  Head Shot - Corporate or Artistic, there are many talented
                  headshot photgraphers in you area!
                </li>
                <li>
                  Pet - Don't think that this is just limited to your pup and
                  kitten, you got a horse a pig or even a snake - I'm sure we've
                  got someone who'd love to snap their portrait.
                </li>
                <li>
                  Other - Something off the beaten path?Maybe your home, car, or
                  airplane - you might be looking for someone right here!
                </li>
              </ul>
              Odds are you'll find the perfect person amoung our talented
              professionals!
            </span>
          </div>
        </Box>
      </Grid>
    </Container>
  );
};

export default HomePage;
