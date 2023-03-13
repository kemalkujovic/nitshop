import React from "react";
import ArticleCard from "../ArticleCard/ArticleCard";
import { Grid } from "@mui/material";
import SimplifiedDiv from "../../components/SimplifiedDiv/SimplifiedDiv";
const ArticlesHomePage = () => {
  // POSTAVITI FUNKCIJE KOJE CE IZLISTAVATI ARTIKLE

  return (
    <SimplifiedDiv style={{}}>
      <Grid container gap={5} direction="row">
        <Grid item lg={4} md={4}>
          <ArticleCard />
        </Grid>
        <Grid item lg={4} md={4}>
          <ArticleCard />
        </Grid>
        <Grid item lg={4} md={4}>
          <ArticleCard />
        </Grid>
        <Grid item lg={4} md={4}>
          <ArticleCard />
        </Grid>
        <Grid item lg={4} md={4}>
          <ArticleCard />
        </Grid>
        <Grid item lg={4} md={4}>
          <ArticleCard />
        </Grid>
        <Grid item lg={4} md={4}>
          <ArticleCard />
        </Grid>
      </Grid>
    </SimplifiedDiv>
  );
};

export default ArticlesHomePage;
