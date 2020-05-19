import React from "react";

import Carousel from "../Components/Home/Carousel";
import Category from "../Components/Home/Category";
import Container from "../Components/Home/Container";
import Project from "../Components/Home/Project";
import Testimoni from "../Components/Home/Testimoni";
import Total from "../Components/Home/Total";
import { BrowserRouter as Router, 
          Switch, 
          Route, 
          Link,
          withRouter 
        } from 'react-router-dom'
import Konser from '../Components/Home/Konser'
import Album from '../Components/Home/Album'
import AlatMusik from '../Components/Home/AlatMusik'


function Home() {
  return (
    <div>
        <Carousel />
        <Container />
        <Category />
          <Route exact path="/home">
            <Project />
          </Route>
          <Route path="/home/konser">
            <Konser />
          </Route>
          <Route path="/home/album">
            <Album />
          </Route>
          <Route path="/home/alatmusik">
            <AlatMusik />
          </Route>
        <Total />
        <Testimoni />
    </div>
  );
}

export default withRouter(Home);
