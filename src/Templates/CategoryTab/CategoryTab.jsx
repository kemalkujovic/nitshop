import React from "react";
import Text from "../../components/Text/Text";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import AddIcon from "@mui/icons-material/Add";
import { colors } from "../../util/theme";
const categories = [
  {
    name: "Sportswear",
    active: false,
  },
  {
    name: "Mens",
    active: false,
  },
  {
    name: "Womens",
    active: false,
  },
  {
    name: "Kids",
    active: false,
  },
  {
    name: "Fashion",
    active: false,
  },
  {
    name: "Households",
    active: false,
  },
  {
    name: "Interiors",
    active: false,
  },
  {
    name: "Clothing",
    active: false,
  },
  {
    name: "Bags",
    active: false,
  },
  {
    name: "Shoes",
    active: false,
  },
];
const subCategory = [
  {
    categoryName: "Sportswear",
    name: "Addidas",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "Sportswear",
    name: "Puma",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Addidas",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Nike",
    active: false,
  },
  {
    categoryName: "Mens",
    name: "Puma",
    active: false,
  },
];
const CategoryTab = () => {
  const styles = {
    container: {
      // width: "100%",
      border: `0.5px solid ${colors.lightGrayColor}`,
      borderRadius: "2px",
      textAlign: "left",
      padding: "15px 20px",
    },
    category: {
      padding: "5px 0px",
      listStyle: "none",
    },
  };

  return (
    <SimplifiedDiv style={styles.container}>
      <ul style={styles.category}>
        {categories.map((cat) => {
          return (
            <li style={styles.category} key={cat.name}>
              {cat.name}
            </li>
          );
        })}
      </ul>
    </SimplifiedDiv>
  );
};

export default CategoryTab;
