import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontSize } from "../../util/theme";
import Text from "../../components/Text/Text";
import SearchBar from "./SearchBar";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { getScreenWidth } from "../../util/helper";
import MenuIcon from "@mui/icons-material/Menu";

const styles = {
  navBar: {
    display: "flex",
    gap: "30px",
    alignItems: "center",
    height: "30px",
  },
  hamburgerButton: {
    display: "grid",
    border: "1px solid",
    borderColor: colors.accentColor,
    borderRadius: "5px",
    widht: "38px",
    height: "38px",
    alignItems: "center",
    alignContent: "center",
    placeContent: "center",
    backgroundColor: "white",
  },
  linkMenu: {
    backgroundColor: color.grayColor,
    textAlign: "left",
  },
};
const LinkBar = (props) => {
  const screenWidth = getScreenWidth();
  const [isOpen, setIsOpen] = useState(false);
  const LinkBarLG = () => (
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
          <Grid item lg={6} display="flex">
            <CustomDiv margin="0px 15px 0px 0px">
              <Text fontSize={fontSize.large} color={colors.orange}>
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

  const LinkBarSM = () => (
    <SimplifiedDiv
      style={{
        display: "block",
        padding: "0px 10px",
      }}
    >
      <SimplifiedDiv
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Grid item xs={6} sm={6} md={6}>
          <SearchBar />
        </Grid>
        <Grid item xs={6} sm={6} md={6}>
          <SimplifiedDiv
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "flex-end",
            }}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={styles.hamburgerButton}
            >
              <MenuIcon
                style={{
                  color: colors.accentColor,
                }}
              />
            </button>
          </SimplifiedDiv>
        </Grid>
      </SimplifiedDiv>
      {isOpen && <SimplifiedDiv style={styles.linkMenu}></SimplifiedDiv>}
    </SimplifiedDiv>
  );

  return screenWidth === "SM" || screenWidth === "MD" ? (
    <LinkBarSM />
  ) : (
    <LinkBarLG />
  );
};

export default LinkBar;
