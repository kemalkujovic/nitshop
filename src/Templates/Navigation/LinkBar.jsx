import React, { useState } from "react";
import { Grid } from "@mui/material";
import CustomDiv from "../../components/CustomDiv/CustomDiv";
import { colors, fontFamily, fontSize } from "../../util/theme";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import Text from "../../components/Text/Text";
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
    backgroundColor: colors.grayColor,
    textAlign: "left",
    padding: "10px 20px",
  },
  links: {
    padding: "10px 0px",
    fontSize: fontSize.normal,
    color: colors.white,
    fontFamily: fontFamily.MontserratBlack,
  },
  linkLG: {
    fontFamily: fontFamily.latoRegular,
    fontSize: fontSize.large,
    color: colors.grayColor,
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
            <SimplifiedDiv style={styles.navBar}>
              <Text style={styles.linkLG}>Home</Text>
              <Text style={styles.linkLG}>Shop</Text>
              <Text style={styles.linkLG}>Blog</Text>
              <Text style={styles.linkLG}>O nama</Text>
              <Text style={styles.linkLG}>Kontakt</Text>
            </SimplifiedDiv>
          </Grid>
          <Grid item lg={6}>
            <CustomDiv
              display="flex"
              alignItems="center"
              justifyContent="flex-end"
              height="100%"
            >
              {/* <SearchBar /> */}
              <TextField
                size="small"
                label="Search"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
              />
            </CustomDiv>
          </Grid>
        </Grid>
      </CustomDiv>
    </>
  );

  const LinkBarSM = ({ open }) => (
    <SimplifiedDiv
      style={{
        display: "block",
        padding: "0px 10px",
        width: "100%",
      }}
    >
      <SimplifiedDiv
        style={{
          display: "flex",
          alignItems: "center",
          margin: "15px 0px",
        }}
      >
        <Grid item xs={6} sm={6} md={6}>
          <TextField
            size="small"
            label="Search"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
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
      {isOpen && (
        <SimplifiedDiv style={styles.linkMenu}>
          <Text style={styles.links}>Home</Text>
          <Text style={styles.links}>Shop</Text>
          <Text style={styles.links}>Blog</Text>
          <Text style={styles.links}>About</Text>
          <Text style={styles.links}>Contact</Text>
        </SimplifiedDiv>
      )}
    </SimplifiedDiv>
  );

  return screenWidth === "SM" || screenWidth === "MD" ? (
    <LinkBarSM />
  ) : (
    <LinkBarLG />
  );
};

export default LinkBar;
