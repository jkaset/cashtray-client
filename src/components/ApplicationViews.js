import React from "react";
import { Route } from "react-router-dom";
import { NonsmokerList } from "./nonsmokers/NonsmokerList.js"
import { NonsmokerProvider } from "./nonsmokers/NonsmokerProvider.js";
import { CommentCommunityList } from "./comments/CommentCommunityList.js";
import { RewardProvider } from "./rewards/RewardProvider.js";
import { RewardForm } from "./rewards/RewardForm.js";
import { RewardList } from "./rewards/RewardList.js";
import { CommentProvider } from "./comments/CommentProvider.js"
import { CommentForm } from "./comments/CommentForm.js"
import { NonsmokerDetail } from "./nonsmokers/NonsmokerDetail.js"
import { HealthList } from "./health/HealthList.js"


export const ApplicationViews = (props) => {
  return <>


    <CommentProvider>
      <RewardProvider>
        <NonsmokerProvider>
          <Route exact path="/wallet" render={props => <RewardList {...props} />} />
          <Route exact path="/wallet/create" render={props => <RewardForm {...props} />} />
          <Route exact path="/" render={props => <NonsmokerList {...props} />} />
          <Route exact path="/community" render={props => <CommentCommunityList {...props} />} />
          <Route path="/comments/:nonsmokerId(\d+)/addcomment" render={(props) => <CommentForm {...props} />} />
          <Route path="/comments/edit/:commentId(\d+)" render={(props) => <CommentForm {...props} />} />
          <Route path="/nonsmokers/:nonsmokerId(\d+)" render={(props) => <NonsmokerDetail {...props} />} />
          <Route path="/health" render={(props) => <HealthList {...props} />} />
        </NonsmokerProvider>
      </RewardProvider>
    </CommentProvider>

  </>
}