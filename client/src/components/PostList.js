import React from "react"

const PostList = ({ posts, media }) => {
    if (!posts.length) {
        return <h3>You have no posts</h3>
    }

    return (
        <div>
            <h3>Oh all the places you've been</h3>
            {posts &&
            posts.map((post) => (
                <div key={post.id} className="card mb-3">
                    <img src={post.media} alt={post.title}/>
                    <p><small>{post.createdAt}</small></p>
                </div>
            ))
            }
        </div>
    )
}


export default PostList