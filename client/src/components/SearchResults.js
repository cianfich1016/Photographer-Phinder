import React, { useState } from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { teal, indigo } from '@mui/material/colors';
import Link from "@mui/material/Link";
import Profile from "./Profile"

const primary = indigo[500]
const primaryLight = indigo[200]
const primaryDark = indigo[900]
const secondary = teal[500]
const secondaryLight = teal[200]

const SearchResults = (props) => {

    const [photographer, setPhotographer] = useState('');

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        if (!photographer) {
            return false;
        }

        try {
            const response = await /* fetch call for single profile*/(photographer);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }
            setPhotographer(response.data);
        } catch (err) {
            console.error(err);
        }
        return (
            <div>
                {/* Pass our results to the SearchResults component to map over */}
                <Profile results={photographer} />
            </div>
        );
    };

    return (
        <Container maxWidth="xxl"
            sx={{
                bgcolor: secondaryLight,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}>
            {
                props.photographers.map((photographer) => (
                    <Card sx={{ maxWidth: 345 }} key={photographer.id}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={photographer.image}
                                alt=""
                            />
                            <CardContent sx={{
                                bgcolor: primaryLight
                            }}>
                                <Typography gutterBottom variant="h5" component="div">
                                    {photographer.business}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary.dark" onSubmit={handleFormSubmit}>
                                <Link href="/profile" color="inherit"></Link>
                                Select
                            </Button>
                        </CardActions>
                    </Card>
                ))
            }
        </Container>
    )
}

export default SearchResults;