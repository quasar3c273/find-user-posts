import PostList from "./components/postList";
import Header from "./components/header";
import React, { useEffect } from "react";
import getPosts from "./getData/getPosts";
import "./App.css";
import Spinner from "./components/spinner";

function App() {
    const [posts, setPosts] = React.useState([]);
    const [filter, setFilter] = React.useState("");
    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredPosts =
        filter === ""
            ? posts
            : posts.filter((post) => post.userId.toString() === filter);

    return (
        <>
            <Header handleSearch={handleChange} />
            {filteredPosts.length === 0 ? (
                <Spinner />
            ) : (
                <PostList posts={filteredPosts} />
            )}
        </>
    );
}

export default App;
