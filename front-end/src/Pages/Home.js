import React from "react";
import Carousel from "../Components/Carousel";
import Category from "../Components/Category";
import Container from "../Components/Container";
import Project from "../Components/Project";
import Testimoni from "../Components/Testimoni";
import Total from "../Components/Total";

function Home() {
  return (
    <div>
      <Carousel />
      <Container />
      <Category />
      <Project />
      <Total />
      <Testimoni />
    </div>
  );
}

export default Home;
