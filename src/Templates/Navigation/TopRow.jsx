import React from "react";
import Grid from "@mui/material/Grid";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import Text from "../../components/Text/Text";
import { getScreenWidth } from "../../util/helper";
const SocialIcons = () => (
  <>
    <TwitterIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.grayColor,
        margin: "0px 10px",
      }}
    />
    <InstagramIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.grayColor,
        margin: "0px 10px",
      }}
    />
    <FacebookIcon
      style={{
        fontSize: fontSize.normal,
        color: colors.grayColor,
        margin: "0px 10px",
      }}
    />
  </>
);
const TopRow = () => {
  const screenWidth = getScreenWidth();

  const alignItemsInSecondDiv = screenWidth === "SM" ? "center" : "flex-end";
  const alignItemsInFirstDiv = screenWidth === "SM" ? "center" : "flex-start";
  const paddingInDiv = screenWidth === "SM" ? "10px 0px" : "0px";
  const topDivHeight = screenWidth === "SM" ? "auto" : "30px";
  return (
    <Grid container direction="row">
      <CustomDiv
        bgColor={colors.secondColor}
        width="100%"
        height={topDivHeight}
        border="0px"
        display="flex"
        padding="0px 10%"
      >
        <Grid container direction="row">
          <Grid xs={12} sm={12} md={6} item lg={6}>
            <CustomDiv
              display="flex"
              alignItems="center"
              justifyContent={alignItemsInFirstDiv}
            >
              <PhoneIcon
                style={{
                  fontSize: fontSize.normal,
                }}
              />
              <CustomDiv
                margin="0px 0px 0px 3px"
                display="flex"
                alignItems="center"
                justifyContent={alignItemsInSecondDiv}
              >
                <Text textSize={fontSize.small}>+3816333321</Text>
                <EmailIcon
                  style={{
                    fontSize: fontSize.normal,
                    margin: "0px 3px 0px 10px",
                  }}
                />
                <Text textSize={fontSize.small}>info@gmail.com</Text>
              </CustomDiv>
            </CustomDiv>
          </Grid>
          <Grid item md={6} lg={6} xs={12} sm={12}>
            <CustomDiv
              display="flex"
              padding={paddingInDiv}
              justifyContent={alignItemsInSecondDiv}
            >
              <SocialIcons />
            </CustomDiv>
          </Grid>
        </Grid>
      </CustomDiv>
    </Grid>
  );
};

export default TopRow;
