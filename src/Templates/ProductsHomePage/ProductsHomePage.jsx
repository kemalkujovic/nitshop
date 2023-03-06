import { Grid } from "@mui/material";
import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import product1 from "../../assets/images/product-details/1.jpg";
import CategoryTab from "../CategoryTab/CategoryTab";
const ProductsHomePage = () => {
  const styles = {
    category: {
      display: "flex",
      height: "auto",
      width: "250px",
      border: "1px solid gray",
      padding: "10px",
      margin: "20px",
    },
    card: {
      width: "10rem",
      height: "auto",
      display: "flex",
      flexDirection: "column",
      border: "1px solid gray",
      padding: "15px",
      textAlign: "center",
    },
  };
  return (
    <>
      <SimplifiedDiv
        style={{
          display: "flex",
          padding: "50px 10%",
        }}
      >
        <Grid item lg={3} direction="row">
          {/* <SimplifiedDiv style={styles.category}>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
              }}
            >
              <li>SPORTSWEAR</li>
              <li>MEANS</li>
              <li>WOMENS</li>
              <li>KIDS</li>
              <li>HOUSEHOLDS</li>
              <li>INTERIORS</li>
              <li>CLOTHING</li>
              <li>BAGS</li>
              <li>SHEOS</li>
            </ul>
          </SimplifiedDiv> */}
          <CategoryTab />
        </Grid>
        <Grid item lg={9} container direction="row">
          <SimplifiedDiv
            style={{
              display: "flex",
              margin: "20px",
              gap: "30px",
            }}
          >
            <SimplifiedDiv style={styles.card}>
              <img src={product1} alt="slika" />
              <p>56$</p>
              <p>Easy Polo Black Edition</p>
              <button>Add To Cart</button>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.card}>
              <img src={product1} alt="slika" />
              <p>56$</p>
              <p>Easy Polo Black Edition</p>
              <button>Add To Cart</button>
            </SimplifiedDiv>
            <SimplifiedDiv style={styles.card}>
              <img src={product1} alt="slika" />
              <p>56$</p>
              <p>Easy Polo Black Edition</p>
              <button>Add To Cart</button>
            </SimplifiedDiv>
          </SimplifiedDiv>
        </Grid>
      </SimplifiedDiv>
    </>
  );
};

export default ProductsHomePage;
