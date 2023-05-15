import { Grid } from "@mui/material";
import React, { useContext } from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import Text from "../../components/Text/Text";
import PrimaryButton from "../../components/PrimeryButton/PrimeryButton";
import { colors, fontSize } from "../../util/theme";
import { UserContext } from "../../context/UserContext";

const LoginTab = () => {
  const styles = {
    mainDiv: {
      padding: "5% 10%",
    },
    textStyle: {
      fontSize: fontSize.large,
      marginBottom: "20px",
    },
    inputStyle: {
      padding: "10px 5px",
      marginBottom: "15px",
    },
    checkboxWrapper: {
      display: "flex",
      marginBottom: "20px",
      alignItems: "center",
      gap: "5px",
    },
    buttonStyle: {
      width: "120px",
      display: "flex",
      cursor: "pointer",
      justifyContent: "center",
      fontSize: fontSize.medium,
      borderRadius: "5px",
      border: "none",
      color: colors.white,
      backgroundColor: colors.accentColor,
    },
    roundDiv: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: colors.accentColor,
      borderRadius: "50%",
      color: colors.white,
      width: "100px",
      height: "100px",
      marginTop: "30px",
      marginLeft: "60px",
    },
    formStyle: {
      display: "flex",
      flexDirection: "column",
    },
  };
  const { setUser } = useContext(UserContext);

  const submitHandler = (e) => {
    e.preventDefault();
    setUser({
      name: e.target[0].value,
      email: e.target[1].value,
    });
  };
  return (
    <Grid lg={12} style={styles.mainDiv} container item>
      <Grid lg={5} display="flex" flexDirection="column">
        <Text style={styles.textStyle}>Login to your acoount</Text>
        <input
          style={styles.inputStyle}
          type="text"
          placeholder="Name"
          required
        />
        <input
          style={styles.inputStyle}
          type="email"
          placeholder="Email Address"
          required
        />
        <SimplifiedDiv style={styles.checkboxWrapper}>
          <input type="checkbox" />
          <Text>Keep me signed in</Text>
        </SimplifiedDiv>
        <PrimaryButton style={styles.buttonStyle}>Login</PrimaryButton>
      </Grid>
      <Grid lg={2} display="flex">
        <div style={styles.roundDiv}>OR</div>
      </Grid>
      <Grid lg={5} display="flex" flexDirection="column">
        <Text style={styles.textStyle}>New User Signup!</Text>
        <form onSubmit={submitHandler} style={styles.formStyle}>
          <input
            style={styles.inputStyle}
            type="text"
            placeholder="Name"
            required
          />
          <input
            style={styles.inputStyle}
            type="email"
            placeholder="Email Address"
            required
          />
          <input
            style={styles.inputStyle}
            type="password"
            placeholder="Password"
            required
          />
          <PrimaryButton style={styles.buttonStyle}>Signup</PrimaryButton>
        </form>
      </Grid>
    </Grid>
  );
};

export default LoginTab;
