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
  return (
    <Grid container direction="row">
      <CustomDiv
        bgColor={colors.secondColor}
        width="100%"
        height="30px"
        border="0px"
        display="flex"
        padding="0px 10%"
      >
        <Grid container direction="row">
          <Grid item lg={6}>
            <CustomDiv display="flex" alignItems="center">
              <PhoneIcon
                style={{
                  fontSize: fontSize.normal,
                }}
              />
              <CustomDiv
                margin="0px 0px 0px 3px"
                display="flex"
                alignItems="center"
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
          <Grid item md={6} lg={6}>
            <CustomDiv display="flex" justifyContent="flex-end">
              <SocialIcons />
            </CustomDiv>
          </Grid>
        </Grid>
      </CustomDiv>
    </Grid>
  );
};

export default TopRow;
