import React, { useContext, useState } from "react";
import { colors, fontSize, fontWeight } from "../../util/theme";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import { CartContext } from "../../context/CartContext";
const ItemsProduct = () => {
  const styles = {
    div: {
      width: "100%",
      margin: "auto",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      padding: "40px 0px",
    },
    grid: {
      width: "80%",
      height: "auto",
      padding: "10px",
      color: colors.white,
      display: "flex",
      justifyContent: "center",
      backgroundColor: colors.accentColor,
      margin: "20px",
    },
    gridWhite: {
      width: "80%",
      backgroundColor: colors.white,
      padding: "5px",
    },

    textStyle: {
      color: colors.black,
    },
    buttonStyle: {
      backgroundColor: colors.secondColor,
      border: 0,
      padding: "10px",
      fontWeight: fontWeight.boldPlus,
      cursor: "pointer",
    },
    inputStyle: {
      width: "23px",
      padding: "7px",
    },
  };

  const { items, setItems } = useContext(CartContext);

  const handleIncrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const handleDecrement = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const handleRemove = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };
  return (
    <SimplifiedDiv style={styles.div}>
      <Grid container direction="row" style={styles.grid}>
        <Grid lg={6}>Item</Grid>
        <Grid lg={2}>Price</Grid>
        <Grid lg={2}>Quantity</Grid>
        <Grid lg={2}>Total</Grid>
      </Grid>
      {items?.map((item) => (
        <Grid key={item.id} container direction="row" style={styles.gridWhite}>
          <Grid lg={2}>
            <img src={item.image} alt={item.name} style={{ width: "80px" }} />
          </Grid>
          <Grid lg={4}>
            <Text style={styles.textStyle}>
              ColorBlock Scuba <br />
              <span
                style={{
                  fontSize: fontSize.optimal,
                }}
              >
                Web ID: 1089772
              </span>
            </Text>
          </Grid>
          <Grid lg={2}>
            <Text style={styles.textStyle}>{item.price + "$"}</Text>
          </Grid>
          <Grid ite lg={2}>
            <button
              style={styles.buttonStyle}
              onClick={() => handleDecrement(item.id)}
            >
              -
            </button>
            <input
              type="number"
              value={item.qty}
              style={styles.inputStyle}
              onChange={() => {}}
            />
            <button
              style={styles.buttonStyle}
              onClick={() => handleIncrement(item.id)}
            >
              +
            </button>
          </Grid>
          <Grid lg={2}>
            <Text style={styles.textStyle}>
              {(item.price * item.qty).toFixed(2) + "$"}
              <button
                style={styles.buttonStyle}
                onClick={() => handleRemove(item.id)}
              >
                X
              </button>
            </Text>
          </Grid>
        </Grid>
      ))}
    </SimplifiedDiv>
  );
};

export default ItemsProduct;
