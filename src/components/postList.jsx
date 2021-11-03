import React from "react";
import Post from "./post";
const PostList = ({ posts }) => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {posts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </div>
            </div>
        </>
    );
};

export default PostList;
