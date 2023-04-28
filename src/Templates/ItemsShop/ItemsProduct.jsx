import React from "react";
import artical1 from "../../assets/images/cart/one.png";
import artical2 from "../../assets/images/cart/two.png";
import artical3 from "../../assets/images/cart/three.png";
import { colors, fontSize } from "../../util/theme";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";
import StyleButton from "../../components/styleButton/styleButton";
const ItemsProduct = () => {
  const articalData = [
    {
      imgSrc: artical1,
      name: "Colorblock Scuba",
      productId: "Web ID: 1089722",
      price: "$59",
      total: "$59",
    },
    {
      imgSrc: artical2,
      name: "Colorblock Scuba",
      productId: "Web ID: 1089722",
      price: "$59",
      total: "$59",
    },
    {
      imgSrc: artical3,
      name: "Colorblock Scuba",
      productId: "Web ID: 1089722",
      price: "$59",
      total: "$59",
    },
  ];

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
      justifyContent: "space-between",
      padding: "10px 50px",
    },
    articleDiv: {
      display: "flex",
      padding: "10px 20px",
      borderBottom: "0.5px solid silver",
      justifyContent: "space-between",
    },
    priceDiv: {
      display: "flex",
      alignItems: "center",
    },
    textItems: {
      marginRight: "50px",
    },
    styleButton: {
      backgroundColor: "gray",
      width: "40px",
      height: "40px",
      border: "0px",
    },
    styleInput: {
      width: "40px",
      height: "32px",
    },
  };

  return (
    <SimplifiedDiv style={styles.mainDiv}>
      <SimplifiedDiv style={styles.divHeader}>
        <Text>Item</Text>
        <SimplifiedDiv style={styles.priceDiv}>
          <Text style={styles.textItems}>Price</Text>
          <Text style={styles.textItems}>Quantity</Text>
        </SimplifiedDiv>
        <Text>Total</Text>
      </SimplifiedDiv>
      <Grid container item direction="column">
        {articalData.map((data) => {
          return (
            <Grid
              style={styles.articleDiv}
              key={data.name}
              container
              item
              direction="row"
            >
              <SimplifiedDiv style={styles.priceDiv}>
                <img src={data.imgSrc} />
                <SimplifiedDiv>
                  <Text>{data.name}</Text>
                  <Text>{data.productId}</Text>
                </SimplifiedDiv>
              </SimplifiedDiv>

              <SimplifiedDiv style={styles.priceDiv}>
                <Text>{data.price}</Text>
                <PrimaryButton style={styles.styleButton}>+</PrimaryButton>
                <input style={styles.styleInput} value={1} />
                <PrimaryButton style={styles.styleButton}>-</PrimaryButton>
              </SimplifiedDiv>
              <Text>{data.total}</Text>
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ItemsProduct;
