import React from "react"
import { useState } from "react"

export const CommentContext = React.createContext()

export const CommentProvider = (props) => {
    const [comments, setComments] = useState([])
    const [singleComment, setSingleComment] = useState([])
    const [relatedComments, setRelatedComments] = useState([])

    const getComments = () => {
        return fetch("http://localhost:8000/comments", {
            headers: {
                "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
              }
        })
        .then(r => r.json())
        .then(setComments)
    }

    const getSingleComment = id => {
        return fetch(`http://localhost:8000/comments/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
              }
        })
            .then(res => res.json())
            .then(setSingleComment)
    }

    const addComment = comment => {
        return fetch("http://localhost:8000/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
            },
            body: JSON.stringify(comment)
        })
        .then(getComments)
    }
    
    const deleteComment = id => {
        return fetch(`http://localhost:8000/comments/${id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
              },
            method: "DELETE"
        })
        .then(getComments)
    }

    const getCommentsByNonsmokerId = (nonsmoker_id) => {
        return fetch(`http://localhost:8000/comments?id=${nonsmoker_id}`, {
            headers: {
                "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
            }
        })
            .then(res => res.json())
            .then(setRelatedComments)
    }

    const updateComment = newComment => {
        console.log(newComment)
        return fetch(`http://localhost:8000/comments/${newComment.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${localStorage.getItem("cashtray_token")}`
            },
            body: JSON.stringify(newComment)
        })
        .then(getComments)
    }

    return (
        <CommentContext.Provider value={{comments, setComments, getComments, addComment, getSingleComment, updateComment, deleteComment, singleComment, relatedComments, setRelatedComments, getCommentsByNonsmokerId}}>
            {props.children}
        </CommentContext.Provider>
    )
}