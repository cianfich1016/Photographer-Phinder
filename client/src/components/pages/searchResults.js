import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { teal, indigo } from '@mui/material/colors';



const primary = indigo[500]
const primaryDark = indigo[900]
const secondary = teal[500]
const secondaryLight = teal[200]

const SearchResults = (props) => {

    return (
        {
            props.photographers.map((photographer) =>
                <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image=""
                            alt=""
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">

                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary.dark">
                            Select
                        </Button>
                    </CardActions>
                </Card>
            )
        }
    )
}

export default SearchResults