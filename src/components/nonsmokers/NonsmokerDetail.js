import React, { useContext, useEffect, useState } from "react"
import { NonsmokerContext } from "./NonsmokerProvider"
import { CommentContext } from "../comments/CommentProvider"
import { Comment } from "../comments/Comment"
import { Link } from "react-router-dom"


export const NonsmokerDetail = (props) => {
    const { getSingleNonsmoker, nonsmoker, setSingleNonsmoker, singleNonsmoker } = useContext(NonsmokerContext)
    const { comments, relatedComments, getCommentsByPostId } = useContext(CommentContext)


    const postId = parseInt(props.match.params.postId)

    useEffect(() => {

        getCommentsByPostId(postId)

        getSinglePost(postId)

            .then(setPost(post))
    }, [])


    const confirmDelete = () => {
        const d = window.confirm("Would you like to delete this?")
        if (d === true) {
            deletePost(postId).then(() => { props.history.push("/posts") })
        }
    }


    useEffect(() => {
        const postId = parseInt(props.match.params.postId)
        getCommentsByPostId(postId)
    }, [comments])

    // console.log("post", post)
    return (
        <>
            <h2>{post.title}</h2>
            <div>{post.image_url}</div>
            <div>{post.content}</div>
            <div>{post.publication_date}</div>
            <div>{post.rare_user.user.first_name}</div>
            <div>{post.category.label}</div>
            { parseInt(localStorage.getItem("rare_token")) === post.user_id ? <>
                <button onClick={() => { confirmDelete() }}>Delete Post</button>
                <button onClick={() => { props.history.push(`/posts/edit/${post.id}`) }}>
                    Edit Post</button> </> : <> {""}</>
            }
            <h3>Comments</h3>
            {
                relatedComments.map(commentObj => <Comment key={commentObj.id} comment={commentObj} props={props} />)
            }
            <button onClick={() => {
                props.history.push(`/posts/${post.id}/addcomment`)
            }}>Add a Comment
            </button>
            {/* If you want a link instead */}
            {/* <Link to={{
                pathname: `/posts/${post.id}/addcomment`,
                state: { chosenPost: post }
            }}>Add a Comment</Link> */}
        </>
    )
}
