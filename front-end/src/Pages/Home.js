import React from "react";
import Carousel from "../Components/Home/Carousel";
import Category from "../Components/Home/Category";
import Container from "../Components/Home/Container";
import Project from "../Components/Home/Project";
import Testimoni from "../Components/Home/Testimoni";
import Total from "../Components/Home/Total";

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
