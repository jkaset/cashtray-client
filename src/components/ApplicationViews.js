import React from "react";
import { Route } from "react-router-dom";
import { NonsmokerList} from "./nonsmokers/NonsmokerList.js"
import { NonsmokerProvider } from "./nonsmokers/NonsmokerProvider.js";

export const ApplicationViews = (props) => {
  return <>
    <NonsmokerProvider>
      <Route exact path="/" render={props => <NonsmokerList {...props} />} />
    </NonsmokerProvider>
  
  </>
}