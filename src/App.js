import PostList from "./components/postList";
import Header from "./components/header";
import React, { useEffect } from "react";
import getPosts from "./getData/getPosts";
import getUsers from "./getData/getUsersInfo";
import "./App.css";
import Spinner from "./components/spinner";

function App() {
    const [posts, setPosts] = React.useState([]);
    const [filter, setFilter] = React.useState("");
    const [userInfo, setUserInfo] = React.useState({});

    useEffect(() => {
        getUsers().then((data) => {
            setUserInfo(data);
        });
    }, []);
    useEffect(() => {
        getPosts().then((posts) => {
            setPosts(posts);
        });
    }, []);

    const fullPostInfo = posts.map((post) => {
        return { ...post, userName: userInfo[post.userId - 1].userName };
    });

    const handleChange = (event) => {
        setFilter(event.target.value);
    };

    const filteredPosts =
        filter === ""
            ? fullPostInfo
            : fullPostInfo.filter((post) =>
                  post.userName.toLowerCase().includes(filter.toLowerCase())
              );

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
