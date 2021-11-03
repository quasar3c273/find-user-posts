function getPosts() {
    return fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((posts) =>
            posts.map((post) => ({
                id: post.id,
                title: post.title,
                body: post.body,
                userId: post.userId
            }))
        );
}

export default getPosts;
