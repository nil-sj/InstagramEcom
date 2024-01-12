
import "./style.css";
import React, { Fragment } from "react";
import {SwipeCarousel} from "../components/Slider"

import ProductPlacement from "@/components/ProductPlacement";


// Because this is an inframe, so the SSR mode doesn't not do well here.
// It will work on real devices.
const App = () => {
  return (
    <Fragment>
      <SwipeCarousel/>
      <ProductPlacement/>
    </Fragment>
  );
};
export default App;
