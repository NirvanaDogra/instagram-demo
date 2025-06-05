import { useEffect, useState } from "react";
import ApiConfig from "../config/ApiConfig";
import StatusService from "../service/StatusService";

const mapPosts = ({ posts }) => {
    return posts.map((it) => {
        const { id, body, reactions, views, userId } = it
        return {
            id: id,
            user: { title: `User - ${userId}`, isVerified: views > 500, time: "5h", postLocation: "Los Angelese, California" },
            post: {
                imgUrls: ["https://placehold.co/600x400", "https://placehold.co/650x400", "https://placehold.co/610x400", "https://placehold.co/603x400"],
                hasLikes: true,
                noOfLikes: reactions.likes,
                message: body
            },
            views: views > 500
        }
    })
}

const useFetch = (endpoint, { method = "GET", headers = {}, body = null, query = null } = {}) => {
    const [posts, setPost] = useState([])
    const [error, setError] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        ApiConfig(endpoint, {method, headers, body, query}).then(data => {
            setPost(mapPosts(data))
            setLoading(false)
        }).catch(error => {
            setLoading(false)
            setError(error.message)
        });
    }, [endpoint, method, JSON.stringify(headers), JSON.stringify(body), JSON.stringify(query)])

    return [posts, error, loading]
}

export default useFetch;