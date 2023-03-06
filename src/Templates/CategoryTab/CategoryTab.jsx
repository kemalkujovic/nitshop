import React from "react";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { colors } from "../../util/theme";

const CategoryTab = () => {
  const styles = {
    container: {
      width: "100%",
      borderWidth: "0.5px",
      borderColor: colors.lightGray,
      borderRadius: "5px",
      textAlign: "left",
    },
  };
  return (
    <SimplifiedDiv style={styles.container}>
      <p>Grid</p>
    </SimplifiedDiv>
  );
};

export default CategoryTab;
