import { Grid } from "@mui/material";
import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import CategoryTab from "../CategoryTab/CategoryTab";
import Text from "../../components/Text/Text";
const ProductsHomePage = () => {
  const styles = {
    container: {
      padding: "0px 10%",
    },
    headingContainer: {
      width: "100%",
      textAlign: "center",
    },
  };
  return (
    <>
      <SimplifiedDiv style={styles.container}>
        <Grid container direction="row">
          <Grid item md={3} lg={3}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text>Category</Text>
            </SimplifiedDiv>
            <CategoryTab />
          </Grid>
          <Grid item md={9} lg={9}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text>Articles</Text>
            </SimplifiedDiv>
          </Grid>
        </Grid>
      </SimplifiedDiv>
    </>
  );
};

export default ProductsHomePage;
