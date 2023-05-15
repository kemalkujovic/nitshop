import React, { useContext } from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product4.jpg";
import article3 from "../../assets/images/home/product3.jpg";
import { CartContext } from "../../context/CartContext";
import { generateId } from "../../util/helper";
import { UserContext } from "../../context/UserContext";
const descriptionText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the printing and typesettingtext of the printing and typesettingtext of the printing and typesettingtext of the printing and typesetting";

export const articles = [
  {
    id: generateId(5),
    title: "Article 1",
    description: descriptionText,
    image: article1,
    price: 13,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 2",
    description: descriptionText,
    image: article2,
    price: 23,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 3",
    description: descriptionText,
    image: article3,
    price: 14,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 4",
    description: descriptionText,
    image: article1,
    price: 24,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 5",
    description: descriptionText,
    image: article2,
    price: 13,
    qty: 1,
  },
  {
    id: generateId(5),
    title: "Article 3",
    description: descriptionText,
    image: article3,
    price: 13,
    qty: 1,
  },
];
const ArticlesHomePage = () => {
  const { setItems, items } = useContext(CartContext);
  const { setUser } = useContext(UserContext);
  setUser({ name: "Kemal", lName: "Kujovic" });
  function addArticleHander(article) {
    let existingIndex = items.findIndex((item) => item.id === article.id);
    if (existingIndex >= 0) {
      setItems((previtems) => 
        items.map((item) =>
          item.id === article.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setItems((prev) => [...prev, article]);
    }
  }

  return (
    <SimplifiedDiv style={{}}>
      <Grid container item direction="row" spacing={3}>
        {articles.map((article) => {
          return (
            <Grid item lg={4} md={4}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                price={article.price}
                article={article}
                onClickButton={(value) => addArticleHander(value)}
              />
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
