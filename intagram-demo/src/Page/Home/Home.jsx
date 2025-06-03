import React, { useEffect, useRef, useState } from "react";
import Card from "../../component/card/Card";
import StatusBar from "../../component/statusBar/StatusBar";
import useStatusService from "../../hooks/useStatusService";
import useShouldUpdate from "../../hooks/useShouldUpdate";
import "./home.css"

const Home = () => {
    const [pageNumber, setPageNumber] = useState(1);
    const [loadedPosts, setLoadedPosts] = useState([]);
    const [posts, error, loading] = useStatusService(pageNumber);
    const [isInView, finalElRef] = useShouldUpdate()

    useEffect(() => {
        if (isInView) {
            setPageNumber(prev => prev + 1);
        }
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
