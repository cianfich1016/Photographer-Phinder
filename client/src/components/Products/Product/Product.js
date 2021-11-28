import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import useStyles from "./styles";

const Product = ({ photo, onAddToCart }) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={photo.image.url}
        title={photo.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant="h7" gutterBottom>
            {photo.name}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {photo.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: photo.description }}
          variant="body2"
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Card"
          onClick={() => onAddToCart(photo.id, 1)}
        >
          <AddShoppingCartIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
