import React, { useContext, useEffect, useRef, useState } from "react"
import { CommentContext } from "./CommentProvider"
import { NonsmokerContext } from "../nonsmokers/NonsmokerProvider"

export const CommentForm = props => {
  
  const { addComment } = useContext(CommentContext)

  const { getNonsmokerById, getSingleNonsmoker, nonsmokers} = useContext(NonsmokerContext)

  const [currentComment, setCurrentComment] = useState({ 
    commenter:"",
    recipient:"",
    comment:"",
    created_on:""
  })

  const changeCommentState = (domEvent) => {
    const newCommentState = Object.assign({}, currentComment)
    newCommentState[domEvent.target.name] = domEvent.target.value
    setCurrentComment(newCommentState)
}

return (
  <>
           <form>
                <fieldset>
                    <label>Comment</label>
                    <input type="text" name="title" 
                        value={currentComment.comment}
                        onChange={changeCommentState}
                    />
                </fieldset>
                <fieldset>
                    <label>Description</label>
                    <input type="text" name="description" 
                        value={currentGame.description}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Number of Players</label>
                    <input type="number" name="numberOfPlayers" 
                        value={currentGame.numberOfPlayers}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Year Released</label>
                    <input type="number" name="year" 
                        value={currentGame.year}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Hours to Complete</label>
                    <input type="number" name="playTime" 
                        value={currentGame.playTime}
                        onChange={changeGameState}
                    />
                </fieldset>
                <fieldset>
                    <label>Age Recommendation</label>
                    <input type="number" name="ageRecommendation" 
                        value={currentGame.ageRecommendation}
                        onChange={changeGameState}
                    />
                </fieldset>
                <button
                type="submit"
                onClick={event=>{
                event.preventDefault()

                const game= {
                    title:currentGame.title,
                    description:currentGame.description,
                    numberOfPlayers:currentGame.numberOfPlayers,
                    year:currentGame.year,
                    playTime:currentGame.playTime,
                    ageRecommendation:currentGame.ageRecommendation,
                }
                console.log(game)
                createGame(game)
                .then(() => props.history.push("/games"))
                
                }}

                
                
                >submit</button>


            </form>
        
  
  </>
)

 