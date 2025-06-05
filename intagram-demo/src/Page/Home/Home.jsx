import React, { useEffect, useState } from "react";
import Card from "../../component/card/Card";
import StatusBar from "../../component/statusBar/StatusBar";
import useShouldUpdate from "../../hooks/useShouldUpdate";
import "./home.css"
import useFetch from "../../hooks/useFetch";
const ENDPOINT = "posts";

const Home = () => {
    const [query, setQuery] = useState({limit: 2, skip: 0});
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [posts, error, loading] = useFetch(ENDPOINT, { method:'GET', query: query });
    const [isInView, finalElRef] = useShouldUpdate()

    useEffect(() => {
        if (isInView) {
            setQuery(pre => ({
                ...pre,
                skip: pre.skip + pre.limit,
            }));
        }
        console.log(query)
    }, [isInView])

    useEffect(() => {
        if (posts && posts.length > 0) {
            setLoadedPosts(prev => [...prev, ...posts]);
        }
    }, [posts]);



    return (
        <div className="p-home">
            <StatusBar />
            <br />
            <div>
                {loadedPosts.map((post, idx) => (
                    <Card key={`${post.id}-${idx}`} post={post} />
                ))}
            </div>
            {error && <p>Error loading posts</p>}
            {loading && <p>Loading more posts...</p>}
            <div ref={finalElRef} style={{ height: "1px" }} />
        </div>
    );
};

export default Home;
