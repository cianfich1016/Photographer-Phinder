import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


export default function HomePage() {
    const [photoType, setPhotoType] = React.useState('');
    const [location, setLocation] = React.useState('');

    const handleTypeChange = (event) => {
        setPhotoType(event.target.value);
        //fetch call and page change
    };

    const handleLocationChange = (event) => {
        setLocation(event.target.value);
        //fetch call and page change
    };

    // Need eventlistener on button click to make api call and change page?

    return (
        <Container maxWidth="sm">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={3}>
                        <div>
                            <h1>Search by Type of Photographer</h1>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Age</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={photoType}
                                    label="photoType"
                                    onChange={handleTypeChange}
                                >
                                    <MenuItem value="Type">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Wedding"}>Wedding</MenuItem>
                                    <MenuItem value={"Maternity"}>Maternity</MenuItem>
                                    <MenuItem value={"Family"}>Family</MenuItem>
                                    <MenuItem value={"HeadShot"}>Head Shots</MenuItem>
                                    <MenuItem value={"Pet"}>Pet</MenuItem>
                                    <MenuItem value={"Other"}>Other</MenuItem>
                                </Select>
                                <FormHelperText>Photography Type</FormHelperText>
                                <Button variant="contained" href="alskdfjslkafhwoiefnw">Link</Button>
                            </FormControl>
                            <h1>Or, Search by Location of Photographer</h1>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Location</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    value={location}
                                    label="location"
                                    onChange={handleLocationChange}
                                >
                                    <MenuItem value="Location">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={"Alabama"}>Alabama</MenuItem>
                                    <MenuItem value={"Alaska"}>Alaska</MenuItem>
                                    <MenuItem value={"Arizona"}>Arizona</MenuItem>
                                    <MenuItem value={"Arkansas"}>Arkansas</MenuItem>
                                    <MenuItem value={"California"}>California</MenuItem>
                                    <MenuItem value={"Colorado"}>Colorado</MenuItem>
                                    <MenuItem value={"Connecticut"}>Connecticut</MenuItem>
                                    <MenuItem value={"Delaware"}>Delaware</MenuItem>
                                    <MenuItem value={"Florida"}>Florida</MenuItem>
                                    <MenuItem value={"Georgia"}>Georgia</MenuItem>
                                    <MenuItem value={"Hawaii"}>Hawaii</MenuItem>
                                    <MenuItem value={"Idaho"}>Idaho</MenuItem>
                                    <MenuItem value={"Illinois"}>Illinois</MenuItem>
                                    <MenuItem value={"Indiana"}>Indiana</MenuItem>
                                    <MenuItem value={"Iowa"}>Iowa</MenuItem>
                                    <MenuItem value={"Kansas"}>Kansas</MenuItem>
                                    <MenuItem value={"Kentucky"}>Kentucky</MenuItem>
                                    <MenuItem value={"Louisiana"}>Louisiana</MenuItem>
                                    <MenuItem value={"Maine"}>Maine</MenuItem>
                                    <MenuItem value={"Maryland"}>Maryland</MenuItem>
                                    <MenuItem value={"Massachusetts"}>Massachusetts</MenuItem>
                                    <MenuItem value={"Michigan"}>Michigan</MenuItem>
                                    <MenuItem value={"Minnesota"}>Minnesota</MenuItem>
                                    <MenuItem value={"Mississippi"}>Mississippi</MenuItem>
                                    <MenuItem value={"Missouri"}>Missouri</MenuItem>
                                    <MenuItem value={"Montana"}>Montana</MenuItem>
                                    <MenuItem value={"Nebraska"}>Nebraska</MenuItem>
                                    <MenuItem value={"Nevada"}>Nevada</MenuItem>
                                    <MenuItem value={"New Hampshire"}>New Hampshire</MenuItem>
                                    <MenuItem value={"New Jersey"}>New Jersey</MenuItem>
                                    <MenuItem value={"New Mexico"}>New Mexico</MenuItem>
                                    <MenuItem value={"New York"}>New York</MenuItem>
                                    <MenuItem value={"North Carolina"}>North Carolina</MenuItem>
                                    <MenuItem value={"North Dakota"}>North Dakota</MenuItem>
                                    <MenuItem value={"Ohio"}>Ohio</MenuItem>
                                    <MenuItem value={"Oklahoma"}>Oklahoma</MenuItem>
                                    <MenuItem value={"Oregon"}>Oregon</MenuItem>
                                    <MenuItem value={"Pennsylvania"}>Pennsylvania</MenuItem>
                                    <MenuItem value={"Rhode Island"}>Rhode Island</MenuItem>
                                    <MenuItem value={"South Carolina"}>South Carolina</MenuItem>
                                    <MenuItem value={"South Dakota"}>South Dakota</MenuItem>
                                    <MenuItem value={"Tennessee "}>Tennessee</MenuItem>
                                    <MenuItem value={"Texas"}>Texas</MenuItem>
                                    <MenuItem value={"Utah"}>Utah</MenuItem>
                                    <MenuItem value={"Vermont"}>Vermont</MenuItem>
                                    <MenuItem value={"Virginia"}>Virginia</MenuItem>
                                    <MenuItem value={"Washington"}>Washington</MenuItem>
                                    <MenuItem value={"West Virginia"}>West Virginia</MenuItem>
                                    <MenuItem value={"Wisconsin"}>Wisconsin</MenuItem>
                                    <MenuItem value={"Wyoming"}>Wyoming</MenuItem>
                                </Select>
                                <FormHelperText>Location</FormHelperText>
                                <Button variant="contained" href="alskdfjslkafhwoiefnw">Link</Button>
                            </FormControl>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <paper>
                        <img href="/images/pexels-andre-furtado-1264210.jpg" alt="Woman with Camera"></img>
                    </paper>
                </Grid>

                <Grid item xs={3}>

                </Grid>
                <h1> Let us help you capture the perfect photographer to capture your memories...</h1>
                <p> Whether you are celebrating a milestone in your life be it marriage or an edition to the family,
                    or are looking to update your headshots, or maybe Fido needs a new portrait on the wall, let Photographer Phinder
                    help you find that perfect person who will imortalize your memories!</p>

                <p> Not sure how to start? Photographer Phinder can help narrow the field, just let us know either what state you are looking
                    to find a talented photographer or what type of photography you're looking for. We categorize our photographers by their identified
                    specialty, choose from:
                    <ul>
                        <li>
                            Wedding - Often our wedding photgraphers are also an excellent option if you're looking for engagement photos as well!
                        </li>
                        <li>
                            Maternity/Baby - Looking for someone to caputre Baby before and after the birth? This is where you want to be!
                        </li>
                        <li>
                            Family - Whether it's you and your significant other, or you and the kids, even the entire extended family, we've got you covered
                            with our Family Photographers
                        </li>
                        <li>
                            Head Shot - Corporate or Artistic, there are many talented headshot photgraphers in you area!
                        </li>
                        <li>
                            Pet - Don't think that this is just limited to your pup and kitten, you got a horse a pig or even a snake - I'm sure we've got someone
                            who'd love to snap their portrait.
                        </li>
                        <li>
                            Other - Something off the beaten path? Maybe your home, car, or airplane - you might be looking for someone right here!
                        </li>
                    </ul>
                    Odds are you'll find the perfect person amoung our talented professionals!
                </p>
            </Box>
        </Container>
    );
}