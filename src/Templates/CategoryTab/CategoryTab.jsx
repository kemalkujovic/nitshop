import React from "react";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import AddIcon from "@mui/icons-material/Add";
import { colors, fontSize } from "../../util/theme";
import Text from "../../components/Text/Text";
import { useState } from "react";
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
  const [isOpenCategory, setIsOpenCategory] = useState(false);
  const [isActive, setIsActive] = useState(null);
  function onHandler(index) {
    setIsOpenCategory(!isOpenCategory);
    setIsActive(index);
  }
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
    categoryContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    addIconStyle: {
      fontSize: fontSize.medium,
      color: colors.accentColor,
    },
    subCategoryContainer: {
      padding: "0px 10px",
    },
    subCategoryText: {
      fontSize: fontSize.smallPlus,
      color: colors.grayColor,
      padding: "2px 0px",
    },
  };

  return (
    <SimplifiedDiv style={styles.container}>
      <ul style={styles.category}>
        {categories.map((cat, index) => {
          const filteredSubcategories = subCategory.filter(
            (sub) => sub.categoryName === cat.name
          );

          return (
            <>
              <SimplifiedDiv style={styles.categoryContainer}>
                <li style={styles.category} key={cat.name}>
                  {cat.name}
                </li>
                {filteredSubcategories.length > 0 && (
                  <AddIcon
                    style={styles.addIconStyle}
                    onClick={() => onHandler(index)}
                  />
                )}
              </SimplifiedDiv>
              {filteredSubcategories.length > 0 &&
                isActive === index &&
                isOpenCategory && (
                  <SimplifiedDiv style={styles.subCategoryContainer}>
                    {filteredSubcategories.map((sub) => (
                      <Text style={styles.subCategoryText}>{sub.name}</Text>
                    ))}
                  </SimplifiedDiv>
                )}
            </>
          );
        })}
      </ul>
    </SimplifiedDiv>
  );
};

export default CategoryTab;
