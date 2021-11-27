import React from 'react'
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { teal, indigo } from '@mui/material/colors';



const primary = indigo[500]
const primaryLight = indigo[200]
const primaryDark = indigo[900]
const secondary = teal[500]
const secondaryLight = teal[200]

const SearchResults = (props) => {

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
                            <Button size="small" color="primary.dark">
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