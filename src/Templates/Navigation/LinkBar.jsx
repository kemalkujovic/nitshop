import React from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import Text from "../../components/Text/Text";
import SearchBar from "./SearchBar";
const LinkBar = (props) => {
  return (
    <>
      <CustomDiv
        bgColor="white"
        width="100%"
        height="auto"
        border="0px"
        display="flex"
        padding="0px 10%"
      >
        <Grid container direction="row">
          <Grid item lg={6} display='flex'>
            <CustomDiv margin="0px 15px 0px 0px">
              <Text fontSize={fontSize.large} color={colors.grayColor}>
                Home
              </Text>
            </CustomDiv>
            <CustomDiv margin="0px 15px 0px 0px">
              <Text fontSize={fontSize.large} color={colors.grayColor}>
                Shop
              </Text>
            </CustomDiv>
            <CustomDiv margin="0px 15px 0px 0px">
              <Text fontSize={fontSize.large} color={colors.grayColor}>
                Blog
              </Text>
            </CustomDiv>
            <CustomDiv margin="0px 15px 0px 0px">
              <Text fontSize={fontSize.large} color={colors.grayColor}>
                O nama
              </Text>
            </CustomDiv>
            <CustomDiv margin="0px 15px 0px 0px">
              <Text fontSize={fontSize.large} color={colors.grayColor}>
                Kontakt
              </Text>
            </CustomDiv>
          </Grid>
          <Grid item lg={6}>
            <CustomDiv
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              height="100%"
            >
              <SearchBar />
            </CustomDiv>
          </Grid>
        </Grid>
      </CustomDiv>
    </>
  );
};

export default LinkBar;