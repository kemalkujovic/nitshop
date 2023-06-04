import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import { colors, fontSize, fontWeight } from "../../util/theme";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";

export const CheckoutForm = () => {
  const styles = {
    container: {
      padding: "2% 10%",
    },
    formWrapper: {
      display: "flex",
      flexDirection: "column",
      padding: "0px 10px",
    },
    button: {
      padding: "7px 25px",
      backgroundColor: colors.accentColor,
      color: colors.white,
      fontSize: fontSize.optimal,
      borderRadius: "2px",
    },
    buttonsWrapper: {
      display: "flex",
      gap: "20px",
    },
    inputStyle: {
      border: "none",
      backgroundColor: colors.dirtyGray,
      marginBottom: "10px",
      padding: "15px",
    },
    inputMessage: {
      height: "330px",
      border: "none",
      backgroundColor: colors.dirtyGray,
      color: colors.white,
      marginBottom: "10px",
      padding: "10px",
    },
    wrapperCheckBox: {
      display: "flex",
      alignItems: "center",
    },
    textStyle: {
      fontSize: fontSize.large,
      fontWeight: fontWeight.light,
      color: colors.grayColor,
      marginBottom: "20px",
    },
  };
  return (
    <SimplifiedDiv style={styles.container}>
      <Grid md={12} lg={12} container>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <SimplifiedDiv style={styles.formWrapper}>
            <Text style={styles.textStyle}>Shopper Information</Text>
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="Display Name"
            />
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="User Name"
            />
            <input
              style={styles.inputStyle}
              type="password"
              placeholder="Password"
            />
            <input
              style={styles.inputStyle}
              type="password"
              placeholder="Confirm Password"
            />
            <SimplifiedDiv style={styles.buttonsWrapper}>
              <PrimaryButton style={styles.button}>Get Qoutes</PrimaryButton>
              <PrimaryButton style={styles.button}>Continue</PrimaryButton>
            </SimplifiedDiv>
          </SimplifiedDiv>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <SimplifiedDiv style={styles.formWrapper}>
            <Text style={styles.textStyle}>Bill To</Text>
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="Company Name"
            />
            <input
              style={styles.inputStyle}
              type="email"
              placeholder="Email*"
              required
            />
            <input style={styles.inputStyle} type="text" placeholder="Title" />
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="First Name*"
              required
            />
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="Middle Name"
            />
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="Last Name*"
              required
            />
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="Address 1*"
              required
            />
            <input
              style={styles.inputStyle}
              type="text"
              placeholder="Address 2"
            />
          </SimplifiedDiv>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <SimplifiedDiv style={styles.formWrapper}>
            <Text style={styles.textStyle}>Bill To</Text>
            <input
              style={styles.inputStyle}
              type="number"
              placeholder="Zip / Postal Code*"
              required
            />
            <select style={styles.inputStyle}>
              <option>-- Country --</option>
              <option>Serbia</option>
              <option>Croatia</option>
              <option>Macedonia</option>
            </select>
            <select style={styles.inputStyle}>
              <option>-- State/Region --</option>
              <option>Serbia</option>
              <option>Croatia</option>
              <option>Macedonia</option>
            </select>
            <input
              style={styles.inputStyle}
              type="password"
              placeholder="Confirm Password"
            />
            <input
              style={styles.inputStyle}
              type="number"
              placeholder="Phone*"
              required
            />
            <input
              style={styles.inputStyle}
              type="number"
              placeholder="Mobile Phone"
            />
            <input style={styles.inputStyle} type="text" placeholder="Fax" />
          </SimplifiedDiv>
        </Grid>
        <Grid xs={12} sm={12} md={3} lg={3}>
          <SimplifiedDiv style={styles.formWrapper}>
            <Text style={styles.textStyle}>Shopper Information</Text>
            <textarea
              type="text"
              style={styles.inputMessage}
              placeholder="Notes about your order, Special Notes for Delivery"
            />
            <SimplifiedDiv style={styles.wrapperCheckBox}>
              <input type="checkbox" />
              <Text for="scales">Shipping to bill address</Text>
            </SimplifiedDiv>
          </SimplifiedDiv>
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};
