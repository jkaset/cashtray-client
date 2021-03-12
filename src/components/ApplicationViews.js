import React from "react";
import { Route } from "react-router-dom";
import { NonsmokerList} from "./nonsmokers/NonsmokerList.js"
import { NonsmokerProvider } from "./nonsmokers/NonsmokerProvider.js";
import { CommentCommunityList } from "./comments/CommentCommunityList.js";
import { RewardProvider } from "./rewards/RewardProvider.js";
import { RewardForm } from "./rewards/RewardForm.js";
import { RewardList } from "./rewards/RewardList.js";

export const ApplicationViews = (props) => {
  return <>
    <NonsmokerProvider>
      <Route exact path="/" render={props => <NonsmokerList {...props} />} />
      <Route exact path="/community" render={props => <CommentCommunityList {...props} />} />
    </NonsmokerProvider>

    <RewardProvider>
      <NonsmokerProvider>
        <Route exact path="/wallet" render={props => <RewardForm {...props} />} />
        <Route exact path="/wallet" render={props => <RewardList {...props} />} />
      </NonsmokerProvider>
    </RewardProvider>
  
  </>
}