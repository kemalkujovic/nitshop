import React, { useEffect, useState } from "react";
import { fetchAllArticle } from "../../api/userApi";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
import { Grid } from "@mui/material";
import ArticleCard from "../ArticleCard/ArticleCard";
import article1 from "../../assets/images/home/product1.jpg";
import article2 from "../../assets/images/home/product2.jpg";
import article3 from "../../assets/images/home/product3.jpg";
const ArticleShopPage = () => {
  const [articles, setArticles] = useState([]);
  const images = [article1, article2, article3];

  useEffect(() => {
    fetchAllArticle().then((allUsers) => setArticles(allUsers));
  }, []);
  return (
    <SimplifiedDiv style={{}}>
      <Grid container item direction="row" spacing={3}>
        {articles.map((el, index) => {
          const randomNum = Math.floor(Math.random() * 3);
          return (
            <Grid item lg={4} md={4}>
              {/* {images.map((e) => {

                console.log(e[randomNum]); */}
              <ArticleCard
                title={el.title}
                image={images[randomNum]}
                price="56"
              />
              {/* ); */}
              {/* })} */}
            </Grid>
          );
        })}
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticleShopPage;
