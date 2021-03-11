import React from "react";
import { Route } from "react-router-dom";
import { NonsmokerForm} from "./nonsmokers/NonsmokerForm.js"
import { NonsmokerProvider } from "./nonsmokers/NonsmokerProvider.js";

export const ApplicationViews = (props) => {
  return <>
    <NonsmokerProvider>
      <Route exact path="/nonsmoker" render={props => <NonsmokerForm {...props} />} />
    </NonsmokerProvider>
  
  </>
}