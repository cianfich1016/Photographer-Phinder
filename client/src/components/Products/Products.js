import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product.js";
import useStyles from "./style";
import { commerce } from "../../lib/commerce";

const Products = ({ products, onAddToCart }) => {
  const box = useStyles();
  return (
    <main className={box.content}>
      <div className={box.toolbar}>
        <Grid container justifyContent="center" spacing={4}>
          {products.map((photo) => (
            <Grid item key={photo.id} xs={12} sm={6} md={4} lg={3}>
              <Product photo={photo} onAddToCart={onAddToCart} />
            </Grid>
          ))}
        </Grid>
      </div>
    </main>
  );
};
export default Products;
