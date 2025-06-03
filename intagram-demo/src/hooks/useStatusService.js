import { useEffect, useState } from "react";
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

const useStatusService = () => {
    const [posts, setPost] = useState([])
    const [error, setError] = useState()

    useEffect(() => {
        StatusService.getHomeSatatus().then(data => {
            setPost(mapPosts(data))
        }).catch(error => {
            setError(error.message)
        });
    }, [])

    return [posts, error]
}

export default useStatusService;