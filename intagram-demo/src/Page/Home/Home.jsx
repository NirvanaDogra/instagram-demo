import React from "react";
import Card from "../../component/card/Card";
import StatusBar from "../../component/statusBar/StatusBar";
import useStatusService from "../../hooks/useStatusService";

const Home = () => {
    const [posts, error] = useStatusService()
    return <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <StatusBar />
        <br />
        {posts && posts.map(post => {
            return <Card key={post.id} post={post} />
        })}

    </div>
}

export default Home;