import React, { useState } from "react";
import artical1 from "../../assets/images/cart/one.png";
import artical2 from "../../assets/images/cart/two.png";
import artical3 from "../../assets/images/cart/three.png";
import { colors, fontSize } from "../../util/theme";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";
const ItemsProduct = () => {
  const [products, setProducts] = useState([
    {
      imgSrc: artical1,
      name: "Colorblock Scuba",
      productId: "Web ID: 1089722",
      price: "$59",
      id: 1,
      quantity: 1,
    },
    {
      imgSrc: artical2,
      name: "Colorblock Scuba",
      productId: "Web ID: 1089722",
      price: "$59",
      id: 2,
      quantity: 1,
    },
    {
      imgSrc: artical3,
      name: "Colorblock Scuba",
      productId: "Web ID: 1089722",
      price: "$59",
      id: 3,
      quantity: 1,
    },
  ]);

  const handlerIncrament = (productId) => {
    const updateProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    setProducts(updateProducts);
  };
  const handlerDecrement = (productId) => {
    const updateProducts = products.map((product) => {
      if (product.id === productId) {
        return { ...product, quantity: product.quantity - 1 };
      } else {
        return product;
      }
    });
    setProducts(updateProducts);
  };
  const removeHandler = (productId) => {
    setProducts((prevItems) =>
      prevItems.filter((product) => productId !== product.id)
    );
  };

  const styles = {
    mainDiv: {
      display: "flex",
      flexDirection: "column",
      border: "1px solid silver",
      margin: "20px 10%",
    },
    divHeader: {
      display: "flex",
      backgroundColor: "orange",
      color: colors.white,
      padding: "10px 20px",
    },
    articleDiv: {
      display: "flex",
      padding: "20px 20px",
      borderBottom: "0.5px solid silver",
    },
    priceDiv: {
      display: "flex",
      alignItems: "center",
    },
    textItems: {
      marginRight: "50px",
    },
    styleButton: {
      backgroundColor: colors.lightGrayColor,
      width: "30px",
      height: "30px",
      border: "none",
      justifyContent: "center",
      color: colors.white,
    },
    styleInput: {
      width: "40px",
      height: "32px",
      textAlign: "center",
    },
  };
  return (
    <SimplifiedDiv style={styles.mainDiv}>
      <Grid container direction="row" lg={12} style={styles.divHeader}>
        <Grid lg={6} md={6} item>
          <Text>Item</Text>
        </Grid>
        <Grid lg={3} md={3} item>
          <SimplifiedDiv style={styles.priceDiv}>
            <Text style={styles.textItems}>Price</Text>
            <Text style={styles.textItems}>Quantity</Text>
          </SimplifiedDiv>
        </Grid>
        <Grid lg={2} md={3} item>
          <Text textAlign="center">Total</Text>
        </Grid>
      </Grid>
      <Grid container lg={12} item direction="column">
        {products.map((data) => {
          return (
            <Grid
              style={styles.articleDiv}
              key={data.id}
              container
              item
              direction="row"
              lg={12}
            >
              <Grid lg={6} md={6} alignItems="center" container item>
                <img style={styles.textItems} src={data.imgSrc} />
                <SimplifiedDiv>
                  <Text fontSize={fontSize.large}>{data.name}</Text>
                  <Text fontSize={fontSize.normal}>{data.productId}</Text>
                </SimplifiedDiv>
              </Grid>
              <Grid
                lg={3}
                md={3}
                item
                container
                direction="row"
                alignItems="center"
              >
                <Text style={styles.textItems}>{data.price}</Text>
                <PrimaryButton
                  onClick={() => handlerIncrament(data.id)}
                  style={styles.styleButton}
                >
                  +
                </PrimaryButton>
                <input style={styles.styleInput} value={data.quantity} />
                <PrimaryButton
                  style={styles.styleButton}
                  onClick={() => handlerDecrement(data.id)}
                >
                  -
                </PrimaryButton>
              </Grid>
              <Grid
                lg={2}
                md={2}
                item
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color={colors.accentColor} textAlign="center">
                  {data.total}
                </Text>
              </Grid>
              <Grid display="flex" item alignItems="center">
                <PrimaryButton
                  onClick={() => removeHandler(data.id)}
                  style={styles.styleButton}
                >
                  X
                </PrimaryButton>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ItemsProduct;
