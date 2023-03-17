import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product4.jpg";
import article3 from "../../assets/images/home/product3.jpg";
const descriptionText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry.text of the printing and typesettingtext of the printing and typesettingtext of the printing and typesettingtext of the printing and typesetting";

export const articles = [
  {
    title: "Article 1",
    description: descriptionText,
    image: article1,
    price: "13$",
  },
  {
    title: "Article 2",
    description: descriptionText,
    image: article2,
    price: "23$",
  },
  {
    title: "Article 3",
    description: descriptionText,
    image: article3,
    price: "13$",
  },
  {
    title: "Article 4",
    description: descriptionText,
    image: article1,
    price: "13$",
  },
  {
    title: "Article 5",
    description: descriptionText,
    image: article2,
    price: "13$",
  },
  {
    title: "Article 3",
    description: descriptionText,
    image: article3,
    price: "13$",
  },
];
const ArticlesHomePage = () => {
  return (
    <SimplifiedDiv style={{}}>
      <Grid container direction="row" spacing={3}>
        {articles.map((article) => {
          return (
            <Grid item lg={4} md={4}>
              <ArticleCard
                title={article.title}
                description={article.description}
                image={article.image}
                price={article.price}
              />
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
