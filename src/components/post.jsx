import React from "react";

const Post = ({ post }) => {
    return (
        <div className="col-xs-12 col-md-6 col-lg-4 px-3 py-4">
            <div className="card h-100">
                <div className="card-body d-flex flex-column justify-content-between">
                    <h5 className="card-title">{post.title}</h5>
                    <hr />
                    <p className="card-text">{post.body}</p>
                    <div className="cart__footer">
                        <p>posted by userId: {post.userId}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;
