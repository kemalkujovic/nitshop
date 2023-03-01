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
import { getScreenWidth } from "../../util/helper";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
const iconsStyle = {
  fontSize: fontSize.medium,
  color: colors.grayColor,
};

const MainBar = () => {
  const screenWidth = getScreenWidth();
const rightMenuMargin = screenWidth === 'SM' ? '10px 0px' : '0px'
const rightMenuIconMargin = screenWidth === 'SM' ? '0px 5px' : '0px 10px'

  const RightMenu = () => (
    <>
      <CustomDiv
        display="flex"
        alignItems="center"
        justifyContent="flex-end"
        height="100%"
        width='100%'
        margin={rightMenuMargin}
      >
        <CustomDiv display="flex" margin={rightMenuIconMargin}>
          <PersonIcon style={iconsStyle} />
          <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
            Account
          </Text>
        </CustomDiv>
        <CustomDiv display="flex" margin={rightMenuIconMargin}>
          <StarIcon style={iconsStyle} />
          <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
            Wishlist
          </Text>
        </CustomDiv>
        <CustomDiv display="flex" margin={rightMenuIconMargin}>
          <LocationSearchingIcon style={iconsStyle} />
          <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
            Checkout
          </Text>
        </CustomDiv>
        <CustomDiv display="flex" margin={rightMenuIconMargin}>
          <ShoppingCartIcon style={iconsStyle} />
          <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
            Shop
          </Text>
        </CustomDiv>
        <CustomDiv display="flex" margin={rightMenuIconMargin}>
          <LockIcon style={iconsStyle} />
          <Text fontSize={fontSize.smallPlus} color={colors.grayColor}>
            Login
          </Text>
        </CustomDiv>
      </CustomDiv>
    </>
  );

  const alignLogo = screenWidth === "SM" ? "center" : "left";
  const mainDivPadding = screenWidth === 'SM' ? '20px 0px' : '20px 10% 10px'
  return (
    <CustomDiv
      bgColor="white"
      width="100%"
      height="auto"
      border="0px"
      display="flex"
      padding={mainDivPadding}
    >
      <Grid container direction="row">
        <Grid sm={12} xs={12} item lg={6}>
          <SimplifiedDiv style={{
            textAlign: alignLogo
          }}>
          <img
            src={Logo}
            alt="Logo img"
            style={{
              width: 140,
              height: "auto",
            }}
          />
          </SimplifiedDiv>
        </Grid>
        <Grid item lg={6} sm={12} xs={12}>
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
