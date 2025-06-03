const StatusService = {
    
    getHomeSatatus: (pageNumber) => {
        const limit = 2 
        const skip = pageNumber * limit
        return fetch(`https://dummyjson.com/posts?limit=${limit}&skip=${skip}`)
            .then(res => res.json());
    }
}

export default StatusService;