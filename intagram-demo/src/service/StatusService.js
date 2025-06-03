const StatusService = {
    getHomeSatatus: () => {
        return fetch('https://dummyjson.com/posts')
            .then(res => res.json());
    }
}

export default StatusService;