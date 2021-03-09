import React, { useState, useEffect, useContext } from "react"

export const NonsmokerContext = React.createContext()

export const PostProvider = (props) => {
  const [nonsmokers, setNonsmokers] = useState([])

  const getNonmokers = () => {
    return fetch("http://localhost:8000/nonsmokers", {
      "headers": {
          "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
      }
  })
      .then(r => r.json())
      .then(setUsers)
}

      .then(res => res.json())
      .then(setPosts)
  }

  const getNonsmokerById = () => {
    return fetch(`http://localhost:8000/users/${id}`, {
      "headers": {
        "Authorization": `Token ${localStorage.getItem("rare_user_id")}`
      }
    })
      .then(r => r.json())
  }

  const getSinglePost = (id) => {
    return fetch(`http://localhost:8000/posts/${id}`, {
      headers: {
        "Authorization": `Token ${localStorage.getItem("rare_token")}`
      }
    })
      .then(res => res.json())
      .then(setPost)
  }

  const updatePost = (post) => {
    return fetch(`http://localhost:8000/posts/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("rare_token")}`
      },
      body: JSON.stringify(post)
    })
      .then(getPosts)
  }

  const addPost = (post, tags) => {
    return fetch("http://localhost:8000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Token ${localStorage.getItem("rare_token")}`
      },
      body: JSON.stringify(post)
    })
      .then((res) => res.json())
      .then((res) => {
        addPostTag({
          post_id: res.id,
          tag_array: tags
        })
        console.log(tags)
      })
      .then(getPosts)
  }

  const deletePost = (id) => {
    return fetch(`http://localhost:8088/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Authorization": `Token ${localStorage.getItem("rare_token")}`
      },
    })
      .then(getPosts)
  }

  return (
    <PostContext.Provider value={{
      posts, addPost, getPosts, updatePost, deletePost, getSinglePost, getPostsByUserId, post, setPost, postId, setPostId
    }}>
      {props.children}
    </PostContext.Provider>
  )
}