import React, { useContext } from "react";
import Navigation from "../../Templates/Navigation/Navigation";
import { CartContext } from "../../context/CartContext";
import { UserContext } from "../../context/UserContext";
import ProductsHomePage from "../../Templates/ProductsHomePage/ProductsHomePage";
import Footer from "../../Templates/Footer/Footer";
import CategoryTab from "../../Templates/CategoryTab/CategoryTab";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import Text from "../../components/Text/Text";
import { colors, fontSize, fontWeight } from "../../util/theme";
import ArticleShopPage from "../../Templates/ArticleShopPage/ArticleShopPage";

const ShopScreen = () => {
  const { items } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const styles = {
    container: {
      padding: "0px 10%",
    },
    headingContainer: {
      display: "flex",
      width: "100%",
      textAlign: "center",
      justifyContent: "center",
      padding: "10px 0px",
    },
    headingText: {
      fontSize: fontSize.large,
      color: colors.accentColor,
      fontWeight: fontWeight.mediumBold,
    },
  };

  return (
    <>
      <Navigation />
      <SimplifiedDiv style={styles.container}>
        <Grid container direction="row" spacing={5}>
          <Grid item md={3} lg={3} xs={12} sm={12}>
            <SimplifiedDiv style={styles.headingContainer}>
              <Text style={styles.headingText}>Category</Text>
            </SimplifiedDiv>
            <CategoryTab />
          </Grid>
        <Grid item md={9} lg={9} xs={12} sm={12}>
          <SimplifiedDiv style={styles.headingContainer}>
            <Text style={styles.headingText}>Articles</Text>
          </SimplifiedDiv>
          <ArticleShopPage />
        </Grid>
        </Grid>
      </SimplifiedDiv>
      <Footer />
    </>
  );
};

export default ShopScreen;
