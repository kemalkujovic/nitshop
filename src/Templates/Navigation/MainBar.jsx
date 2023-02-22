import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import Logo from "../../assets/images/logo.png";
import Text from "../../components/Text/Text";
import PersonIcon from "@mui/icons-material/Person";
import StarIcon from "@mui/icons-material/Star";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LockIcon from "@mui/icons-material/Lock";
const iconsStyle = {
  fontSize: fontSize.medium,
  color: colors.grayColor,
};

const RightMenu = () => (
  <>
    <CustomDiv
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      height="100%"
    >
      <CustomDiv display="flex" margin="0px 10px">
        <PersonIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
          Account
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <StarIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
          Wishlist
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <LocationSearchingIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
          Checkout
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <ShoppingCartIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
          Shop
        </Text>
      </CustomDiv>
      <CustomDiv display="flex" margin="0px 10px">
        <LockIcon style={iconsStyle} />
        <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
          Login
        </Text>
      </CustomDiv>
    </CustomDiv>
  </>
);
const MainBar = () => {
  return (
    <CustomDiv
      bgColor="white"
      width="100%"
      height="auto"
      border="0px"
      display="flex"
      padding="20px 10%"
    >
      <Grid container direction="row">
        <Grid item lg={6}>
          <img
            src={Logo}
            alt="Logo img"
            style={{
              width: 140,
              height: "auto",
            }}
          />
        </Grid>
        <Grid item lg={6}>
          <RightMenu />
        </Grid>
        <CustomDiv
          width="100%"
          borderBottom="0.2px solid #b3b1b1"
          height="2px"
          margin="20px 0px"
        />
      </Grid>
    </CustomDiv>
  );
};

export default MainBar;
